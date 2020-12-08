import React from "react";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      queryString: "",
      apiResult: [],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Dummy</h1>
      </div>
    );
  }
}
