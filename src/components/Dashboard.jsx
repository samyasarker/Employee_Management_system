import React, { useState } from 'react';
import './Dashboard.css';
import People from './People';
import Organization from './Organization';

export default function Dashboard() {
    const [showPeople, setShowPeople] = useState(false);
    const [showOrganization, setShowOrganization] = useState(false);

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-title">
                    <h2>PEOPLE</h2>
                    <span>WORKSPACE</span>
                </div>

                <ul className="sidebar-menu">
                    <li className="active"><a href="#overview" onClick={() => { setShowPeople(false); setShowOrganization(false); }}>Overview</a></li>
                    <li><a href="#people" onClick={() => { setShowPeople(true); setShowOrganization(false); }}>People</a></li>
                    <li><a href="#organization" onClick={() => { setShowPeople(false); setShowOrganization(true); }}>Organization</a></li>
                    <li><a href="#activity">Activity</a></li>
                    <li><a href="#reports">Reports</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </aside>

            <main className="main-content">
                {showPeople ? (
                    <People onBack={() => setShowPeople(false)} />
                ) : showOrganization ? (
                    <Organization />
                ) : (
                    <>
                        <header className="content-header">
                            <h1>Dashboard / home</h1>
                            <p>Option A . sidebar workspace</p>
                        </header>

                        <div className="metrics-grid">
                            <div className="metric-card">
                                <span className="card-title">EMPLOYEES</span>
                                <h2>128</h2>
                                <span className="card-footer positive">+4 this month</span>
                            </div>

                            <div className="metric-card">
                                <span className="card-title">TEAMS</span>
                                <h2>12</h2>
                                <span className="card-footer info">2 open roles</span>
                            </div>

                            <div className="metric-card">
                                <span className="card-title">TODAY'S LOGS</span>
                                <h2>94%</h2>
                                <span className="card-footer warning">8 missing</span>
                            </div>

                            <div className="metric-card">
                                <span className="card-title">REPORTS DUE</span>
                                <h2>6</h2>
                                <span className="card-footer action">Review today</span>
                            </div>
                        </div>

                        <div className="bottom-grid">
                            <div className="card activity-card">
                                <h3>Activity completion</h3>

                                <div className="progress-item">
                                    <span className="dept-name">Engineering</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: '82%' }}></div>
                                    </div>
                                    <span className="percentage">82%</span>
                                </div>

                                <div className="progress-item">
                                    <span className="dept-name">Operations</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: '94%' }}></div>
                                    </div>
                                    <span className="percentage">94%</span>
                                </div>

                                <div className="progress-item">
                                    <span className="dept-name">People team</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: '71%' }}></div>
                                    </div>
                                    <span className="percentage">71%</span>
                                </div>

                                <div className="progress-item">
                                    <span className="dept-name">Product</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: '88%' }}></div>
                                    </div>
                                    <span className="percentage">88%</span>
                                </div>
                            </div>

                            <div className="card attention-card">
                                <h3>Needs attention</h3>
                                <ul>
                                    <li>2 approvals awaiting you</li>
                                    <li>8 activity logs missing</li>
                                    <li>1 reporting line unassigned</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}