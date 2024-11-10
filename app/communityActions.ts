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
