import React, { Component } from "react";
import firebase from 'firebase/app';
import 'firebase/database';

class CRUD extends Component {
 
    constructor(){
       super();
       this.state = {
          items:[],
          item_id:'',
          title:'',
          description:''
       }
   
       this.handleChange = this.handleChange.bind(this)
       this.handleUpdate = this.handleUpdate.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
   
    }
   
    componentDidMount(){
      const itemsRef = firebase.database().ref('items');
      itemsRef.on('value',(snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for(let item in items){
            newState.push({
                item_id:item,
                title:items[item].title,
                description:items[item].description
            })
          }
          this.setState({
            items:newState
          })
      })
    }
   
    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }
   
   
    handleSubmit(e){
      e.preventDefault();
   
      if(this.state.item_id != ''){
        return this.updateItem();
      }
   
      const itemsRef = firebase.database().ref('items')
      const item = {
         title : this.state.title,
         description : this.state.description
      }
      itemsRef.push(item)
      this.setState({
         item_id:'',
         title:'',
         description:''
      })
   }
   
   
    handleUpdate = (item_id = null , title = null , description = null) => {
      this.setState({item_id,title,description})
    }
   
    updateItem(){
   
        var obj = { title:this.state.title,description:this.state.description }
   
        const itemsRef = firebase.database().ref('/items')
   
        itemsRef.child(this.state.item_id).update(obj);
   
        this.setState({
          item_id:'',
          title:'',
          description:''
        })
   
    }
   
    removeItem(itemId){
      const itemsRef = firebase.database().ref('/items');
      itemsRef.child(itemId).remove();
   }
   
    render() {
      return (
        <div className="app">
            
            <div className="container" >
            <form  onSubmit={this.handleSubmit}>
              <div className="row">
                  <div className="col-8">
                    <div className="form-row">
                      <div className="col-10">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleChange} value={this.state.title}/>
                      </div>
                      <div className="col-6">
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleChange} value={this.state.description}/>
                      </div>
                      <div className="col">
                            <button class="btn btn-primary" > Save</button>      
                      </div>
                    </div>
                  </div>
              </div>
            </form>
          <hr/>
                <table className="table table-sm table-bordered">
                      <tr className="thead-dark">
                        <th width="20%">Title</th>
                        <th width="70%">Description</th>
                        <th width="5%">Edit</th>
                        <th width="5%">Delete</th>
                      </tr>
                      {
                          this.state.items.map((item) => {
                            return (
                                <tr>
                                  <td>{item.title}</td>
                                  <td>{item.description}</td>
                                  <td><button className="btn btn-warning btn-sm" onClick={() => this.handleUpdate(item.item_id,item.title,item.description)}>Edit</button></td>
                                  <td><button className="btn btn-danger btn-sm" onClick={() => this.removeItem(item.item_id)}>Delete</button></td>
                                </tr>
                            )
                          })
                      }
                  </table>
            </div>
        </div>
      );
    }
  }
   
  export default CRUD;