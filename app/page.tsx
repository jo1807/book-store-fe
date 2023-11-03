import { CardList } from "./components/CardList";

async function getData() {
  console.log(process.env.BOOKS_URL)
  if (process.env.BOOKS_URL) {
    const res = await fetch(process.env.BOOKS_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    return res.json();
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1 className="ml-4 mt-8 text-lg font-medium">Book Store</h1>
      {data ? <CardList data={data}/> : null}
    </main>
  )
}
