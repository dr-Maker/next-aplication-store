// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Head from 'next/head';
import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
