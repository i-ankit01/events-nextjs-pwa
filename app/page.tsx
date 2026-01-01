
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Header/>
      Hello 
      <Link className="m-5" href={"/add-events"}>Add Events</Link>
      <Link className="m-5" href={"/events"}>View Events</Link>
    </div>
  );
}
