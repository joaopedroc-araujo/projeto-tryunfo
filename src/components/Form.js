import React, { Component } from 'react';
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
  render() {
    return (
      <form>
        <NameInput />
        <DescriptionInput />
        <Attr1 />
        <Attr2 />
        <Attr3 />
        <ImageInput />
        <RareInput />
        <TrunfoInput />
        <SaveButton />
      </form>
    );
  }
}
