import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
    text: string;
}

const Page: NextPage<Props> = ({ text }) => {
    return (
        <div style={{ boxSizing: 'border-box', margin: '8px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '48px' }}>Some Belgium website</h1>
            <p style={{ textAlign: 'center', fontSize: '20px' }}>{text}</p>
            <nav>
                <a href="/be" style={{ textDecoration: 'underline', color: '#875' }}>Go back</a>
            </nav>
        </div>
    );
}

export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {
            text: context.params?.page
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [{ params: { page: 'foo' } }, { params: { page: 'bar' } }, { params: { page: 'baz' } }],
        fallback: false,
    }
}

export default Page;
