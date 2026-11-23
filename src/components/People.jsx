import React, { useState } from 'react';
import './People.css';
import Dashboard from './Dashboard';

function People() {
    const [search, setSearch] = useState('');

    const employees = [
        { name: 'Ava Martin', title: 'Designer', team: 'Product', manager: 'Chris Chen', status: 'Active' },
        { name: 'Jordan Lee', title: 'Engineer', team: 'Platform', manager: 'Ravi Patel', status: 'Active' },
        { name: 'Sam Kim', title: 'Analyst', team: 'Operations', manager: 'Chris Chen', status: 'On leave' },
        { name: 'Morgan Reed', title: 'Recruiter', team: 'HR', manager: 'Jamie Lee', status: 'Active' }
    ];

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.title.toLowerCase().includes(search.toLowerCase()) ||
        employee.team.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="people-content">
            <h1>Employee directory and profile</h1>
            <p className="subtitle">Option A • sidebar workspace</p>

            <div className="employee-box">
                <div className="top-area">
                    <input
                        type="text"
                        placeholder="Search employees..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className='add-button'>+ Add employee</button>
                </div>

                <div className="table-head">
                    <div>EMPLOYEE</div>
                    <div>TITLE / TEAM</div>
                    <div>MANAGER</div>
                    <div>STATUS</div>
                </div>
                {filteredEmployees.map((employee) => (
                    <div className="employee-row" key={employee.name}>
                        <div className="employee-name">
                            <div className="avatar">{employee.name.charAt(0)}</div>
                            <span>{employee.name}</span>
                        </div>
                        <div>{employee.title} • {employee.team}</div>
                        <div>{employee.manager}</div>
                        <div className="status">{employee.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default People;