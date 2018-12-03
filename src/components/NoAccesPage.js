import React from 'react';
import { Link } from 'react-router-dom';

const NoAccesPage = () => (
  <div>
    You don't have permission to acces this page! <Link to="/">Go home</Link>
  </div>
);

export default NoAccesPage;