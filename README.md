# Gyne App

A React Native mobile application built with Expo.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac users) or Android Studio (for Android development)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Hung1243/gyne-app.git
cd gyne-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Running the App

The app can be run using the following command:

```bash
# Start the development server
npx expo start
```

## Project Structure

```
gyne-app/
├── src/
│   ├── navigation/   # Navigation configuration
│   ├── screens/      # Screen components
│   ├── providers/    # Context providers
│   ├── theme/        # Theme configuration
│   ├── configs/      # App configurations
│   ├── services/     # API services
│   ├── redux/        # State management (Redux Toolkit)
│   ├── utils/        # Utility functions
│   ├── hooks/        # Custom hooks
│   ├── constants/    # Constant values used in the app
│   ├── types/        # TypeScript type definitions
│   ├── assets/       # Images, fonts, etc.
│   └── components/   # Reusable UI components
├── app.json          # Expo configuration
├── App.tsx           # Root component
├── index.ts          # Entry point
├── babel.config.js   # Babel configuration
├── tsconfig.json     # TypeScript configuration
├── package.json      # Dependencies and scripts
├── .eslintrc.json    # ESLint configuration
├── .prettierrc       # Prettier configuration
├── .gitignore        # Git ignore file
```

## Tech Stack

- React Native
- Expo
- React Navigation
- Tamagui (UI Components)
- TypeScript
- Redux Toolkit (State Management)

## Features

- Period Tracking: Log periods, symptoms, and moods easily.
- Health Insights: Personalized tips and information about menstrual health.
- Expert Consultation: Connect with gynecologists for advice and support.
- Secure Authentication: Login and manage your account securely.

## Development

The project uses several development tools:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

To maintain code quality, run:

```bash
# Type checking
npm run typescript
# or
yarn typescript

# Linting
npm run lint
# or
yarn lint
```

## Building for Production

To create a production build:

```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

_Made with ❤️ by the Gyne Team | Palmy._
