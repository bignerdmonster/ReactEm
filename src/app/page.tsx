import Link from "next/link";
import UploadThangButton from "./_components/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
export default async function HomePage() {
  const images = await getMyImages().catch((error) => {
    console.error(error);
    return null
    //return [{id:0,url:"https://utfs.io/f/PNDxZbTEcFzd7Pva8oB3xTwvbBE3KnJLc0t57G8CAVSlFr9m",createdAt:"the basis of authorization and permissions",name:"Sign in to see images!"}]
  })
  return (
    <main className=""> {/* bg-him for the funny but it's distracting for others*/}
      <div className="mx-auto w-1/5 py-10 content-center text-center">
        <h1 className="text-2xl text-orange-500 bg-slate-700/55 underline decoration-double rounded-md hover:animate-spin">Image Gallery!</h1>
      </div>
      <div className="justify-center flex flex-wrap items-center gap-16 overflow-visible">
        {images != null && images.map((image) =>(
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
        <SignedIn><p className="bg-gradient-to-r from-fucshia-500">Upload a thang here!</p>
        <UploadThangButton className={
          "ut-button:bg-gradient-to-l ut-button:from-fuchsia-400 ut-button:to-orange-500 ut-uploading:bg-red-400"
          }>
          </UploadThangButton></SignedIn>
        <SignedOut><SignInButton>Sign In to upload a thang!</SignInButton></SignedOut>
      </div>
    </main>
  );
}
