import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english',
            onLanguageChange: this.onLanguageChange
          };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={this.state}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
