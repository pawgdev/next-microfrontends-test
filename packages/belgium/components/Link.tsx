import { ComponentProps, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from "next/router";

const Link = ({ href, children, ...props }: ComponentProps<typeof NextLink>) => {
    const { basePath, locale } = useRouter();
    const [ link, setLink ] = useState<string>();

    useEffect(() => {
        console.log(href, 'href');
        console.log(window.location.origin, 'window.location.origin');
        if ([ 'https://belgium-pi.vercel.app', 'http://localhost:4000' ].includes(window.location.origin)) {
            setLink(`/be${href}`);
        } else {
            setLink(`${href}`);
        }
    }, [ basePath, locale, href ]);

    return (
        <a href={link} {...props}>
            {children}
        </a>
    )
};

export default Link;
