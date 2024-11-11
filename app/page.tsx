import { getAllCommunities } from "@/utils/supabase/api";
import SubledditItem from "./subleddit-item";
import LinkButton from "@/components/linkbutton";

const sampleSubledditData = {
  name: "college"
}

export default async function Index() {
  const subledditData = await getAllCommunities();

  return (
    <>
      <div className="mb-2">
        <div className="text-sm">
          hi @bob
        </div>
      </div>

      <div>
        <div className="flex">
          <h1 className="text-3xl flex-1 mb-8">
            my communities
          </h1>
          <div>
            <LinkButton text="create new +" href="l/new" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {
            subledditData && subledditData.map((s) => <SubledditItem subleddit={s} />)
          }
        </div>
      </div>
      <div className="hidden">
        <div className="mt-24">
          <h1 className="text-3xl flex-1 mb-8">
            more communities to join
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          {
            subledditData && subledditData.map((s) => <SubledditItem subleddit={s} />)
          }
        </div>
      </div>
    </>
  );
}
