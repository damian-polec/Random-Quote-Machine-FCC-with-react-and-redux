import React, { Component } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import QuoteBox from './components/QuoteBox/quoteBox';
import * as actionCreators from './store/actionsCreators';
import './App.scss';

library.add(faQuoteRight, faTwitter);

class App extends Component {

  componentDidMount() {
    this.props.onGetQuoteHandler();
  }
  /*onGetQuoteHandler() {
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
} */

  render() {
    return (
      <div className="App">
        <QuoteBox 
          getQuote={this.props.onGetQuoteHandler}
          quoteText={this.props.quote}
          quoteAuthor={this.props.author}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    author: state.author
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetQuoteHandler: () => dispatch(actionCreators.fetchQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
