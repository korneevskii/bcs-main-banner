import React, { Component } from 'react';
import './style.css';

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="main-banner_wrapper">
                <div className="main-banner_content">                    
                    { this.props.activeTabIndex === '2' ? <h2 style={ {marginBottom: '20px' } } dangerouslySetInnerHTML={ {__html: this.props.slideTitle} } ></h2> : <h2 dangerouslySetInnerHTML={ {__html: this.props.slideTitle} } ></h2> }
                    { this.props.slideText !== '' ? <p dangerouslySetInnerHTML={ {__html: this.props.slideText} } ></p> : <p style={ { display: 'none' } } ></p> }
                    <ul className={ 'list-items-' + this.props.activeTabIndex } >
                        <li dangerouslySetInnerHTML={ {__html: this.props.slideItemL1} } ></li>
                        <li dangerouslySetInnerHTML={ {__html: this.props.slideItemL2} } ></li>
                        { this.props.slideItemL3 !== '' ? <li dangerouslySetInnerHTML={ {__html: this.props.slideItemL3} } ></li> : <li style={ { display: 'none' } } ></li> }                        
                    </ul>
                    <div className="main-banner_image-mobile"> 
                        <div className="main-banner_image-mobile-inner">                             
                            <img src={ 'images/main-banner-image-320-' + this.props.activeTabIndex + '.png' } alt="" />                            
                        </div>                                                                 
                    </div>                             
                    <div className="main_banner_button">
                        <a href="/" className="main_banner_button-href">Консультация</a>
                    </div>
                </div>
                <div className="main-banner_image">
                    <picture>
                        <source srcSet={ 'images/main-banner-image-768-' + this.props.activeTabIndex + '.png' } media="(max-width: 1023px)" />                                
                        <source srcSet={ 'images/main-banner-image-1024-' + this.props.activeTabIndex + '.png' } media="(max-width: 1199px)" />
                        <img src={ 'images/main-banner-image-1200-' + this.props.activeTabIndex + '.png' } alt="" />
                    </picture>                         
                </div>  
            </div>                
        );
    }
}      