import Layout from "../../components/Layout";
import { getAllPostIds } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export default function Post() {
  return (
    <div>
      <Layout>動的ルーティング</Layout>
    </div>
  );
}
