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

export async function getCommunityPosts(community_id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select(
      `
        id,
        created_at,
        community_id,
        author_id:users (
            id,
            username
        ),
        title,
        body
    `
    )
    .eq("community_id", community_id)
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error);
  }

  if (!error) return data;
}

export async function getPost(post_id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select(
      `
          id,
          created_at,
          community_id:communities (
            id,
            name_tag
          ),
          author_id:users (
              id,
              username
          ),
          title,
          body,
          comments:comments (
            author_id:users (
                id,
                username
            ),
            body,
            created_at
          )
      `
    )
    .eq("id", post_id);

  if (error) {
    console.log(error);
  }

  if (!error) return data;
}

export async function getUsername(user_id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("username")
    .eq("id", user_id);

  if (error) return "";
  else return data[0].username;
}
