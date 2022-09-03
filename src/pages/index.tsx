import Card from "@/components/Card";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["card-search"]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <main className="h-screen w-screen flex">
      <div className=" flex items-center overflow-y-auto w-full h-full p-12">
        <Card />
      </div>
    </main>
  );
};

export default Home;
