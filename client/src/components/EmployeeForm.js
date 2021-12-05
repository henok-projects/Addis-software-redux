import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../actions/employeeActions'
import 'bootstrap/dist/css/bootstrap.css'
import {
  
  FormContainer,
  Input,
  BoxContainer,
  SubmitButton,
} from './formStyle'

class EmployeeForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault()
    const name = this.getFullName.value
    const birthDate = this.getDateOfBirth.value
    const gender = this.getgender.value
    const salary = this.getsalary.value

    const employee = {
      name: name,
      birthDate: birthDate,
      gender: gender,
      salary: salary,
    }

    this.props.addEmployee(employee)
    this.props.AddClicked()
  }

  render() {
    return (
      <BoxContainer>
            <br />
        <div className='container'>
          <FormContainer onSubmit={this.onSubmit} className='form'>
            <div className='form-group'>
              <br />
              <Input
                required
                className='form-control-sm'
                placeholder='full name'
                id='fullName'
                type='text'
                ref={(Input) => (this.getFullName = Input)}
              />
            </div>
            <div className='form-group'>
             <br />
              <Input
                required
                className='form-control-sm'
                placeholder='birth'
                id='dob'
                type='text'
                ref={(Input) => (this.getDateOfBirth = Input)}
              />
            </div>
            <div className='form-group'>
             <br />
              <Input
                required
                className='form-control-sm'
                placeholder='gender'
                id='gender'
                type='text'
                ref={(Input) => (this.getgender = Input)}
              />
            </div>
            <div className='form-group'>
             <br />
              <Input
                required
                className='form-control-sm'
                placeholder='salary'
                id='salary'
                type='text'
                ref={(Input) => (this.getsalary = Input)}
              />
            </div>
            <SubmitButton className='btn btn-primary'>
              Add Employee
            </SubmitButton>
          </FormContainer>
        </div>
      </BoxContainer>
    )
  }
}

export default connect(null, { addEmployee })(EmployeeForm)
