import { BtnAnimated } from '../../../components/BtnAnimated/BtnAnimated';
import { icon_custom_events_1, icon_custom_events_2, icon_custom_events_3, icon_custom_events_4, scroll_img_1, scroll_img_10, scroll_img_1_mobile, scroll_img_2, scroll_img_2_mobile, scroll_img_3, scroll_img_3_mobile, scroll_img_4, scroll_img_4_mobile, scroll_img_5, scroll_img_5_mobile, scroll_img_6, scroll_img_6_mobile, scroll_img_7, scroll_img_7_mobile, scroll_img_8, scroll_img_8_mobile, scroll_img_9, scroll_img_9_mobile, text_custom_events, text_custom_events_mobile } from '../../../data/img/img-data';
import { useTranslation } from 'react-i18next';
import './customEvents.scss';
import useMobile from '../../../hooks/useMobile';
import { useScrollOrRedirect } from '../../../hooks/useScrollOrRedirect';
import AnimatorFade from '../../../components/AnimatorFade/AnimatorFade';

export const CustomEvents = () => {
    const {t} = useTranslation();
    const {isMobile} = useMobile();
    const { scrollOrNavigate } = useScrollOrRedirect();
    const array_img = [
        {
            img: scroll_img_1,
        },
        {
            img: scroll_img_2,
        },
        {
            img: scroll_img_3,
        },
        {
            img: scroll_img_4,
        },
        {
            img: scroll_img_5,
        },
        {
            img: scroll_img_6,
        },
        {
            img: scroll_img_7,
        },
        {
            img: scroll_img_8,
        },
        {
            img: scroll_img_9,
        },
        {
            img: scroll_img_10,
        },
    ]
    const array_img_mobile = [
        {
            img: scroll_img_1_mobile,
        },
        {
            img: scroll_img_2_mobile,
        },
        {
            img: scroll_img_3_mobile,
        },
        {
            img: scroll_img_4_mobile,
        },
        {
            img: scroll_img_5_mobile,
        },
        {
            img: scroll_img_6_mobile,
        },
        {
            img: scroll_img_7_mobile,
        },
        {
            img: scroll_img_8_mobile,
        },
        {
            img: scroll_img_9_mobile,
        },
    ]
    

    return (
        <section className='section-custom-events' id='custom-events-id'>
            <AnimatorFade className='section-top'>
                <img src={isMobile ? text_custom_events_mobile.url : text_custom_events.url} alt={text_custom_events.alt} />
            </AnimatorFade>
            <div className='section-bottom'>
                <div className='section-left'>
                    <AnimatorFade className="section-static">
                        <h2>{t('custom_events.subtitle')}</h2>
                        <p>{t('custom_events.desc')}</p>
                        {
                            !isMobile &&
                            <BtnAnimated customHeight={3.281} customWith={13.542} onClick={()=>scrollOrNavigate('contact-id')} text={t('global.btn_contact')} type={2}/>
                        }
                    </AnimatorFade>
                </div>
                <AnimatorFade className='section-right'>
                    {isMobile ? <>
                        {array_img_mobile.map((item, index) => (
                            <div className='image' key={index}>
                                <img src={item.img.url} alt={item.img.alt} />
                            </div>
                        ))}
                    </> : <>
                        {array_img.map((item, index) => (
                            <div className='image' key={index}>
                                <div className="before"></div>
                                <img src={item.img.url} alt={item.img.alt} />
                            </div>
                        ))}
                    </>}
                </AnimatorFade>
                {
                    !isMobile &&
                <div className="absolute-icons">
                    <img className='img img-1' src={icon_custom_events_1.url} alt={icon_custom_events_1.alt} />
                    <img className='img img-2' src={icon_custom_events_2.url} alt={icon_custom_events_2.alt} />
                    <img className='img img-3' src={icon_custom_events_3.url} alt={icon_custom_events_3.alt} />
                    <img className='img img-4' src={icon_custom_events_4.url} alt={icon_custom_events_4.alt} />
                    <img className='img img-5' src={icon_custom_events_3.url} alt={icon_custom_events_3.alt} />
                </div>
                }
            </div>
        </section>
    );
};
