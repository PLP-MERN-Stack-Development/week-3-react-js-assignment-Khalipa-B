import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'; // Custom hook for localStorage

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []); // Get tasks from localStorage (or empty array if none)
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All'); // Filter tasks (All, Active, Completed)

  useEffect(() => {
    // Optional: Any logic to handle side-effects like fetching tasks or initial state.
  }, []);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: Date.now(), // Use current timestamp as unique id
          text: newTask,
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
  });

  return (
    <div className="task-manager">
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="border p-2"
        />
        <button onClick={addTask} className="ml-2 bg-blue-500 text-white p-2 rounded">
          Add Task
        </button>
      </div>

      <div className="filters mt-4">
        <button
          onClick={() => setFilter('All')}
          className={`mr-2 p-2 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Active')}
          className={`mr-2 p-2 rounded ${filter === 'Active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('Completed')}
          className={`mr-2 p-2 rounded ${filter === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Completed
        </button>
      </div>

      <ul className="task-list mt-4">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? 'line-through' : ''} flex justify-between items-center`}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
                className="mr-2"
              />
              {task.text}
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-2 bg-red-500 text-white p-1 mb-4 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
