import { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket = null;

const Page = () => {

    useEffect(() => {
        fetch('/api/socket').finally(() => {
            socket = io();

            socket.emit('getStore');

            socket.on('returnTest', () => {
                alert("Works!");
            });
        });
    }, []);

    function testEmit() {
        if (!socket) return;

        socket.emit('test')
    }

    return (
        <>
            <button className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={testEmit}> TEST </button>
        </>
    )
}

Page.getInitialProps = async (ctx) => {
    return {
        title: "TEST"
    }
}

export default Page;