import React from 'react'
import EmployeeList from './EmployeeList'
import EmployeeForm from './EmployeeForm'
import EmployeeEdit from './EmployeeEdit'
import { connect } from 'react-redux'
import { addEmployeeBtnClicked } from '../actions/employeeActions'
import {
  AddButton,
} from './formStyle'

class Employee extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isSaveBtnClicked: false }

    this.onClick = this.onClick.bind(this)

    this.Add = this.Add.bind(this)
  }

  Add() {
    this.setState({ isSaveBtnClicked: false })
  }

  onClick(e) {
    const isSaveBtnClicked = true
    this.setState({ isSaveBtnClicked })
    this.props.addEmployeeBtnClicked()
  }
  render() {
    return (
      <div><br/>
        <h2>Add employee form</h2><br/>
        {this.props.edit === true && (
          <h3 className='alert alert-success'>Edited Success!</h3>
        )}

        {this.state.isSaveBtnClicked === false &&
          this.props.isEditBtnClicked === false && (
            <AddButton className='btn btn-primary' onClick={this.onClick}>
              Add Employee
            </AddButton>
          )}
        <br />
        <br />
        {this.state.isSaveBtnClicked === true && (
          <EmployeeForm AddClicked={this.Add} />
        )}
        {this.state.isSaveBtnClicked === false &&
          this.props.isEditBtnClicked === false && (
            <EmployeeList EditClicked={this.editBtn} />
          )}
        {this.props.isEditBtnClicked && <EmployeeEdit />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isEditBtnClicked: state.employeeReducer.isEditBtnClicked,
  edit: state.employeeReducer.edit,
})

export default connect(mapStateToProps, { addEmployeeBtnClicked })(Employee)
