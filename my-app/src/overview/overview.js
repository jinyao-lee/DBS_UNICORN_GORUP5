import React, { Component } from 'react';
import axios from 'axios';

var API_URL_BALANCE = 'http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/:accountId/balance?month=1&year=2018';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      accountBalance: ''
    }
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
  
  }
  
  render() {
    return (
      <p>Your available balance: {this.state.accountBalance}</p>
    )
  }
}
  

export default Overview;