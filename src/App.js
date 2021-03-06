import React, { Component } from 'react';
import Moment from 'moment';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
      [
        {
          "id":1,
          "timestamp":JSON.stringify(new Date(2018,4,1,13,45,23)),
          "title":"Day 1 - My First Blog Post",
          "body":"Hey everyone, my name is Aaron. I'm here creating this" +
                  "first reactJS website. Thus this is my first post on the" +
                  "react website called my-app. Hopefully this goes well."
        },
        {
          "id":2,
          "timestamp":JSON.stringify(new Date(2018,4,15,1,23,45)),
          "title":"Day 15 - What happened?",
          "body":"Well... it's been 15 days in the debugging bunker. The first"+
                  "signs of daylight are protruding through the lines of code."+
                  "If you can read this then that must mean I am on the right"+
                  "track. Hopefully this will be completed in time."
        },
        {
          "id":3,
          "timestamp":JSON.stringify(new Date(2018,4,16,6,12,28)),
          "title":"Day 16 - Things are looking good",
          "body":"Oh yeah! Everything seems to be in order here. The site is"+
                  "up and running. Purring like a beaute. Hopefully things will"+
                  "continue in this direction.\n"+
                  "Singing off for now..."
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <table>
          <tbody>
            {this.state.data.map((post, i) => <BlogRow key = {i} data = {post} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

class BlogRow extends React.Component {
  render() {
    Moment.locale('en');
    var thisTimestamp = this.props.data.timestamp;
    return (
      <tr class="blogRow">
        <td>
          {this.props.data.id}". "<br/>
          {Moment(thisTimestamp).format('MM/d/yyyy THH:mm:ss')}
        </td>
        <td>
          <h3>{this.props.data.title}</h3>
          <div class="blogContent">{this.props.data.body}</div>
        </td>
      </tr>
    );
  }
}

export default App;
