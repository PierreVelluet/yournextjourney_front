import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home(props:any) {

const test = () => {
  axios.get('http://localhost:8010/proxy/api/countries/Japan')
  .then((res) => console.log(res.data));
}

  return (
    <div className={styles.container}>
      <Head>
        <title>History</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ape.ico" />
      </Head>

      <main className={styles.main}>
        Hello
        <button onClick={() => test()}>TEST</button>
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

// export async function getStaticProps() {

//   let user;
//   axios.get('http://localhost:8010/proxy/api/auth/isAuthenticated', {withCredentials: true});
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }