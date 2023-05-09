import React, { Component } from 'react';

export default class RareInput extends Component {
  render() {
    return (
      <label>
        Raridade da carta:
        <select data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}
