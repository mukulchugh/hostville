import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>HostVille - Housing for You!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Lets Build AirBnb</h1>
    </div>
  );
}
