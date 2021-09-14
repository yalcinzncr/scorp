import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import React from 'react';
import { connect } from 'react-redux';
import { openUserInfo } from './actions/userInfoModalAction';
import { isUserOpenAction } from './actions/appAction';
import { loginAction } from './actions/userLoginAction';
import { withTranslation } from 'react-i18next';

class ModalForm extends React.Component {

 
  handleSubmit = () => {
    
    let tmpGlobalState = this.props.appAction;
    tmpGlobalState = { ...tmpGlobalState, isUserLogin: false };
    this.props.isUserOpenAction(tmpGlobalState);
    this.handleClose();
  }

  handleShow = () => {
    let tmpUserInfoData = this.props.userInfo.userInfoForm;
    tmpUserInfoData = { ...tmpUserInfoData, isOpen: true };
    this.props.openUserInfo(tmpUserInfoData);
  }
  handleClose = () => {
    let tmpUserFormData = this.props.userInfo.userInfoForm;
    tmpUserFormData = { ...tmpUserFormData, isOpen: false };
    this.props.openUserInfo(tmpUserFormData);

  }

  render(){
    const { t } = this.props;
    return(
      <>
      {(this.props.appAction.globalStates.isUserLogin === true ) && (
        <Button variant="primary" onClick={this.handleShow}>{t('user-info')}</Button>
      )}
        <Modal 
          show={this.props.userInfo.userInfoForm.isOpen} 
          onHide={this.handleClose}
        >
        <Modal.Header closeButton>
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>{this.props.userLogin.userForm.email}</p>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="submit" onClick={() => this.handleSubmit()}>
                Logout
            </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    appAction: state.appAction,
    userLogin: state.userLogin
  }
}


export default connect(mapStateToProps, { openUserInfo, isUserOpenAction, loginAction })(withTranslation()(ModalForm));