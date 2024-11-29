import { getUsername } from "@/utils/supabase/api";
import { createClient } from "@/utils/supabase/server";

export default async function Username() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const username = await getUsername(user.id);

    return <span>@{username}</span>;
}