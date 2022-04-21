import { selectLanguage } from '../happyCounter/happyCounterSlice';
import { useSelector } from 'react-redux';

export function Footer() {
  const language = useSelector(selectLanguage);

  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        backgroundColor: '#3e4758',
        width: '100%',
        height: '50px',
        color: 'white',
        marginTop: '20px',
      }}
    >
      {language === 'En'
        ? 'Copyright © 2022 Volodsher'
        : '© 2022, Володшер. Усі права захищені.'}
    </footer>
  );
}

export default Footer;
