import { supabase } from "../../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

function useNotifactions() {

    const addNotification = async (user_id: string, content: string) => {
        const { data, error } = await supabase
            .from("notifications")
            .insert([{ content, user_id }])

        if (error) {
            console.error("Error inserting data: ", error.message);
        }
    }

    const getAllNotifications = async (user_id: string) => {
        const { data, error } = await supabase
            .from("notifications")
            .select("*")
            .eq("user_id", user_id)
        if (error) {
            console.error("Error inserting data: ", error.message);
        }
        return data
    }

    return { addNotification, getAllNotifications }
}
export default useNotifactions