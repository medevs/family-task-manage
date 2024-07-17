import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import TaskDetails from './TaskDetails';
import { Task } from '../types';
import { PlusIcon } from '@heroicons/react/24/solid';

const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await axios.get('http://localhost:8000/api/tasks');
  return data;
};

const TaskList: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const { data: tasks, isLoading, error } = useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: fetchTasks
  });

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleCreateTask = () => {
    setEditingTask(undefined);
    setIsFormOpen(true);
  };

  const handleViewDetails = (task: Task) => {
    setSelectedTask(task);
    setIsDetailsOpen(true);
  };

  if (isLoading) return <div className="text-center">Loading tasks...</div>;
  if (error) return <div className="text-center text-red-500">An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Task List</h2>
        <button
          onClick={handleCreateTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Create New Task
        </button>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {tasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={handleEditTask}
              onDelete={() => {}}
              onStatusChange={() => {}}
              onViewDetails={handleViewDetails}
            />
          ))}
        </ul>
      </div>
      <TaskForm
        task={editingTask}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
      <TaskDetails
        task={selectedTask}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </div>
  );
};

export default TaskList;