export interface Product {
    background: string;
    title: string;
    wide?: boolean | null;
}

export interface Banner {
    background: string;
    backgroundMobile: string;
    title?: string | null;
    text?: string | null;
    button?: boolean | null;
}

export interface Link {
    text: string;
    link: string;
    classes?: string | null;
}

export interface FormArray {
        name: {value: string, error: number},
        phone: {value: string, error: number},
        email: {value: string, error: number},
        message?: string,
        formError?: number,
        formSuccess?: number
}


