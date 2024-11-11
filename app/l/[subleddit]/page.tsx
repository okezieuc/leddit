import LinkButton from "@/components/linkbutton";
import PostListItem from "./post-list-item";
import { getCommunityInfo } from "@/utils/supabase/api";
import { redirect } from "next/navigation";

const samplePostData = {
    title: "this is a sample, possibly mutli line post title for a leddit post",
    body: "this is a sample body of a post. it could span multiple lines or it could be short. it should ideally be able to contain links, but right now, that is not supported.",
    slug: "test",
}

export default async function Page({ params }: { params: Promise<{ subleddit: string }> }) {
    const { subleddit } = await params;
    const subledditInfo = await getCommunityInfo(parseInt(subleddit))

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
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
        </div>
    </div>;
}
