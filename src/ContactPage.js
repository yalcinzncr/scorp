import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/button'
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import validator from "validator";
import countryList from "./countryJsonData/countryList.json";
import { contactAction } from './actions/contactAction';
import { changePageNameAction } from './actions/appAction'
import { connect } from 'react-redux';

class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.state = { validated: false };
  }

  componentDidMount(){
    let tmpGlobalStates = this.props.appAction.globalStates;
    tmpGlobalStates = { ...tmpGlobalStates, pageName : "contact" };
    this.props.changePageNameAction(tmpGlobalStates);
  }

  handleSubmit = (event) => {    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ validated: true });
    } else {
      this.props.contactAction(this.props.contactUser.contactUserForm);

      // Hot Module Replacement, so I used alert instead of console.log
      // we can create saga.js then post data with axios a service

      alert("name : " + this.props.contactUser.contactUserForm.name
      +"\nemail : "+ this.props.contactUser.contactUserForm.email
      +"\nphone number : "+ this.props.contactUser.contactUserForm.phoneNumber
      +"\ncountry : "+ this.props.contactUser.contactUserForm.country
      +"\ntext : "+ this.props.contactUser.contactUserForm.text);
      
    }
  }
  
  handleChange = (e) => {
    const nameItem = e.target.attributes.type.value;
    nameItem == "email" ?  !validator.isEmail(e.target.value) ?  this.setState({ validated: true }) : '' : ''
    // can write phone number or etc. condition for validation

    let tmpContactUserFormData = this.props.contactUser.contactUserForm;
    tmpContactUserFormData = { ...tmpContactUserFormData, [nameItem] : e.target.value };
    this.props.contactAction(tmpContactUserFormData);

  }


  render() {
    const { t } = this.props;
    return (
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>{t('contact-name')}</Form.Label>
            <Form.Control type="name" placeholder="name" onChange={this.handleChange} value = {this.props.contactUser.contactUserForm.name} required />
            <Form.Control.Feedback type="invalid">
              Please provide a name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>{t('contact-email')}</Form.Label>
            <Form.Control type="email"  onChange={this.handleChange} value = {this.props.contactUser.contactUserForm.email} placeholder="email" required />
            <Form.Control.Feedback type="invalid">
            Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>{t('contact-phone-number')}</Form.Label>
            <Form.Control type="phoneNumber" onChange={this.handleChange} value = {this.props.contactUser.contactUserForm.phoneNumber} placeholder="phoneNumber" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="3"  controlId="validationCustom04">
            <Form.Label>{t('contact-country-list')}</Form.Label>
            <Form.Control
              as="select"
              type = "country"
              custom
              onChange={this.handleChange} 
              value = {this.props.contactUser.contactUserForm.country}
            >
              {countryList.map((r , i) =>
                <option
                  key={i}
                  value={r.id}>
                  {r.name}
                </option>
              )}
            </Form.Control>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>{t('contact-text')}</Form.Label>
              <Form.Control type = "text" as="textarea" onChange={this.handleChange} value = {this.props.contactUser.contactUserForm.text} placeholder="text here" required />
              <Form.Control.Feedback type="invalid">
                Please provide a text for us.
              </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Button type="submit">{t('contact-submit-button')}</Button>
      </Form>
  );
  }
}


const mapStateToProps = state => {
  return {
    appAction: state.appAction,
    contactUser : state.contactUser,
    userLogin: state.userLogin
  }
}

export default connect(mapStateToProps, { changePageNameAction, contactAction })(withTranslation()(ContactPage));
