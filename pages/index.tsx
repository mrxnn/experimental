import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Articles />
      </Layout>
    </>
  );
}
