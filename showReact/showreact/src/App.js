import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectTrans from './components/projecttrans';
import uuid from "uuid";

class App extends Component {

constructor(){
  super();
  this.state = {
    showArr:[]
  }
  this.tempArr = [];

}



i = 0;
showOnPage(){
let objname = this.refs.name.value;
let objage = this.refs.age.value;
let name,age;
let obj = {
  id:uuid.v4(),
  name:objname,
  age:objage
}

this.tempArr[this.i] = obj;
this.setState({
  showArr:this.tempArr
})

console.log(this.tempArr);
this.i++;
}

onDelete(id){
  console.log(id);
  let allProjects = this.state.showArr;
  let index = allProjects.findIndex(oneProject => oneProject.id == id);
  allProjects.splice(index,1);

  //this.tempArr.splice(id,1);
  this.setState({
    showArr:allProjects
  })
  this.i--;
}




  render() {
    return (
      <div className="App">

      Name<input type="text" ref = "name" /><br/>
    Age<input type="text" ref = "age" /><br/>
      <button type="button" onClick = {this.showOnPage.bind(this)}>Show</button>
      <ProjectTrans transArr = {this.state.showArr} deleteElement = {this.onDelete.bind(this)} />
     
      </div>


    );
  }
}

export default App;
