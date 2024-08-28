import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './whoWeAre.scss';
import { text_who_we_are, text_who_we_are_mobile, who_we_are, who_we_are_mobile } from '../../../data/img/img-data';
import AnimatorFade from '../../../components/AnimatorFade/AnimatorFade';
import useMobile from '../../../hooks/useMobile';

export const WhoWeAre = () => {
    const { t } = useTranslation();
    const { isMobile } = useMobile();
    useEffect(() => {
        const imgShadowElement = document.querySelector('.section-right') as HTMLElement;
        let grado = 0;

        const animateGradient = () => {
            grado = (grado + 1) % 360;
            imgShadowElement.style.setProperty('--grado', `${grado}deg`);
        };

        const intervalId = setInterval(animateGradient, 16);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <section className='section-who-we-are' id='who-we-are-id'>
            <div className="section-top">
                <img src={isMobile ? text_who_we_are_mobile.url : text_who_we_are.url} alt={text_who_we_are.alt} />
            </div>
            {
                !isMobile &&
                <AnimatorFade className="section-left">
                    <h2>{t('who_we_are.title')}</h2>
                    <p>{t('who_we_are.desc')}</p>
                    <p>{t('who_we_are.desc2')}</p>
                </AnimatorFade>
            }
            <div className="section-right">
                <img className='img-shadow' src={isMobile ? who_we_are_mobile.url : who_we_are.url} alt={isMobile ? who_we_are_mobile.alt : who_we_are.alt} />
                {
                    isMobile &&
                    <>
                        <h2>{t('who_we_are.title')}</h2>
                    </>
                }
            </div>
            {
                isMobile &&
                <div className='desc'>
                    <p>{t('who_we_are.desc')}</p>
                    <p>{t('who_we_are.desc2')}</p>
                </div>
            }
        </section>
    );
};
