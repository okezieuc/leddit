import { getAllCommunities } from "@/utils/supabase/api";
import SubledditItem from "./subleddit-item";
import LinkButton from "@/components/linkbutton";
import HeaderContainer from "@/components/header-container";
import BodyContainer from "@/components/body-container";

const sampleSubledditData = {
  name: "college"
}

export default async function Index() {
  const subledditData = await getAllCommunities();

  return (
    <>


      <div>
        <HeaderContainer>
          <div className="flex w-full items-center">
            <div className="text-3xl flex-1">
              hi @bob
            </div>
            <div>
              <LinkButton text="create new +" href="l/new" inverted />
            </div>
          </div>
        </HeaderContainer>
        <BodyContainer>
          <h1 className="text-3xl flex-1 mb-8">
            my communities
          </h1>
          <div className="flex flex-col gap-2">
            {
              subledditData && subledditData.map((s) => <SubledditItem subleddit={s} />)
            }
          </div>
        </BodyContainer>
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
