import React, { Component } from 'react'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
      dollar: 60
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    let value = e.target.value;
    if (e.target.name.toUpperCase() === 'DOLLAR') {
      value = value / 3
    }
    let dollar = value * 3;

    this.setState({ value, dollar }
    );
  }

  render() {
    return (
      <div style={{ margin: '1rem' }} >
        <input type="number" name='real' value={this.state.value} onChange={this.changeValue} /> <br />
        <input type="number" style={{ marginTop: '1rem' }} name='dollar' value={(this.state.dollar === 0) ? '' : this.state.dollar} onChange={this.changeValue} />
        <p>Dollar = R$ 3,00 </p>
      </div>
    )
  }
}



export default App;
