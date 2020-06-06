import React, { Component } from 'react';
import './style.css';

import Layout from '../../components/Layout/index.jsx';

const slides = {
    1: {
        slideTitle: 'Валютные операции по&nbsp;выгодному курсу',
        slideText: 'На московской бирже без посредника',        
        slideItemL1: '<b>Комиссия от 1 копейки<sup>1</sup></b>',                
        slideItemL2: 'Для заключения сделки достаточно иметь на&nbsp;брокерском счету лишь&nbsp;часть суммы',                
        slideItemL3: 'Быстрый вывод валюты на ваш расчётный счёт',                        
        slideColor: '#FFF8CC'                    
    },   
    2: {
        slideTitle: 'Вложение свободных средств для юридических лиц',
        slideText: 'Зарабатывайте с помощью однодневных инструментов московской&nbsp;биржи:',        
        slideItemL1: 'Срок от 1 дня',                
        slideItemL2: 'Конкурентные ставки',                
        slideItemL3: 'Надёжный контрагент<br/>НКО “Национальный Клиринговый Центр” АО',  
        slideColor: '#FFE9E9'                  
    },   
    3: {
        slideTitle: 'Инвестиции<br/>в еврооблигации и ETF',
        slideText: 'Вкладывайте валюту в&nbsp;инструменты с&nbsp;фиксированной доходностью',        
        slideItemL1: 'Еврооблигации — ценные бумаги, номинированные в&nbsp;валюте с&nbsp;фиксированной доходностью',                
        slideItemL2: 'ETF2 — группа инструменов для реализации инвестиционной стратегии, не&nbsp;требующей активного участия',                
        slideItemL3: '', 
        slideColor: '#D9F4F2'                 
    },   
    4: {
        slideTitle: 'Брокерское обслуживание',
        slideText: 'Получите доступ к российским<br/>и международным торговым площадкам:',        
        slideItemL1: 'А мы поможем составить портфель из ценных бумаг, валюты, фьючерсов и опционов',                
        slideItemL2: 'Предоставим программное обеспечение, аналитику, обзоры рынков',                
        slideItemL3: '', 
        slideColor: '#E1EAF7'
    },   
    5: {
        slideTitle: 'Привлечение финансирования',
        slideText: 'Брокер предоставляет вам возможность вывода денежных средств под обеспечение в виде валюты или ценных бумаг',        
        slideItemL1: 'Для решения кассовых разрывов, развития бизнеса и других целей',                
        slideItemL2: 'Низкие процентные ставки',
        slideItemL3: 'Гибкие сроки возврата',         
        slideColor: '#F3EFF7'                   
    },   
    6: {
        slideTitle: 'Снижение валютных и&nbsp;рыночных рисков',
        slideText: '',        
        slideItemL1: 'Фиксируйте курс сегодня для будущих расчётов',                
        slideItemL2: 'Проконсультируем, дадим экспертную оценку, порекомендуем оптимальное решение для защиты от валютных колебаний',
        slideItemL3: '',          
        slideColor: '#EEF8E4'                  
    }                     
}  

const tabs = {
    1: {
        tabTitle: 'Валютные операции<br/>по выгодному курсу',
        bigTabColor: '#FFF8CC',
        smallTabColor: '#F2C94C'                    
    },   
    2: {
        tabTitle: 'Однодневные<br/>инструменты МосБиржи',
        bigTabColor: '#FFE9E9',
        smallTabColor: '#FF7777'                    
    },   
    3: {
        tabTitle: 'Инвестиции<br/>в еврооблигации и ETF',
        bigTabColor: '#D9F4F2',
        smallTabColor: '#71D0BA'                    
    },   
    4: {
        tabTitle: 'Брокерское<br/>обслуживание',
        bigTabColor: '#E1EAF7',
        smallTabColor: '#81B1D9'                    
    },   
    5: {
        tabTitle: 'Привлечение<br/>финансирования',
        bigTabColor: '#F3EFF7',
        smallTabColor: '#A57FD3'                    
    },   
    6: {
        tabTitle: 'Снижение валютных<br/>и рыночных рисков',
        bigTabColor: '#EEF8E4',
        smallTabColor: '#71D0BA'                    
    }                     
}  

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: '1',                
        };
    }

    changeTab(newActiveTabIndex) {
        this.setState({
            activeTabIndex: newActiveTabIndex
        });
    }

    handleTouchStart(event) {
        this.setState({
            initialTouch: event.changedTouches[0]
        });    
    }

    handleTouchEnd(event) {
        let initialTouch = this.state.initialTouch;
        let finalTouch = event.changedTouches[0]
        let delta = Math.abs(initialTouch.pageX - finalTouch.pageX);
        let nextTabIndex = '';

        if (delta > 30) {
            if (finalTouch.pageX < initialTouch.pageX) {
                nextTabIndex = parseInt(this.state.activeTabIndex) + 1;
                if (nextTabIndex <= Object.keys(tabs).length) {
                    nextTabIndex = nextTabIndex.toString();
                    this.setState({
                        activeTabIndex: nextTabIndex
                    });
                }              
            }
            else {
                nextTabIndex = parseInt(this.state.activeTabIndex) - 1;
                if (nextTabIndex > 0) {
                    nextTabIndex = nextTabIndex.toString();
                    this.setState({
                        activeTabIndex: nextTabIndex
                    });
                }
            }
        }        
    }    

    render() {
        let { activeTabIndex } = this.state;              
        const slide = slides[activeTabIndex];          
        const defBackgroundColor = '#F7F7F7';
        const defSmallBackgroundColor = '#333333';        

        let tabsArray = Object.keys(tabs).map(key => (
            <li key={key} style={ activeTabIndex === key ? { backgroundColor: tabs[key].bigTabColor } : { backgroundColor: defBackgroundColor } } onClick={ this.changeTab.bind(this, key) } >
                <span className="tabs_text" dangerouslySetInnerHTML={ {__html: tabs[key].tabTitle} } ></span>
                <span className="tabs_round" style={ activeTabIndex === key ? { backgroundColor: tabs[key].smallTabColor } : { backgroundColor: defSmallBackgroundColor } }></span>                            
            </li>
        ));
                  
        return (
            <div className="main-wrapper" onTouchStart = { this.handleTouchStart.bind(this) } onTouchEnd = { this.handleTouchEnd.bind(this) } >            
                <Layout 
                    activeTabIndex = { activeTabIndex }
                    slideColor = { slide.slideColor } 
                    slideTitle = { slide.slideTitle }
                    slideText = { slide.slideText }       
                    slideItemL1 = { slide.slideItemL1 }               
                    slideItemL2 = { slide.slideItemL2 }
                    slideItemL3 = { slide.slideItemL3 }                                                    
                />
                <div className="tabs">                
                    <div className="tabs_wrapper">
                        <ul>
                            { tabsArray }                                                                                                                                           
                        </ul>
                    </div>
                </div>                 
            </div>           
        );
    }
}  