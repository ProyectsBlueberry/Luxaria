import { useTranslation } from 'react-i18next';
import { BtnAnimated } from '../../../components/BtnAnimated/BtnAnimated';
import { text_unforgettable, text_unforgettable_mobile, unforgettable_loop, unforgettable_loop_mobile } from '../../../data/img/img-data';
import './unforgettable.scss';
import useMobile from '../../../hooks/useMobile';
import { useScrollOrRedirect } from '../../../hooks/useScrollOrRedirect';
import AnimatorFade from '../../../components/AnimatorFade/AnimatorFade';

export const Unforgettable = () => {

    const {isMobile} = useMobile();
    const {t} = useTranslation();
    const { scrollOrNavigate } = useScrollOrRedirect();

    return(
        <section className='section-unforgettable'>
            <video src={isMobile ? unforgettable_loop_mobile.url : unforgettable_loop.url} id='index_video' muted autoPlay loop playsInline></video>
            <div className='body-unforgettable'>
                <AnimatorFade>
                    <h2>{t('unforgettable.title')}</h2>
                    <img src={isMobile ? text_unforgettable_mobile.url : text_unforgettable.url} alt={text_unforgettable.alt} />
                    <BtnAnimated customWithMobile={81.934} customHeightMobile={16.031} customHeight={3.281} customWith={13.542} onClick={()=>{scrollOrNavigate('contact-id')}} text={t('global.btn_contact')} type={2}/> 
                </AnimatorFade>
            </div>
        </section>
    );
}