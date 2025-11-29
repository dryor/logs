# Activity Logs

A minimalist terminal-style activity feed showcasing articles, projects, and learning journey.

## About

I'm obsessed with building amazing stuff. This is my public log - what I'm studying, working on, ideas, and thoughts on my journey to becoming a software architect/engineer. Been dreaming about this since I was 10. Just sharing the process.

## Tech Stack

- Pure HTML/CSS/JavaScript (no frameworks)
- Build-time data injection for maximum performance
- Zero dependencies in production

## Project Structure

```
/
├── src/
│   ├── template.html    # HTML template
│   └── logs.json        # Activity data
├── dist/                # Build output (git-ignored)
│   ├── index.html       # Generated HTML
│   ├── style.css        # Copied CSS
│   └── app.js           # Copied JS
├── build.js             # Build script
├── style.css            # Terminal styling (source)
└── app.js              # Client-side interactions (source)
```

## Quick Start

**Package Manager:** This project uses `pnpm` for package management.

### 1. Build the site

```bash
pnpm run build
```

This command executes `build.js` which:
- Reads your logs from `src/logs.json`
- Injects them into `src/template.html`
- Generates `dist/index.html` with logs baked in
- Copies `style.css` and `app.js` to `dist/`

**Built files location:**
- All deployment-ready files are in `dist/` folder
- `dist/index.html` (generated with logs)
- `dist/style.css` (copied from source)
- `dist/app.js` (copied from source)

### 2. Preview locally

Serve the `dist/` folder with any static server:

**Option A: pnpm (recommended)**
```bash
pnpx serve dist
# Visit: http://localhost:3000
```

**Option B: Python**
```bash
cd dist && python3 -m http.server 8000
# Visit: http://localhost:8000
```

**Option C: Node.js (http-server)**
```bash
npx http-server dist -p 8000
# Visit: http://localhost:8000
```

**Option D: PHP**
```bash
php -S localhost:8000 -t dist
# Visit: http://localhost:8000
```

**Option E: Direct file**
```bash
# Simply open dist/index.html in your browser
open dist/index.html  # macOS
xdg-open dist/index.html  # Linux
start dist/index.html  # Windows
```

### 3. Add new log entries

Edit `src/logs.json`:

```json
{
  "date": "2025-07-13",
  "category": "ARTICLE",
  "title": "Your article title",
  "url": "https://your-url.com"
}
```

Then rebuild: `pnpm run build`

### 4. Deploy

Upload the contents of the `dist/` folder to your hosting:
- `dist/index.html`
- `dist/style.css`
- `dist/app.js`

Or simply deploy the entire `dist/` folder.

Works with: GitHub Pages, Netlify, Vercel, or any static host.

## Performance

- Build-time data injection = zero runtime data fetching
- Pure vanilla = zero framework overhead
- Minimal CSS/JS = lightning fast loads
