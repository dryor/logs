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
├── build.js             # Build script
├── style.css            # Terminal styling
├── app.js              # Client-side interactions
└── index.html          # Generated output (git-ignored)
```

## Build Instructions

### 1. Add a new log entry

Edit `src/logs.json`:

```json
{
  "date": "2025-07-13",
  "category": "ARTICLE",
  "title": "Your article title",
  "url": "https://your-url.com"
}
```

### 2. Build

```bash
node build.js
```

This generates `index.html` with all logs baked in.

### 3. Deploy

Upload these files to your hosting:
- `index.html`
- `style.css`
- `app.js`

## Development

No build tools, no npm packages. Just Node.js for the build script.

**Local preview:**
- Open `index.html` in your browser after building

## Performance

- Build-time data injection = zero runtime data fetching
- Pure vanilla = zero framework overhead
- Minimal CSS/JS = lightning fast loads
