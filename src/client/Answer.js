import React, { Component } from 'react';
import './app.css';

export default class Answer extends Component {
  Answer = props => (
    <React.Fragment>
      <button type="button" onClick={props.getData}>
        Submit
      </button>
    </React.Fragment>
  );
}
