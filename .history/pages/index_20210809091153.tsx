import Head from "next/head";
import axios from "axios";
import { Card } from "antd";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { ICountry } from "interfaces/general_interfaces";

import classes from "./index.module.less";
import CountryChooser from "sections/CountryChooser/CountryChooser";

export default function Home(props: any) {
  const data: [ICountry] = props.data;

  console.log(process.env.NEXT)
  return (
    <div className={classes.container}>
      <Head>
        <title>History</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ape.ico" />
        <style>{dom.css()}</style>
      </Head>

      {/* <Card className={classes.mainCard}> */}
        <CountryChooser countries={data}/>
      {/* </Card> */}
    </div>
  );
}

export async function getStaticProps() {
  const data = await axios
    .get<string>(`${process.env.NEXT_PUBLIC_BACKEND}/countries`)
    .then((response: any) => response.data);

  return {
    props: { data },
  };
}
