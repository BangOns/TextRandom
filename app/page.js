import { GetFetch } from "./api/GetFetch";
import ContainerQuotes from "./components/ContainerQuotes";

export default async function Home() {
  return (
    <main className="w-full ">
      <ContainerQuotes />
    </main>
  );
}
