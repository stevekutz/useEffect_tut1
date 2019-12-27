// import {useState} from 'react';
import {useState} from 'reinspect';

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