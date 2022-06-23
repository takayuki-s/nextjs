import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

import Link from "next/link";
import utilstyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilstyle.headingMd}>
        <p>プロフィールのテキストサンプルです！</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" />
            </Link>
            <Link href="/">
              <a>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small>February 23, 2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
