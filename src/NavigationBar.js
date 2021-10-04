import Localization from './Localization';
import LoginModal from './LoginModal';
import UserInfo from './UserInfo';
import { Navbar,Nav} from 'react-bootstrap'

import { isUserOpenAction } from './actions/appAction'
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import loveLogo from './images/love.png';

class NavigationBar extends Component  {

  render(){
    const { t } = this.props;
      return (
        <div>
        <div className="row">
            <div className="col-md-12">
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand>
                        <img src={loveLogo} width="60" height="40" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        </Navbar.Brand>
                        <Navbar.Brand>
                          <p>{t(this.props.appAction.globalStates.pageName)}</p>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                              <Nav.Link href="/">{t('home')}</Nav.Link>
                              <Nav.Link href="/contact">{t('contact')}</Nav.Link>
                            </Nav>
                            <Localization/>
                            <LoginModal/>
                            <UserInfo/>
                        </Navbar.Collapse>
                    </Navbar>  
            </div>
        </div>
    </div>
      );
  };
}

const mapStateToProps = state => {
  return {
    appAction: state.appAction
  }
}

export default connect(mapStateToProps, { isUserOpenAction })(withTranslation()(NavigationBar));
