import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddStudent from '../views/AddStudent';
import Home from '../views/Home';
import Students from '../views/Students';
import SingleStudent from '../views/SingleStudent';

function Routes({ students, setStudents }) {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/students' component={() => <Students students={students} setStudents={setStudents} />} />
      <Route path='/students/:firebaseKey' component={SingleStudent} />
      <Route path='/add-students' component={() => <AddStudent setStudents={setStudents}
      />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default Routes;
