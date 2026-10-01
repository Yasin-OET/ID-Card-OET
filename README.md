# OET ID Card Maker

Static site — no build step, no server code.

## Deploy (Vercel)
1. Push this folder to a GitHub repo (repo root = this folder).
2. Vercel → Add New → Project → import the repo.
3. Framework Preset: **Other**. Build command: empty. Output directory: empty (root).
4. Deploy. `index.html` is served at `/`.

## Loaded at runtime (internet required)
- three.js — unpkg.com
- Plus Jakarta Sans — Google Fonts
- Background removal (MediaPipe) — cdn.jsdelivr.net + storage.googleapis.com

## Notes
- Visitor data stays in their browser (localStorage); nothing is sent to a server.
- The Google Drive folder must allow uploads from attendees.
