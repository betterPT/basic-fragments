import React from 'react';
import './App.css';
import { ComicsList } from './ComicsList';
import { UsersList } from './UsersList';

function App() {
  return (
    <div style={{ padding: "5px" }}>
      <UsersList />
    </div>
  );
}

export default App;
