import React  from 'react';
import { Navbar} from 'react-bootstrap'

import { useTranslation } from 'react-i18next';

const Footer = () => {
const { t } = useTranslation();
  
  return (
    <div>
    <div className="row">
        <div className="col-md-12">
                <Navbar fixed = "bottom" bg="dark" variant="dark" expand="lg" >
                    <Navbar.Brand href="#home">
                    {t('footer')}
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Navbar>  
        </div>
    </div>
</div>
  );
}

export default Footer
