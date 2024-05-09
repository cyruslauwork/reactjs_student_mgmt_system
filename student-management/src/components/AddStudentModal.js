import React, { useState } from 'react';

const AddStudentModal = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [faculty, setFaculty] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { name, email, faculty, year };
        onAdd(newStudent);
        setName('');
        setEmail('');
        setFaculty('');
        setYear('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table style={{ border: '1px solid black', padding: '0.5rem', width: '10rem' }}>
                    <tbody>
                        <tr width='25rem'>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Email:
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Faculty:
                                <select
                                    value={faculty}
                                    onChange={(e) => setFaculty(e.target.value)}
                                >
                                    <option value="">Select Faculty</option>
                                    <option value="Faculty 1">Faculty 1</option>
                                    <option value="Faculty 2">Faculty 2</option>
                                    <option value="Faculty 3">Faculty 3</option>
                                    <option value="Faculty 4">Faculty 4</option>
                                    <option value="Faculty 5">Faculty 5</option>
                                    <option value="Faculty 6">Faculty 6</option>
                                    <option value="Faculty 7">Faculty 7</option>
                                    <option value="Faculty 8">Faculty 8</option>
                                    <option value="Faculty 9">Faculty 9</option>
                                    <option value="Faculty 10">Faculty 10</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Year:
                                <input
                                    type="text"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                />
                            </label>
                            <br />
                            <button type="submit" style={{ margin: '0.5rem 0 0 0' }}>Submit</button>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default AddStudentModal;