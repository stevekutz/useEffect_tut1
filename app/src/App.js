import React, {useEffect} from 'react';
import {useState} from 'reinspect';
import {Button, Container, Dimmer, Input, Label, Loader, Segment} from 'semantic-ui-react';
import {useForm} from './comp/useForm';
import {Hello} from './comp/Hello'; // ERROR if ==>  import Hello from './comp/Hello';
import {useFetch} from './comp/useFetch';  // CUSTOM HOOK
import {useAxios} from './comp/useAxios'; // CUSTOM HOOK
import {JellyfishSpinner} from 'react-spinners-kit';
import {Spin, Alert} from 'antd';


function App() {
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
    //const [count, incCount] = useState(0, 'Count State');
    const [showHello, setShowHello] = useState(true, 'Show Hello State');

    // set up initializer function for count based on local storage
    const [count, setCount] = useState( () => 
        {
            if(localStorage.getItem('count') === null){
                return 0
            } else {
                return JSON.parse(localStorage.getItem('count'))
            }
        }   
    );

    // to persist the value of count
    useEffect(()=>{
        localStorage.setItem('count', JSON.stringify(count))
    }, [count]);

    const toggleHello = () => {
        setCount(count + 1);
        setShowHello(!showHello);
    }

    const resetCount = () => {
        localStorage.clear();
        setCount(0);
    }

    // useFetch('http://numbersapi.com/43/trivia');
    // Now returns data and loading boolean
    const {dataLeft, loadingLeft, errorLeft} = useFetch(`http://numbersapi.com/${count}/trivia`);
    const {dataRight, loadingRight, errorRight} = useAxios(`http://numbersapi.com/${count}/trivia?json`);

    return (
        
        <Segment>

            <Segment.Group horizontal>
                <Segment>
                    {loadingLeft
                        ?   
                            <Container>
                                <Dimmer active>
                                    <Loader/>
                                </Dimmer>
                                <JellyfishSpinner
                                    size = {150}
                                    color = "dodgerblue"
                                />
                            </Container>
                        :                
                        <Segment compact> {dataLeft}{errorLeft} </Segment>

                    }
                </Segment>
                <Segment>
                    {loadingRight
                        ?   
                            <Container>
                                <Spin tip="Loading...">
                                    <Alert
                                    message="Alert message title"
                                    description="Further details about the context of this alert."
                                    type="info"
                                />
                            </Spin>
                            </Container>
                        :                
                        <Segment compact> {dataRight}{errorRight} </Segment>

                    }                
                </Segment>    
            
            
            
            
            </Segment.Group>


        
            <Segment>
                <Segment.Inline>
                    <Button toggle active = {showHello}  
                        onClick = {() => {toggleHello() }}
                        
                    >Toggle</Button>
                    <Button
                        onClick = {() => resetCount()}
                        color = 'pink'    
                    >Reset count</Button>
                        
                    {showHello && <Hello />}
                </Segment.Inline> 
            </Segment>


            <Label color = 'pink'> Count at : {count.toString()}</Label>
            <Input
                name = 'email'
                value = {values.email}
                placeholder = 'email'
                onChange = {handleChange}
            
            />
            <Input
                name = 'firstName'
                placeholder = 'first name'
                value = {values.firstName}
                onChange = {handleChange}
        
            />
            <Input 
                type = 'password'
                name = 'password'
                placeholder = 'password'
                value = {values.password}
                onChange = {handleChange}

            />
        
        
        </Segment>
    )


}

export default App;


// useEffect(() =>{
//     console.log('useEffect called, render occured');
//     // incrementCount();

//     // cleanup function ==> componentWillUnMount
//     return () => {
//         console.log('clean up called')
//     }   
// // , 2nd param is "dependency array", compare var to prevstate verify if if updated, if Y then function called    
// // CANNOT just put 'values' into dependency array (e.g. dependencies for that effect )
// // use    }, []); to only call function inside on first render  
// // use    }, [values.password]} only calls when password changes, IGNORES changes to email state 
// // use   }, [values.password, values.email]); // only calls when password OR email changed  
// // }, [count]);   starts continuous re-render
// }, [values.firstName]); // 

// useEffect(() => {
//     const onMouseMove = e => {
//         console.log(e);
//     }
//     window.addEventListener("mousemove", onMouseMove);

//     return () => {
//         console.log('mouseMove cleanup called');
//         incCount(count + 1);
//         window.removeEventListener("mousemove", onMouseMove);
//     }

// }, []);
