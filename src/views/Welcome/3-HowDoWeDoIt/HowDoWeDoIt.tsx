import { useTranslation } from 'react-i18next';
import { card_1, card_1_mobile, card_2, card_2_mobile, card_3, card_3_mobile, card_4, card_4_mobile, card_5, card_5_mobile, card_6, card_6_mobile, how_do_we_do_it, how_do_we_do_it_loop, how_do_we_do_it_mobile, how_do_we_do_it_x_1 } from '../../../data/img/img-data';
import { Card } from './components/Card';
import './howDoWeDoIt.scss';
import useMobile from '../../../hooks/useMobile';
import AnimatorFade from '../../../components/AnimatorFade/AnimatorFade';

export const HowDoWeDoIt = () => {
    const { isMobile } = useMobile();
    const { t } = useTranslation();
    return (
        <section className='section-how-do-we-do-it' id='how-do-we-do-it-id'>
            <AnimatorFade className='container-video'>
                {
                    !isMobile &&
                    <video src={how_do_we_do_it_loop.url} id='index_video' muted autoPlay loop playsInline></video>
                }
                <img className='icon-x icon-x-1' src={how_do_we_do_it_x_1.url} alt={how_do_we_do_it_x_1.alt} />
                {
                    !isMobile &&
                    <img className='icon-x icon-x-2' src={how_do_we_do_it_x_1.url} alt={how_do_we_do_it_x_1.alt} />
                }
                <img src={isMobile ? how_do_we_do_it_mobile.url : how_do_we_do_it.url} alt={ isMobile ? how_do_we_do_it_mobile.url : how_do_we_do_it.alt} />
            </AnimatorFade>
            <div className="cards-how-do-we-do-it">
                {
                    isMobile ?
                        <>
                            <div className='card-container'>
                                <Card img={card_1_mobile} title={t('how_do_we_do_it.cards.card1.title')} description={t('how_do_we_do_it.cards.card1.desc')} />
                                <Card img={card_2_mobile} title={t('how_do_we_do_it.cards.card2.title')} description={t('how_do_we_do_it.cards.card2.desc')} />
                                <Card img={card_3_mobile} title={t('how_do_we_do_it.cards.card3.title')} description={t('how_do_we_do_it.cards.card3.desc')} />
                                <Card img={card_4_mobile} title={t('how_do_we_do_it.cards.card4.title')} description={t('how_do_we_do_it.cards.card4.desc')} />
                                <Card img={card_5_mobile} title={t('how_do_we_do_it.cards.card5.title')} description={t('how_do_we_do_it.cards.card5.desc')} />
                                <Card img={card_6_mobile} title={t('how_do_we_do_it.cards.card6.title')} description={t('how_do_we_do_it.cards.card6.desc')} />
                            </div>
                        </>
                        :
                        <>
                            <AnimatorFade className="card-container card-container-1">
                                <Card img={card_1} title={t('how_do_we_do_it.cards.card1.title')} description={t('how_do_we_do_it.cards.card1.desc')} />
                                <Card img={card_2} title={t('how_do_we_do_it.cards.card4.title')} description={t('how_do_we_do_it.cards.card4.desc')} />
                            </AnimatorFade>
                            <AnimatorFade className="card-container card-container-2">
                                <Card img={card_3} title={t('how_do_we_do_it.cards.card2.title')} description={t('how_do_we_do_it.cards.card2.desc')} />
                                <Card img={card_4} title={t('how_do_we_do_it.cards.card5.title')} description={t('how_do_we_do_it.cards.card5.desc')} />
                            </AnimatorFade>
                            <AnimatorFade className="card-container card-container-3">
                                <Card img={card_5} title={t('how_do_we_do_it.cards.card3.title')} description={t('how_do_we_do_it.cards.card3.desc')} />
                                <Card img={card_6} title={t('how_do_we_do_it.cards.card6.title')} description={t('how_do_we_do_it.cards.card6.desc')} />
                            </AnimatorFade>
                        </>
                }
            </div>
        </section>
    );
}