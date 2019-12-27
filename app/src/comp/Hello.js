import React from 'react';
import {JellyfishSpinner, PongSpinner, WaveSpinner} from 'react-spinners-kit';
import {Label, Segment} from 'semantic-ui-react';
import {Carousel, Col, Row} from 'antd';
import '../styles/carousel.css'

export const Hello = () => {

    React.useEffect(() => {
        console.log('Hello mounted: Hello render');

        return () => {
            console.log('Cleanup called: Unmount Hello');
        };


    }, []);

    return ( 
        <Segment style = {{width: '20%', margin: '0 auto'}}>
            <Label color = 'teal' ribbon> Helllllo !</Label>
            
            <Carousel effect = 'fade'>
                    <Row>
                        <Col lg={{ span: 6, offset: 8 }}>
                            <JellyfishSpinner
                                // size = {50}
                                color = "dodgerblue"
                                style = {{border: '3px solid green'}}
                            />                 
                        </Col>
                    
                    </Row>
                    <Row>
                        <Col lg={{ span: 6, offset: 8 }}>
                            <PongSpinner
                                color = "deeppink"
                            />                    
                        </Col>                
                    </Row>
                    <Row>
                        <Col lg={{ span: 6, offset: 8 }}>
                            <WaveSpinner
                                color = "seagreen"
                            />                    
                        </Col>                
                    </Row>            
            </Carousel>
  
        </Segment>
    )
}