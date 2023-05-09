import React, { Component } from 'react';

export default class TrunfoInput extends Component {
  render() {
    return (
      <label>
        Essa carta é Super Trunfo?
        {' '}
        <input type="checkbox" data-testid="trunfo-input" />
      </label>
    );
  }
}
