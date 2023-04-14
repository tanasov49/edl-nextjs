import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
function NotFoundPage() {
    const router = useRouter();
    useEffect(() => {setTimeout(() => {
            router.push('/');
        }, 3000);
    },[]);
    return (
        <div className='not-found'>
            <h2 className='not-found__title'>This page not found</h2>
            <Link href={'/'}>Home</Link>
        </div>
    );
}

export default NotFoundPage;