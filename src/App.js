import React from "react";
import {robots} from './robots';
import CardList from './Cardlist';
import Searchbox from './Searchbox';
import 'tachyons';
import './App.css';



class App extends React.Component {
   constructor(){
     super();
     this.state ={
       robots :robots,
       searchfield : '',
     }
   }
   onSearchChange = (event) => {
     this.setState({searchfield :event.target.value})
     
   }
  render() {
    const filteredRobots=this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
     return(<div className='tc'>
        <h1 className="f1">Robofriends</h1>
        <Searchbox searchChange ={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
       </div>
  )
  }
}
export default App;