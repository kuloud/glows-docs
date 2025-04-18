import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Cookies from "js-cookie";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { useEffect } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    window.location.href = "/docs/Overview";
    // get inviter_code from url
    const urlParams = new URLSearchParams(window.location.search);
    const inviter_code = urlParams.get("inviter_code");
    if (inviter_code) {
      Cookies.set("inviter_code", inviter_code, { expires: 1 / 24, path: "/" });
    }
  }, []);
  return (
    <Layout
      title="Get Started Documentation"
      description="Welcome to Glows.ai, a globally distributed cloud for artificial intelligence, and AI for science. Choose your desired GPU and CPU based on your computing demands."
    >
      {/*<HomepageHeader />*/}
      {/*<main>*/}
      {/*  <HomepageFeatures />*/}
      {/*</main>*/}
    </Layout>
  );
}
