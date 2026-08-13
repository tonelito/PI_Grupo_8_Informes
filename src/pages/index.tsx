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
  return (
    <header className={clsx("hero", styles.transparentBackground)}>
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
  const heroBg = useBaseUrl("/img/hero-bg.png");
  return (
    <Layout title={` ${siteConfig.title}`}>
      <div className={styles.pageBackground}>
        <img src={heroBg} alt="" className={styles.pageBackgroundImg} />
        <div className={styles.pageBackgroundOverlay} />
        <HomepageHeader />
        <main className={styles.mainContent}>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}
