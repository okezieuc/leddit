"use server";

import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { redirect } from "next/navigation";

export const createCommunityAction = async (formData: FormData) => {
  const title = formData.get("name") as string;
  const name_tag = formData.get("tag") as string;
  const description = formData.get("description") as string;
  const supabase = await createClient();

  if (!title || !description || !name_tag) {
    return { error: "Title, name tag, and description are required" };
  }

  const { error } = await supabase.from("communities").insert({
    name_tag,
    title,
    description,
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/l/new", error.message);
  } else {
    return redirect("/l/" + name_tag);
  }
};

export const createPostAction = async (formData: FormData) => {
  const supabase = await createClient();

  const community_id = formData.get("community_id") as string;
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  if (!title || !community_id || !body) {
    return { error: "Community id, title, and body are required" };
  }

  const { data, error } = await supabase
    .from("posts")
    .insert({
      community_id: parseInt(community_id),
      title,
      body,
    })
    .select();

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/l/new-post", error.message);
  } else {
    if (!data || data.length == 0) {
      return redirect("/");
    } else {
      redirect(`/l/${community_id.toString()}/${data[0].id}`);
    }
  }
};
