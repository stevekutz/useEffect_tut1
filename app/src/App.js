import React, {useEffect} from 'react';
import {useState} from 'reinspect';
import {Button, Input, Label, Segment} from 'semantic-ui-react';
import {useForm} from './comp/useForm';
import {Hello} from './comp/Hello'; // ERROR if ==>  import Hello from './comp/Hello';


function App() {
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''});
    const [count, incCount] = useState(0, 'Count State');
    const [showHello, setShowHello] = useState(true, 'Show Hello State');


    const incrementCount = () => {
        incCount(count + 1);
    }

    useEffect(() =>{

        console.log('useEffect called, render occured');

        incrementCount();

        // cleanup function ==> componentWillUnMount
        return () => {
            console.log('unmounting')

        }   
        




    // , 2nd param is "dependency array", compare var to prevstate verify if if updated, if Y then function called    
    // CANNOT just put 'values' into dependency array (e.g. dependencies for that effect )
    // use    }, []); to only call function inside on first render  
    // use    }, [values.password]} only calls when password changes, IGNORES changes to email state 
    // use   }, [values.password, values.email]); // only calls when password OR email changed  
    // }, [count]);   starts continuous re-render
     }, [values.firstName]); // 

    return (
        <Segment>
            <Segment>
                <Segment.Inline>
                    <Button toggle active = {showHello}  onClick = {() => {setShowHello(!showHello)}}>Toggle</Button>
                    {showHello && <Hello />}
                </Segment.Inline> 
            </Segment>


            <Label> Count at : {count.toString()}</Label>
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
