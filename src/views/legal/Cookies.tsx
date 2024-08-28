import { useTranslation } from 'react-i18next';
import './legal.scss';
import { useScroll } from '../../hooks/useScroll';
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu';

export const CookiePreferences = () => {
    const { t } = useTranslation();

    useScroll('policy_id');

    return (
        <>
            <HeaderMenu type={1} />
            <section className='legal-cont' id='policy_id'>
                <h1>{t('legal.cookie_preferences.title')}</h1>
                <p>{t('legal.cookie_preferences.text1')}</p>
                <h2>{t('legal.cookie_preferences.subtitle1')}</h2>
                <p>{t('legal.cookie_preferences.text2')}</p>
                <h2>{t('legal.cookie_preferences.subtitle2')}</h2>
                <p>{t('legal.cookie_preferences.text3')}</p>
                <h2>{t('legal.cookie_preferences.subtitle3')}</h2>
                <p>{t('legal.cookie_preferences.text4')}</p>
                <h2>{t('legal.cookie_preferences.subtitle4')}</h2>
                <p>{t('legal.cookie_preferences.text5')}</p>
                <h2>{t('legal.cookie_preferences.subtitle5')}</h2>
                <p>{t('legal.cookie_preferences.text6')}</p>
                <h2>{t('legal.cookie_preferences.subtitle6')}</h2>
                <p>{t('legal.cookie_preferences.text7')}</p>
                <h2>{t('legal.cookie_preferences.subtitle7')}</h2>
                <p>{t('legal.cookie_preferences.text8')}</p>
                <p>{t('legal.cookie_preferences.text9')}</p>
                <ul>
                    <li>{t('legal.cookie_preferences.ul1.li1')}</li>
                    <li>{t('legal.cookie_preferences.ul1.li2')}</li>
                    <li>{t('legal.cookie_preferences.ul1.li3')}</li>
                </ul>
                <p>{t('legal.cookie_preferences.text10')}</p>
                <ul>
                    <li>{t('legal.cookie_preferences.ul2.li1')}</li>
                    <li>{t('legal.cookie_preferences.ul2.li2')}</li>
                    <li>{t('legal.cookie_preferences.ul2.li3')}</li>
                    <li>{t('legal.cookie_preferences.ul2.li4')}</li>
                    <li>{t('legal.cookie_preferences.ul2.li5')}</li>
                    <li>{t('legal.cookie_preferences.ul2.li6')}</li>
                    <li>{t('legal.cookie_preferences.ul2.li7')}</li>
                    <li>{t('legal.cookie_preferences.ul2.li8')}</li>
                </ul>
                <p>{t('legal.cookie_preferences.text11')}</p>
            </section>
        </>
    )
}