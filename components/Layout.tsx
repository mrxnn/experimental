import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-0">
      <Head>
        <title>Mayura Ramanayaka &mdash; (Index)</title>
      </Head>
      {children}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#101010]"></div>
      <p className="fixed right-0 bottom-0 py-5 px-6 text-xs tracking-tighter opacity-0 md:opacity-100">
        &copy; 2021
      </p>
    </div>
  );
}
