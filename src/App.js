import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardInfo: {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    },
  };

  onInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    const valueField = type === 'checkbox' ? checked : value;

    this.setState((prevState) => {
      const cardInfo = {
        ...prevState.cardInfo,
        [name]: valueField,
      };

      const maxAttrPerCard = 90;
      const maxAttrAdd = 210;

      const filledCamps = cardInfo.cardName
        && cardInfo.cardDescription
        && cardInfo.cardAttr1
        && cardInfo.cardAttr2
        && cardInfo.cardAttr3
        && cardInfo.cardImage;

      const filledAttr = parseInt(cardInfo.cardAttr1, 10) >= 0
        && parseInt(cardInfo.cardAttr1, 10) <= maxAttrPerCard
        && parseInt(cardInfo.cardAttr2, 10) >= 0
        && parseInt(cardInfo.cardAttr2, 10) <= maxAttrPerCard
        && parseInt(cardInfo.cardAttr3, 10) >= 0
        && parseInt(cardInfo.cardAttr3, 10) <= maxAttrPerCard
        && parseInt(cardInfo.cardAttr1, 10)
          + parseInt(cardInfo.cardAttr2, 10)
          + parseInt(cardInfo.cardAttr3, 10)
          <= maxAttrAdd;

      const isSaveButtonDisabled = !filledCamps || !filledAttr;

      return {
        cardInfo: {
          ...cardInfo,
          isSaveButtonDisabled,
        },
      };
    });
  };

  render() {
    const { cardInfo } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardInfo={ cardInfo }
          onInputChange={ this.onInputChange }
          // onClick={ this.onSaveButtonClick }
        />
        <Card
          { ...cardInfo }
        />
      </>
    );
  }
}

export default App;
