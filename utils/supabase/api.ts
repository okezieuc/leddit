import { createClient } from "@/utils/supabase/server";

export async function getAllCommunities() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("communities").select();

  if (!error) return data;
}
