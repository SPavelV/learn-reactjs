import React from 'react';
import Car from './Car/Car';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 2016 },
        { name: 'Mazda', year: 2010 }
      ],
      pageTitle: 'React components',
      showCars: true
    };
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };

  deleteHandler(index) {
    const cars = this.state.cars.filter((element, i) => i !== index);
    this.setState({ cars });
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    };

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((element, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              index={index}
              name={element.name}
              year={element.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event =>
                this.onChangeName(event.target.value, index)
              }
            />
          </ErrorBoundary>
        );
      });
    }

    return (
      <div className='App' style={divStyle}>
        {/* <h1 className='App-header'>{this.state.pageTitle}</h1> */}

        <h1>{this.props.title}</h1>

        <Counter clicked = {this.state.clicked}/>
        <hr/>

        <button style={{marginTop: 20}} className='App-button' onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>

        <button onClick={() => this.setState({clicked: true})}>Change clicked</button>

        {this.state.showCars ? (
          <div
            style={{
              width: 400,
              margin: 'auto',
              padding: '10px'
            }}
          >
            {cars}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
