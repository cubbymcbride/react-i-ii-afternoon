import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import data from './data'
import Card from './Components/Card'
import Controls from './Components/Controls'


class App extends Component{
 constructor(){
   super()
   this.state = ({
     data: data,
     index: 0
   })
 }

 next = () => {
   if(this.state.page === 25){
     this.setState({
       index: 0
     })
   } else {
     this.setState({
       index: this.state.index + 1
     })
   }
 };

 previous = () => {
   if(this.state.page === 1){
     this.setState({
       index: 25
     })
   } else {
     this.setState({
       index: this.state.index - 1
     })
   }
 };


 render(){


     return (
       <div className="App">
       <Navbar/>
       <Card person={this.state.data[this.state.index]}/>
       <Controls next={this.next} previous={this.previous}/>
     </div>
   );
 }
}

export default App;
