import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

import Link from "next/link";
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>プロフィールのテキストサンプルです！</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
