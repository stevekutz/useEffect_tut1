import React, {useEffect} from 'react';
import {useState} from 'reinspect';
import {Input, Segment} from 'semantic-ui-react';
import {useForm} from './comp/useForm';


function App() {
    const [values, handleChange] = useForm({email: '', password: ''});

    useEffect(() =>{

        console.log('useEffect called, render occured');
    })

    return (
        <Segment>
            <Input
                name = 'email'
                value = {values.email}
                onChange = {handleChange}
            
            />
            <Input 
                type = 'pasword'
                name = 'password'
                value = {values.password}
                onChange = {handleChange}

            />
        
        
        </Segment>
    )


}

export default App;
