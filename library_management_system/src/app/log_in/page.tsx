import React from 'react';
import styles from "./page.module.css";
import Link from "next/link";

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
                    <button className={styles.login_btn}>Log In</button>   
                </div> 
            </div>

            <div className={styles.scnd_division}>

                <div className={styles.register}>
                    <p className={styles.question}>Already have an account?</p>
                    <Link href="./register/page" className={styles.register_btn}>Register</Link>
                </div>  

                <div className={styles.recovery}>
                    <Link href="./pass_recovery/page" className={styles.register_btn}>Forgot Password?</Link>   
                </div> 
            </div>     
    </form>
    )
}