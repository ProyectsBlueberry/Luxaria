import { useTranslation } from 'react-i18next';
import './startYourEvent.scss';
import { icon_whatsapp_white } from '../../../data/img/img-data';

export const StartYourEvent = () => {
    
    const redirectToExternalLink = (href: string) => {
        window.open(href, '_blank');
    };
    const {t} = useTranslation();

    return(
        <section className='section-start-your-event' id='start-your-events-id'>
            <div className='start-your-event-left'>
                <h2>{t('start_your_event.title')}</h2>
            </div>
            <div className='start-your-event-right'>
                <h3>{t('start_your_event.subtitle')}</h3>
                <p>{t('start_your_event.desc')}</p>
                <div onClick={() => redirectToExternalLink('https://wa.me/523318987845')} className='contact-num'>
                    <img src={icon_whatsapp_white.url} alt={icon_whatsapp_white.alt} />
                    <p>{t('start_your_event.num')}</p>
                </div>
            </div>
        </section>
    );
}