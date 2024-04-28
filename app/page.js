import Image from "next/image";

export default function Home() {
  return (
    <>
  <div className="flex justify-center  flex-col items-center gap-4 text-white
   h-[44vh] "> 
   <div className="font-bold  flex gap-4  justify-center items-center text-5xl    "> Buy Me A Chai   <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5l0yo86ZS5bt1XyKnykPX47oe5Z2RVKzPFanZuDFIg&s" width={40} alt="image" /></span></div>
   <p>
    A Creedfunding Platform for Creators. Get Funded by your fund and 
    Followers. Start Now!
   </p>
     <div>
     <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
     <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
     </div>

     
  </div>
  <div  className="bg-white h-1  opacity-10 ">
     </div>
     <div className="text-white container  pb-32 pt-14  mx-auto">
      <h2 className="text-3xl  font-bold text-center mb-14">Your Fans Can Buy You A Chai </h2>
      <div  className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="  bg-slate-200 rounded-full  
            p-2  text-black " width={88} src="man.png"alt="man"/>
          <p className="font-bole">Fund yourself </p>
          <p className="text-center">Your Fans are Available For to  Help You</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="  bg-slate-200 rounded-full  
            p-2  text-black " width={88} src="coins.png"alt="coins"/>
          <p className="font-bole">Fund yourself </p>
          <p className="text-center">Your Fans are Available For to  Help You</p>

        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="  bg-slate-200 rounded-full  
            p-2  text-black " width={88} src="Ankit.png"alt="ankit"/>
          <p className="font-bole">Fund yourself </p>
          <p className="text-center">Your Fans are Available For to  Help You</p>
           

        </div>
      </div>
     </div>
     <div  className="bg-white h-1  opacity-10 ">
     </div>

     <div className="text-white container  mx-auto  pb-32 pt-14 flex flex-col items-center justify-center  ">
      <h2 className="text-3xl  font-bold text-center mb-14">Learn more about us   </h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CFiCdpnn-jo?si=PdjA_FNgr1OTHx-M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
     </div>

     
  </>
  );
}
