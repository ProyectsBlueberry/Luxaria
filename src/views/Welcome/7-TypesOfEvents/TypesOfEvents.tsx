import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { arrow_carousel, carousel_1, carousel_2, carousel_3, carousel_4, carousel_5, carousel_6, how_do_we_do_it_x_1, icon_points_1, text_types_of_events, text_types_of_events_mobile } from '../../../data/img/img-data';
import './typesOfEvents.scss';
import { BtnAnimated } from '../../../components/BtnAnimated/BtnAnimated';
import useMobile from '../../../hooks/useMobile';
import { useScrollOrRedirect } from '../../../hooks/useScrollOrRedirect';
import AnimatorFade from '../../../components/AnimatorFade/AnimatorFade';

export const TypesOfEvents = () => {
    const { t } = useTranslation();
    const { scrollOrNavigate } = useScrollOrRedirect();
    const { isMobile } = useMobile();
    const activeIndex = 2;

    const [cards, setCards] = useState([
        { id: 'card-1', title: t('text_types_of_events.cards.card1.title'), desc: t('text_types_of_events.cards.card1.desc'), img: carousel_1.url },
        { id: 'card-2', title: t('text_types_of_events.cards.card2.title'), desc: t('text_types_of_events.cards.card2.desc'), img: carousel_2.url },
        { id: 'card-3', title: t('text_types_of_events.cards.card3.title'), desc: t('text_types_of_events.cards.card3.desc'), img: carousel_3.url },
        { id: 'card-4', title: t('text_types_of_events.cards.card4.title'), desc: t('text_types_of_events.cards.card4.desc'), img: carousel_4.url },
        { id: 'card-5', title: t('text_types_of_events.cards.card5.title'), desc: t('text_types_of_events.cards.card5.desc'), img: carousel_5.url },
        { id: 'card-6', title: t('text_types_of_events.cards.card6.title'), desc: t('text_types_of_events.cards.card6.desc'), img: carousel_6.url }
    ]);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (animating) {
            const timeout = setTimeout(() => setAnimating(false), 500);
            return () => clearTimeout(timeout);
        }
    }, [animating]);

    const handlePrev = () => {
        if (animating) return;
        setAnimating(true);
        setCards(prevCards => {
            const newCards = [...prevCards];
            newCards.unshift(newCards.pop()!);
            return newCards;
        });
    };

    const handleNext = () => {
        if (animating) return;
        setAnimating(true);
        setCards(prevCards => {
            const newCards = [...prevCards];
            newCards.push(newCards.shift()!);
            return newCards;
        });
    };

    const getTransformStyle = (index: number) => {
        const offsetFromActive = (index - activeIndex + cards.length) % cards.length;
        const leftPosition = offsetFromActive === 0 ? '0vw' :
            offsetFromActive === 1 ? '30vw' :
                offsetFromActive === 2 ? '60vw' :
                    offsetFromActive === 3 ? '90vw' :
                        offsetFromActive === 4 ? '120vw' : '150vw';

        return {
            left: leftPosition,
        };
    };

    return (
        <section className='section-types-of-events'>
            <AnimatorFade className="section-top">
                <img src={isMobile ? text_types_of_events_mobile.url : text_types_of_events.url} alt={text_types_of_events.alt} />
                <img src={how_do_we_do_it_x_1.url} alt="" className="icon-xs" />
                <h2>{t('text_types_of_events.subtitle')}</h2>
            </AnimatorFade>
            <AnimatorFade className="carousel-wrapper">
                <div className="carousel">
                    {cards.map((item, index) => (
                        <div
                            key={item.id}
                            className={`card ${animating ? 'fade-out' : 'fade-in'} ${index === activeIndex && 'active'}`}
                            style={getTransformStyle(index)}
                        >
                            <div className='bg-img-card-styles' style={{ backgroundImage: `url(${item.img})` }}></div>
                            {
                                isMobile ? <>
                                    {
                                        index === 2 &&
                                        <h3>{item.title}</h3>
                                    }
                                </> : <>
                                    <h3>{item.title}</h3>
                                </>
                            }
                            {
                                index === 2 && !isMobile ?
                                    <>
                                        <p>{item.desc}</p>
                                        <BtnAnimated customHeight={3.281} customWith={13.542} onClick={() => scrollOrNavigate('contact-id')} text={t('global.btn_contact')} type={2} />
                                    </>
                                    :
                                    <></>
                            }
                        </div>
                    ))}
                </div>
            </AnimatorFade>
            <div className="section-points">
                <img className='points-1' src={icon_points_1.url} alt={icon_points_1.alt} />
                {
                    !isMobile &&
                <img className='points-2' src={icon_points_1.url} alt={icon_points_1.alt} />
                }
            </div>
            <div className="carousel-buttons">
                <button className="carousel-control prev" onClick={handlePrev}><img src={arrow_carousel.url} alt={arrow_carousel.alt} /></button>
                <button className="carousel-control next" onClick={handleNext}><img src={arrow_carousel.url} alt={arrow_carousel.alt} /></button>
            </div>
            {
                isMobile &&
                <button className='button-contact'>{t('global.btn_contact')}</button>
            }
        </section>
    );
};