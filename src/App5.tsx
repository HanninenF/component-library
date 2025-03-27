import React from "react";
import { groupByCategory } from "./utils/groupByCategory/groupByCategory";


function BookRow(){
    
}

type BookCategoryRowProps = {
  category: string;
};
function BookCategoryRow({ category }: BookCategoryRowProps) {
  return (
    <tr>
      <td></td>
    </tr>
  );
}

type BooksType = {
  category: string;
  title: string;
  author: string;
  pages: number;
  id: string;
};

type BookTableProps = {
  books: BooksType[];
};

export default function App5() {
  function BookTable({ books }: BookTableProps) {
    const groupedBooks = groupByCategory(books);
    groupedBooks.map((book, index) => console.log(`book${index + 1}: `, book));
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
          </tr>
        </thead>
        <tbody>
          {groupedBooks.map(({ item, showCategory }) => (
            <React.Fragment key={item.id}>
              {showCategory && <BookCategoryRow category={item.category} />}
              <BookRow/>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  }

  const BOOKS = [
    {
      category: "Fantasy",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      pages: 310,
      id: "1",
    },
    {
      category: "Fantasy",
      title: "Harry Potter",
      author: "J.K. Rowling",
      pages: 320,
      id: "2",
    },
    {
      category: "Sci-Fi",
      title: "Dune",
      author: "Frank Herbert",
      pages: 412,
      id: "3",
    },
    {
      category: "Sci-Fi",
      title: "Neuromancer",
      author: "William Gibson",
      pages: 271,
      id: "4",
    },
    {
      category: "Mystery",
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      pages: 465,
      id: "5",
    },
    {
      category: "Mystery",
      title: "Gone Girl",
      author: "Gillian Flynn",
      pages: 422,
      id: "6",
    },
  ];
  return (
    <>
      <BookTable books={BOOKS} />
    </>
  );
}
