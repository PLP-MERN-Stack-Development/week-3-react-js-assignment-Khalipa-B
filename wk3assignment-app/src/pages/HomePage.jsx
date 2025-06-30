// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Task Manager App</h1>
      <Card
        title="Task Management"
        content="Manage your tasks efficiently by adding, completing, and filtering tasks."
      />
      <div className="mt-6">
        <Link to="/tasks">
          <Button variant="primary">Go to Task Manager</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
