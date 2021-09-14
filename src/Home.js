import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { withTranslation } from 'react-i18next';
import { changePageNameAction } from './actions/appAction'
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount(){
    let tmpGlobalStates = this.props.appAction.globalStates;
    tmpGlobalStates = { ...tmpGlobalStates, pageName : "Home" };
    this.props.changePageNameAction(tmpGlobalStates);
  }
  render() {
    const { t } = this.props;

    return (
      <Form>
        <Form.Group className="mb-3" >
        {t('welcome')}
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

export default connect(mapStateToProps, { changePageNameAction })(withTranslation()(Home));
