import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function Home() {

  async function insertData (){
    console.log("fucntion clalled")
    try {
      const {data , error} = await supabase.from("views").insert({
      name : "Ankit",
      email : "ankit@gmail.com"
    })
    if(data) console.log(data);
    if(error) console.log(error) 
    } catch (error) {
      console.log("Data insertion failed :", error)
    }
  }
  insertData()


  return (
    <div>
      Hello 
    </div>
  );
}
