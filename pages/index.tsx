import Article from "../components/Article";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { zeroPad } from "../lib/numbers";

import projects from "../data/projects.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="flex flex-col mt-[50vh] md:mt-44 mb-20">
          <Article index="#" description="Article" classes="opacity-50" />
          {projects.map(({ name, description }, index) => (
            <Article description={description} index={zeroPad(++index, 3)} />
          ))}
        </div>
      </Layout>
    </>
  );
}
