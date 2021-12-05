import {
  takeEvery,
  call,
  put,
  // , delay
} from 'redux-saga/effects'
import axios from 'axios'
import {
  FETCH_EMPLOYEES,
  // EDITED,
  FETCH_EMPLOYEES_ASYNC,
  // FETCH_EmployeeS_ASYNC_ERROR,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_ASYNC,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_ASYNC,
  EDIT_EMPLOYEE_ASYNC,
} from '../actions/actionTypes'
import { fetchEmployees } from './api'

export default function* rootWatcher() {
  yield takeEvery(FETCH_EMPLOYEES, fetchEmployeeAsync)
  yield takeEvery(ADD_EMPLOYEE, addEmployeeAsync)
  yield takeEvery(EDIT_EMPLOYEE, editEmployeeAsync)
  yield takeEvery(DELETE_EMPLOYEE, deleteEmployeeAsync)
}

export function* fetchEmployeeAsync() {
  let response = yield call(fetchEmployees)
  yield put({ type: FETCH_EMPLOYEES_ASYNC, payload: response.data })
}

export function* addEmployeeAsync(action) {
  yield axios.post(`http://localhost:4000/api/employee/create`, {
    name: action.payload.name,
    salary: action.payload.salary,
    gender: action.payload.gender,
    birthDate: action.payload.birthDate,
  })

  yield put({ type: ADD_EMPLOYEE_ASYNC, payload: action.payload })
}

export function* editEmployeeAsync(action) {
  yield axios.put(
    'http://localhost:4000/api/employee/' + action.payload.id,
    action.payload
  )
  yield put({ type: EDIT_EMPLOYEE_ASYNC, payload: action.payload })
  const data = yield call(fetchEmployees)
  yield put({ type: FETCH_EMPLOYEES_ASYNC, payload: data.data })
}

export function* deleteEmployeeAsync(action) {
  yield axios.delete('http://localhost:4000/api/employee/' + action.payload)
  yield put({ type: DELETE_EMPLOYEE_ASYNC, payload: action.payload })
  console.log(action.payload)
}
