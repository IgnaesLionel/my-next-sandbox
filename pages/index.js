import Head from "next/head";
import ButtonArrow from "../components/ButtonArrow/ButtonArrow";
import Card from "../ui/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>

      <footer>
        <Card>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit
            amet, consectetur adipLorem ipsum dolor sit amet, consectetur
            adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor
            sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur
            adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor
            sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur
            adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor
            sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur
            adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor
            sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur
            adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor
            sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur
            adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor
            sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur
            adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor
            sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur
            adip
          </p>
          <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
            <li>
              <Link href="/clients">client</Link>
            </li>
          </ul>
          <ButtonArrow buttonName="Clickez ici" />{" "}
          <ButtonArrow buttonName="Clickez ici" />
          <ButtonArrow buttonName="Clickez ici" />
        </Card>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
