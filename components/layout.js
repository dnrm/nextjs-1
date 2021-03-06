import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import article from '../styles/article.module.css';

const name = 'Daniel Medina';
export const siteTitle = 'Daniel Medina\'s Blog';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="My first Next.js application." />
                <meta property="og:image" content={`https://cdn.danielmedina.dev/photo2.jpg`}/>
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Link href="/about">
                            <a>
                                <Image 
                                    priority
                                    src="/images/pfp.jpg"
                                    className={utilStyles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h1 className={`${utilStyles.heading2Xl} ${article.title}`}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/pfp.jpg"
                                    className={utilStyles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headinglg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>??? Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}