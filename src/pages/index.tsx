import Card from "@/components/Card";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["card-search"]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <main className="h-screen w-screen flex pt-12 pb-12">
      <div className=" flex justify-center overflow-y-auto w-full max-h-fit">
        <Card />
      </div>
    </main>
  );
};

export default Home;
