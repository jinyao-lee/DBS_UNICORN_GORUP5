import React, { Component } from 'react';

 class Sail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: false,
      onClick2: false
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

  handleChange2 = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

   handleClick() {
    console.log('From handleClick()', this);
    this.setState({onClick: true});
  }

  handleClick2() {
    console.log('From handleClick()', this);
    this.setState({onClick: true});
  }


   render() {
    return (
        <div class="sail-container">
            <table>
                <tr>
                    <td width=33%>
                        <div id = 'result1' class='container'>
                            <center>
                                <h3>BTO Framework for Young Parents</h3>
                                <a href="result1detail.html">
                                    <img src='https://www.income.com.sg/NTUCIncome/media/NTUCIncome/Blog/Mastheads/Bto-masthead.jpg' width=325 height=200/>
                                </a>
                                <p>This if a framework suitable for young parents who need more spare allocation for their kids' expenses.</p>
                                <p>Contributed by: Ellen Lee, Financial Consultant at DBS Bank Group</p>
                            </center>
                        </div>
                    </td>
                    <td width=33%>
                        <div id = 'result2' class='container'>
                            <center>
                                <h3>BTO Framework for Students</h3>
                                <a href="result2detail.html">
                                    <img src='http://dollarsandsense.sg/wp-content/uploads/2017/02/BTO-Flats.jpg' width=325 height=200/>
                                </a>
                                <p>This if a framework suitable for students who can afford to save more.</p>
                                <p>Contributed by: Kenneth Ng, Financial Advisor at AIA Group</p>
                            </center>
                        </div>
                    </td>
                    <td width=33%>
                        <div id = 'result3' class='container'>
                            <center>
                                <h3>BTO Framework for Newlyweds</h3>
                                <a href="result3detail.html">
                                    <img src='https://thesmartlocal.com/images/easyblog_articles/5743/b2ap3_thumbnail_EC-for-Newlyweds--5.jpg' width=325 height=200/>
                                </a>
                                <p>This if a framework suitable for newlyweds who have much more to come in the future.</p>
                                <p>Contributed by: Mary Lim, Free Lance Business Analyst</p>
                            </center>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    }
}

render(onClick && (
    <div>
        <input
            type="text"
            name="time"
            value={this.state.ageGroup}
            onChange={this.handleChange}
        />
        <input
            type="text"
            name="time"
            value={this.state.btoPrice}
            onChange={this.handleChange2}
        />
        <button onClick={() => this.handleClick()}>Submit</button>
    </div>
)) 





 export default Sail;
