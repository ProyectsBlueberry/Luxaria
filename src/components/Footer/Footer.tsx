import { useTranslation } from 'react-i18next';
import './footer.scss';
// import { aws_dev, google_part, icon_instagram_white, icon_linkedin_white, icon_tiktok_white, icon_vimeo_white, logo_bb, meta_dev, sortlist_1, sortlist_2, stripe_dev, tiktok_dev } from '../../data/img/img-data';
import useMobile from '../../hooks/useMobile';
import { useNavigate } from 'react-router-dom';
import { icon_footer_f, icon_footer_i, icon_footer_l, icon_footer_x, logo_luxaria } from '../../data/img/img-data';
import { useScrollOrRedirect } from '../../hooks/useScrollOrRedirect';

export const Footer = () => {

    const { isMobile } = useMobile();
    const navigate = useNavigate();
    const { scrollOrNavigate } = useScrollOrRedirect();
    const redirectToExternalLink = (href: string) => {
        window.open(href, '_blank');
    };

    const { t } = useTranslation();
    return (
        <>
            <footer>
                <div className="footer-section-1">
                    <div className="footer-1-1">
                        <img className='logo' src={logo_luxaria.url} alt={logo_luxaria.alt} />
                        <p>{t('footer.follow_us')}</p>
                        <div className='social-web'>
                            <img onClick={() => redirectToExternalLink('')} src={icon_footer_x.url} alt={icon_footer_x.alt} />
                            <img onClick={() => redirectToExternalLink('')} src={icon_footer_f.url} alt={icon_footer_f.alt} />
                            <img onClick={() => redirectToExternalLink('')} src={icon_footer_i.url} alt={icon_footer_i.alt} />
                            <img onClick={() => redirectToExternalLink('')} src={icon_footer_l.url} alt={icon_footer_l.alt} />
                        </div>
                    </div>
                    {
                        !isMobile &&
                        <>
                            <div className="footer-1-2">
                                <ul>
                                    <li className='title'>{t('footer.menu.title')}</li>
                                    <li><button onClick={()=>scrollOrNavigate('index-id')}>{t('footer.menu.li1')}</button></li>
                                    <li><button onClick={()=>scrollOrNavigate('who-we-are-id')}>{t('footer.menu.li2')}</button></li>
                                    <li><button onClick={()=>scrollOrNavigate('how-do-we-do-it-id')}>{t('footer.menu.li3')}</button></li>
                                    <li><button onClick={()=>scrollOrNavigate('custom-events-id')}>{t('footer.menu.li4')}</button></li>
                                    <li><button onClick={()=>scrollOrNavigate('contact-id')}>{t('footer.menu.li5')}</button></li>
                                </ul>
                            </div>
                            <div className="footer-1-3">
                                <ul>
                                    <li className='title'>{t('footer.legal.title')}</li>
                                    <li><button onClick={()=>navigate('/terminos-y-condiciones')}>{t('footer.legal.li1')}</button></li>
                                    <li><button onClick={()=>navigate('/politica-de-privacidad')}>{t('footer.legal.li2')}</button></li>
                                    <li><button onClick={()=>navigate('/politica-de-cookies')}>{t('footer.legal.li3')}</button></li>
                                </ul>
                            </div>
                        </>
                    }

                    <div className="footer-1-4">
                        <ul>
                            <li className='title'>{t('headers.menu.btn7')}</li>
                            <li><button onClick={() => redirectToExternalLink('https://wa.me/523319088732')}>{t('contact.contacts.cont_3')}</button></li>
                            <li><button onClick={() => redirectToExternalLink('https://wa.me/523337890134')}>{t('contact.contacts.cont_4')}</button></li>
                            <li><button onClick={() => redirectToExternalLink('mailto:contacto@luxaria.com')}>{t('contact.contacts.cont_2')}</button></li>

                        </ul>
                    </div>
                </div>
                <div className='footer-section-2'>
                    <p>{t('footer.all_rights')}</p>
                    <img onClick={() => { redirectToExternalLink('https://blueberry.mx/') }} src="https://assets.bor.com.mx/Blueberry/we-materialize_white.gif" alt="we are materialize" />
                </div>
            </footer>
        </>
    );
}
