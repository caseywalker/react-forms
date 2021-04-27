import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import StudentForm from '../StudentForm';
import { getStudents } from '../helpers/data/StudentData';
import StudentCard from '../components/StudentCard';

firebase.initializeApp(firebaseConfig);

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((studentArray) => setStudents(studentArray));
  }, []);

  return (
    <div className='App'>
      <StudentForm formTitle='Student Form' />
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard key={studentInfo.firebaseKey} />
      ))}
    </div>
  );
}

export default App;
