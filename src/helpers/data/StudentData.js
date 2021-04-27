import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const addStudent = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/students.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/students/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Student Added', object)));
    })
    .catch((error) => reject(error));
});

export default addStudent;
