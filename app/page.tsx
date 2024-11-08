import SubledditItem from "./subleddit-item";
import LinkButton from "@/components/linkbutton";

const sampleSubledditData = {
  name: "college"
}

export default async function Index() {
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
          <SubledditItem subleddit={sampleSubledditData} />
          <SubledditItem subleddit={sampleSubledditData} />
          <SubledditItem subleddit={sampleSubledditData} />
          <SubledditItem subleddit={sampleSubledditData} />
        </div>
      </div>

      <div className="mt-24">
        <h1 className="text-3xl flex-1 mb-8">
          more communities to join
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <SubledditItem subleddit={sampleSubledditData} />
        <SubledditItem subleddit={sampleSubledditData} />
        <SubledditItem subleddit={sampleSubledditData} />
        <SubledditItem subleddit={sampleSubledditData} />
      </div>
    </>
  );
}
