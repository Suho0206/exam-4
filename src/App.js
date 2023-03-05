import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import "./Assets/main.css";



export default class App extends Component {
  state = {
    modalVisible: false,
    title: '',
    users: [
      {
        title: 'Task1',
        button: 'edit',
        button2: 'delete'
      }
    ]

  }

  deleteusers = (index) => {
    this.state.users.splice(index, 1)
    this.setState({
      users: this.state.users
    })
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  submitForm = (event) => {
    event.preventDefault();
    let FirstName = event.target[0].value
    this.addusers(FirstName)
    console.log(event.target[0].value)
  }

  addOpenUser = () => {
    const { users, title, button, button2 } = this.state
    users.push({ title: title, button: button, button2: button2 })
    this.setState({
      users,
      title: ''
    })
  }

  changeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  render() {
    const { modalVisible,users ,title} = this.state
    return (
      <div className='container'>
        <div className='row mt-5'>
          {/* 1-Bo'lim */}
          <div id='1' className='col-md-3'>
            <div className='card'>
              <div className='card-header text-center fs-1'><h3>open</h3></div>
              <div className='card-body'>
                
               {
                 users.map((item,index)=>{
                   return <div key={index} className='d-flex align-items-center'>
                   
           
             <h4 className='me-5 fs-4'>{item.title}</h4>
                 <button className='btn btn-primary mx-2 ms-5 mt-1'>edit</button>
                 <button className='btn btn-danger' onClick={() => this.deleteusers(index)}>delete</button>
           
                </div>
               })
               
                }
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success' onClick={this.toggleModal} >Add users</button>
              </div>
            </div>
          </div>
         

          {/* 2-Bo'lim */}

          <div id='2' className='col-md-3'>
            <div className='card'>
              <div className='card-header text-center fs-1'><h3>pending</h3></div>
              <div className='card-body'>

                {
                 users.map((item,index)=>{
                   return <div key={index} className='d-flex align-items-center'>
                   
                  <h4 className='me-5 fs-4'>{item.title}</h4>
                 <button className='btn btn-primary mx-2 ms-5 mt-1'>edit</button>
                 <button className='btn btn-danger' onClick={() => this.deleteusers(index)}>delete</button>
                </div>
               })
               
                }
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success' onClick={this.toggleModal}>Add users</button>
              </div>
            </div>
          </div>

          {/* 3-Bo'lim */}

          <div id='3' className='col-md-3'>
            <div className='card'>
              <div className='card-header text-center fs-1'><h3>inproge</h3></div>
              <div className='card-body '>
              {
                 users.map((item,index)=>{
                   return <div key={index} className='d-flex align-items-center'>
                   
                  <h4 className='me-5 fs-4'>{item.title}</h4>
                 <button className='btn btn-primary mx-2 ms-5 mt-1'>edit</button>
                 <button className='btn btn-danger' onClick={() => this.deleteusers(index)}>delete</button>
                </div>
               })
               
                }
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success' onClick={this.toggleModal}>Add users</button>
              </div>
            </div>
          </div>

          {/* 4-Bo'lim */}
          <div id='4' className='col-md-3'>
            <div className='card'>
              <div className='card-header text-center fs-1'><h3>progress</h3></div>
              <div className='card-body '>
              {
                 users.map((item,index)=>{
                   return <div key={index} className='d-flex align-items-center'>
                   
                  <h4 className='me-5 fs-4'>{item.title}</h4>
                 <button className='btn btn-primary mx-2 ms-5 mt-1'>edit</button>
                 <button className='btn btn-danger' onClick={() => this.deleteusers(index)}>delete</button>
                </div>
               })
               
                }
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-success' onClick={this.toggleModal}>Add users</button>
              </div>
            </div>
          </div>

          {/* MODAL BO"LIMI */}
          <Modal isOpen={modalVisible} toggle={this.toggleModal}>
            <ModalHeader>add task</ModalHeader>
            <ModalBody>
            <input type="text" value={title} className='form-control my-1' placeholder='title' onChange={this.changeTitle} />
              <select class="form-control">
              <option id='1' value="Open">Open</option>
                <option id='2' value="Pending">Pending</option>
                <option id='3' value="Inproge">Inproge</option>
                <option id='4' value="Progress">Progress</option>
              </select>
            </ModalBody>
            <ModalFooter>
            <button className='btn btn-danger' form='form' onClick={this.toggleModal}>close</button>
              <button className='btn btn-info' form='form' onClick={this.addOpenUser}>save</button>
            </ModalFooter>
          </Modal>

        </div>
      
      </div>
    )
  }
}