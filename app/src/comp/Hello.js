import React from 'react';
import {PongSpinner} from 'react-spinners-kit';
import {Label, Segment} from 'semantic-ui-react';

export const Hello = () => {

    React.useEffect(() => {
        console.log('Hello mounted: Hello render');

        return () => {
            console.log('Cleanup called: Unmount Hello');
        };


    }, []);

    return (
        <Segment>
            <Label color = 'teal' ribbon> Helllllo !</Label>
            <PongSpinner/>
        </Segment>
    )
}