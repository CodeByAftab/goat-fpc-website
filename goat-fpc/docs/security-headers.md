# Security Headers Reference — Goat FPC Static Site

## 1. HTML Meta Tags (Add to Each Page `<head>`)

Copy and paste these meta tags into the `<head>` section of every HTML file:

```html
<!-- Security Headers -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' data:; script-src 'self';">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()">
<meta http-equiv="X-XSS-Protection" content="0">
```

### Header Breakdown

| Header | Value | Purpose |
|--------|-------|---------|
| Content-Security-Policy | See below | Controls which resources can load |
| X-Content-Type-Options | `nosniff` | Prevents MIME-type sniffing |
| X-Frame-Options | `DENY` | Blocks all framing (clickjacking) |
| Referrer-Policy | `strict-origin-when-cross-origin` | Limits referrer info on cross-origin |
| Permissions-Policy | `camera=(), microphone=(), geolocation=()` | Disables unused browser APIs |
| X-XSS-Protection | `0` | Disables legacy XSS filter (use CSP instead) |

---

## 2. Content-Security-Policy (CSP) — Detailed Breakdown

This static site uses Google Fonts only. CSP policy:

```
default-src 'self';
font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
img-src 'self' data:;
script-src 'self';
```

### What Each Directive Allows

| Directive | Sources | Notes |
|-----------|---------|-------|
| `default-src 'self'` | Same origin only | Fallback for any unspecified resource type |
| `font-src` | `'self'`, Google Fonts CDN | Loads `.woff2`, `.ttf` from Google |
| `style-src` | `'self'`, Google Fonts CDN, `'unsafe-inline'` | Allows `<link>` and `<style>` tags; `unsafe-inline` needed for Google Fonts CSS |
| `img-src` | `'self'`, `data:` | Local images only; `data:` for inline SVG/data URIs |
| `script-src` | `'self'` | **No external scripts. No inline scripts. No eval().** |

### Strict Alternative (Remove `unsafe-inline` from style-src)

If you can self-host Google Fonts CSS, remove the Google CDN from `style-src` and drop `unsafe-inline`:

```
style-src 'self';
```

Then download font files and CSS locally to `fonts/` directory.

---

## 3. Apache .htaccess Security Rules

Create or update `.htaccess` in the site root (`D:\Goat FPC\goat-fpc\.htaccess`):

```apache
# ============================================
# SECURITY HEADERS — Apache (.htaccess)
# Goat FPC Static Site
# ============================================

# --- Force HTTPS Redirect ---
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# --- Force www (optional — remove if not needed) ---
# RewriteCond %{HTTP_HOST} !^www\. [NC]
# RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [L,R=301]

# --- Security Headers ---
<IfModule mod_headers.c>
    # Content Security Policy
    Header set Content-Security-Policy "default-src 'self'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' data:; script-src 'self';"

    # Clickjacking Protection
    Header always set X-Frame-Options "DENY"

    # MIME Type Sniffing Prevention
    Header always set X-Content-Type-Options "nosniff"

    # Referrer Policy
    Header always set Referrer-Policy "strict-origin-when-cross-origin"

    # Permissions Policy (disable unused APIs)
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"

    # XSS Protection (disabled — CSP replaces it)
    Header always set X-XSS-Protection "0"

    # Strict Transport Security (HSTS) — only if HTTPS is confirmed
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

    # Prevent browsers from caching sensitive files
    <FilesMatch "\.(md|txt|log|env|htaccess)$">
        Header set Cache-Control "no-store, no-cache, must-revalidate, max-age=0"
        Header set Pragma "no-cache"
    </FilesMatch>
</IfModule>

# --- Block Access to Sensitive Files/Directories ---
<IfModule mod_rewrite.c>
    # Block access to docs/ directory
    RewriteRule ^docs/ - [F,L]

    # Block access to .md files
    RewriteRule \.md$ - [F,L]

    # Block access to .env, .git, .htaccess
    RewriteRule ^\.env$ - [F,L]
    RewriteRule ^\.git - [F,L]
    RewriteRule ^\.htaccess$ - [F,L]

    # Block access to reports/ directory
    RewriteRule ^reports/ - [F,L]
</IfModule>

# --- Protect .htaccess itself (Apache 2.4+) ---
<Files ".htaccess">
    Require all denied
</Files>

# --- Disable Directory Listing ---
Options -Indexes

# --- Set Default Charset ---
AddDefaultCharset UTF-8

# --- Cache Static Assets (1 year) ---
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/html "access plus 1 hour"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
</IfModule>

# --- Remove Server Signature ---
ServerSignature Off
```

### Required Apache Modules

Ensure these modules are enabled on your server:

- `mod_headers`
- `mod_rewrite`
- `mod_expires`

Check with: `apache2ctl -M | grep -E "headers|rewrite|expires"`

---

## 4. Security Checklist — Static HTML/CSS/JS Site

### 4.1 Script Security

| Requirement | Status | Notes |
|-------------|--------|-------|
| No external CDN scripts | Required | No Google Analytics, no jQuery CDN, no polyfills from CDN |
| No `eval()` calls | Required | Never use `eval()`, `new Function()`, `setTimeout(string)` |
| No `innerHTML` with user input | Required | Use `textContent` or sanitize before inserting |
| No inline `<script>` blocks | Preferred | Move all JS to external `.js` files |
| CSP `script-src 'self'` | Required | Blocks all external scripts automatically |

### 4.2 Form Input Sanitization

Since this is a static site (no backend), all form processing happens client-side:

```javascript
// SAFE: Use textContent, never innerHTML for user input
element.textContent = userInput;

// SAFE: Validate input before any DOM manipulation
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML; // Escapes HTML entities
}

// SAFE: Use URL constructor for any URL inputs
function sanitizeURL(url) {
    try {
        const parsed = new URL(url);
        if (parsed.protocol !== 'https:') return '#';
        return parsed.href;
    } catch {
        return '#';
    }
}

// DANGEROUS: Never do this
// element.innerHTML = userInput;           // XSS risk
// eval(userInput);                         // Code injection
// document.write(userInput);               // XSS risk
// setTimeout(userInput, 100);              // Code injection
```

**If forms submit to a third-party service (e.g., Formspree, Netlify Forms):**

- Never expose API keys in HTML/JS source
- Use environment variables or server-side proxies for sensitive endpoints
- Validate form data before sending

### 4.3 Sensitive Data — What NOT to Put in HTML/JS

| Never expose | Where it hides |
|--------------|----------------|
| API keys | `<script>` tags, fetch() URLs, network tab |
| Internal URLs | Hidden inputs, JS variables, comments |
| Admin paths | HTML comments, JS routing logic |
| Database IDs | URL parameters, hidden form fields |
| Email addresses | Visible in source (use contact forms instead) |
| Phone numbers | Obfuscate or use click-to-call only |

### 4.4 HTML Comment Hygiene

Remove all development comments before deployment:

```bash
# Find comments in HTML files
grep -rn "<!--" --include="*.html" .

# Remove all HTML comments (use carefully)
find . -name "*.html" -exec sed -i 's/<!--.*-->//g' {} \;
```

### 4.5 Cache Control Recommendations

| Resource Type | Cache-Control | Why |
|---------------|---------------|-----|
| HTML files | `no-cache` or `max-age=3600` | HTML changes often; users should see updates |
| CSS/JS (hashed filenames) | `max-age=31536000, immutable` | Content-hashed files are safe to cache forever |
| CSS/JS (no hash) | `max-age=86400` | Cache 1 day; bust with version query string |
| Images | `max-age=31536000` | Images rarely change |
| Fonts | `max-age=31536000, immutable` | Fonts are versioned by URL |
| API responses | `no-store` | Never cache sensitive data |

**For Netlify** (already configured in `netlify.toml`):

```toml
[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

---

## 5. Pre-Deployment Security Checklist

Use this checklist before every production deploy:

```markdown
## Security Checklist

- [ ] All security meta tags present in every HTML file's <head>
- [ ] .htaccess deployed with all security headers
- [ ] CSP policy tested — no broken resources (check browser console)
- [ ] No eval(), new Function(), or setTimeout(string) in any JS file
- [ ] No innerHTML used with user-controlled input
- [ ] No API keys, secrets, or tokens in HTML/JS source
- [ ] No HTML comments with internal/dev notes
- [ ] Directory listing disabled (Options -Indexes)
- [ ] docs/ and .md files blocked from public access
- [ ] reports/ directory blocked from public access
- [ ] HTTPS forced (no HTTP access)
- [ ] HSTS header present (if using HTTPS)
- [ ] Server signature disabled (ServerSignature Off)
- [ ] All external resources loaded over HTTPS
- [ ] No mixed content (HTTP resources on HTTPS page)
- [ ] Form submissions use HTTPS endpoints only
- [ ] Cache headers set appropriately per resource type
```

---

## 6. Testing Security Headers

### Browser DevTools

1. Open DevTools (F12) -> Network tab
2. Load any page
3. Click the page request -> Headers -> Response Headers
4. Verify all headers are present

### Command Line (cURL)

```bash
curl -I https://goatfpc.com/
```

Expected response headers:

```
HTTP/2 200
content-security-policy: default-src 'self'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; ...
x-content-type-options: nosniff
x-frame-options: DENY
referrer-policy: strict-origin-when-cross-origin
permissions-policy: camera=(), microphone=(), geolocation=()
x-xss-protection: 0
strict-transport-security: max-age=31536000; includeSubDomains; preload
```

### Online Testing Tools

- **Mozilla Observatory**: https://observatory.mozilla.org/
- **SecurityHeaders.com**: https://securityheaders.com/
- **CSP Evaluator**: https://csp-evaluator.withgoogle.com/

---

## 7. Quick Reference — Minimal Meta Tags

For a minimal setup, add these 6 lines to every HTML `<head>`:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; img-src 'self' data:; script-src 'self';">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()">
<meta http-equiv="X-XSS-Protection" content="0">
```

These 6 meta tags cover 90% of static site security headers. The `.htaccess` file adds server-side enforcement as a second layer.
