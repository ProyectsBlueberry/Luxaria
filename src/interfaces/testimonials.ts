export interface TestimonialProps {
    id:       number;
    name:     string;
    image:    Image;
    category: string;
    city:     string;
    message:  string;
}

export interface Image {
    url: string;
    alt: string;
}