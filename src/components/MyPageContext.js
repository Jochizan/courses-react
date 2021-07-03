import Footer from './FooterContext';
import Header from './HeaderContext';
import Main from './MainContext';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { AuthProvider } from '../context/AuthContext';

const MyPageContext = () => {
  return (
    <div className='my-page'>
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <Main />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};

export default MyPageContext;
