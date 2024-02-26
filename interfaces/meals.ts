export interface IMeal {
    calories: number;
    created_at: string;
    deleted_at?: null | string;
    file_name: string;
    image: string;
    ingredients: string[];
    is_healthy: boolean;
    name: string;
    updated_at: string;
}
