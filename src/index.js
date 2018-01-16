import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    })
  }

  render() {
    if(this.state.hasError) {
      return (
        <h1>Something went wrong.</h1>
      )
    } else {
      return (this.props.children);
    }
  }
}

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));
registerServiceWorker();
