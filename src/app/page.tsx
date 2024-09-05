import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/3a04e010-faa1-4827-8a41-6604566cc1e7-mz2ifv.jpg",
  "https://utfs.io/f/5137ee85-cf76-484f-b027-40e3dd41ba74-a93uc1.jpg",
  "https://utfs.io/f/889c4afb-bb68-4ae3-967a-0ea17f3fc56d-8zo0oj.jpg",
  "https://utfs.io/f/73c6e50f-1b41-4acb-9345-81e3b92b83ea-1mpyro.png",
  "https://utfs.io/f/ef7da06f-4fdc-4049-b6a9-8a4acbedb959-4xfp42.png",
  "https://utfs.io/f/7375bacd-939b-49bb-a9ef-bb7ba1d5d093-xlrwdi.jpg"
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
/* why on god's green earth don't we just use a dictionary */
export default function HomePage() {
  return (
    <main className="bg-him">
      <div className="flex flex-wrap gap-4">
        {/* curly braces are javascript inserts into the html, this is a js comment lol
         dotmap is just a way to iterate over an array (?) (like `for i in x` in python)
         arrow functions like the one below aren't permenant, they don't exist once they
         finish running, a throwaway thingy. ALSO, i hate tailwind. this is GROSS.*/}
        {mockImages.map((image) =>(
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
