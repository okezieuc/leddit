import { createPostAction } from "@/app/communityActions";
import Button from "@/components/button";
import HeaderContainer from "@/components/header-container";
import DropDownInput from "@/components/ui/dropdowninput";
import TextArea from "@/components/ui/textarea";
import TextInput from "@/components/ui/textinput";
import { getAllCommunities } from "@/utils/supabase/api";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { community = 1, } = await searchParams;

    let communities = await getAllCommunities();
    let subledditOptions;
    if (communities) {
        subledditOptions = communities.map((community) => {
            const label = community.name_tag;
            const value = community.id.toString();

            return {
                label, value
            }

        });
    }

    return <form action={createPostAction}>
        <HeaderContainer>
            <h1 className="text-3xl">
                create post
            </h1>
        </HeaderContainer>

        <div className="flex flex-col gap-12">
            <div>
                <div className="mb-2">subleddit</div>
                <DropDownInput options={subledditOptions || []}
                    name="community_id"
                    defaultValue={community}
                />
            </div>

            <div>
                <div className="mb-2">title</div>
                <TextInput
                    name="title" />
            </div>

            <div>
                <div className="mb-2">body</div>
                <TextArea name="body" />
            </div>

            <div>
                <Button text="create" />
            </div>
        </div>
    </form>;
}