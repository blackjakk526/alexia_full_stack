import React, { Component } from 'react';
import './app.css';

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = { text: null };
  }

  //   function Answer(props){
  //       return(
  //         <button type="button" onClick={props.getData}>
  //         Submit
  //       </button>
  //       );
  //   }
  componentDidMount() {
    fetch('/api/add')
      .then(res => res.json())
      .then(result => this.setState({ text: result.results[0].name }));
  }

  //   handleData = (event) => {
  //       this.setState({
  //           fetch('/api/update', {
  //               method: 'POST',
  //               body:
  //           })
  //           .then(res => res.json())
  //       })
  //   }

  render() {
    const { text } = this.state;
    return (
      <div>
        {text ? (
          <h1>{text}</h1>
        ) : (
          // <Answer getData={this.handleData}/>
          <form action="/api/add">
            <input type="submit" value="start" />
          </form>
        )}
      </div>
    );
  }
}
