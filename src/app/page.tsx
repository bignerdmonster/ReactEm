import Link from "next/link";
import UploadThangButton from "./_components/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UploadTextButton from "./_components/uploadThatText";
import { getMyImages } from "~/server/queries";
export default async function HomePage() {
  const images = await getMyImages().catch((error) => {
    console.error(error);
    // this should be "return null" but we like to have fun here
    return [{id:0,url:"https://utfs.io/f/PNDxZbTEcFzd7Pva8oB3xTwvbBE3KnJLc0t57G8CAVSlFr9m",createdAt:"the basis of authorization and permissions",name:"Sign in to see images!"}]
  })
  return (
    <main className=""> {/* bg-him for the funny but it's distracting for others*/}
      <div className="mx-auto bg-slate-700 card w-11/12 py-10 rounded-box">
      <h1 className="text-4xl text-center text-orange-500 pb-10 font-bold hover:font-normal hover:animate-ping">Image Gallery!</h1>
        <div className="mx-auto place-items-center">
          <div className="justify-center flex flex-wrap items-center gap-16 overflow-visible">
            {images?.map((image, index) =>(
              <div key={index} className="group flex flex-col flex-shrink card rounded-box w-48 p-6 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:scale-150">
                <img className="group-hover:animate-bounce"src={image.url} alt={image.name} title={image.name}/>
                <div className="text-orange-600 text-lg text-center object-scale-down group-hover:font-black group-hover:underline">{image.name}</div>
                <div className= "text-xs text-slate-800 blur-md object-scale-down group-hover:blur-0">Created on {image.createdAt.toString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br></br>
      <div className="prose">
        <h1> A little thing </h1>
        <p> Yuppers, this is cool! </p>
      </div>
      <div className="divider w-100 mx-auto content-center"></div>
      <div className=" align-center mx-auto card bg-base-300 rounded-box grid w-3/4 h-auto py-10 place-items-center">
        <SignedIn><p className="bg-gradient-to-r from-fucshia-500 to-orange-500 px-2 py-1">Upload a thang here!</p>
        <UploadThangButton className={
          "ut-button:bg-gradient-to-l ut-button:from-fuchsia-400 ut-button:to-orange-500 ut-uploading:bg-red-400 py-2"
          }/>
          <UploadTextButton/>
         </SignedIn>
        <SignedOut><SignInButton>Sign In to upload a thang!</SignInButton></SignedOut>
      </div>
    </main>
  );
}
