import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      message: ""
    };
  }

  handleChange = event => {
    const onlyLetters = /[0-9]/;
    if (!onlyLetters.test(event.target.value))
      this.setState({ userName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.userName
    };

    axios.post("/react", { user }).then(response => {
      this.setState({
        message: response.data
      });
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
              placeholder="Write your name here"
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Send
          </button>
          <h2 dangerouslySetInnerHTML={{ __html: this.state.message }} />
        </form>
      </div>
    );
  }
}

export default App;
