import { NewPostForm } from "~/components/NewPostForm";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
        <NewPostForm />
      </header>
    </>
  );
}
