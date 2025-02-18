# Gyne App

A React Native mobile application built with Expo.

## Tech Stack

- React Native
- Expo
- React Navigation
- Tamagui (UI Components)
- TypeScript
- Redux Toolkit (State Management)

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

## Features

- Period Tracking: Log periods, symptoms, and moods easily.
- Health Insights: Personalized tips and information about menstrual health.
- Expert Consultation: Connect with gynecologists for advice and support.
- Secure Authentication: Login and manage your account securely.

## Development

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- Yarn v1
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac users) or Android Studio (for Android development)

The project uses several development tools:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hung1243/gyne-app.git
   cd gyne-app
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn start
   ```

4. Run the app on a simulator or physical device.

5. To maintain code quality, run:

```bash
# Linting
yarn run lint
```

### ESlint & Prettier

- If using VSCode install them from:
  - ESlint: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
  - Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

### API Documentation

The backend API is documented using OpenAPI. Access the documentation at:

<https://api.gyne.com/docs> - Change this later

## Building for Production

To create a production build:

```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

## Contributing

As this is a private repository, contributions are currently limited to the core team. If you are a team member and would like to contribute, please follow these steps:

1. Switch to `dev` then create a new branch for your feature or bug fix:

   ```shell
   git checkout dev
   git pull origin dev
   git checkout -b feature-branch-name
   ```

2. Make your changes and commit them with a clear message:

   ```shell
   git commit -m "feat: Add XYZ feature"
   ```

3. Push your branch to the repository:

   ```shell
   git push origin feature-branch-name
   ```

4. Create a pull request (PR) and assign a reviewer.
5. Once approved, your changes will be merged into the main branch.

For any questions or access requests, contact the repository owner.

### Commit Best Practices

To maintain a clean and consistent commit history, follow these best practices:

- Use Conventional Commits:

  ```none
  feat: Add new feature for period tracking
  fix: Resolve issue with login authentication
  chore: Update dependencies and configurations
  refactor: Improve code structure for API calls
  ```

- Write clear and concise commit messages.
  Group related changes into a single commit.
- Use present tense and imperative mood in commit messages.
- Avoid vague commit messages like "fix bug" or "update code."
- Reference issues when applicable (e.g., `fix: Resolve login issue (#42)`).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

_Made with ❤️ by the Gyne Team | Palmy._
