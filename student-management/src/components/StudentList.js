import React, { useState } from 'react';
import AddStudentModal from './AddStudentModal';

const StudentList = ({ students, setStudents, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleAddStudent = (newStudent) => {
        setStudents([...students, newStudent]);
        setShowModal(false);
    };

    const handleDeleteStudent = (index) => {
        onDelete(index);
    };

    return (
        <div>
            <h2>Student List</h2>
            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '0.5rem', width: '10rem' }}>Name</th>
                        <th style={{ border: '1px solid black', padding: '0.5rem', width: '20rem' }}>Email</th>
                        <th style={{ border: '1px solid black', padding: '0.5rem', width: '10rem' }}>Faculty of Study</th>
                        <th style={{ border: '1px solid black', padding: '0.5rem', width: '10rem' }}>Year</th>
                        <th style={{ border: '1px solid black', padding: '0.5rem' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '0.5rem' }}>{student.name}</td>
                            <td style={{ border: '1px solid black', padding: '0.5rem' }}>{student.email}</td>
                            <td style={{ border: '1px solid black', padding: '0.5rem' }}>{student.faculty}</td>
                            <td style={{ border: '1px solid black', padding: '0.5rem' }}>{student.year}</td>
                            <td style={{ border: '1px solid black', padding: '0.5rem' }}>
                                <button onClick={() => handleDeleteStudent(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button onClick={() => setShowModal(true)}>Add More Student +</button>
            {showModal && <AddStudentModal onAdd={handleAddStudent} />}
        </div>
    );
};

export default StudentList;