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

  render() {
    console.log('render');
    const divStyle = {
      textAlign: 'center'
    }
    
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput}/>
        <button onClick={() => this.changeTitleHandler('Changed')}>Change title</button>
  
        {
          this.state.cars.map((element, i) => {
            return <Car 
              key={i}
              name={element.name}
              year={element.year}
              onChangeTitle={()=> this.changeTitleHandler(element.name)}
              />
          })
        }
      </div>
    );
  }
 

}

export default App;
