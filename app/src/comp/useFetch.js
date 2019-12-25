// the is a CUSTOM HOOK
import {useEffect} from 'react';

export const useFetch = (url) => {
    useEffect( () => {
        // use .then approach instead of async/await
        // NOTE this API is text rather than JSON based

        // fetch return a Promise
        // if successful, returns response(in this case text)
        // we access the body of the reponse using .text()
        // this returns another Promise with the data

        fetch(url)
            .then(res =>  {
                console.log('Promise is: ', res);
                return res.text();
            })                
            .then(data => {
                console.log('data is: ', data)
            })
    }, [url]);
};
