import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import QuoteBox from './components/QuoteBox/quoteBox';
import './App.scss';

library.add(faQuoteRight, faTwitter);

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      quote: '',
      author: '',
    }
    this.onGetQuoteHandler = this.onGetQuoteHandler.bind(this);
  }
  componentDidMount() {
    this.onGetQuoteHandler();
  }
  onGetQuoteHandler() {
    const quoteText = document.getElementById('quote');
    quoteText.classList.add('action');
    fetch('https://talaikis.com/api/quotes/random/')
      .then(response => {
        return response.json();
      }).then(data => {
        if(data.quote.length > 160) {
          this.onGetQuoteHandler()
        } else {
          this.setState({
            quote: data.quote,
            author: data.author
          })
          quoteText.classList.remove('action')
        }
      })
  }

  render() {
    return (
      <div className="App">
        <QuoteBox 
          getQuote={this.onGetQuoteHandler}
          quoteText={this.state.quote}
          quoteAuthor={this.state.author}/>
      </div>
    );
  }
}

export default App;
