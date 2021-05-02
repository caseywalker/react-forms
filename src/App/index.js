import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { getStudents } from '../helpers/data/StudentData';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((studentArray) => setStudents(studentArray));
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes students={students} setStudents={setStudents} />
      </Router>
    </div>
  );
}

export default App;
