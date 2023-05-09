import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RareInput extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label>
        Raridade da carta:
        <select
          data-testid="rare-input"
          value={ value }
          onChange={ onChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

RareInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
