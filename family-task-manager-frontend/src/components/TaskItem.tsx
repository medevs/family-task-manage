import React from 'react';
import { Task } from '../types';
import { EyeIcon, PencilIcon, TrashIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/solid';

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number) => void;
  onStatusChange: (taskId: number, status: Task['status']) => void;
  onViewDetails: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onStatusChange, onViewDetails }) => {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  const statusColors = {
    pending: 'bg-gray-100 text-gray-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-purple-100 text-purple-800',
  };

  return (
    <li className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150 ease-in-out">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-900 truncate">{task.title}</h3>
          <p className="mt-1 text-sm text-gray-500 truncate">{task.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${priorityColors[task.priority]}`}>
            {task.priority}
          </span>
          <span className={`block text-sm font-semibold rounded-full px-2 py-1 ${statusColors[task.status]}`}>
            {task.status}
          </span>
        </div>
      </div>
      <div className="mt-2 sm:flex sm:justify-between">
        <div className="sm:flex">
          <p className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            <span>Due: {new Date(task.due_date).toLocaleDateString()}</span>
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
            <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
            <span>{task.user.name}</span>
          </p>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <p className="bg-gray-100 rounded-full px-2 py-1">{task.category.name}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-3">
        <button
          onClick={() => onViewDetails(task)}
          className="text-blue-600 hover:text-blue-900"
        >
          <EyeIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => onEdit(task)}
          className="text-yellow-600 hover:text-yellow-900"
        >
          <PencilIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-600 hover:text-red-900"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;