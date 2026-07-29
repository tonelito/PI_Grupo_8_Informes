import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const heroBg = useBaseUrl("/img/hero-bg.png");
  return (
    <header
      className={clsx("hero", styles.heroBanner)}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={clsx("container", styles.heroContent)}>
        <Heading as="h1" className="hero__title">
          {"Universidad San Carlos de Guatemala"}
        </Heading>
        <p className={styles.courseInfo}>{"Facultad de Ingeniería"}</p>
        <p className={styles.courseInfo}>{"Escuela de Ciencias y Sistemas"}</p>
        <p className={styles.courseInfo}>{"Prácticas Iniciales"}</p>
        <p className={styles.groupBadge}>{"Grupo 8"}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={` ${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
