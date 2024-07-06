export type BannerType = {
    title: string;
    subtitle?: string;
}

export type TalentCardType = {
    id: string,
    name: string;
    position: string;
    exp: number;
    description: string;
    rating?: number;
    tags?: string[];
}