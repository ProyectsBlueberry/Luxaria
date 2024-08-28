import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useScrollOrRedirect } from "../../hooks/useScrollOrRedirect";
import { BtnAnimated } from "../BtnAnimated/BtnAnimated";
import useMobile from "../../hooks/useMobile";
import './headerMenu.scss';
import { logo_luxaria } from "../../data/img/img-data";

interface Props {
    type: number;
}

export const HeaderMenu = ({ type }: Props) => {
    const { t } = useTranslation();
    const { scrollOrNavigate } = useScrollOrRedirect();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const { isMobile } = useMobile();

    const redirectToExternalLink = (href: string) => {
        window.open(href, '_blank');
    };

    return (
        <>
            {
                isMobile ?
                    <>
                        <div className='menu_mobile'>
                            <div className="logo">
                                <img className="logo-img" onClick={() => scrollOrNavigate('/')} src={logo_luxaria.url} alt={logo_luxaria.alt} />
                                <div className="circle">
                                    <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                                        <div id="nav-icon2" className={mobileMenuOpen ? 'open' : ''}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={mobileMenuOpen ? 'body-menu-mobile visible' : 'body-menu-mobile'}>
                                <img className="logo-img" onClick={() => scrollOrNavigate('/')} src={logo_luxaria.url} alt={logo_luxaria.alt} />
                                <ul>
                                    <li>
                                        <button className="cont" onClick={() => { scrollOrNavigate('/'); setMobileMenuOpen(false); }}>
                                            {t('headers.menu.btn1')}
                                        </button>
                                    </li>
                                    <li>
                                        <button className="cont" onClick={() => { scrollOrNavigate('/'); setMobileMenuOpen(false); }}>
                                            {t('headers.menu.btn2')}
                                        </button>
                                    </li>
                                    <li>
                                        <button className="cont" onClick={() => { scrollOrNavigate('/'); setMobileMenuOpen(false); }}>
                                            {t('headers.menu.btn3')}
                                        </button>
                                    </li>
                                    <li>
                                        <button className="cont" onClick={() => { scrollOrNavigate('/'); setMobileMenuOpen(false); }}>
                                            {t('headers.menu.btn4')}
                                        </button>
                                    </li>
                                    <li>
                                        <button className="cont" onClick={() => { scrollOrNavigate('/'); setMobileMenuOpen(false); }}>
                                            {t('headers.menu.btn5')}
                                        </button>
                                    </li>
                                    <li>
                                        <button className="cont" onClick={() => { scrollOrNavigate('/'); setMobileMenuOpen(false); }}>
                                            {t('headers.menu.btn6')}
                                        </button>
                                    </li>
                                    <li>
                                        <button className="cont" onClick={() => { scrollOrNavigate('/'); setMobileMenuOpen(false); }}>
                                            {t('headers.menu.btn7')}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </> :
                    <>
                        <div id="menu_section" className={type == 1 ? "container-header-menu" : 'container-header-menu type-2'}>
                            <div className="container-header-top">
                                <img src={logo_luxaria.url} alt={logo_luxaria.alt} />
                                <div className="section-menu">
                                    <button onClick={() => { scrollOrNavigate('index-id') }} className="btn-menu">{t('headers.menu.btn1')}</button>
                                    <button onClick={() => { scrollOrNavigate('who-we-are-id') }} className="btn-menu">{t('headers.menu.btn2')}</button>
                                    <button onClick={() => { scrollOrNavigate('how-do-we-do-it-id') }} className="btn-menu"> {t('headers.menu.btn3')} </button>
                                    <button onClick={() => { scrollOrNavigate('services-id') }} className="btn-menu">{t('headers.menu.btn4')}</button>
                                    <button onClick={() => { scrollOrNavigate('start-your-events-id') }} className="btn-menu">{t('headers.menu.btn5')}</button>
                                    <button onClick={() => { scrollOrNavigate('custom-events-id') }} className="btn-menu">{t('headers.menu.btn6')}</button>
                                    <BtnAnimated onClick={() => { scrollOrNavigate('contact-id') }} text={t('headers.menu.btn7')} type={1} customWith={8.49} customHeight={1.927} />
                                </div>
                            </div>

                        </div>
                    </>
            }

        </>
    );
}