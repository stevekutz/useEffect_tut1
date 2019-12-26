// the is a CUSTOM HOOK
import {useEffect} from 'react';

export const useFetch = (url) => {
    useEffect( () => {
        // use .then approach instead of async/await
        // NOTE this API is text rather than JSON based

        // fetch return a Promise
        // if successful, returns response obj
        // we access the body of the response using .text()
        
    (async function() {
        try{
            let res = await fetch(url);
            console.log('Promise is: ', res);
            console.log('status is: ', res.status);

            let data = await res.text();
            console.log("data is ", data);
        } catch (err) {
            console.log('error is: ', err);
        }
        
    })()

    }, [url]);
};

// export const useFetch = (url) => {
//     useEffect( () => {
//         // use .then approach instead of async/await
//         // NOTE this API is text rather than JSON based

//         // fetch return a Promise
//         // if successful, returns response obj
//         // we access the body of the response using .text()
//         // this returns another Promise with the data

//         fetch(url)
//             .then(res =>  {
//                 console.log('Promise is: ', res);
//                 console.log('status is: ', res.status);
//                 return res.text();
//             })                
//             .then(data => {
//                 console.log('data is: ', data)
//             }).catch(err => {
//                 return err;
//             })
//     }, [url]);
// };


// (async function() {
//     let res = await fetch(url);
//     console.log('Promise is: ', res);
//     console.log('status is: ', res.status);
    
//     let data = await res.text();
//     console.log("data is ", data);
// })()


// async function getData () {
//     try {
//         let res = await fetch(url);
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);
        
//         let data = await res.text();
//         console.log("data is ", data);
//     } catch (err) {
//         console.log('error is: ', err);    
//     }
// }

// getData();

// const getData = async () => {
//     try {
//         let res = await fetch(url);
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);
        
//         let data = await res.text();
//         console.log("data is ", data);
//     } catch (err) {
//         console.log('error is: ', err);    
//     }
// }

// getData();