import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="dark:bg-black dark:text-white 2xl:text-lg">
      <Head>
        <title>Mayura Ramanayaka &mdash; (Index)</title>
      </Head>
      <Navbar />
      <div className="max-w-3xl mx-auto px-5">{children}</div>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-black">
        &nbsp;
      </div>
      <p className="fixed right-0 bottom-0 py-5 px-6 text-sm opacity-0 md:opacity-100">
        &copy; 2021
      </p>
    </div>
  );
}
