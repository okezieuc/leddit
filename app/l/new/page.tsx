import { createCommunityAction } from "@/app/communityActions";
import Button from "@/components/button";
import TextArea from "@/components/ui/textarea";
import TextInput from "@/components/ui/textinput";

export default async function Page() {
    return <form action={createCommunityAction}>
        <h1 className="text-3xl mb-16">
            create community
        </h1>

        <div className="flex flex-col gap-12">
            <div>
                <div className="mb-2">community name</div>
                <TextInput
                    name="name"
                    placeholder="community name"
                    required
                />
            </div>

            <div>
                <div className="mb-2">community tag</div>
                <TextInput
                    name="tag"
                    placeholder="l/..."
                    required
                />
            </div>

            <div>
                <div className="mb-2">description</div>
                <TextArea
                    name="description"
                    placeholder="describe your community"
                    required
                />
            </div>

            <div>
                <Button text="create" />
            </div>
        </div>
    </form>;
}