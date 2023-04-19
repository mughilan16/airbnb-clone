import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      <Banner />

      <main>
        <section className="pt-5 max-w-7xl">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
        </section>
      </main>
    </>
  );
}
