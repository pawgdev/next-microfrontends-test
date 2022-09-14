import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from '../components/Link';

interface Props {
    text: string;
    locale: string;
}

const Page: NextPage<Props> = ({ text, locale }) => {
    return (
        <div style={{ boxSizing: 'border-box', margin: '8px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '48px' }}>Some Belgium website</h1>
            <p style={{ textAlign: 'center', fontSize: '20px' }}>{text} <small style={{ color: '#777' }}>{locale}</small></p>
            <nav>
                <Link href={`/${locale}`} style={{ textDecoration: 'underline', color: '#875' }}>Go back</Link>
            </nav>
        </div>
    );
}

export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {
            text: context.params?.page,
            locale: context.locale,
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            { params: { page: 'foo' }, locale: 'befr' },
            { params: { page: 'bar' }, locale: 'befr' },
            { params: { page: 'baz' }, locale: 'befr' },
            { params: { page: 'foo' }, locale: 'benl' },
            { params: { page: 'bar' }, locale: 'benl' },
            { params: { page: 'baz' }, locale: 'benl' }
        ],
        fallback: false,
    }
}

export default Page;
