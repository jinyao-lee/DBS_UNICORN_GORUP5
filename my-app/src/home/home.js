import React, { Component } from 'react';
import './home.css';
import { Image } from 'react-bootstrap';
import { Tab } from  'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import { Sonnet } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h3>Your financial GPS</h3>
        <h4>Track your spending, set budgets and discover how you can achieve your goals.</h4>
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
          <Tab eventKey="overview" title="Overview">
           
          </Tab>
          <Tab eventKey="sail" title="Sail">
     
          </Tab>
          <Tab eventKey="goals" title="Goals" >
            
          </Tab>
        </Tabs>;
      </div>
    )
  }
}

export default Home;