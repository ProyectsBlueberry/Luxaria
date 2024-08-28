import { useTranslation } from 'react-i18next';
import { service_icon_coint_1, service_icon_coint_2, text_services, text_services_mobile } from '../../../data/img/img-data';
import './services.scss';
import useMobile from '../../../hooks/useMobile';

export const Services = () => {

    const { t } = useTranslation();
    const { isMobile } = useMobile();

    return (
        <section className='section-services' id='services-id'>
            <img src={isMobile ? text_services_mobile.url : text_services.url} alt={isMobile ? text_services_mobile.url : text_services.alt} />
            <div className='content-services'>
                <div className='cards-services'>
                    {
                        isMobile &&
                        <div className='line-animated line-animated-1 '></div>
                    }
                    <div className="card-services card-services-1">
                        <div className="content-card">
                            <h3>{t('services.cards.card_1.title')}</h3>
                            <p>{t('services.cards.card_1.desc')}</p>
                        </div>
                    </div>
                    {
                        isMobile &&
                        <div className='line-animated line-animated-2'></div>
                    }
                    <div className="card-services card-services-2">
                        <div className="content-card">
                            <h3>{t('services.cards.card_2.title')}</h3>
                            <p>{t('services.cards.card_2.desc')}</p>
                        </div>
                    </div>
                    {
                        isMobile &&
                        <div className='line-animated line-animated-1'></div>
                    }
                    <div className="card-services card-services-3">
                        <div className="content-card">
                            <h3>{t('services.cards.card_3.title')}</h3>
                            <p>{t('services.cards.card_3.desc')}</p>
                        </div>
                    </div>
                    {
                        isMobile &&
                        <div className='line-animated line-animated-2'></div>
                    }
                    <div className="card-services card-services-4">
                        <div className="content-card">
                            <h3>{t('services.cards.card_4.title')}</h3>
                            <p>{t('services.cards.card_4.desc')}</p>
                        </div>
                    </div>
                    {
                        isMobile &&
                        <div className='line-animated line-animated-1'></div>
                    }
                </div>

                {
                    !isMobile &&
                    <>
                        <div className='animated-component-services'>
                            <div className='animated animated-1'></div>
                            <div className='animated animated-2'></div>
                            <div className='animated animated-3'></div>
                            <div className='animated animated-4'></div>
                        </div>
                        <img className='coin coin-1' src={service_icon_coint_1.url} alt={service_icon_coint_1.alt} />
                        <img className='coin coin-2' src={service_icon_coint_2.url} alt={service_icon_coint_2.alt} />
                    </>
                }
            </div>
        </section>
    );
}