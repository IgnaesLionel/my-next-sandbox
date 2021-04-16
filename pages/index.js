import Head from "next/head";
import styles from "../styles/Home.module.css";
import ButtonArrow from "../components/ButtonArrow/ButtonArrow";
import Card from "../ui/Card";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
      <Card>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adipLorem ipsum dolor sit amet, consectetur
          adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adipLorem ipsum dolor sit amet, consectetur
          adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adipLorem ipsum dolor sit amet, consectetur
          adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adipLorem ipsum dolor sit amet, consectetur
          adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adipLorem ipsum dolor sit amet, consectetur
          adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adipLorem ipsum dolor sit amet, consectetur
          adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adipLorem ipsum dolor sit amet, consectetur
          adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
          amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip
        </p>
        <ButtonArrow buttonName="Clickez ici" />{" "}
        <ButtonArrow buttonName="Clickez ici" />
        <ButtonArrow buttonName="Clickez ici" />
      </Card>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
