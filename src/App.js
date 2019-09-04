import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CityList from './components/List';
import WeatherCard from './components/Card';
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
                        <Col>
                            <WeatherCard/>
                        </Col>
                        <Col>
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
