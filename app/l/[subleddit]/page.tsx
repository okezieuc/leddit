import LinkButton from "@/components/linkbutton";
import PostListItem from "./post-list-item";
import { getCommunityInfo, getCommunityPosts } from "@/utils/supabase/api";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ subleddit: string }> }) {
    const { subleddit } = await params;
    const subledditInfo = await getCommunityInfo(parseInt(subleddit))
    const subledditPosts = await getCommunityPosts(parseInt(subleddit));

    if (!subledditInfo || subledditInfo.length == 0) {
        redirect("/");
    }

    return <div>
        <div className="mb-16 flex">
            <div className="flex-1">
                <h1 className="text-3xl mb-4">
                    l/{subledditInfo[0].name_tag}
                </h1>
                <p>
                    {subledditInfo[0].description}
                </p>
            </div>
            <div>
                <div>
                    <LinkButton text="create post +" href={`/l/new-post`} />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-black">
            {
                subledditPosts
                    && subledditPosts.length > 0
                    ? subledditPosts.map((p) => <PostListItem post={p} subleddit={subleddit} />)
                    : <div>
                        There's nothing here :)
                    </div>
            }
        </div>
    </div>;
}
