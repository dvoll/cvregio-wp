import { FunctionComponent } from 'react';

const CvLogoSimple: FunctionComponent<{
    fill?: string;
    size: string | number | undefined;
}> = ({ fill = '#000', size = 20 }) => {
    return (
        <svg
            viewBox="0 0 111 110"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            style={{ fill, width: size, height: size }}
        >
            <path d="M59.036 95.446a4.415 4.415 0 01-7.629 0L7.861 20.635A4.413 4.413 0 0111.675 14h87.093a4.413 4.413 0 013.815 6.634L59.036 95.447zm-3.814-35.19L69.922 35h-29.4l14.7 25.255z" />
        </svg>
    );
};

export default CvLogoSimple;
