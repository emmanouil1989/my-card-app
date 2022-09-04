import Card from "@/components/Card";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading, isSuccess } = trpc.useQuery(["card-search"]);

  if (isLoading || !isSuccess ) return <div>Loading...</div>;
  return (
    <main className="h-screen w-screen flex pt-12 pb-12">
      <div className=" flex justify-center overflow-y-auto w-full max-h-fit">
        <Card data={data}  />
      </div>
    </main>
  );
};

export default Home;
