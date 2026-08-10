"""Fill missing images using Openverse API, targeting Flickr-only sources."""
import urllib.request, urllib.parse, json, os, time, sys

BASE = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')

def need(folder, filename):
    return not os.path.exists(os.path.join(BASE, folder, filename))

def api_search(query, page_size=20):
    url = f'https://api.openverse.org/v1/images/?{urllib.parse.urlencode({"q": query, "page_size": str(page_size)})}'
    req = urllib.request.Request(url, headers={'User-Agent': 'GoatFPC/1.0 (https://goatfpc.in)'})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            data = json.loads(r.read())
        return data.get('results', [])
    except Exception as e:
        print(f"API error: {e}")
        return []

def dl(url, path):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 GoatFPC/1.0'})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
            if len(data) > 5000:
                with open(path, 'wb') as f: f.write(data)
                print(f"  OK {os.path.basename(path)} ({len(data)//1024}KB)")
                return True
    except Exception as e:
        print(f"  FAIL {os.path.basename(path)}: {e}")
    return False

def pick_flickr(results, skip_wiki=True):
    flickr = [r for r in results if 'flickr' in (r.get('url') or '').lower()]
    if skip_wiki:
        flickr = [r for r in flickr if 'wiki' not in (r.get('url') or '').lower()]
    return flickr

TASKS = [
    ("indian goat farm", "about", "about-hero.jpg", 1),
    ("farmer india village", "about", "team.jpg", 1),
    ("goat herd", "services", "services-hero.jpg", 1),
    ("goat farm", "services", "farming.jpg", 1),
    ("goat breed improvement", "services", "breeding.jpg", 1),
    ("goat grazing", "gallery", None, 6),
    ("farmer india agriculture", "news", "news2.jpg", 1),
    ("goat veterinary", "news", "news3.jpg", 1),
    ("goat farm india", "gallery", None, 0),  # if news2/news3 needed for gallery, will get extra
]

# Fill what's missing
all_needed = [
    ("indian goat farm", "about", "about-hero.jpg"),
    ("farmer india village", "about", "team.jpg"),
    ("goat herd field", "services", "services-hero.jpg"),
    ("goat farm rural", "services", "farming.jpg"),
    ("goat breed", "services", "breeding.jpg"),
    ("goat vaccination", "news", "news2.jpg"),
    ("farmer market india", "news", "news3.jpg"),
]

gallery_needed = []
for i in range(1, 9):
    if need('gallery', f'gallery{i}.jpg'):
        gallery_needed.append(i)

print("Missing gallery:", gallery_needed)
print("Missing specific:", [(f, fn) for (q, f, fn) in all_needed if need(f, fn)])

used = set()

for q, folder, filename in all_needed:
    if not need(folder, filename): continue
    results = api_search(q)
    candidates = pick_flickr(results)
    os.makedirs(os.path.join(BASE, folder), exist_ok=True)
    for r in candidates:
        u = r['url']
        if u in used: continue
        used.add(u)
        path = os.path.join(BASE, folder, filename)
        if dl(u, path): break
        time.sleep(0.5)

# Fill gallery
if gallery_needed:
    results = api_search("goat herd goat farm goat grazing")
    candidates = pick_flickr(results)
    os.makedirs(os.path.join(BASE, 'gallery'), exist_ok=True)
    idx = 0
    for r in candidates:
        if idx >= len(gallery_needed): break
        u = r['url']
        if u in used: continue
        used.add(u)
        path = os.path.join(BASE, 'gallery', f'gallery{gallery_needed[idx]}.jpg')
        if dl(u, path): idx += 1
        time.sleep(0.5)

print("\nFinal check:")
for folder in ['about', 'services', 'gallery', 'news']:
    d = os.path.join(BASE, folder)
    files = [f for f in os.listdir(d) if f.endswith('.jpg')]
    print(f"  {folder}/: {sorted(files)}")
