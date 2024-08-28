import { useTranslation } from 'react-i18next';
import useMobile from '../../../hooks/useMobile';
import './mainBanner.scss';
import { logo_luxaria, main_banner_loop, main_banner_loop_mobile } from '../../../data/img/img-data';
import AnimatorFade from '../../../components/AnimatorFade/AnimatorFade';

export const MainBanner = () => {
   const { isMobile } = useMobile();
   const { t } = useTranslation();

   return (

      <section className='banner-principal' id="index-id">
         <video src={isMobile ? main_banner_loop_mobile.url : main_banner_loop.url} id='index_video' muted autoPlay loop playsInline></video>
         <div className='content-banner-principal'>
            <AnimatorFade>
               <h1>{t('main_banner.title')}</h1>
               <img src={logo_luxaria.url} alt={logo_luxaria.alt} />
            </AnimatorFade>
         </div>
      </section>
   );
};