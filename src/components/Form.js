import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attr1 from './Attr1';
import Attr2 from './Attr2';
import Attr3 from './Attr3';
import DescriptionInput from './DescriptionInput';
import ImageInput from './ImageInput';
import NameInput from './NameInput';
import RareInput from './RareInput';
import SaveButton from './SaveButton';
import TrunfoInput from './TrunfoInput';

export default class Form extends Component {
  state = {
    isSaveButtonDisabled: false,
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      // isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const { isSaveButtonDisabled } = this.state;
    return (
      <form>
        <NameInput value={ cardName } onChange={ onInputChange } />
        <DescriptionInput value={ cardDescription } onChange={ onInputChange } />
        <Attr1 value={ cardAttr1 } onChange={ onInputChange } />
        <Attr2 value={ cardAttr2 } onChange={ onInputChange } />
        <Attr3 value={ cardAttr3 } onChange={ onInputChange } />
        <ImageInput value={ cardImage } onChange={ onInputChange } />
        <RareInput value={ cardRare } onChange={ onInputChange } />
        <TrunfoInput checked={ cardTrunfo } onChange={ onInputChange } />
        <SaveButton disabled={ isSaveButtonDisabled } onClick={ onSaveButtonClick } />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  // isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
