import { signOutAction } from "@/app/actions";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function AuthButton() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user ?
        <form action={signOutAction}>
            <button type="submit">
                sign out
            </button>
        </form> : <div>
            <Link href="/sign-in">sign in</Link>
        </div>;
}