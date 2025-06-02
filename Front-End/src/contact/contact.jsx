import { useState } from "react";

export default function Contact() {

  const [details,setDetails]= useState({name:"",email:"",message:"",contact:""})


  async function sendTheMessage(){

    if(details.name && details.email && details.message && details.contact){
       console.log("you are ready")
    }


  }


  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white px-6 md:px-12 xl:px-28 py-12 md:py-20">
      <h1
        className="bg-zinc-400 px-4 py-1 w-fit text-sm md:text-base"
        style={{ fontFamily: "Lexend Giga, sans-serif" }}
      >
        Contact
      </h1>

      <div className="block pt-16 md:pt-24">
        <input
          type="text"
          value={details.name}
          className="w-full focus:outline-none font-semibold border-b pb-2 text-base md:text-lg bg-transparent"
          placeholder="Name"
          onChange={(e)=>setDetails({...details,name:e.target.value})}
        />
        <input
          type="text"
          value={details.email}
          className="w-full focus:outline-none font-semibold border-b mt-10 pb-2 text-base md:text-lg bg-transparent"
          placeholder="Email"
          onChange={(e)=>setDetails({...details,email:e.target.value})}

        />
        <input
          type="text"
          value={details.contact}
          className="w-full focus:outline-none font-semibold border-b mt-10 pb-2 text-base md:text-lg bg-transparent"
          placeholder="Contact"
          onChange={(e)=>setDetails({...details,contact:e.target.value})}

        />
        <input
          type="text"
          value={details.message}
          className="w-full focus:outline-none font-semibold border-b mt-10 pb-16 text-base md:text-lg bg-transparent"
          placeholder="Message"
          onChange={(e)=>setDetails({...details,message:e.target.value})}
        />
        <button onClick={sendTheMessage}className="cursor-pointer w-full py-3 mt-10 font-semibold text-base md:text-lg bg-white text-black uppercase">
          Send A Message
        </button>
      </div>
    </div>
  );
}
