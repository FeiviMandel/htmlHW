import React, { Component } from 'react'

export default class ClickCounter extends Component {
  /*state = {
    clicks: 0
  };*/

  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };

    // bind this so we have proper this when callback is called later
    // this.handleClick = this.handleClick.bind(this);
  }

  /*componentDidMount() {
    setInterval(() => {
     this.setState({clicks: this.state.clicks + 1})
    }, 1000);
  }*/

  // use experimental syntax so we have right this when called
  /*handleClick() {*/
  handleClick = e => {
    console.log('button was clicked!', e);
    this.setState({ clicks: this.state.clicks + 1 })
  }

  render() {
    //console.log(this);
    return (
      <h5>
        This page has been viewed
        <button className="m-1" onClick={
          this.handleClick
          /* bind so we have correct this when called*/
          /*this.handleClick.bind(this)*/

          /* arrow function so we have correct this when called*/
          /*() => this.handleClick()*/
          }>{this.state.clicks}</button>
        times
      </h5>
    )
  }
}
