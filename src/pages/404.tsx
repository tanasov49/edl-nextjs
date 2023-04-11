import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
function NotFoundPage() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    },[])
    return (
        <div className='not-found'>
            <h2 className='not-found__title'>This page not found</h2>
        </div>
    );
}

export default NotFoundPage;