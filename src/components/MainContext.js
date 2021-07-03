import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import AuthContext from '../context/AuthContext';

const MainContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);

  return (
    <main className={theme}>
      {!auth ? <p>{texts.mainWelcome}</p> : <p>{texts.mainHello}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
