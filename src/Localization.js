import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavDropdown} from 'react-bootstrap';

const Localication = () => {
  const { i18n } = useTranslation();

  function handleInput(eventKey) {
    i18n.changeLanguage(eventKey);
  }

  const { t } = useTranslation();

  return(
    <NavDropdown
      id="nav-dropdown-dark-example"
      title={t('language')}
      onSelect={handleInput}
    >
      <NavDropdown.Item eventKey="TR" >Türkçe</NavDropdown.Item>
      <NavDropdown.Item eventKey="EN" >English</NavDropdown.Item>
    </NavDropdown>
  )
}

export default Localication