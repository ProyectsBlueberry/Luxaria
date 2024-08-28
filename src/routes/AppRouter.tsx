import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../views/Welcome/Home';

import { useScroll } from '../hooks/useScroll';
import { NoticeOfPrivacy } from '../views/legal/Privacity';
import { TermsAndConditions } from '../views/legal/TermsConditions';
import { CookiePreferences } from '../views/legal/Cookies';




export const AppRouter = () => {
   useScroll('menu_section')
   return (
      <>
         <Routes>
            <Route path='*' element={<Navigate to="/" />} />
            <Route path='/' element={<Home/>} />

            <Route path='/politica-de-privacidad' element={<NoticeOfPrivacy/>}/>
            <Route path='/terminos-y-condiciones' element={<TermsAndConditions/>}/>
            <Route path='/politica-de-cookies' element={<CookiePreferences/>}/>
         </Routes>
      </>
   );
}