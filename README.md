# TypeBlitz - Advanced Typing Speed Test

TypeBlitz is a modern, feature-rich typing speed test application designed to help users improve their typing speed and accuracy. It offers a customizable experience with various difficulty levels, themes, and real-time feedback.

## 🚀 Features

-   **Multiple Difficulty Modes**:
    -   **Normal**: Standard typing experience. Correct mistakes freely.
    -   **Expert**: No corrections allowed. Backspace is disabled.
    -   **Master**: Perfection is key. The test ends immediately upon making a mistake.
-   **Real-time Feedback**:
    -   **Visual Warnings**: A pulsing red light alerts you when your Speed (WPM) or Accuracy drops below your set minimums.
    -   **Live Stats**: Monitor your WPM and Accuracy as you type.
-   **Auto-Advance**: Seamlessly transitions to the next set of words when you finish the current sentence, allowing for uninterrupted typing flow.
-   **Customizable Settings**:
    -   **Minimum Speed & Accuracy**: Set your own goals. The app warns you if you fall behind.
    -   **Themes**: Choose from Default, Cyberpunk, Paper, and Soft themes.
    -   **Time Limits**: Select your preferred test duration.
-   **Multi-language Support**: Practice typing in English, Spanish, French, German, and Portuguese.

## 🛠️ Technical Overview

### Key Components

-   **`App.tsx`**: The main application container. It manages the global state for settings (difficulty, theme, language, minimums) and switches between the `HomeView` (setup) and `ActiveView` (test) modes.
-   **`TypingArea.tsx`**: The core component where the typing magic happens.
    -   **Input Handling**: Captures user keystrokes and compares them against the target text.
    -   **Real-time Calculation**: continuously calculates WPM and Accuracy.
    -   **Auto-Advance Logic**: Detects when a sentence is completed and triggers the next one.
    -   **Difficulty Logic**: Enforces rules for Expert (blocks Backspace) and Master (fails on error) modes.
-   **`Sidebar.tsx`**: Manages the configuration panel where users select their difficulty, mode, and minimum thresholds.

### Installation & Running

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

## 📚 Resources

This project makes use of the following open-source libraries and resources:

-   **Framework & Build Tool**:
    -   [React](https://react.dev/)
    -   [Vite](https://vitejs.dev/)
-   **Styling**:
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [Lucide React](https://lucide.dev/) (Icons)
-   **UI Components**:
    -   [Radix UI](https://www.radix-ui.com/) (Primitives for accessible components)
-   **Design**:
    -   Original design concept from [Figma](https://www.figma.com/design/jfKGn3TA3phFJQLQkV3WbU/TypeBlitz-Typing-Speed-Test).

## 📝 Code Quality

The codebase follows modern React best practices:
-   **Functional Components**: Uses React Hooks (`useState`, `useEffect`, `useRef`) for state and side effects.
-   **TypeScript**: Fully typed props and state for better reliability and developer experience.
-   **Modular Architecture**: Components are split into small, focused files for better maintainability.

