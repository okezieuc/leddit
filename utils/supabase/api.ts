import { createClient } from "@/utils/supabase/server";

export async function getAllCommunities() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("communities").select();

  if (!error) return data;
}

export async function getCommunityInfo(id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("communities")
    .select()
    .eq("id", id);

  if (!error) return data;
}
