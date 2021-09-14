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
      <NavDropdown.Item eventKey="en" >English</NavDropdown.Item>
      <NavDropdown.Item eventKey="tr" >Türkçe</NavDropdown.Item>
    </NavDropdown>
  )
}

export default Localication