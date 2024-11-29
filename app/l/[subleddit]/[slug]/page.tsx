import Link from "next/link";
import PostComment from "./post-comment";
import PostReplyButton from "./post-reply-button";
import { getPost } from "@/utils/supabase/api";
import { redirect } from "next/navigation";
import { Laptop, Moon, Sun, TrashIcon } from "lucide-react";
import HeaderContainer from "@/components/header-container";
import BodyContainer from "@/components/body-container";


const sampleCommentData = {
    body: "this is a sample body of a comment. it could span multiple lines or it could be short. it should ideally be able to contain links, but right now, that is not supported.",
    author: "alice"
}

export default async function Page({ params }: { params: Promise<{ subleddit: string, slug: string }> }) {
    const { subleddit, slug } = await params;
    const data = await getPost(parseInt(slug));
    if (!data) {
        redirect("/");
    }
    const postData = data[0];

    return <div>
        <div className="mb-16">
            <HeaderContainer>
                <div className="flex flex-col gap-2">
                    <Link className="text-sm" href={`/l/${subleddit}`}>
                        l/{postData.community_id.name_tag}
                    </Link>
                    <h1 className="text-3xl">
                        {postData.title}
                    </h1>
                    <div className="text-sm mb-4">
                        u/{postData.author_id.username}
                    </div>
                </div>
            </HeaderContainer>

            <BodyContainer>
                <p className="mt-4">
                    {postData.body}
                </p>
                <PostReplyButton post_id={postData.id} route={`/l/${subleddit}/${slug}`} />
            </BodyContainer>
        </div>

        <BodyContainer>
            <div className="grid grid-cols-1 divide-y divide-black">
                {
                    postData.comments.length > 0 ? postData.comments.map((c) => <PostComment comment={c} />) :
                        <>
                            No replies yet :)
                        </>
                }

            </div>
        </BodyContainer>
    </div>;
}
