import React, {useState} from 'react';
import styles from './style.module.scss'
import axios from "axios";
import router from "next/router";
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      try {
        const response = await axios.post('http://localhost:3001/auth/log', {
          email: email,
          password: password
        })
        setEmail('')
        setPassword('')
        localStorage.setItem('accessToken', `${response.data.accessToken}`)
        localStorage.setItem('refreshToken', `${response.data.refreshToken}`)
        localStorage.setItem('userId', `${response.data.userId}`)
        const id = localStorage.getItem('userId')
        router.push(`/users/${id}`)
      } catch (e) {
        alert(e)
      }

    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.loginBlock}>
        <h2 style={{color: 'teal'}}>Login</h2>
        <form className={styles.form} onSubmit={(e: React.FormEvent<HTMLFormElement>) => loginUser(e)}>
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

          <input className={styles.btn} type="submit" value="Login"/>
          <Link href='/registration'>
            <a className={styles.link}>Create account</a>
          </Link>
        </form>
      </div>
    </div>

  );
};

export default Login;