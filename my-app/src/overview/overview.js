import React, { Component } from 'react';
import axios from 'axios';

var API_URL_BALANCE = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/:accountId/balance?month=1&year=2018';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAge = this.getAge.bind(this);
    this.state = {
      accountBalance: '',
      age: ''
    }
  }
  
  getAge() {
    axios.get('http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/customers/1/details', {
      headers: {
        'identity': 'Group5',
        'token': '865b22aa-aa80-4fb0-83f0-53e5133f3603'
      }
    })
    .then(({data}) => {
      console.log(data.dateOfBirth.substring(0,4))
      this.setState({
        age:  2019 - parseInt(data.dateOfBirth.substring(0,4), 10)
      })
      
    })
  }
  
  getTransactionDetails() {
    
  }
    
  componentDidMount() {
    axios.get('http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/74/balance?month=1&year=2018', {
      params: {
        'accountId': '74',
        'month': '1',
        'year': '2018'
      },
      headers: {
        'identity': 'Group5',
        'token': '865b22aa-aa80-4fb0-83f0-53e5133f3603'
      }
    })
    .then(({data}) => {
      console.log(data);
      this.setState({
        accountBalance: data.availableBalance
      })
    })
    .catch(err => console.log(err))
    this.getAge();
  }
  
  render() {
    return (
      <React.Fragment>
        <p>Your available balance: {this.state.accountBalance}</p>
        <p>Your age: {this.state.age}</p>
      </React.Fragment>
    )
  }
}
  

export default Overview;