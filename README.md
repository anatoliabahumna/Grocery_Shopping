# 🛒 Grocery Price Tracker PWA

A modern, mobile-first Progressive Web App for tracking grocery shopping lists and prices. Built with HTML, Tailwind CSS, and vanilla JavaScript.

![PWA Badge](https://img.shields.io/badge/PWA-Ready-brightgreen)
![Mobile Optimized](https://img.shields.io/badge/Mobile-Optimized-blue)
![Offline Support](https://img.shields.io/badge/Offline-Supported-orange)

## ✨ Features

### Core Functionality
- **📝 Smart Shopping List** - Add items with quantity and price
- **💰 Real-time Calculations** - Automatic subtotals and grand total in PLN
- **✏️ Inline Editing** - Edit quantities and prices directly in the list
- **🗑️ Easy Removal** - Remove items with confirmation modal
- **💾 Auto-Save** - Automatic localStorage persistence

### PWA Features
- **📱 Installable** - Add to home screen like a native app
- **⚡ Offline Ready** - Works without internet connection
- **🚀 Fast Loading** - Cached resources for instant startup
- **🍎 iPhone Optimized** - Perfect integration with iOS
- **🔄 Service Worker** - Background sync and caching
- **📲 Install Prompts** - Smart installation guidance

## 🚀 Live Demo

**Web Version:** [https://anatoliabahumna.github.io/Grocery_Shopping/](https://anatoliabahumna.github.io/Grocery_Shopping/)

## 📱 Installation

### iPhone/iPad (Safari)
1. Open the app in **Safari**
2. Tap the **Share** button (□↗)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"** to confirm

### Android (Chrome)
1. Open the app in **Chrome**
2. Tap **"Install"** when prompted
3. Or use menu (⋮) → **"Add to Home Screen"**

### Desktop (Chrome/Edge)
1. Look for the **Install** icon in the address bar
2. Click **"Install Grocery Tracker"**
3. Follow the prompts

## 🛠️ Technology Stack

- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Modern, responsive styling
- **Vanilla JavaScript** - No frameworks, pure JS
- **PWA APIs** - Service Worker, Web App Manifest
- **LocalStorage** - Client-side data persistence

## 📁 File Structure

```
├── index.html          # Main application file
├── manifest.json       # PWA configuration
├── sw.js              # Service worker for offline support
└── README.md          # This documentation
```

## 🔧 Development

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/anatoliabahumna/Grocery_Shopping.git
   cd Grocery_Shopping
   ```

2. Serve the files using a local server:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:3000
   ```

3. Open `http://localhost:3000` in your browser

### PWA Testing
- **Chrome DevTools** → Application → Service Workers
- **Lighthouse** → PWA audit for best practices
- **Safari** → Develop → Web Inspector → Service Workers

## 🌟 PWA Benefits

- ✅ **App-like Experience** - Fullscreen, no browser UI
- ✅ **Offline Functionality** - Works without internet
- ✅ **Fast Performance** - Cached resources
- ✅ **Mobile Optimized** - Touch-friendly interface
- ✅ **Cross-Platform** - Works on all devices
- ✅ **Secure** - HTTPS required for full PWA features

## 📝 Usage

1. **Add Items**: Fill in item name, quantity, and price
2. **Edit**: Tap quantity or price fields to modify
3. **Remove**: Tap the ❌ button to delete items
4. **Clear All**: Use "Clear List" with confirmation
5. **Install**: Use the install prompt for app-like experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Anatoli Abahumna**
- GitHub: [@anatoliabahumna](https://github.com/anatoliabahumna)
- Repository: [Grocery_Shopping](https://github.com/anatoliabahumna/Grocery_Shopping)

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Device and browser information
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

**Made with ❤️ for better grocery shopping experiences** 