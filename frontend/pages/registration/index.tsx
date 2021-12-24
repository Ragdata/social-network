import React, {useState} from 'react';
import styles from './style.module.scss'
import axios from "axios";
import router from "next/router";
import Link from 'next/link';

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      try {
        const response = await axios.post('http://localhost:3001/auth/reg', {
          email: email,
          password: password
        })
        setEmail('')
        setPassword('')
        localStorage.setItem('userId', `${response.data}`)
        const id = localStorage.getItem('userId')
        router.push(`/login`)
      } catch (e) {
        alert(e)
      }

    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.loginBlock}>
        <h2 style={{color: 'teal'}}>Registration</h2>
        <form className={styles.form} onSubmit={(e: React.FormEvent<HTMLFormElement>) => registerUser(e)}>
          <input
            className={styles.input}
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
          <input className={styles.btn} type="submit" value="Create account"/>
          <Link href='/login'>
            <a className={styles.link}>Authorization</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;