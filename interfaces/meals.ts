export interface IMeal {
    comment?: string;
    created_at: string;
    deleted_at?: null | string;
    file_name: string;
    ingredients: string[];
    is_healthy: boolean;
    name: string;
    picture_base_64: string;
    total_calories: number;
    updated_at: string;
}
