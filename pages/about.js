import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/article.module.css';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>
            
            <h1 className={styles.title}>About Me</h1>
            <p>
                My name is Daniel Medina. I started my web development journey in web development back in january of 2020.
                I really like to develop websites and find it fun and really interesting. I know HTML, CSS, JavaScript, Angular,
                TypeScript, Bootstrap, AWS, GitHub, Git, Docker, Linux, NodeJs, jQuery, Sass, a little React, and a little Next.js.
                In conclusion I think I have plenty of knowledge.
            </p>
            <p>
                Check out my GitHub profile: <a href="https://github.com/dnrm" target="_blank" rel="noopener">dnrm</a>
            </p>
        </Layout>
    )
}