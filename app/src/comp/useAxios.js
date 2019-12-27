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
                const dataRight = await resp.data.text;

                setTimeout(()=> {
                    setState({dataRight: dataRight, loadingRight: false, errorRight: null})
                }, 3000);

            } catch (err) {
                setState({errorRight: err.toString()})
            }
        }
        getAxios();

    }, [url, setState]);

    return state;
}
