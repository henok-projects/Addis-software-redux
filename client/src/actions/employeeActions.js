import {
  FETCH_EMPLOYEES,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_MODE,
  FETCH_EMPLOYEE_BY_ID,
  ADD_EMPLOYEE_BUTTON_CLICKED,
} from './actionTypes'



export const fetchEmployees = () => ({
  type: FETCH_EMPLOYEES,
})

export const fetchEmployeeById = (id) => ({
  type: FETCH_EMPLOYEE_BY_ID,
  payload: id,
})


export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
})

export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  payload: employee,
})

export const deleteEmployee = (id) => ({
  type: DELETE_EMPLOYEE,
  payload: id,
})

export const editMode = () =>
(
    {
        type:EDIT_MODE
    }
)

export const addEmployeeBtnClicked = () => ({
  type: ADD_EMPLOYEE_BUTTON_CLICKED,
})