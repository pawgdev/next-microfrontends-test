import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const OPPOSITE_LOCALE = {
    benl: 'befr',
    befr: 'benl'
}

const Page: NextPage = () => {
    const { locale } = useRouter();
    const [apiResult, setApiResult] = useState<string>();

    useEffect(() => {
        fetch('/be/api/hello')
            .then(res => res.json())
            .then(({ name }) => setApiResult(name));
    }, []);

    return (
        <main>
            <div style={{ padding: '2rem', textAlign: 'center', color: '#333' }}>
                <h1>A static page in Belgium</h1>
                <p style={{ fontSize: '80%' }}>Locale: {locale}</p>
            </div>
            <div style={{ padding: '2rem', textAlign: 'center', color: '#333' }}>
                <h2>Result from the API call</h2>
                <p>{apiResult || 'Still loading'}</p>
            </div>
            <nav>
                <h2>Go to</h2>
                <ul>
                    <li>
                        <a href={`/${locale}`}>Go back</a>
                    </li>
                    <li>
                        <a href={`/${OPPOSITE_LOCALE[locale as 'benl' | 'befr']}/static/page`}>Change locale</a>
                    </li>
                    <li>
                        <a href="/">Homepage</a>
                    </li>
                    <li>
                        <a href="/fr">France</a>
                    </li>
                </ul>
            </nav>
        </main>
    )
}
export default Page;
