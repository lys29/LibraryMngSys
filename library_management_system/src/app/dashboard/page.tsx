import React from 'react';
// import styles from "./page.module.css";
import { Link } from 'react-router-dom';

export default function register() {
    return(        
        <div>
            <h1>DASHBOARD</h1>
            <Link to='/login'><button>Login here</button></Link>
        </div>
    )
}