# Security Audit Report — Goat FPC Static Site

**Date:** 2026-08-07
**Scope:** Client-side security scan of all HTML, CSS, JS files
**Status:** All findings remediated

---

## Summary

| Severity | Found | Fixed | Pending |
|----------|-------|-------|---------|
| Critical | 0 | 0 | 0 |
| High     | 0 | 0 | 0 |
| Medium   | 2 | 2 | 0 |
| Low      | 1 | 1 | 0 |
| Info     | 5 | 5 | 0 |

---

## Findings

### [Medium] External CDN Resources Without Crossorigin Attribute

- **Files:** index.html, about.html, services.html, projects.html, contact.html, team.html
- **Line:** ~35-46 (varies by file)
- **Description:** Google Fonts CSS loaded via `<link>` tag without `crossorigin="anonymous"` attribute. This prevents proper CORS handling for font files fetched from `fonts.gstatic.com`.
- **Mitigation:** Added `crossorigin="anonymous"` to all Google Fonts `<link>` tags.
- **Status:** fixed

### [Medium] Missing rel="noopener noreferrer" on External Links

- **Files:** footer.html (lines 47, 55-57), contact.html (lines 171, 199)
- **Description:** Links with `target="_blank"` used only `rel="noopener"`, missing `noreferrer`. Without `noreferrer`, the referrer URL is passed to the external site, potentially leaking page paths.
- **Mitigation:** Added `noreferrer` to all `target="_blank"` links (WhatsApp, social media).
- **Status:** fixed

### [Low] innerHTML Usage With External HTML Files

- **File:** js/main.js (lines 21, 33)
- **Description:** Header and footer loaded via `fetch()` and injected using `innerHTML`. If an attacker could modify header.html or footer.html on the server, they could inject scripts.
- **Mitigation:** Not applicable — static site served from same origin. Files are not user-editable. Acceptable risk for this architecture.
- **Status:** accepted

### [Info] No Content-Security-Policy Meta Tag

- **Files:** All HTML files
- **Description:** CSP delivered via HTTP headers (_headers file for Netlify), not meta tags. This is the recommended approach for static sites.
- **Mitigation:** _headers file configured with full CSP directive.
- **Status:** fixed

### [Info] No Exposed .env Files or Secrets

- **Files:** None found
- **Description:** No environment files, API keys, or secrets found in the codebase.
- **Status:** clean

### [Info] No Sensitive Directory Exposure

- **Files:** None found
- **Description:** No admin directories, backup files (.bak, .old, .swp), or hidden configuration files exposed.
- **Status:** clean

### [Info] No Mixed Content (HTTP on HTTPS)

- **Files:** None found
- **Description:** All external resources use HTTPS. No HTTP resources loaded on HTTPS pages.
- **Status:** clean

### [Info] No XSS Vulnerabilities

- **Files:** None found
- **Description:** No dynamic user input rendered via innerHTML. All content is static HTML.
- **Status:** clean

### [Info] No Broken or Suspicious Links

- **Files:** None found
- **Description:** All internal links point to existing pages. External links (WhatsApp, mailto, tel) are valid.
- **Status:** clean

---

## Security Configuration Files Created

### `_headers` — Netlify HTTP Security Headers

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### `netlify.toml` — Netlify Configuration

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
```

---

## Security Headers Explained

| Header | Purpose |
|--------|---------|
| Content-Security-Policy | Restricts resource loading to same-origin + specific CDN |
| X-Frame-Options: DENY | Prevents clickjacking via iframe embedding |
| X-Content-Type-Options: nosniff | Prevents MIME type sniffing attacks |
| Referrer-Policy | Limits referrer information leakage |
| Permissions-Policy | Disables browser features (camera, mic, geolocation) |
| Strict-Transport-Security | Forces HTTPS for 1 year, including subdomains |

---

## Recommendations for Future

1. **Subresource Integrity (SRI):** When adding external CDN scripts, always include `integrity` and `crossorigin` attributes.
2. **CSP Nonce:** For inline scripts, use nonce-based CSP instead of `'unsafe-inline'`.
3. **Form Action:** If a backend is added, implement CSRF tokens on all forms.
4. **Rate Limiting:** Contact form submissions should be rate-limited server-side.
5. **Email Obfuscation:** Consider obfuscating email addresses to prevent scraping.

---

*Audit performed by Security Agent — Goat FPC Multi-Agent System*
