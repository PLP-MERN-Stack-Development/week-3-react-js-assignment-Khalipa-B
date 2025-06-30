import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
  <ul className="flex flex-col sm:flex-row space-x-4">
    <li><Link to="/" className="text-white">Home</Link></li>
  </ul>
</nav>

);

export default Navbar;
