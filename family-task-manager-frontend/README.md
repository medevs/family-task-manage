# Family Task Manager Frontend

This is the frontend for the Family Task Manager application, built with React and TypeScript.

## Quick Start

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── TaskList.tsx
│   ├── TaskItem.tsx
│   ├── TaskForm.tsx
│   └── TaskDetails.tsx
├── types.ts
├── App.tsx
└── index.tsx
```

## Key Components

- `TaskList`: Manages and displays the list of tasks
- `TaskItem`: Renders individual task items
- `TaskForm`: Modal for creating and editing tasks
- `TaskDetails`: Modal for displaying detailed task information

## Technologies Used

- React 18
- TypeScript
- React Query for state management
- Axios for API calls
- Tailwind CSS for styling
- Headless UI for accessible components
- Heroicons for icons

## API Integration

The frontend communicates with a Laravel backend. Ensure the backend server is running and update the API base URL in the axios configuration if necessary.

## Styling

This project uses Tailwind CSS. Customize the design by modifying the `tailwind.config.js` file and using Tailwind classes in components.

## Contributing

Contributions are welcome. Please ensure you update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)