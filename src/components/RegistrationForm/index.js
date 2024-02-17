import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameErrMsg: false,
    showLastNameErrMsg: false,
    isSubmitted: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({showFirstNameErrMsg: true, showLastNameErrMsg: true})
    } else if (lastName === '') {
      this.setState({showLastNameErrMsg: true})
    } else if (firstName === '') {
      this.setState({showFirstNameErrMsg: true})
    }
  }

  submitAnotherResponse = () => {
    this.setState({isSubmitted: false, firstName: '', lastName: ''})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  checkFirstName = event => {
    if (event.target.value === '') {
      this.setState({showFirstNameErrMsg: true})
    } else {
      this.setState({showFirstNameErrMsg: false})
    }
  }

  checkLastName = event => {
    if (event.target.value === '') {
      this.setState({showLastNameErrMsg: true})
    } else {
      this.setState({showLastNameErrMsg: false})
    }
  }

  renderRegistrationForm = () => {
    const {firstName, lastName} = this.state
    const {showFirstNameErrMsg, showLastNameErrMsg} = this.state
    const firstNameMsgClassName = showFirstNameErrMsg ? 'error-message' : ''
    const lastNameMsgClassName = showLastNameErrMsg ? 'error-message' : ''
    const firstNameInputError = showFirstNameErrMsg ? 'error' : ''
    const lastNameInputError = showLastNameErrMsg ? 'error' : ''
    return (
      <form className="registration-form" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          id="firstName"
          placeholder="First name"
          type="text"
          className={`firstname ${firstNameInputError}`}
          onChange={this.onChangeFirstName}
          onBlur={this.checkFirstName}
          value={firstName}
        />
        {showFirstNameErrMsg && (
          <p className={firstNameMsgClassName}>Required</p>
        )}
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          id="lastName"
          placeholder="Last name"
          type="text"
          className={`lastname ${lastNameInputError}`}
          onChange={this.onChangeLastName}
          onBlur={this.checkLastName}
          value={lastName}
        />
        {showLastNameErrMsg && <p className={lastNameMsgClassName}>Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderSubmittedForm = () => (
    <div className="submit-success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        className="submit-another-response-button"
        type="button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="registration-form-bg-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted
          ? this.renderSubmittedForm()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
