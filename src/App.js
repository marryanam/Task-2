import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CityList from './components/List';
import CardWrapper from './components/CardWrapper';
import CurrentWeather from './components/Current';
import FormModal from './components/Form';
import './style.css';

export default function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h5 className="display-4 text-center">
                    Weather forecast
                </h5>
            </header>
            <main>
                <Container>
                  <Row>
                        <Col style={{ maxWidth: '50%' }}>
                            <CurrentWeather/>
                            <CardWrapper/>
                        </Col>
                        <Col style={{ maxWidth: '50%' }}>
                            <CityList/>            
                            <FormModal/>
                        </Col>
                  </Row>
                </Container>
            </main>
            <footer className="App-footer">
                <p className="text-muted text-center">
                    2019
                </p>
            </footer>
        </div>
    );
}
