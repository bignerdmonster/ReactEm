import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const images = await db.query.images.findMany(); {/*await holds off the async function from killing itself as a way to pass the time it takes for the db to query, 
    findMany automatically uses the key as the id, basically automatically mapping the db*/};
  return (
    <main className=""> {/* bg-him for the funny but it's distracting for others*/}
      <div className="mx-auto w-1/5 py-10 content-center text-center">
        <h1 className="text-2xl text-sky-700 bg-gradient-to-l from-fuchsia-300/85 to-cyan-700/95 underline decoration-double rounded-md hover:blur-lg"> chill w this rn</h1>
      </div>
      <div className="justify-center flex flex-wrap items-center gap-16 overflow-visible">
        {images.map((image) =>(
          <div key={image.id} className="group flex flex-col flex-shrink w-48 p-6 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:scale-150">
            <img className="group-hover:animate-bounce"src={image.url} alt={image.name} title={image.name}/>
            <div className="text-orange-600 text-lg text-center group-hover:font-black group-hover:underline group-hover:text-">{image.name}</div>
            <div className= "text-xs text-slate-800 blur-md group-hover:blur-0">Created on {image.createdAt.toString()}</div>
          </div>
        ))}
      </div>
      <br></br>
      <div className="prose">
        <h1> A little thing </h1>
        <p> Yuppers, this is cool! </p>
      </div>
      <div className="divider w-100 mx-auto content-center"></div>
      <div className=" align-center mx-auto card bg-base-300 rounded-box grid w-3/4 h-40 place-items-center">
        <p> hi! </p>
      </div>
    </main>
  );
}
