import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import styles from './style.module.scss'
import router from "next/router";

const TopNavbar = () => {
  const [userId, setUserId] = useState<string | null>('')

  const logOut = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('userId')
    router.push(`/login`)
  }

  useEffect(() => {
    setUserId(localStorage.getItem('userId'))
  }, [])

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src="https://cdn-icons.flaticon.com/png/512/2625/premium/2625883.png?token=exp=1640174164~hmac=ebdc59210720cb3fa70179e0773ddd70" alt=""/>
      </div>
      <div className={styles.navbar__menu}>
        <Link href={`/users/${userId}`}>
          <a className={styles.menu_link}>Profile</a>
        </Link>
        <Link href='/'>
          <a className={styles.menu_link}>Messages</a>
        </Link>
        <Link href='/'>
          <a className={styles.menu_link}>News</a>
        </Link>
      </div>
      <div>
        <a onClick={() => logOut()} className={styles.menu_link}>Exit</a>
      </div>
    </div>
  );
};

export default TopNavbar;