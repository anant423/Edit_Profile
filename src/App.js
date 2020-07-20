import React, { Component } from "react";
import "./App.css";

const EmailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const ContactRegex = RegExp(/^\d{10}$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmployeeName: null,
      AdharNumber: null,
      PANNumber: null,
      Gender: null,
      Address: null,
      ContactNumber: null,
      Email: null,
      MaritalStatus: null,
      Nationality: null,
      Religion: null,
      EmergencyContactNumber: null,
      EmergencyPersonName: null,
      EmergencyPersonEmail: null,
      RelationWithEmergencyPerson: null,
      BankName: null,
      IFSCCode: null,
      BranchName: null,
      BranchAddress: null,
      AccountNumber: null,
      AccountType: null,
      NetBankingID: null,
      formErrors: {
        EmployeeName: "",
        AdharNumber: "",
        PANNumber: "",
        Gender: "",
        Address: "",
        ContactNumber: "",
        Email: "",
        MaritalStatus: "",
        Nationality: "",
        Religion: "",
        EmergencyContactNumber: "",
        EmergencyPersonName: "",
        EmergencyPersonEmail: "",
        RelationWithEmergencyPerson: "",
        BankName: "",
        IFSCCode: "",
        BranchName: "",
        BranchAddress: "",
        AccountNumber: "",
        AccountType: "",
        NetBankingID: ""
      }
    };
  }

  handleSubmit = e => {
    if (formValid(this.state)) {
      alert(`${this.state.EmployeeName} Profile Updated Successfully !!!!`);
      console.log(this.state);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      alert(`Please fill all the fields properly`);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "EmployeeName":
        formErrors.EmployeeName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "AdharNumber":
        formErrors.AdharNumber =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "PANNumber":
        formErrors.PANNumber =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Gender":
        formErrors.Gender =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Address":
        formErrors.Address =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "ContactNumber":
        formErrors.ContactNumber = ContactRegex.test(value)
          ? ""
          : "Invalid Contact Number";
        break;
      case "Email":
        formErrors.Email = EmailRegex.test(value)
          ? ""
          : "Invalid Email Address";
        break;
      case "MaritalStatus":
        formErrors.MaritalStatus =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Nationality":
        formErrors.Nationality =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Religion":
        formErrors.Religion =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "EmergencyContactNumber":
        formErrors.EmergencyContactNumber = ContactRegex.test(value)
          ? ""
          : "Invalid Contact Number";
        break;
      case "EmergencyPersonName":
        formErrors.EmergencyPersonName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "EmergencyPersonEmail":
        formErrors.EmergencyPersonEmail = EmailRegex.test(value)
          ? ""
          : "Invalid Email Address";
        break;
      case "RelationWithEmergencyPerson":
        formErrors.RelationWithEmergencyPerson =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "BankName":
        formErrors.BankName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "IFSCCode":
        formErrors.IFSCCode =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "BranchName":
        formErrors.BranchName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "BranchAddress":
        formErrors.BranchAddress =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "AccountNumber":
        formErrors.AccountNumber =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "AccountType":
        formErrors.AccountType =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "NetBankingID":
        formErrors.NetBankingID =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Edit Your Profile</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="EmployeeName">
              <label htmlFor="EmployeeName">Employee Name</label>
              <input
                className={formErrors.EmployeeName.length > 0 ? "error" : null}
                placeholder=" Employee Name"
                type="text"
                name="EmployeeName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.EmployeeName.length > 0 && (
                <span className="errorMessage">{formErrors.EmployeeName}</span>
              )}
            </div>
            <div className="AdharNumber">
              <label htmlFor="AdharNumber">Adhar Number</label>
              <input
                className={formErrors.AdharNumber.length > 0 ? "error" : null}
                placeholder="Adhar Number"
                type="text"
                name="AdharNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.AdharNumber.length > 0 && (
                <span className="errorMessage">{formErrors.AdharNumber}</span>
              )}
            </div>
            <div className="PANNumber">
              <label htmlFor="PANNumber">PAN Number</label>
              <input
                className={formErrors.PANNumber.length > 0 ? "error" : null}
                placeholder="PAN Number"
                type="text"
                name="PANNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.PANNumber.length > 0 && (
                <span className="errorMessage">{formErrors.PANNumber}</span>
              )}
            </div>
            <div className="Gender">
              <label htmlFor="Gender">Gender</label>
              <input
                className={formErrors.Gender.length > 0 ? "error" : null}
                placeholder="Gender"
                type="text"
                name="Gender"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Gender.length > 0 && (
                <span className="errorMessage">{formErrors.Gender}</span>
              )}
            </div>
            <div className="Address">
              <label htmlFor="Address">Address</label>
              <input
                className={formErrors.Address.length > 0 ? "error" : null}
                placeholder="Address"
                type="text"
                name="Address"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Address.length > 0 && (
                <span className="errorMessage">{formErrors.Address}</span>
              )}
            </div>
            <div className="ContactNumber">
              <label htmlFor="ContactNumber">Contact Number</label>
              <input
                className={formErrors.ContactNumber.length > 0 ? "error" : null}
                placeholder="Contact Number"
                type="text"
                name="ContactNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.ContactNumber.length > 0 && (
                <span className="errorMessage">{formErrors.ContactNumber}</span>
              )}
            </div>
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <input
                className={formErrors.Email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="Email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Email.length > 0 && (
                <span className="errorMessage">{formErrors.Email}</span>
              )}
            </div>
            <div className="MaritalStatus">
              <label htmlFor="MaritalStatus">Marital Status</label>
              <input
                className={formErrors.MaritalStatus.length > 0 ? "error" : null}
                placeholder="Marital Status"
                type="text"
                name="MaritalStatus"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.MaritalStatus.length > 0 && (
                <span className="errorMessage">{formErrors.MaritalStatus}</span>
              )}
            </div>
            <div className="Nationality">
              <label htmlFor="Nationality">Nationality</label>
              <input
                className={formErrors.Nationality.length > 0 ? "error" : null}
                placeholder="Nationality"
                type="text"
                name="Nationality"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Nationality.length > 0 && (
                <span className="errorMessage">{formErrors.Nationality}</span>
              )}
            </div>
            <div className="Religion">
              <label htmlFor="Religion">Religion</label>
              <input
                className={formErrors.Religion.length > 0 ? "error" : null}
                placeholder="Religion"
                type="text"
                name="Religion"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Religion.length > 0 && (
                <span className="errorMessage">{formErrors.Religion}</span>
              )}
            </div>
            <div className="EmergencyContactNumber">
              <label htmlFor="EmergencyContactNumber">
                Emergency Contact Number
              </label>
              <input
                className={
                  formErrors.EmergencyContactNumber.length > 0 ? "error" : null
                }
                placeholder="Emergency Contact Number"
                type="text"
                name="EmergencyContactNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.EmergencyContactNumber.length > 0 && (
                <span className="errorMessage">
                  {formErrors.EmergencyContactNumber}
                </span>
              )}
            </div>
            <div className="EmergencyPersonName">
              <label htmlFor="EmergencyPersonName">Emergency Person Name</label>
              <input
                className={
                  formErrors.EmergencyPersonName.length > 0 ? "error" : null
                }
                placeholder="Emergency Person Name"
                type="text"
                name="EmergencyPersonName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.EmergencyPersonName.length > 0 && (
                <span className="errorMessage">
                  {formErrors.EmergencyPersonName}
                </span>
              )}
            </div>
            <div className="EmergencyPersonEmail">
              <label htmlFor="EmergencyPersonEmail">
                Emergency Person Email
              </label>
              <input
                className={
                  formErrors.EmergencyPersonEmail.length > 0 ? "error" : null
                }
                placeholder="Emergency Person Email"
                type="text"
                name="EmergencyPersonEmail"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.EmergencyPersonEmail.length > 0 && (
                <span className="errorMessage">
                  {formErrors.EmergencyPersonEmail}
                </span>
              )}
            </div>
            <div className="RelationWithEmergencyPerson">
              <label htmlFor="RelationWithEmergencyPerson">
                Relation With Emergency Person
              </label>
              <input
                className={
                  formErrors.RelationWithEmergencyPerson.length > 0
                    ? "error"
                    : null
                }
                placeholder="Relation With Emergency Person"
                type="text"
                name="RelationWithEmergencyPerson"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.RelationWithEmergencyPerson.length > 0 && (
                <span className="errorMessage">
                  {formErrors.RelationWithEmergencyPerson}
                </span>
              )}
            </div>
            <div className="BankName">
              <label htmlFor="BankName">Bank Name</label>
              <input
                className={formErrors.BankName.length > 0 ? "error" : null}
                placeholder="Bank Name"
                type="text"
                name="BankName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.BankName.length > 0 && (
                <span className="errorMessage">{formErrors.BankName}</span>
              )}
            </div>
            <div className="IFSCCode">
              <label htmlFor="IFSCCode">IFSC Code</label>
              <input
                className={formErrors.IFSCCode.length > 0 ? "error" : null}
                placeholder="IFSC Code"
                type="text"
                name="IFSCCode"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.IFSCCode.length > 0 && (
                <span className="errorMessage">{formErrors.IFSCCode}</span>
              )}
            </div>
            <div className="BranchName">
              <label htmlFor="BranchName">Branch Name</label>
              <input
                className={formErrors.BranchName.length > 0 ? "error" : null}
                placeholder="Branch Name"
                type="text"
                name="BranchName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.BranchName.length > 0 && (
                <span className="errorMessage">{formErrors.BranchName}</span>
              )}
            </div>
            <div className="BranchAddress">
              <label htmlFor="BranchAddress">Branch Address</label>
              <input
                className={formErrors.BranchAddress.length > 0 ? "error" : null}
                placeholder="Branch Address"
                type="text"
                name="BranchAddress"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.BranchAddress.length > 0 && (
                <span className="errorMessage">{formErrors.BranchAddress}</span>
              )}
            </div>
            <div className="AccountNumber">
              <label htmlFor="AccountNumber">Account Number</label>
              <input
                className={formErrors.AccountNumber.length > 0 ? "error" : null}
                placeholder="Account Number"
                type="text"
                name="AccountNumber"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.AccountNumber.length > 0 && (
                <span className="errorMessage">{formErrors.AccountNumber}</span>
              )}
            </div>
            <div className="AccountType">
              <label htmlFor="AccountType">Account Type</label>
              <input
                className={formErrors.AccountType.length > 0 ? "error" : null}
                placeholder="Account Type"
                type="text"
                name="AccountType"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.AccountType.length > 0 && (
                <span className="errorMessage">{formErrors.AccountType}</span>
              )}
            </div>
            <div className="NetBankingID">
              <label htmlFor="NetBankingID">Net Banking ID</label>
              <input
                className={formErrors.NetBankingID.length > 0 ? "error" : null}
                placeholder="Net Banking ID"
                type="text"
                name="NetBankingID"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.NetBankingID.length > 0 && (
                <span className="errorMessage">{formErrors.NetBankingID}</span>
              )}
            </div>
            <div className="Edit">
              <button type="submit">Edit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
