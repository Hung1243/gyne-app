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

## TAMAGUI theme using guide

- There are **base**, **accent**, **warning**, **error**, **success** themes, each have **light** and **dark** variant.
- **base** theme are applied to tamagui components by default.
- Change theme for multiple components by using Theme wrapper:
  
  ![image](https://github.com/user-attachments/assets/caa9fb12-820b-4088-9864-36fc948a6eb0)
- Individual component theme can also be changed:
  
  ![image](https://github.com/user-attachments/assets/8d87a259-8464-48ef-bc33-0b3ce7de1386)
- Access colors of each theme by using ```$color(1-12)``` (default are colors of **base** theme)
- Access colors of **accent** theme by using ```$accent(1-12)```
- Color palette for **base** and **accent** theme can be seek here: [Gyne Theme V2](https://tamagui.dev/theme?state=eyJuYW1lIjoiIiwicGFsZXR0ZXMiOnsiYmFzZSI6eyJuYW1lIjoiYmFzZSIsImFuY2hvcnMiOlt7ImluZGV4IjowLCJodWUiOnsic3luYyI6ZmFsc2UsImxpZ2h0IjozNDAuMDAwMDAwMDAwMDAwMDYsImRhcmsiOjMzMi4zMDc2OTIzMDc2OTIzfSwic2F0Ijp7InN5bmMiOmZhbHNlLCJsaWdodCI6MSwiZGFyayI6MC41NjUyMTczOTEzMDQzNDc4fSwibHVtIjp7ImxpZ2h0IjowLjk4ODIzNTI5NDExNzY0NzEsImRhcmsiOjAuMDQ1MDk4MDM5MjE1Njg2Mjc0fX0seyJpbmRleCI6MSwiaHVlIjp7ImxpZ2h0IjozMzQuMTkzNTQ4Mzg3MDk2OCwiZGFyayI6MzMxLjUyNTQyMzcyODgxMzU2fSwic2F0Ijp7ImxpZ2h0IjowLjkyMDc5MjA3OTIwNzkyMDgsImRhcmsiOjAuMzQxMDQwNDYyNDI3NzQ1Nn0sImx1bSI6eyJsaWdodCI6MC45NDExNzY0NzA1ODgyMzUzLCJkYXJrIjowLjE4fX0seyJpbmRleCI6OCwiaHVlIjp7ImxpZ2h0IjozMzQuMTkzNTQ4Mzg3MDk2OCwiZGFyayI6MzMzLjgyOTc4NzIzNDA0MjU2fSwic2F0Ijp7ImxpZ2h0IjowLjkyMDc5MjA3OTIwNzkyMDgsImRhcmsiOjAuOTIxNTY4NjI3NDUwOTgwM30sImx1bSI6eyJsaWdodCI6MC44MDE5NjA3ODQzMTM3MjU1LCJkYXJrIjowLjh9fSx7ImluZGV4Ijo5LCJodWUiOnsic3luY0xlZnQiOmZhbHNlLCJzeW5jIjpmYWxzZSwibGlnaHQiOjMzMy44NjEzODYxMzg2MTM4NSwiZGFyayI6MzM0LjIwMDAwMDAwMDAwMDA1fSwic2F0Ijp7InN5bmNMZWZ0IjpmYWxzZSwic3luYyI6ZmFsc2UsImxpZ2h0IjowLjU1ODAxMTA0OTcyMzc1NjksImRhcmsiOjAuNTYxNzk3NzUyODA4OTg4OH0sImx1bSI6eyJsaWdodCI6MC42NDUwOTgwMzkyMTU2ODYzLCJkYXJrIjowLjY1MDk4MDM5MjE1Njg2Mjh9fSx7ImluZGV4IjoxMCwiaHVlIjp7InN5bmMiOmZhbHNlLCJsaWdodCI6MjY0LjkyMzA3NjkyMzA3Njk2LCJkYXJrIjoyNzQuMjg1NzE0Mjg1NzE0M30sInNhdCI6eyJzeW5jIjpmYWxzZSwibGlnaHQiOjAuMzI5OTQ5MjM4NTc4NjgwMTQsImRhcmsiOjF9LCJsdW0iOnsibGlnaHQiOjAuNjEzNzI1NDkwMTk2MDc4NSwiZGFyayI6MC45MjV9fSx7ImluZGV4IjoxMSwiaHVlIjp7InN5bmNMZWZ0Ijp0cnVlLCJzeW5jIjpmYWxzZSwibGlnaHQiOjI2NC45MjMwNzY5MjMwNzY5NiwiZGFyayI6Mjc0LjI4NTcxNDI4NTcxNDN9LCJzYXQiOnsic3luY0xlZnQiOnRydWUsInN5bmMiOmZhbHNlLCJsaWdodCI6MC4zMjk5NDkyMzg1Nzg2ODAxNCwiZGFyayI6MX0sImx1bSI6eyJsaWdodCI6MC4zODYyNzQ1MDk4MDM5MjE1MywiZGFyayI6MC45NzI1NDkwMTk2MDc4NDMxfX1dfSwiYWNjZW50Ijp7Im5hbWUiOiJhY2NlbnQiLCJhbmNob3JzIjpbeyJpbmRleCI6MCwiaHVlIjp7InN5bmMiOmZhbHNlLCJsaWdodCI6MzM2LjAwMDAwMDAwMDAwMDEsImRhcmsiOjMzMn0sInNhdCI6eyJzeW5jIjpmYWxzZSwibGlnaHQiOjEsImRhcmsiOjAuNn0sImx1bSI6eyJsaWdodCI6MC45ODAzOTIxNTY4NjI3NDUyLCJkYXJrIjowLjA0OTAxOTYwNzg0MzEzNzI1NH19LHsiaW5kZXgiOjEsImh1ZSI6eyJsaWdodCI6MC42ODk2NTUxNzI0MTM3OTA2LCJkYXJrIjowLCJzeW5jIjpmYWxzZX0sInNhdCI6eyJsaWdodCI6MC45Nzc1MjgwODk4ODc2NDA1LCJkYXJrIjowLjMxNzY0NzA1ODgyMzUyOTQ1LCJzeW5jIjpmYWxzZX0sImx1bSI6eyJsaWdodCI6MC45NjQ3MDU4ODIzNTI5NDEyLCJkYXJrIjowLjE2NjY2NjY2NjY2NjY2NjY2fX0seyJpbmRleCI6OCwiaHVlIjp7ImxpZ2h0IjowLjY4OTY1NTE3MjQxMzc5MDYsImRhcmsiOjEuNDExNzY0NzA1ODgyMzQ3Nywic3luY0xlZnQiOmZhbHNlfSwic2F0Ijp7ImxpZ2h0IjowLjk3NzUyODA4OTg4NzY0MDUsImRhcmsiOjAuOTc3MDExNDk0MjUyODczNiwic3luY0xlZnQiOmZhbHNlfSwibHVtIjp7ImxpZ2h0IjowLjgyNTQ5MDE5NjA3ODQzMTMsImRhcmsiOjAuODI5NDExNzY0NzA1ODgyM319LHsiaW5kZXgiOjksImh1ZSI6eyJzeW5jTGVmdCI6ZmFsc2UsInN5bmMiOnRydWUsImxpZ2h0IjoxLjUzODQ2MTUzODQ2MTU0MDMsImRhcmsiOjEuNTM4NDYxNTM4NDYxNTQwM30sInNhdCI6eyJzeW5jTGVmdCI6ZmFsc2UsInN5bmMiOnRydWUsImxpZ2h0IjowLjY2ODU3MTQyODU3MTQyODUsImRhcmsiOjAuNjY4NTcxNDI4NTcxNDI4NX0sImx1bSI6eyJsaWdodCI6MC42NTY4NjI3NDUwOTgwMzkyLCJkYXJrIjowLjZ9fSx7ImluZGV4IjoxMCwiaHVlIjp7InN5bmMiOnRydWUsImxpZ2h0IjozMzQuMjg1NzE0Mjg1NzE0MywiZGFyayI6MzM0LjI4NTcxNDI4NTcxNDN9LCJzYXQiOnsic3luYyI6dHJ1ZSwibGlnaHQiOjAuNzc3Nzc3Nzc3Nzc3Nzc3OSwiZGFyayI6MC43Nzc3Nzc3Nzc3Nzc3Nzc5fSwibHVtIjp7ImxpZ2h0IjowLjY4NjI3NDUwOTgwMzkyMTYsImRhcmsiOjAuOX19LHsiaW5kZXgiOjExLCJodWUiOnsic3luY0xlZnQiOnRydWUsInN5bmMiOnRydWUsImxpZ2h0IjozMzQuMjg1NzE0Mjg1NzE0MywiZGFyayI6MzM0LjI4NTcxNDI4NTcxNDN9LCJzYXQiOnsic3luY0xlZnQiOnRydWUsInN5bmMiOnRydWUsImxpZ2h0IjowLjc3Nzc3Nzc3Nzc3Nzc3NzksImRhcmsiOjAuNzc3Nzc3Nzc3Nzc3Nzc3OX0sImx1bSI6eyJsaWdodCI6MC41MzUyOTQxMTc2NDcwNTg4LCJkYXJrIjowLjkxMTc2NDcwNTg4MjM1Mjl9fV19fSwic2NoZW1lcyI6eyJkYXJrIjp0cnVlLCJsaWdodCI6dHJ1ZX19)
   - ```$color1 -> $color12``` of **base** theme:
     
     ![image](https://github.com/user-attachments/assets/9e0788a1-6600-4c71-ac1c-7a61bf217f41)
   - ```$color1 -> $color12``` of **accent** theme (or ```$accent1 -> $accent12```):
     
     $![image](https://github.com/user-attachments/assets/7e7909ae-a3d6-4c4e-a985-63ea9d6988f0)

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
