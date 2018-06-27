import React, { Component } from 'react';
import axios from 'axios';

class AddTroll extends Component {
  state = {
    title: '',
    body: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    const { title, body } = this.state;
    axios
      .post('/api/trolls', {
        title,
        body,
      })
      .then(res => res.data)
      .then(data => {
        // console.log('new troll added:', data);
        this.setState({
          title: '',
          body: '',
        });
      })
      .catch(error => {
        console.error('Oh no! The troll did not post.. or something happened.  Try again. :D', error);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title the troll"
            />
          </label>
          <label>
            What happened?
            <textarea
              name="body"
              value={this.state.body}
              placeholder="What Happened?"
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddTroll;
