// Import Area
import Head from 'next/head'
// import something from "some library/some location";
import styles from '../styles/Home.module.css'
// fuction definition Area
 function Home() {
  return (
    <>
      <Head>
        <title>welcome to my first next application</title>
        <link rel="icon" href='favicon.ico' />
      </Head>
      <header>
      Header Component
      </header>
      <main>
        <aside>Aside Component</aside>
        <section>Section Component</section>
      </main>
      
      <footer>
      Footer Component
      </footer>
    </>
  )
}
export default Home;
//Export Area
