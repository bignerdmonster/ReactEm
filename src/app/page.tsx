import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const images = await db.query.images.findMany(); {/*await holds off the async function from killing itself as a way to pass the time it takes for the db to query, 
    findMany automatically uses the key as the id, basically automatically mapping the db*/};
  return (
    <main className=""> {/* bg-him for the funny but it's distracting for others*/}
      <div className="mx-auto w-2/5 py-10 content-center text-center">
        <h1 className="text-2xl text-sky-700 bg-gradient-to-l from-fuchsia-300 to-cyan-700 underline decoration-double hover:blur-lg"> not super fond of this site so far</h1>
      </div>
      <div className="justify-center flex flex-wrap gap-16">
        {images.map((image) =>(
          <div key={image.id} className="w-48 p-6 bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-sm hover:blur-none">
            <img src={image.url} alt={image.name} title={image.name}/>
            <div className="text-orange-600 text-lg text-center">{image.name}</div>
          </div>
        ))}
      </div>
      <br></br>
      <div className="prose">
        <h1> A <strong></strong>little thing </h1>
        <p> Yuppers, this is cool! </p>
      </div>
    </main>
  );
}
