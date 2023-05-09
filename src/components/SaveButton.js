import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SaveButton extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <label htmlFor="save-button">
        <button
          type="submit"
          data-testid="save-button"
          // eslint-disable-next-line no-unneeded-ternary
          disabled={ !!isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </label>
    );
  }
}

SaveButton.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
