import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MenuList from './components/MenuList';
import { useQuery } from 'react-query';
import { convertKeys } from './_lib';

export default function Home() {
  // Fetch Data
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:3000/api/menu').then((res) =>
      convertKeys(res.json())
    )
  );

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Menu</h1>

        <MenuList menuItems={data} />
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}