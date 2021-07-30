import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home(props:any) {

  // name: req.body.name ?? "",
  //     capital: req.body.capital ?? "",
  //     language: req.body.language ?? "",
  //     government: req.body.government ?? "",
  //     leader: req.body.leader ?? "",
  //     area: req.body.area ?? "",
  //     population: req.body.population ?? "",
  //     timeZone: req.body.timeZone ?? "",
  //     quiz: req.body.quiz ?? "",
  //     bgImage: req.body.bgImage ?? "",

  const data = {
    capital: "Tokyo",
    language: "Japanese",
    government: "constitutional monarchy",
    leader: "Yoshihide Suga",
    area: 377975,
    population: 125360000,
    timeZone: "UTC+09:00",
    bgImage: "/japan.png"

  }

const Getcountry = () => {
  axios.get('http://localhost:8010/proxy/api/countries/Japan')
  .then((res) => console.log(res.data));
}
const CreateCountry = () => {
  axios.post('http://localhost:8010/proxy/api/countries', data)
  .then((res) => console.log(res.data));
  .err
}
const UpdateCountry = () => {
  axios.get('http://localhost:8010/proxy/api/countries/Japan')
  .then((res) => console.log(res.data));
}
const DeleteCountry = () => {
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
        <button onClick={() => Getcountry()} style={{color: "black"}}>Getcountry</button>
        <button onClick={() => CreateCountry()} style={{color: "black"}}>CreateCountry</button>
        <button onClick={() => UpdateCountry()} style={{color: "black"}}>UpdateCountry</button>
        <button onClick={() => DeleteCountry()} style={{color: "black"}}>DeleteCountry</button>
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