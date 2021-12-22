import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Router, useRouter} from "next/router";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
  const router = useRouter()
  const [userId, setUserId] = useState()

  useEffect(() => {
    const id: string | null = localStorage.getItem('userId');
    if(!localStorage.getItem('userId')){
      router.push('/login')
    } else {
      router.push(`/users/${id}`)
    }
  });
  return (
    <>
    </>
  )
}

export default Home
