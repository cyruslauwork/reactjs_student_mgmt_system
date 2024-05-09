import React, { useState } from 'react';
import StudentList from './components/StudentList';

const App = () => {
  const [students, setStudents] = useState([]);

  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <StudentList students={students} setStudents={setStudents} onDelete={handleDelete} />
    </div>
  );
};

export default App;