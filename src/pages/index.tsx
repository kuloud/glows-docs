import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Cookies from "js-cookie";

import { useEffect } from "react";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Get Started Documentation"
      description="Welcome to Glows.ai, a globally distributed cloud for artificial intelligence, and AI for science. Choose your desired GPU and CPU based on your computing demands."
    ></Layout>
  );
}
