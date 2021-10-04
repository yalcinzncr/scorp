import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from './actions/userLoginAction';
import { isUserOpenAction } from './actions/appAction';
import { withTranslation } from 'react-i18next';
import { contactAction } from './actions/contactAction';

class ModalForm extends React.Component {

  handleSubmit = () => {
    let tmpUserFormData = this.props.userLogin.userForm;
    tmpUserFormData = { ...tmpUserFormData, isOpen: true };
    this.props.loginAction(tmpUserFormData);

    // contact form name and email update when user login
    
    let tmpContactUserFormData = this.props.contactUser.contactUserForm;
    tmpContactUserFormData = { ...tmpContactUserFormData, name : this.props.userLogin.userForm.name };
    tmpContactUserFormData = { ...tmpContactUserFormData, email : this.props.userLogin.userForm.email };
    this.props.contactAction(tmpContactUserFormData);

    let tmpGlobalState = this.props.appAction;
    tmpGlobalState = { ...tmpGlobalState, isUserLogin: true };
    this.props.isUserOpenAction(tmpGlobalState);
    this.handleClose();
  }


  handleChange = (e) => {
    const nameItem = e.target.attributes.type.value;
    let tmpUserFormData = this.props.userLogin.userForm
    tmpUserFormData = { ...tmpUserFormData, [nameItem] : e.target.value };
    this.props.loginAction(tmpUserFormData);
  }
  handleShow = () => {
    let tmpUserFormData = this.props.userLogin.userForm;
    tmpUserFormData = { ...tmpUserFormData, isOpen: true };
    this.props.loginAction(tmpUserFormData);
  }
  handleClose = () => {
    let tmpUserFormData = this.props.userLogin.userForm;
    tmpUserFormData = { ...tmpUserFormData, isOpen: false };
    this.props.loginAction(tmpUserFormData);

  }

  render(){
    const { t } = this.props;
    return(
      <>
      {(this.props.appAction.globalStates.isUserLogin === false ) && (
        <Button variant="primary" onClick={this.handleShow}>{t('login')}</Button>
      )}
        <Modal 
          show={this.props.userLogin.userForm.isOpen} 
          onHide={this.handleClose}
        >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name"  onChange={this.handleChange} value={this.props.userLogin.userForm.name} placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"   onChange={this.handleChange} value={this.props.userLogin.userForm.email} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  onChange={this.handleChange} value={this.props.userLogin.userForm.password} placeholder="Password" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" onClick={() => this.handleSubmit()}>
                Submit
            </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    userLogin: state.userLogin,
    contactUser : state.contactUser,
    appAction: state.appAction
  }
}

export default connect(mapStateToProps, { loginAction, isUserOpenAction, contactAction  })(withTranslation()(ModalForm));