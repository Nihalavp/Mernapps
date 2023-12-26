import React from 'react'
import {Col,Form,FormGroup} from 'react-bootstrap';
function Contactactaddform() {
  return (
    <Col md='4'>
    <Form>
    <FormGroup>
    <label>Name</label>
    <input type='text' id='txtName' placeholder='name'></input>
    </FormGroup>
    <FormGroup>
    <label>Email</label>
    <input type='text' id='txtEmail' placeholder='Email'></input>
    </FormGroup>
    <FormGroup>
    <label>Mobile</label>
    <input type='text' id='txtMobile' placeholder='Mobile'></input>

    </FormGroup>
    <FormGroup>
    <input type='button'value='Add' className='btn btn-primary'></input>
    </FormGroup>
    </Form>
    </Col>
  )
}

export default Contactactaddform
