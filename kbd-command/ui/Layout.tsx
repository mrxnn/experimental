import { FC } from "react";
import Head from "next/head";
import Navbar from "@/ui/Navbar";

const Layout: FC<{}> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mayura Ramanayaka &mdash; (Index)</title>
      </Head>
      <div className="px-5 py-3">
        <Navbar />
      </div>
      <div className="max-w-3xl mx-auto px-5 mt-[60vh]">{children}</div>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-black">
        &nbsp;
      </div>
    </>
  );
};

export default Layout;
