import React, {useState, useEffect} from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Generic from '../components/Generic';
import Modal from '../components/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div clasName = {styles.container}>
        <button onClick={()=>setShowModal(true)} className="btn">
            Modal
        </button>
        <Modal show={showModal} onClose={()=>setShowModal(false)}>
              <p>Hello out there....</p>          
            </Modal>
      </div>
      </main>

    </div>
  )
}
