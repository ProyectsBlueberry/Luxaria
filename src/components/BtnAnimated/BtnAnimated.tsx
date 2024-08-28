import useMobile from '../../hooks/useMobile';
import './btn_animated.scss';

interface Props {
    text: string;
    type: 1 | 2 | 3;
    customWith: number;
    customWithMobile?: number;
    customHeight: number;
    customHeightMobile?: number;
    onClick: () => void;
}

export const BtnAnimated = ({ 
    text, 
    type, 
    onClick, 
    customWith, 
    customWithMobile, 
    customHeight, 
    customHeightMobile 
}: Props) => {
    const { isMobile } = useMobile();

    const width = isMobile && customWithMobile !== undefined ? customWithMobile : customWith;
    const height = isMobile && customHeightMobile !== undefined ? customHeightMobile : customHeight;

    return (
        <>
            <button 
                style={{ width: `${width}vw`, height: `${height}vw` }} 
                onClick={onClick} 
                className={type === 2 ? 'btn-animated rounded' : 'btn-animated'}
            >
                {text}
            </button>
        </>
    );
};
