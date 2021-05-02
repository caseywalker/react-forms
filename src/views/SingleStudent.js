import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/StudentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleStudent(firebaseKey)
      .then(setStudent);
  }, []);

  return (
    <div>
      <h1>{student.name}</h1>
    </div>
  );
}
