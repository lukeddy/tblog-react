import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Button, Image} from 'react-bootstrap';
import logo from '../assets/logo.svg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>我是标题</h2>
                    <p>我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，</p>
                    <Row>
                        <Button bsStyle="primary">按钮</Button>
                        <Button bsStyle="success">按钮</Button>
                        <Button className="btn btn-warning">按钮</Button>
                        <Button className="btn btn-default">按钮</Button>
                    </Row>
                </Jumbotron>
                <Row className="text-center">
                    <img src={logo} className="app-logo" alt=""/>
                </Row>
                <Row><Link to='/about'>关于</Link></Row>
            </Grid>
        );
    }
}

export default Home;