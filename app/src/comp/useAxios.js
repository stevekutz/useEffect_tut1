// another Custom Hook
import {useEffect} from 'react';
import {useState} from 'reinspect';
import axios from 'axios';

export const useAxios = (url) => {
    const [state, setState] = useState({dataRight: null, loadingRight: false, errorRight: null}, 'useAxios State');

    useEffect(() =>{
        setState(state => ({state: state.dataRight, loadingRight: true, errorRight: null}));

        const getAxios = async () => {
            try{
                const resp = await axios(url);
                console.log('axios reso ', resp);
                const dataRight = await resp.data;
                console.log('axios data ', dataRight);
                setState({dataRight: dataRight, loadingRight: false, errorRight: null})
            } catch (err) {
                setState({errorRight: err.toString()})
            }
        }
        getAxios();

    }, [url, setState]);

    return state;
}
