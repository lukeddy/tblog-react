import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Button, Jumbotron,Image,Col} from 'react-bootstrap';
import person from '../assets/person.png';
import banner from '../assets/banner.jpg';
import './About.css';

class About extends Component {
    render() {
        return (
            <Grid>
                {/*<img src={banner} alt="" className="banner"/>*/}
                <Jumbotron className="banner">
                    <h2>我是关于页面</h2>
                    <p>我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，</p>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={6} md={4} sm={2}>
                        <Image src={person} className="profile-img" circle />
                        <h3>我是标题</h3>
                        <p>我是简介................</p>
                    </Col>
                    <Col xs={12} sm={6} md={4} sm={2}>
                        <Image src={person} className="profile-img" circle />
                        <h3>我是标题</h3>
                        <p>我是简介................</p>
                    </Col>
                    <Col xs={12} sm={6} md={4} sm={2}>
                        <Image src={person} className="profile-img" circle />
                        <h3>我是标题</h3>
                        <p>我是简介................</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default About;