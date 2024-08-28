import { useTranslation } from 'react-i18next';
import './legal.scss';
import { useScroll } from '../../hooks/useScroll';
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu';

export const NoticeOfPrivacy = () =>{
    const {t} = useTranslation();

    useScroll('policy_id');
    return(
        <>
        <div>
        <HeaderMenu type={2}/>
        </div>
        <section className='legal-cont' id='policy_id'>
            <h1>{t('legal.notice_of_privacy.title')}</h1>
            <p>{t('legal.notice_of_privacy.text1')}</p>
            <h2>{t('legal.notice_of_privacy.subtitle1')}</h2>
            <p>{t('legal.notice_of_privacy.text2')}</p>
            <h2>{t('legal.notice_of_privacy.subtitle2')}</h2>
            <p>{t('legal.notice_of_privacy.text3')}</p>
            <h2>{t('legal.notice_of_privacy.subtitle3')}</h2>
            <p>{t('legal.notice_of_privacy.text4')}</p>
        </section>
        </>
    )
}