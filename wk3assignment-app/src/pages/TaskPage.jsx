// src/pages/TaskPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TaskManager from '../components/TaskManager';
import Button from '../components/Button';

const TaskPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
      <TaskManager />
      <div className="mt-6">
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default TaskPage;
