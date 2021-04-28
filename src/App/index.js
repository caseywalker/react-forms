import React, { useEffect, useState } from 'react';
import './App.scss';
import StudentForm from '../StudentForm';
import { getStudents } from '../helpers/data/StudentData';
import StudentCard from '../components/StudentCard';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((studentArray) => setStudents(studentArray));
  }, []);

  return (
    <div className='App'>
      <StudentForm formTitle='Student Form'
      setStudents={setStudents}
      />
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard key={studentInfo.firebaseKey}
        firebaseKey={studentInfo.firebaseKey}
        name={studentInfo.name}
        teacher={studentInfo.teacher}
        grade={Number(studentInfo.grade)}
        setStudents={setStudents}
        />
      ))}
    </div>
  );
}

export default App;
