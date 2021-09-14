import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form'
import { changePageNameAction } from './actions/appAction'
import { connect } from 'react-redux';

class ContactPage extends Component {

  componentDidMount(){
    let tmpGlobalStates = this.props.appAction.globalStates;
    tmpGlobalStates = { ...tmpGlobalStates, pageName : "Contact" };
    this.props.changePageNameAction(tmpGlobalStates);
  }

  render() {
    const { t } = this.props;
    return (
        <Form>
          <Form.Group className="mb-3" >
          {t('contact-page')}
          </Form.Group>
       </Form>
  );
  }
}


const mapStateToProps = state => {
  return {
    appAction: state.appAction
  }
}


export default connect(mapStateToProps, { changePageNameAction })(withTranslation()(ContactPage));
