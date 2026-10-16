# IndusLink - Circular Economy Marketplace

IndusLink is a digital marketplace designed to facilitate direct connections between industries for the exchange of industrial by-products and waste materials. The platform enables industries to list, discover, buy, and sell waste materials without intermediaries, promoting sustainable industrial practices while fostering a circular economy.

## 🌟 Features

### 🎨 Modern UI/UX
- Beautiful gradient designs with smooth animations
- Responsive layout for all devices
- Intuitive navigation with modern icons
- Professional color scheme (Indigo, Purple, Cyan, Emerald)

### 👥 Separate Authentication
- **Buyer Login**: Dedicated buyer registration and login
- **Seller Login**: Separate seller portal with dashboard
- Quick login option for existing users
- User profiles with verification status

### 🛒 Shopping Cart
- Add materials to cart with quantity selection
- Real-time cart updates
- View order summary with tax calculations
- Secure checkout process

### 📦 Order Management
- **Order Tracking**: Visual progress tracking with status indicators
- **Order History**: Complete order history with details
- **Status Updates**: Placed → Dispatched → In Transit → Delivered
- Order notes and special instructions

### 💳 Payment Gateway
- Integration with Razorpay (simulated for demo)
- Multiple payment options (Credit/Debit, UPI, Net Banking, COD)
- Secure encrypted payment processing
- Payment confirmation and receipts

### 👤 Profile Page
- User information and account details
- **Live Chat Support**: Interactive chatbot for customer support
- **Contact Information**: Multiple support channels
  - Customer Support: 24/7 available
  - Business Inquiries
  - Technical Support
- Account statistics and verification status

### 🤖 Live Chat Bot
- Real-time chat interface
- Intelligent bot responses
- Context-aware help for:
  - Order tracking
  - Payment issues
  - Account problems
  - Returns and refunds
  - General inquiries

### 🏪 Seller Dashboard
- List new materials
- Manage existing listings
- View order status
- Update order tracking

### 🔍 Search & Filter
- Real-time search functionality
- Filter by material type
- Sort by price and availability

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 📱 Usage

### For Buyers
1. Click "Buyer Login" in the navbar
2. Register with your name and email
3. Browse the marketplace
4. Search for materials
5. Add items to cart with desired quantity
6. Proceed to checkout
7. Complete payment (simulated)
8. Track orders in the Orders page

### For Sellers
1. Click "Seller Login" in the navbar
2. Register your company/seller account
3. Access the Seller Dashboard
4. List new materials with details
5. Manage existing listings
6. Update order status as orders are processed
7. View all orders from buyers

## 🎯 Key Pages

### Marketplace (`/`)
- Browse all available materials
- Search and filter functionality
- View material details and pricing
- Add items to cart

### Cart (`/cart`)
- Review selected items
- Adjust quantities
- View order summary with tax
- Proceed to checkout

### Checkout (`/checkout`)
- Select payment method
- Add special instructions
- Complete secure payment
- Place order

### Orders (`/orders`)
- View all orders
- Track order status with visual progress
- See payment details
- View order history

### Profile (`/profile`)
- View account information
- Access live chat support
- Contact support teams
- Account statistics

### Seller Dashboard (`/seller`)
- List new materials
- Manage listings
- View all orders
- Update order tracking

## 🛠 Technologies Used

- **React 18** - UI framework
- **React Router DOM** - Routing
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool
- **LocalStorage** - Data persistence (demo)

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.16.0",
  "lucide-react": "^0.263.1",
  "razorpay": "^2.9.2",
  "tailwindcss": "^3.4.7",
  "vite": "^5.0.0"
}
```

## 🎨 Design Features

- **Color Scheme**: Modern gradient colors (Indigo, Purple, Cyan, Emerald)
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design
- **Icons**: Lucide React icon library
- **Cards**: Modern card-based layouts
- **Typography**: Clear hierarchy and readability

## ⚠️ Important Notes

### For Production Use

1. **Authentication**: Implement proper authentication with passwords
2. **Payment Gateway**: Integrate real Razorpay/Stripe API
3. **Backend**: Replace localStorage with a proper backend database
4. **Security**: Add input validation and security measures
5. **Data Persistence**: Use a proper database (PostgreSQL, MongoDB)
6. **File Storage**: Implement image uploads for materials

### Demo Limitations

- All data is stored in browser localStorage
- Payment processing is simulated
- No real authentication (email-only)
- No image uploads
- Chat bot is rule-based (not AI-powered)

## 📱 Mobile App Development

To convert this to a mobile app with Expo:

1. Create a new Expo project:
   ```bash
   npx create-expo-app induslink-mobile
   ```

2. Install React Native Navigation:
   ```bash
   npm install @react-navigation/native @react-navigation/bottom-tabs
   ```

3. Adapt components for React Native:
   - Replace web-specific components with React Native equivalents
   - Use React Native navigation instead of React Router
   - Implement AsyncStorage for data persistence
   - Add mobile-specific features (camera, push notifications)

## 🤝 Contributing

This is a demo application. For production deployment:

1. Add proper authentication
2. Implement backend API
3. Set up database
4. Integrate real payment gateway
5. Add image storage
6. Implement proper chat functionality
7. Add analytics and monitoring

## 📞 Support

- Customer Support: support@induslink.com
- Business Inquiries: business@induslink.com
- Technical Support: tech@induslink.com

## 🌱 Circular Economy

IndusLink promotes the circular economy by:
- Reducing waste disposal costs
- Lowering raw material expenses
- Minimizing environmental impact
- Creating value from waste
- Connecting industries directly

---

**Built with ❤️ for sustainable industrial practices**
