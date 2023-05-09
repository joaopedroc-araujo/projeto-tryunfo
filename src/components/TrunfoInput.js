import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrunfoInput extends Component {
  render() {
    const { checked, onChange } = this.props;

    return (
      <label>
        Essa carta é Super Trunfo?
        {' '}
        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TrunfoInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
