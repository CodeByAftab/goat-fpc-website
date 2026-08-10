"""Download real goat/farming photos via Openverse API (no key needed)."""
import urllib.request, urllib.parse, json, os, sys, time

BASE = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
os.makedirs(BASE, exist_ok=True)

# (search_query, target_folder, filename, count)
SEARCHES = [
    ("goat herd", "gallery", None, 4),
    ("goat kid", "gallery", None, 2),
    ("goat farm india", "gallery", None, 2),
    ("indian farmer goat", "about", "about-hero.jpg", 1),
    ("farmers group india", "about", "team.jpg", 1),
    ("goat grazing", "services", "services-hero.jpg", 1),
    ("goat farm", "services", "farming.jpg", 1),
    ("goat breed", "services", "breeding.jpg", 1),
    ("goat veterinarian", "services", "vaccination.jpg", 1),
    ("farmer training", "services", "training.jpg", 1),
    ("organic compost", "services", "ajah-fi.jpg", 1),
    ("farmer india", "news", None, 2),
    ("goat vaccination", "news", None, 1),
]

GOOD_LICENSES = {"cc0", "pdm", "by", "by-sa"}

def search_openverse(query, page_size=20):
    params = urllib.parse.urlencode({
        'q': query,
        'page_size': str(page_size),
        'license': ','.join(sorted(GOOD_LICENSES)),
        'license_type': 'commercial',
    })
    url = f'https://api.openverse.org/v1/images/?{params}'
    req = urllib.request.Request(url, headers={'User-Agent': 'GoatFPC/1.0 (https://goatfpc.in)'})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            data = json.loads(r.read())
    except Exception as e:
        print(f"  API error '{query}': {e}", file=sys.stderr)
        return []
    out = []
    for item in data.get('results', []):
        u = item.get('url', '')
        ft = (item.get('filetype') or '').lower()
        w = item.get('width') or 0
        if not u or ft not in ('jpg', 'jpeg', 'png') or w < 600:
            continue
        out.append({'url': u, 'width': w, 'title': item.get('title', '')})
    out.sort(key=lambda x: x['width'], reverse=True)
    return out

def download(url, path, retries=1):
    for attempt in range(retries + 1):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 GoatFPC/1.0'})
            with urllib.request.urlopen(req, timeout=30) as r:
                data = r.read()
                if len(data) < 8000:
                    print(f"  Skipping too-small file ({len(data)} bytes)")
                    return False
                with open(path, 'wb') as f:
                    f.write(data)
                print(f"  Saved: {path} ({len(data)//1024}KB)")
                return True
        except Exception as e:
            if attempt < retries:
                time.sleep(1.5)
            else:
                print(f"  Download failed: {e}", file=sys.stderr)
                return False
    return False

used = set()
counter = {}

for (query, folder, filename, count) in SEARCHES:
    folder_path = os.path.join(BASE, folder)
    os.makedirs(folder_path, exist_ok=True)
    results = search_openverse(query)
    got = 0
    for r in results:
        if got >= count:
            break
        if r['url'] in used:
            continue
        used.add(r['url'])
        if filename:
            fname = filename
        else:
            counter[folder] = counter.get(folder, 0) + 1
            fname = f'{folder}{counter[folder]}.jpg'
        if download(r['url'], os.path.join(folder_path, fname)):
            got += 1
        time.sleep(0.4)
    print(f"[{folder}] {got}/{count} for '{query}'")

print("\nDone!")
