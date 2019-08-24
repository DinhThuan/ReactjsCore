import React from 'react';
import './App.scss';
import Form from './components/study-form/Form';

export default class App extends React.Component {

  getData = (data) => {
    console.log(data);
  }
  render() {
    const title = 'App component';

    return (
      <div className="App">
        <Form name={title} receive={this.getData}></Form>
      </div>
    );
  }
}

