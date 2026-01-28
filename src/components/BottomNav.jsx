import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

export default function BottomNav() {
    const navigate = useNavigate();

    return (
        <div className="me-nav-controls">
            <button className="me-nav-btn" onClick={() => window.history.back()}>
                <img src="/images/back.gif" alt="Back" />
            </button>

            <button className="me-nav-btn" onClick={() => window.history.forward()}>
                <img src="/images/ford.gif" alt="Forward" />
            </button>
        </div>
    );
}
