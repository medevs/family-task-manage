# Family Task Manager

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Running the Application](#running-the-application)
7. [API Endpoints](#api-endpoints)
8. [Frontend Components](#frontend-components)
9. [State Management](#state-management)
10. [Styling](#styling)
11. [Future Enhancements](#future-enhancements)
12. [Contributing](#contributing)
13. [License](#license)

## Introduction

The Family Task Manager is a web application designed to help families organize and manage their tasks collaboratively. It provides a user-friendly interface for creating, assigning, and tracking tasks within a family unit. This application aims to improve communication and coordination among family members by centralizing task management.

## Features

- User Authentication: Family members can register and log in to their accounts.
- Task Management: Create, read, update, and delete tasks.
- Task Assignment: Assign tasks to specific family members.
- Task Categories: Organize tasks into categories (e.g., chores, homework, errands).
- Due Dates and Priorities: Set due dates and priority levels for tasks.
- Task Status Tracking: Mark tasks as pending, in progress, or completed.
- Family Groups: Create and manage family groups.
- Dashboard: View an overview of tasks and family activities.
- Responsive Design: Works on desktop and mobile devices.

## Technology Stack

- Backend:
  - Laravel 10 (PHP framework)
  - MySQL database
  - RESTful API
- Frontend:
  - React 18 with TypeScript
  - React Query for state management and data fetching
  - Axios for API calls
- Authentication:
  - Laravel Sanctum for API token authentication
- Styling:
  - Tailwind CSS
  - Headless UI for accessible components
- Icons:
  - Heroicons

## Project Structure

```
family-task-manager/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── TaskController.php
│   │   │   ├── UserController.php
│   │   │   └── CategoryController.php
│   │   └── Middleware/
│   │       └── Cors.php
│   ├── Models/
│   │   ├── Task.php
│   │   ├── User.php
│   │   └── Category.php
│   └── ...
├── database/
│   ├── migrations/
│   └── seeders/
├── routes/
│   └── api.php
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   ├── TaskForm.tsx
│   │   │   └── TaskDetails.tsx
│   │   ├── types.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   └── package.json
├── .env
├── composer.json
└── README.md
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/family-task-manager.git
   cd family-task-manager
   ```

2. Install PHP dependencies:
   ```
   composer install
   ```

3. Copy the `.env.example` file to `.env` and configure your database settings:
   ```
   cp .env.example .env
   ```

4. Generate an application key:
   ```
   php artisan key:generate
   ```

5. Run database migrations and seeders:
   ```
   php artisan migrate --seed
   ```

6. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

## Running the Application

1. Start the Laravel development server:
   ```
   php artisan serve
   ```

2. In a separate terminal, start the React development server:
   ```
   cd frontend
   npm start
   ```

3. Access the application at `http://localhost:3000`

## API Endpoints

- `GET /api/tasks`: Fetch all tasks
- `POST /api/tasks`: Create a new task
- `GET /api/tasks/{id}`: Fetch a specific task
- `PUT /api/tasks/{id}`: Update a task
- `DELETE /api/tasks/{id}`: Delete a task
- `GET /api/categories`: Fetch all categories
- `GET /api/users`: Fetch all users

## Frontend Components

1. `TaskList`: Displays the list of tasks and manages the overall task state.
2. `TaskItem`: Renders individual task items with a modern, card-like design.
3. `TaskForm`: A modal component for creating and editing tasks.
4. `TaskDetails`: A modal component for displaying detailed task information.

## State Management

The application uses React Query for state management and data fetching. This provides several benefits:

- Automatic caching and refetching of data
- Easy management of loading and error states
- Optimistic updates for a smoother user experience

## Styling

The project uses Tailwind CSS for styling, providing a responsive and modern design. Key styling features include:

- Responsive grid layout
- Custom color schemes for priority and status indicators
- Hover effects for interactive elements
- Consistent spacing and typography

## Future Enhancements

1. Implement real-time updates using WebSockets
2. Add a calendar view for better visualization of due dates
3. Implement task recurrence for repeating tasks
4. Add email notifications for upcoming or overdue tasks
5. Implement a mobile app using React Native

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).