import { useEffect } from 'react';
import io from 'socket.io-client';

const Page = () => {

    useEffect(() => {
        fetch('/api/socket').finally(() => {
            const socket = io();
        });
    }, []);

    return (
        <div>
            TEST
        </div>
    )
}

Page.getInitialProps = async (ctx) => {
    return {
        title: "TEST"
    }
}

export default Page;