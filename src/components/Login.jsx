import React, { useState } from 'react';
import './Login.css';
import Dashboard from './Dashboard';
 
export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [userRole, setUserRole] = useState('');
 

    const seededUsers = [
        { email: 'hr@gmail.com', password: '123', role: 'HR' },
        { email: 'manager@gmail.com', password: '123', role: 'Manager' },
        { email: 'employee@gmail.com', password: '123', role: 'Employee' }
    ];
 
    const handleSubmit = (e) => {
        e.preventDefault();
        

        const foundUser = seededUsers.find(
            (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );
 
        if (foundUser) {
            setUserRole(foundUser.role);
            setIsLoggedIn(true); 
        } else {
            alert('Invalid email or password. Please use the seeded demo accounts.');
        }
    };
 

    const handleForgotPassword = (e) => {
        e.preventDefault();
        const recoveryEmail = prompt("Enter your account email for password reset:");
        if (recoveryEmail) {
            alert("Password reset link sent to your email!");
        }
    };
 
    
    if (isLoggedIn) {
        return <Dashboard role={userRole} />;
    }
 
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2>Welcome</h2>
                <p className="subtitle">Please log in to your account</p>
 
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
 
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
 
                    <button type="submit" className="login-btn">Log In</button>
                </form>
 
                
                <div className="forgot-password-container">
                    <a href= "" onClick={handleForgotPassword}>
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
}
