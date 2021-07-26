import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>History</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ape.ico" />
      </Head>

      <main className={styles.main}>
        Hello
      </main>
      <div style={{height: "5500px"}}>

      </div>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {

  let user;
  axios
  .post("http://localhost:8010/proxy/api/auth/isAuthenticated", {
    withCredentials: true,
  })
  .then((res) => console.log("res is:" res));
  return {
    props: {}, // will be passed to the page component as props
  }
}