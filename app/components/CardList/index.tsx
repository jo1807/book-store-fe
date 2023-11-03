import { IBook } from "@/app/types"

interface ICardList {
    data: IBook[];
}

interface ICard {
    data: IBook;
}

export const CardList = ({ data }: ICardList) => (
        <ul className="flex flex-wrap">
            {data.map((book) => 
                <li key={book.id} className="w-1/4 flex-col rounded-md p-4 m-4 bg-emerald-100 hover:drop-shadow-md hover:bg-emerald-200 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-100">
                    <Card data={book}/>
                </li>)}
        </ul>
    )

export const Card = ({ data }: ICard) => (
        <>
            <p><span className="font-medium">Book: </span>{data.name}</p>
            <p><span className="font-medium">Author: </span>{data.author}</p>
            <p><span className="font-medium">Genre: </span>{data.genre}</p> 
        </>
)