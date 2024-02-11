import React from 'react';
import { useState , useEffect } from 'react';

export default function useFetch(url) {
    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setPosts(data);
                    setIsPending(false)
                }).
                catch(err => {
                    console.log(err);
                    setError(err);
                })
        }, 3000)

    }, [])

    return [posts , isPending , error];
}
