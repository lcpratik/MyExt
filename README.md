# MyExt — Lead Saver

A Chrome browser extension for saving and managing URLs. Save the current tab with one click, manually enter any URL, and delete everything with a double-click. All data persists in `localStorage`.

## Features

- **Save Tab** — captures the active tab's URL instantly
- **Save Input** — manually add any URL from the text field
- **Delete All** — double-click to wipe the saved list
- Persists across browser sessions via `localStorage`
- Renders saved links as clickable anchors that open in a new tab

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Platform  | Chrome Extension (Manifest V3)    |
| Logic     | Vanilla JavaScript                |
| Storage   | `localStorage`                    |
| Tabs API  | `chrome.tabs`                     |

## Project Structure

```
myext/
├── manifest.json   # Extension metadata and permissions
├── index.html      # Extension popup UI
├── script.js       # Save, render, and delete logic
└── style.css       # Popup styles
```

## Getting Started

1. Go to `chrome://extensions` in Chrome
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked** and select the `myext` folder
4. The extension icon will appear in the toolbar — click it to open the popup

## Author

**Pratik Lamichhane** · [GitHub](https://github.com/lcpratik) · [LinkedIn](https://linkedin.com/in/lcpratik)
