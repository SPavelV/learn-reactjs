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

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    console.log("change", event.target.value)
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;
    if (this.state.showCars) {
      cars = this.state.cars.map((element, i) => {
        return <Car 
          key={i}
          name={element.name}
          year={element.year}
          onChangeTitle={()=> this.changeTitleHandler(element.name)}
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
