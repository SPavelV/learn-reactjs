import React from 'react';
import Car from './Car/Car';

class App extends React.Component {

  state = {
    cars: [
      { name:'Ford', year: 2018},
      { name:'Audi', year: 2016},
      { name:'Mazda', year: 2010}
    ],
    pageTitle: "React components"
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({cars});
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.filter((element, i) => i !== index);
    this.setState({cars});
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((element, index) => {
        return <Car 
          key={index}
          name={element.name}
          year={element.year}
          onDelete={this.deleteHandler.bind(this, index)}
          onChangeName={(event)=> this.onChangeName(event.target.value, index)}
        />
      })
    }
    
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        
        { this.state.showCars ? cars : null }
      </div>
    );
  }
 

}

export default App;
