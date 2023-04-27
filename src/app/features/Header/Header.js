import { useSelector, useDispatch } from 'react-redux';
import {
  selectLanguage,
  changeLanguage,
} from '../happyCounter/happyCounterSlice';
import { Button, ButtonGroup } from '@mui/material';

export function Header() {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const handleLanguageEn = () => {
    return dispatch(changeLanguage('En'));
  };

  const handleLanguageUa = () => {
    return dispatch(changeLanguage('Ua'));
  };

  return (
    <header className="app-header">
      {language === 'En' ? (
        <h1>Are you happy at this moment?</h1>
      ) : (
        <h1>Ви зараз щасливі?</h1>
      )}
      <ButtonGroup
        size="small"
        color="secondary"
        variant="outlined"
        aria-label="outlined button group"
        // sx={{
        //   position: 'absolute',
        //   right: '20px',
        //   // bottom: '5px',
        // }}
        className="languageBotton"
      >
        <Button onClick={() => handleLanguageUa()}>Укр</Button>
        <Button onClick={() => handleLanguageEn()}>En</Button>
      </ButtonGroup>
    </header>
  );
}

export default Header;
