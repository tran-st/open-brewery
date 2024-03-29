import React from 'react';
import AutoComplete from './AutoComplete';

class SearchBar extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          suggestions: []
      };
    };
  
    handleOnKeyUp(e) {
      this.props.onChange(e);

      fetch(`https://api.openbrewerydb.org/breweries/autocomplete?query=${e.target.value}`)
      // fetch(`https://localhost:44328/v1/SearchBreweriesByNameAutoComplete?breweryName=${e.target.value}`)
      .then(res => res.json())
      .then((result) => {
          this.setState({
            suggestions: result
          });
        }, (error) => {
          this.setState({ error });
        }
      );
    };
    
    render() {
      return (
        <div>
            <input placeholder='Search Breweries' onKeyUp={(e) => this.handleOnKeyUp(e)} />
            <AutoComplete brewerySuggestions={this.state.suggestions} onSearch={this.props.onSearch}  />
        </div>
      );
    };
  };

  export default SearchBar;