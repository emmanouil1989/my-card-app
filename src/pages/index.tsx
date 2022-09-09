import Card from "@/components/Card";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading, isSuccess } = trpc.useQuery(["card-search"]);

  const isLoadingOrError = isLoading || !isSuccess;

  return (
    <main className="h-screen w-screen flex pt-12 pb-12">
      <div className=" flex justify-center overflow-y-auto w-full max-h-fit items-center">
        {isLoadingOrError ? <img src={"/ball-triangle.svg"} alt={'loading indicator'} className={"w-56 h-56"}/> : <Card data={data!.cards}  />}
      </div>
    </main>
  );
};

export default Home;
