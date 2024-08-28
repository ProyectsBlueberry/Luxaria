
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { I18nextProvider } from 'react-i18next';
import i18n from './I18n/i18n';
import 'swiper/css';
import './App.css'
import { Provider } from 'react-redux';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import store from './context/store';
import { Footer } from './components/Footer/Footer';
function App() {

   return (
      <I18nextProvider i18n={i18n}>
         <Router>
            <Provider store={store}>
               <HeaderMenu type={1} />
               <AppRouter />
               {/* <BtnWhatsapp/> */}
               <Footer />

            </Provider>
         </Router>
      </I18nextProvider>
   );
}

export default App