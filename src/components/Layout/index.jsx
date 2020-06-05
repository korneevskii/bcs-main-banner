import React, { Component } from 'react';
import './style.css';

import Header from '../../components/Header/index.jsx';
import Slide from '../../components/Slide/index.jsx';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {            
        };
    }

    render() {
        return (
            <div className="layout" style={ { backgroundColor: this.props.slideColor } } >            
                <div className="main-banner">
                    <Header />               
                    <Slide
                        activeTabIndex = { this.props.activeTabIndex }
                        slideColor = { this.props.slideColor } 
                        slideTitle = { this.props.slideTitle }
                        slideText = { this.props.slideText }       
                        slideItemL1 = { this.props.slideItemL1 }               
                        slideItemL2 = { this.props.slideItemL2 }
                        slideItemL3 = { this.props.slideItemL3 }                        
                    />
                </div>
            </div>           
        );
    }
}  