export interface Modal {
    image: string;
    closeModal: () => void;
}

export interface Imagens {
    photo: Photo;
    onClick: () => void;
}

export interface Photo {
    id: number;
    url: string;
}