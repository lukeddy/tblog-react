import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Button} from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <h2>关于我们</h2>
                </Row>
                <Link to='/home'>
                    <Button className="btn btn-success">首页</Button>
                </Link>
            </Grid>
        );
    }
}

export default About;