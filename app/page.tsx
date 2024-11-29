import { getAllCommunities } from "@/utils/supabase/api";
import SubledditItem from "./subleddit-item";
import LinkButton from "@/components/linkbutton";
import HeaderContainer from "@/components/header-container";
import BodyContainer from "@/components/body-container";
import Username from "@/components/username";
import Link from "next/link";

export default async function Index() {
  const subledditData = await getAllCommunities();

  return (
    <>
      <div>
        <HeaderContainer>
          <div className="flex w-full md:items-center gap-8 md:gap-0 flex-col md:flex-row">
            <div className="text-3xl flex-1">
              hi <Username />
            </div>
            <div>
              <LinkButton text="create post +" href="l/new-post" inverted />
            </div>
          </div>
        </HeaderContainer>
        <BodyContainer>
          <div className="flex gap-4 md:gap-0 flex-col md:flex-row mb-8">
            <h1 className="text-3xl flex-1">
              all communities
            </h1>
            <div>
              <Link href="l/new" className="underline hover:text-blue-800 transition">create community</Link>
            </div>
          </div>
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
