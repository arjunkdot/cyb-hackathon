// useCurrentUser.ts
import { useState, useEffect } from 'react';
import { supabase } from './../../lib/supabaseClient';

type User = {
    id: string;
    email: string;
};

type UseCurrentUserResult = {
    user: User | null;
    loading: boolean;
    error: string | null;
};

const useCurrentUser = (): UseCurrentUserResult => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (error) throw error;

                if (data.session?.user) setUser(data.session?.user as User);

            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    return { user, loading, error };
};

export default useCurrentUser;
