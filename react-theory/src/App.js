import React from 'react';
import Car from './Car/Car';
import classes from './App.module.scss';
console.log(classes)
class App extends React.Component {

  state = {
    cars: [
      { name:'Ford', year: 2018},
      { name:'Audi', year: 2016},
      { name:'Mazda', year: 2010}
    ],
    pageTitle: "React components",
    showCars: true
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
      <div className={classes.App} style={divStyle}>
        <h1 className={classes['App-header']}>{this.state.pageTitle}</h1>

        <button className={classes['App-button']} onClick={this.toggleCarsHandler}>Toggle cars</button>
        
        { this.state.showCars ? 
        <div
          style = {{
            width: 400,
            margin: 'auto',
            padding: '10px',
          }}
        >{cars}</div> 
        : null }
      </div>
    );
  }
 

}

export default App;
