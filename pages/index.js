// Import Area
import Head from 'next/head'
// import something from "some library/some location";
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Aside from '../components/Aside';
import Section from '../components/Section';
// fuction definition Area
 function Home() {
  return (
    <>
      <Head>
        <title>welcome to my first next application</title>
        <link rel="icon" href='favicon.ico' />
      </Head>
      <Header/>
      <main>
        
        <Aside/>
        <Section/>
      </main>
     <Footer/>
      
    </>
  )
}
export default Home;
//Export Area
