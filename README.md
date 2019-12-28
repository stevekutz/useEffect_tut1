
## useEffect Tutorial
### The useEffect hook help control component re-renders using a dependency array. Only items that change in the dependency array cause the useEffect hook to run. A cleanup function can also be used within the useEffect hook. Code highlights are described below.
<div>
    <img style = 'margin: 10px' src = 'app/src/content/useEffect_tutorial.gif' alt = 'useEffect tutorial' width = '45%'/>
</div>



#### Based upon the fantastic Ben Awad tutorial `React Hooks useEffect Tutorial` with some formatting using:
    - `Semantic UI React`
    - `Ant Design` 
    - `React Spinners Kit`


- ### All of the inputs are handled with the `useForm` component.
    ~~~ js
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
    ~~~

    ~~~ js
    export const useForm = initialValues => {
        const [values, setValues] = useState(initialValues, 'useForm State');

        return [
            values,
            e => {
                setValues({
                    ...values,
                    [e.target.name]: e.target.value
                });
            }
        ];
    }
    ~~~

- ### The `Hello Component` is conditionally rendered and logs out messages to console to emulate ComponentDidMount. A cleanup function emulates he behavior of `ComponentWillUnmount`. Note that the `useEffect` hook is called through `React` instead of being imported with it.
    ~~~~ js
    React.useEffect(() => {
        console.log('Hello mounted: Hello render');

        return () => {
            console.log('Cleanup called: Unmount Hello');
        };


    }, []);
    ~~~~

- ### The `useFetch custom hook` calls the `Numbers API` from `App` and uses a `useEffect` to get `text` data from the API when the `url` changes. The `dependency array` also includes the updater function. Care should be used with this approach so as not have dependencies and variables perpetually updating each other.
    ~~~ js
    const {dataLeft, loadingLeft, errorLeft} = useFetch(`http://numbersapi.com/${count}/trivia`);
    ~~~
    ~~~ js
    export const useFetch = (url) => {
    const [state, setState] = useState({dataLeft: null, loadingLeft: true, errorLeft: null}, 'useFetch State')


    useEffect( () => {                       
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
           

        }, [url, setState]); 

        return state;
    };
    ~~~
    An `IIFE` could also be used to handle the API call.
    ~~~ js
    (async function() {
        try{
            let res = await fetch(url);
            console.log('Promise is: ', res);
            console.log('status is: ', res.status);

            let data = await res.text();
            console.log("data is ", data);
            setState({data: data, loading: false});
        } catch (err) {
            setState({error: err.toString()});
        }    
    })()
    ~~~
    A version that uses `.next` instead of `async/await` is shown below.
    ~~~ js
    fetch(url)
        .then(res =>  {
            return res.text();
        })                
        .then(data => {
            console.log('data is: ', data);
            setState({data: data, loading: false});
        })
        .catch(err => {    
            setState({error: err.toString()});
        })
    ~~~

- ### The `useAxios custom hook` uses a similar methodology but data is returned in `JSON` format. Also, `setTimeout()` is used to allow the loader spinner to run a little longer.
    ~~~ js
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
    ~~~

Based on useEffect tutorial `https://github.com/benawad/react-hooks-tutorial/tree/master/src`. 
1) ### Set up React app `yarn create react-app app`

2) ### Add app Dependencies  (several added for future styling)
   `yarn add moment react-dom react-loader-spinner react-rainbow-components react-router-dom react-scripts react-spinners-kit reactn reactn-devtools semantic-ui-react styled-components redux reinspect redux-devtools-extension react-select axios antd` 

    - For `react-loaded-spinner`, you must also add `styled-components`
    - For `semantic-ui-react`, you must also 
        add to `index.html`  
        ~~~ html 
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm semantic-ui@2.4.2/dist/semantic.min.css" />
        ~~~
    - For `Ant Design`, you must also add add to `index.html`
        ~~~
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.min.css" />
        ~~~    
3) ### React DevTools extension `hooks` configuration        
    - To utilize the `redux devtools extension` with 'hooks, add the following to `src/index.js`
        import `StateInspector`
        ~~~ js
        import { StateInspector } from 'reinspect';
        ~~~
        Define a `Wrapper` component and wrap the `App` component 
        ~~~ js
        const AppWrap = () => {
            return (
                <StateInspector>
                    <App/>
                </StateInspector>
            )
        }

        ReactDOM.render(<AppWrap />, document.getElementById('root'));
        ~~~          

