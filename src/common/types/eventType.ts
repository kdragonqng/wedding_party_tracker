export enum EventType {
    ALL,
    WEDDING,
    BIRTHDAY,
    OTHER,
}

export interface EventObject {
    id: string;
    time: string;
    date: string;
    title: string;
    location: string;
    imgUrl: string;
    amount: number;
    currency: string;
}