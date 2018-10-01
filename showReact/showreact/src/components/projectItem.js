import React, { Component } from 'react';


class ProjectItems extends Component {


onDelete(id){

    console.log(id);
    this.props.deleteElement(id);

}


  render() {
    return (
      <div className="App">
        <table>
            <tr>
                <td>{this.props.itemsTrans.name}</td>
                <td>{this.props.itemsTrans.age}</td>
                <td><button type="button" onClick = {this.onDelete.bind(this,this.props.itemsTrans.id)}>Delete</button></td>
            </tr>
            </table>

      </div>


    );
  }
}

export default ProjectItems;
