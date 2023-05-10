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
    // saveCards: [],
  };

  onInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    const valueField = type === 'checkbox' ? checked
      : value;

    this.setState((prevState) => ({
      cardInfo: {
        ...prevState.cardInfo,
        [name]: valueField,
      },
    }));
  };

  render() {
    const { cardInfo } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName={ cardInfo.cardName }
          cardDescription={ cardInfo.cardDescription }
          cardAttr1={ cardInfo.cardAttr1 }
          cardAttr2={ cardInfo.cardAttr2 }
          cardAttr3={ cardInfo.cardAttr3 }
          cardImage={ cardInfo.cardImage }
          cardRare={ cardInfo.cardRare }
          cardTrunfo={ cardInfo.cardTrunfo }
          onInputChange={ this.onInputChange }
        />
        <Card
          { ...cardInfo }
        />
      </>
    );
  }
}

export default App;
