import { useTranslation } from 'react-i18next';
import './card.scss';
import AnimatorFade from '../../../../components/AnimatorFade/AnimatorFade';

interface Props {
    img: {
        url: string,
        alt: string,
    },
    title: string,
    description: string,
}

export const Card = ({img, title, description}:Props) => {
    const {t} = useTranslation();
    
    return(
        <div className='card-component'>
            <img src={img.url} alt={img.alt} />
            <div className='content-card-component'>
                <h3>{title}</h3>
                <AnimatorFade className='description'>
                    <p>{description}</p>
                </AnimatorFade>
            </div>
        </div>
    );
}