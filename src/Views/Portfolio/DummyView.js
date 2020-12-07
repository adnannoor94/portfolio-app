import React from "react";
import classnames from "classnames";
// you should import `lodash` as a whole module
import lodash from "lodash";
// import axios from 'axios';

const ITEMS_API_URL = "https://example.com/api/items?a=abc";
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      queryString: "",
      apiResult: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({ queryString: event.target.velue });

    this.getRequest(event.target.velue);
  };

  getRequest = (queryValue) => {
    const self = this;

    // axios
    //   .get(ITEMS_API_URL)
    //   .then((result) => {
    //     console.log(result);
    //     this.setState({ apiResult: result });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  render() {
    const { isLoading, queryString, apiResult } = this.state;
    return (
      <div className="wrapper">
        <div className="control">
          <input
            type="text"
            className="input"
            onChange={this.handleInputChange}
            value={queryString}
          />
          <button onClick={() => this.getRequest("query")}>Hit</button>
        </div>
        <div className="list is-hoverable">
          {apiResult.map((resultItem, index) => {
            return (
              <a
                className="list-item"
                onClick={this.props.onSelectItem(resultItem)}
                key={index}
              >
                {resultItem}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
