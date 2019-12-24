// import {useState} from 'react';
import {useState} from 'reinspect';

export const useForm = initialValues => {
 //   console.log('initial values are: ', initialValues);
    const [values, setValues] = useState(initialValues, 'useForm State');
 //   console.log('values are now ', values);

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