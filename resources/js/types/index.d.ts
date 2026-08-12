export interface User {
    id: number;
    name: string;
    email?: string | null;
    phone: string;
    membership_status: 'pending' | 'approved' | 'rejected';
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
