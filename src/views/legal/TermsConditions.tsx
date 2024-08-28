import { useTranslation } from 'react-i18next';
import './legal.scss';
import { useScroll } from '../../hooks/useScroll';
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu';

export const TermsAndConditions = () =>{
    const {t} = useTranslation();

    useScroll('policy_id');
    return(
        <>
            <HeaderMenu type={2} />
            <section className='legal-cont' id='policy_id'>
                <h1>{t('legal.terms_and_conditions.title')}</h1>
                <h2>{t('legal.terms_and_conditions.subtitle1')}</h2>
                <p>{t('legal.terms_and_conditions.text1')}</p>
                <h2>{t('legal.terms_and_conditions.subtitle2')}</h2>
                <p>{t('legal.terms_and_conditions.text2')}</p>
                <h2>{t('legal.terms_and_conditions.subtitle3')}</h2>
                <p>{t('legal.terms_and_conditions.text3')}</p>
                <h2>{t('legal.terms_and_conditions.subtitle4')}</h2>
                <p>{t('legal.terms_and_conditions.text4')}</p>
                <h2>{t('legal.terms_and_conditions.subtitle5')}</h2>
                <p>{t('legal.terms_and_conditions.text5')}</p>
                <h2>{t('legal.terms_and_conditions.subtitle6')}</h2>
                <p>{t('legal.terms_and_conditions.text6')}</p>
                <h2>{t('legal.terms_and_conditions.subtitle6_1')}</h2>
                <p>{t('legal.terms_and_conditions.text7')}</p>
                <p>{t('legal.terms_and_conditions.text8')}</p>
                <p>{t('legal.terms_and_conditions.text9')}</p>
                <h2>{t('legal.terms_and_conditions.subtitle6_2')}</h2>
                <ul>
                    <li>{t('legal.terms_and_conditions.li1')}</li>
                    <li>{t('legal.terms_and_conditions.li2')}</li>
                    <li>{t('legal.terms_and_conditions.li3')}</li>
                    <li>{t('legal.terms_and_conditions.li4')}</li>
                    <li>{t('legal.terms_and_conditions.li5')}</li>
                </ul>
            </section>
        </>
    )
}