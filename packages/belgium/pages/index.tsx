import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";
import CustomLink from '../components/Link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const { locale } = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Belgium :: Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Belgium {locale} Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
                <nav>
                    <h2>Go to</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/fr">France</a></li>
                        <li><Link href={`/${locale}/foo`}><a>Foo with Link</a></Link></li>
                        {/*<li><Link href={`/foo`}><a>Foo with Link v2</a></Link></li>*/}
                        {/*<li><CustomLink href={`/foo`}><a>Foo with CustomLink</a></CustomLink></li>*/}
                        <li><a href={`${locale}/foo`}>Foo for aggregate</a></li>
                        <li><a href={`/${locale}/foo`}>Foo</a></li>
                        <li><a href={`/${locale}/bar`}>Bar</a></li>
                        <li><a href={`/${locale}/baz`}>Baz</a></li>
                    </ul>
                </nav>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
