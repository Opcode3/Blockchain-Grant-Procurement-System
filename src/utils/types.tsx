export type TagResponseProps = {
    id: number;
    name: string;
    slug: string;
    posts_count: string;
    created_at: string;
    updated_at: string;
}

export type CategoriesResponseProps = {
    created_at: string;
    id: number;
    image: null;
    name: string;
    slug: string;
    updated_at: string;
}


export type adminDetailsResponseProps = {
    id: number;
    name: string;
    username: string;
    department: string;
    phone_number: string;
    email: string;
    email_verified_at: string;
    avatar: null;
    status: string;
    deleted_at: null;
    created_at: string;
    updated_at: string;
}