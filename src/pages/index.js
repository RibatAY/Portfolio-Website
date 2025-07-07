import Head from 'next/head';

import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Portofolio from '../components/sections/Portofolio';
import Contact from '../components/sections/Contact';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Ribathullah Ahmad Yasin | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Home />
        <About />
        <Skills />
        <Portofolio />
        <Contact />
      </main>
    </>
  );
}
