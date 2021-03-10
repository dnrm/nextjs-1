import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/article.module.css';

export default function Config() {
    return (
        <Layout>
            <Head>
                <title>:D</title>
            </Head>
            <p className={styles.center}>says...</p>
            <h1 className={styles.title}>You're Cute uwu</h1>
            <p>Eres la persona mas cute del mundo te quiero dms and i'll always do :)))))</p>
        </Layout>
    )
}