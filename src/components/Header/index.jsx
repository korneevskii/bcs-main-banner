import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <div className="header-logo">
                        <img alt="logo" src="images/header-logo.svg" />
                    </div>
                    <div className="header-logo-mobile">
                        <img alt="logo-mobile" src="images/header-logo-mobile.svg" />
                    </div>                            
                    <div className="header-link">
                        <a href="/">Открыть счет</a>
                    </div>    
                </div>
                <div className="header-text">Финансовые услуги на рынке ценных бумаг для компаний</div>
                <div className="header-phone">
                    <a href="tel:88005005545">8 800 500 55 45</a>
                </div>                        
            </div>                
        );
    }
}      