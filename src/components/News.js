import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';

export default class News extends Component {
    render() {
        return (
            <Grid>
                <Row className="text-center">
                    <h3>我是新闻</h3>
                </Row>
            </Grid>
        );
    }
}