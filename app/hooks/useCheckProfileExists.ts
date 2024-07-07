import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from 'next/navigation';

export function useCheckProfileExists(to: string = '/', redirectIfFound = false) {
    const router = useRouter();
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const { data: session, error } = await supabase.auth.getSession();

                if (error) {
                    console.error("Error fetching session:", error);
                    throw error;
                }

                if (!session) {
                    console.log("No session found, redirecting to login...");
                    router.push("/login");
                } else {
                    setUserData(session.session?.user); // Set userData to session.user
                }
            } catch (error) {
                console.error("Error checking session:", error);
                router.push("/login");
            }
        };
        const checkIfProfileExists = async () => {
            try {
                const { data: profile, error } = await supabase
                    .from("talents")
                    .select("*")
                    .eq("user_id", userData?.id)
                    .maybeSingle();
                console.log('Data', profile)
                if (error) {
                    throw error;
                } else {
                    if (redirectIfFound && profile) {
                        router.push(to);
                    } else if (!redirectIfFound && !profile) {
                        router.push(to);
                    }
                }
            } catch (error) {
                throw error;
            }
        };
        checkSession();
        checkIfProfileExists();
    }, [router, userData?.id, to]);

    return {
        userData
    }
}