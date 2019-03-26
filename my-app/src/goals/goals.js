import React, { Component } from 'react';

class Goals extends Component {
  // componentDidMount() {
  //   fetch("http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/customers/:customerId/details")
  //   .then(results=> {
  //     return results.json();
  //   }).then(data => {
      
  //   })
  // }
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0,
      ageGroup: ''
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleClick() {
    console.log('From handleClick()', this);
    
    // if (parseInt(input.toString) >= 20) {
    //   this.setState({numOfClicks: this.state.numOfClicks + 1});
    // }
    //this.setState({value: event.target.value});
    //this.setState({numOfClicks: this.state.numOfClicks + 1});
    //var age = this.state.value;
    //this.setState({ageGroup: this.state.ageGroup});
    this.setState({numOfClicks: this.state.ageGroup});
  }

  

  render() {
    return (
      <div className="goals-container">
        
          <p>
            Current age
          </p>
          <input
            type="text"
            name="ageGroup"
            value={this.state.ageGroup}
            onChange={this.handleChange}
          />
          <p>
            Your age group: {this.state.numOfClicks}
          </p>
          <button onClick={() => this.handleClick()}>Enter</button>
        
      </div>
    );
  }
}



export default Goals;
