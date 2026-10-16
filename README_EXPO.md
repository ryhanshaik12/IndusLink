# IndusLink Mobile - Expo Version

This is the React Native mobile version of IndusLink that can run in Expo Go app.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd induslink-mobile
npm install
```

### 2. Run on Expo Go

**For Android:**
```bash
npm run android
# Then scan the QR code with Expo Go app on your Android device
```

**For iOS:**
```bash
npm run ios
# Then scan the QR code with Expo Go app on your iPhone
```

**Using Expo CLI:**
```bash
npm start
# Then:
# - Press 'a' for Android
# - Press 'i' for iOS
# - Scan QR code with Expo Go app
```

### 3. Development Steps

1. **Install Expo Go app** on your phone from:
   - [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)

2. **Start the development server:**
   ```bash
   cd induslink-mobile
   npm start
   ```

3. **Scan QR code** with:
   - Android: Use Expo Go app or Camera app
   - iOS: Use Camera app and tap the notification

## 📱 Features

✅ Same functionality as web version
- Buyer/Seller authentication
- Marketplace browsing
- Shopping cart
- Order tracking
- Profile with chat support
- Image upload from device
- Password-based authentication

## 📦 Required Packages

- `@react-navigation/native` - Navigation
- `@react-navigation/bottom-tabs` - Tab navigation
- `@react-native-async-storage/async-storage` - Local storage
- `expo-image-picker` - Image selection from device
- `react-native-safe-area-context` - Safe area handling
- `react-native-screens` - Screen optimization

## 🔄 Differences from Web Version

- **File Upload**: Uses Expo's image picker (native device access)
- **Navigation**: React Navigation instead of React Router
- **Storage**: AsyncStorage instead of localStorage
- **UI**: React Native components (View, Text, TouchableOpacity, etc.)
- **Styling**: StyleSheet API instead of TailwindCSS

## 🛠 Development

The mobile version is being developed in the `induslink-mobile` directory. You'll have both:
- `induslink-meta-react2/` - Web version (Vite + React)
- `induslink-mobile/` - Mobile version (Expo + React Native)

Both are independent and can be developed separately.

## 📝 Current Status

The mobile app structure is being set up. The core app features will be ported from the web version with mobile-optimized UI.

