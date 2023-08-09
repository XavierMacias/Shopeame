export interface ProductI{
    id: string;
    name: string;
    price: number;
    description: string;
    stars: number;
    image: string;
}

export interface UserI{
    username:string;
    mail:string;
    password:string;
    role:string;
}