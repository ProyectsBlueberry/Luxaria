import { useEffect, useState } from 'react';
// import useMobile from '../../../../hooks/useMobile';
import './alert_modal_styles.scss';
import { useTranslation } from 'react-i18next';
import AnimatorFade from '../../../AnimatorFade/AnimatorFade';
// import { logo_duo_color } from '../../../../../data/img/img-data';



interface Props {
   visible:    boolean;
   title:      string;
   message:    string;
   type: number;
   onPress:    () => void;
}
export const AlertModal = ({ visible, title, message, onPress, type }: Props) => {

   const [isVisible, setIsVisble] = useState(visible);
   const { t } = useTranslation();
   // const { isMobile } = useMobile();

   useEffect(() => {
      setIsVisble(visible);
   }, [visible]);


   return (
      isVisible && (
         <>
            <AnimatorFade className={ type == 1 ? 'card_main_container' : 'card_main_container card_main_container-2'}>
               <div className='content_modal'>
                  {/* <img src={logo_duo_color.url} alt={logo_duo_color.alt} /> */}
                  <h1 className='title_modal'>{title}</h1>
                  <p className='message'>{message}</p>
                  <button className='button_label_modal' onClick={onPress}>{t('global.btn_close')}</button>
               </div>               
            </AnimatorFade>
         </>
      )
   );
}