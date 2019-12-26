// the is a CUSTOM HOOK
import {useEffect} from 'react';
import {useState} from 'reinspect';

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true, error: null}, 'useFetch State')


    useEffect( () => {
        // use .then approach instead of async/await
        // NOTE this API is text rather than JSON based

        // fetch return a Promise
        // if successful, returns response obj
        // we access the body of the response using .text()

        // initialize state, pass in already data already avail                                              
        setState(state => ({data: state.data, loading: true, error: null}));   
        const getData = async () => {
            try {
                const res = await fetch(url);
                
                const data = await res.text();
                setState({data: data, loading: false});
            } catch (err) {
                console.log('error is: ', err);  
                setState({error: err.toString()});  
            }
        }

        getData();
           

    }, [url, setState]);  // YES, we can pass in the updater function  as dependency !!!

    return state;
};

// setState(state => ({data: state.data, loading: true, error: null}));   
// fetch(url)
//     .then(res =>  {
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);
//         return res.text();
//     })                
//     .then(data => {
//         console.log('data is: ', data);
//         setState({data: data, loading: false});
//     })
//     .catch(err => {   // does not catch asynch errors well
//         setState({error: err.toString()});
//     })


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

//  IIFE version
// (async function() {
//     try{
//         let res = await fetch(url);
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);

//         let data = await res.text();
//         console.log("data is ", data);
//         setState({data: data, loading: false});
//     } catch (err) {
//         setState({error: err.toString()});
//     }
    
// })()

// Function declaration
// async function getData () {
//     try {
//         let res = await fetch(url);
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);
        
//         let data = await res.text();
//         console.log("data is ", data);
//         setState({data: data, loading: false});    
//     } catch (err) {
//         console.log('error is: ', err); 
//         setState({error: err.toString()});  
//     }
// }

// getData();




//  ARROW FUNCTION
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