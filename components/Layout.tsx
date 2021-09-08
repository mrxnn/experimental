import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="dark:bg-black dark:text-white">
      <Head>
        <title>Mayura Ramanayaka &mdash; (Index)</title>
      </Head>
      <div className="px-5 py-3">
        <Navbar />
      </div>
      <div className="max-w-3xl mx-auto px-5">{children}</div>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-black">
        &nbsp;
      </div>
    </div>
  );
}
