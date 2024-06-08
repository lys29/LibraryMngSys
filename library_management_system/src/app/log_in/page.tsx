import React from 'react';
import styles from "./page.module.css";
import { Link } from 'react-router-dom';

export default function log_in() {
    return(        
        <form className={styles.login_container}>
            
            <div className={styles.frst_division}>

                <h1 className={styles.title}>Log In</h1>

                <div className={styles.input_box}>
                    <input className={styles.email} type="text" name="email" placeholder='Email'/>
                </div>

                <div className={styles.input_box}>
                    <input className={styles.password} type="text" name="password" placeholder='Password'/>
                </div>

                <div className={styles.btn}>
                    <Link to='/'> <button className={styles.login_btn}>Log In</button> </Link>   
                </div> 
            </div>

            <div className={styles.scnd_division}>

                <div className={styles.register}>
                    <p className={styles.question}>Already have an account?</p>
                    <Link to='/register'> <button className={styles.register_btn}>Register </button></Link>
                </div>  

                <div className={styles.recovery}>
                    <Link to='/password_recovery'> <button className={styles.register_btn}>Forgot Password? </button> </Link>   
                </div> 
            </div>     
    </form>
    )
}