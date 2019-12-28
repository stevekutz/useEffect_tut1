// the is a CUSTOM HOOK
import {useEffect} from 'react';
import {useState} from 'reinspect';

export const useFetch = (url) => {
    const [state, setState] = useState({dataLeft: null, loadingLeft: true, errorLeft: null}, 'useFetch State')

    useEffect( () => {
        // use .then approach instead of async/await
        // NOTE this API is text rather than JSON based

        // fetch return a Promise
        // if successful, returns response obj
        // we access the body of the response using .text()

        // initialize state, pass in already dataLeft already avail                                              
        setState(state => ({dataLeft: state.dataLeft, loadingLeft: true, errorLeft: null}));   
   
        const getDataLeft = async () => {
            try {
                const res = await fetch(url);                
                const dataLeft = await res.text();
                setState({dataLeft: dataLeft, loadingLeft: false});
            } catch (err) {
                setState({errorLeft: err.toString()});  
            }
        }

        getDataLeft();

    }, [url, setState]);  // YES, we can pass in the updater function  as dependency !!!

    return state;
};

// setState(state => ({dataLeft: state.dataLeft, loadingLeft: true, errorLeft: null}));   
// fetch(url)
//     .then(res =>  {
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);
//         return res.text();
//     })                
//     .then(data => {
//         console.log('data is: ', data);
//         setState({dataLeft: data, loadingLeft: false});
//     })
//     .catch(err => {   // does not catch asynch errors well
//         setState({error: err.toString()});
//     })


//  IIFE version
// (async function() {
//     try{
//         let res = await fetch(url);
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);

//         let data = await res.text();
//         console.log("data is ", data);
//         setState({dataLeft: data, loadingLeft: false});
//     } catch (err) {
//         setState({errorLeft: err.toString()});  
//     }   
// })() 


// Function declaration
// async function getDataLeft () {
//     try {
//         let res = await fetch(url);
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);
        
//         let data = await res.text();
//         console.log("data is ", data);
//         setState({dataLeft: data, loadingLeft: false});    
//     } catch (err) {
//         console.log('error is: ', err); 
//         setState({error: err.toString()});  
//     }
// }

// getDataLeft();


//  ARROW FUNCTION
// const getDataLeft = async () => {
//     try {
//         let res = await fetch(url);
//         console.log('Promise is: ', res);
//         console.log('status is: ', res.status);
        
//         let data = await res.text();
//         console.log("data is ", data);
//         setState({dataLeft: data, loadingLeft: false});   
//     } catch (err) {
//         console.log('error is: ', err); 
//         setState({error: err.toString()});   
//     }
// }

// getDataLeft();