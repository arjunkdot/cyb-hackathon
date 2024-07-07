export type BannerType = {
    title: string;
    subtitle?: string;
}

export type TalentCardType = {
    id: string;
    name: string;
    position: string;
    experience: number;
    description: string;
    rating?: number;
    tags?: string[];
    paypal?: string;
    user_id:string;
}

export type NotificatonType = {
    id: string;
    content: string;
    created_at: string;
    user_id: string;
    read: boolean;
}