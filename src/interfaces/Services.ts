export interface Data_Services {
    image: image,
    icon: image,
    title: string,
    data: Services[];
    onPress?: (icon: image, image: image, title: string, data: Services[]) => void;
}

export interface Services {
    title: string,
    information: string
}


export interface image {
    url: string,
    alt: string
}