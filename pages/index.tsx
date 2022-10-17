import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from "../components/login"
import Logo from "../components/icons/logo"
import { useMoralis } from "react-moralis";
import Button from '../components/button'

const Home: NextPage = () => {

  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated ) return <Login />;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Artics~Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-black'>Welcome to <Logo /> ~ Chat App</h1>

      <Button onClick={logout}>
        Logout
      </Button>

    </div>
  )
}

export default Home
