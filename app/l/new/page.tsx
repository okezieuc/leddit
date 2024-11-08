import Button from "@/components/button";
import TextArea from "@/components/ui/textarea";
import TextInput from "@/components/ui/textinput";

export default function Page() {
    return <>
        <h1 className="text-3xl mb-16">
            create community
        </h1>

        <div className="flex flex-col gap-12">
            <div>
                <div className="mb-2">community name</div>
                <TextInput />
            </div>

            <div>
                <div className="mb-2">description</div>
                <TextArea />
            </div>

            <div>
                <Button text="create" />
            </div>
        </div>



    </>;
}