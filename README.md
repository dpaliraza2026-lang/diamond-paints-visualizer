# Ultra-Realistic iPhone 16 Pro Mockup & Live Mirror Studio

A high-precision, CSS-crafted iPhone 16 Pro mockup for websites and product showcases. It allows you to dynamically replace screen images, drag & drop your mockups, mirror your live screen/device, and export or embed anywhere.

---

## ✨ Features

- **Hyper-Realistic Chassis**: Accurate iPhone 16 Pro proportions, ultra-slim titanium bezels, Dynamic Island, Action button, Volume rockers, Side button, and Camera Control recess.
- **Titanium Finishes**: Natural Titanium, Black Titanium, White Titanium, and Desert Titanium.
- **Easy Screen Replacement**:
  - **Drag & Drop**: Drop any image directly onto the phone screen or the upload area.
  - **File Picker**: Click "Replace Screen" or "Choose an image" to load local files.
  - **Image URL**: Paste an image link from the web.
  - **Preloaded Demos**: Switch instantly between Fintech, Social Media, Fitness Rings, Music Player, and iOS Wallpaper presets.
- **Live Screen Sharing / Mirroring**:
  - Stream your actual iPhone screen (via AirPlay/QuickTime mirrored to desktop) or any browser tab/app directly inside the mockup in real time with WebRTC `getDisplayMedia`.
- **Interactive Visuals**:
  - **3D Parallax Tilt**: The phone smoothly responds to mouse movement with 3D perspective depth.
  - **Dynamic Island**: Click to expand into a live media widget with animated soundwaves.
  - **Glass Glare & Lighting**: Specular light reflection overlay.
  - **Real-Time Clock**: Automatically syncs with current local time.
- **One-Click Export**: Download Retina high-resolution PNGs with transparent or studio backgrounds.
- **Zero-Dependency Embed**: Ready-to-copy HTML & CSS for your website.

---

## 🚀 Quick Start

1. Open `index.html` directly in any web browser (Chrome, Safari, Edge, Firefox).
2. To test replacing the screen:
   - Drag any image file from your computer and drop it directly onto the phone mockup.
   - Or click the **Replace Screen** button in the bottom floating toolbar.
3. To share your live screen:
   - Click **"Share Live Screen / Phone"** in the sidebar or bottom bar.
   - Select a window, tab, or entire display. It will instantly stream live inside the phone display!

---

## 🌐 How to Embed on Your Website

You can embed the mockup directly into WordPress, Webflow, React, Next.js, or plain HTML.

### Option 1: Standalone Single-File Component
We have included [iphone-component.html](file:///d:/Ali_DP/DP_Oct_2026/DCM_Webpage/iphone-component.html), a self-contained HTML file with embedded CSS.

### Option 2: Copy-Paste HTML Snippet
Place this HTML anywhere on your page:

```html
<div class="iphone-16-pro natural-titanium">
  <div class="chassis">
    <!-- Hardware Buttons -->
    <div class="hardware-button action-button"></div>
    <div class="hardware-button volume-up"></div>
    <div class="hardware-button volume-down"></div>
    <div class="hardware-button power-button"></div>
    <div class="hardware-button camera-control"></div>

    <div class="bezel">
      <div class="screen">
        <!-- Dynamic Island -->
        <div class="dynamic-island">
          <div class="island-camera"></div>
          <div class="island-sensor"></div>
        </div>

        <!-- YOUR SCREEN IMAGE: Change src to your screenshot -->
        <div class="screen-content-layer fit-cover">
          <img src="YOUR_SCREEN_IMAGE.jpg" alt="Screen Preview" class="screen-media">
        </div>

        <!-- Specular Glare -->
        <div class="screen-reflection"></div>

        <!-- Home Indicator -->
        <div class="home-indicator"></div>
      </div>
    </div>
  </div>
</div>
```

Include [style.css](file:///d:/Ali_DP/DP_Oct_2026/DCM_Webpage/style.css) in your `<head>`:
```html
<link rel="stylesheet" href="style.css">
```

---

## 🎨 Changing Finishes & Styles

Change the titanium color by altering the class on `.iphone-16-pro`:
- Natural Titanium: `natural-titanium` (default)
- Black Titanium: `black-titanium`
- White Titanium: `white-titanium`
- Desert Titanium: `desert-titanium`

### Adjusting Size
Scale the mockup effortlessly via CSS:
```css
.iphone-16-pro {
  transform: scale(0.8); /* Scale to 80% */
  transform-origin: center top;
}
```
Or override the CSS variable:
```css
:root {
  --device-width: 340px;
  --device-height: 690px;
}
```

---

## 🔄 Replacing Screens Dynamically with JavaScript

In your own application or website, you can swap screens with a single line of JS:

```javascript
document.querySelector('.screen-media').src = 'new-screen.png';
```
