import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MenuItemsGrid from '../components/MenuItemsGrid';
import { useQuery } from 'react-query';
import { convertKeys } from '../utils/lib';
import api from '../utils/api';

export default function Home() {
  // Fetch Data
  const { isLoading, error, data } = useQuery('dyanmicDataLoad', () =>
    api.get('/').then((res) => {
      return convertKeys(res.data);
    })
  );

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic Menu Cards</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dynamic Menu Cards</h1>
        <MenuItemsGrid menuItems={data} />
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
