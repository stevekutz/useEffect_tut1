import React, {useEffect} from 'react';
import {useState} from 'reinspect';
import {Input, Segment} from 'semantic-ui-react';
import {useForm} from './comp/useForm';


function App() {
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''});

    useEffect(() =>{

        console.log('useEffect called, render occured');
    // , 2nd param is "dependency array", compare var to prevstate verify if if updated, if Y then function called    
    // CANNOT just put 'values' into dependency array
    // use }, []); to only call function inside on first render  
    // use {, [values.passwprd]} only calls when password changes, IGNORES changes to email state   
    }, [values.password, values.email]); // only calls when password OR emaail changed 

    return (
        <Segment>
            <Input
                name = 'email'
                value = {values.email}
                placeholder = 'email'
                onChange = {handleChange}
            
            />
            <Input
                name = 'first name'
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
