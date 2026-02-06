export interface Comment {
    id: number;
    body: string;
    user_id: number;
    post_id: number;
    created_at: string;
    updated_at: string;
}

export interface Post {
    id?: number;
    title: string;
    body: string;
    user_id: number;
    user?: User;
    created_at: string;
    updated_at: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    create_at: string;
    updated_at: string;
    posts?: Post[];
    comments?: Comment[];
}

export interface PageProps {
    user: User | null;
    [key: string]: any;
}
