import React, { Component } from 'react';
import ProjectItem from "./projectItem"
import ProjectItems from './projectItem';

class ProjectTrans extends Component {

onDelete(id){
    console.log(id);
    this.props.deleteElement(id);
}




  render() {

    let projectItem;

    projectItem = this.props.transArr.map(
        (items)=>{
            return(

                <ProjectItems itemsTrans = {items}  deleteElement = {this.onDelete.bind(this)}/>


            )
        }
    )



    return (
      <div className="App">
        <h1>{console.log(this.props.transArr)}</h1>
        {projectItem}
      </div>


    );
  }
}

export default ProjectTrans;
