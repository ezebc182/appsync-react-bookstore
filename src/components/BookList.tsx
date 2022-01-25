import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {listBooks} from '../graphql/queries/book';
import {Book} from '../interfaces';

export const BookList = () => {
  useEffect(() => {
    getAllBooks();
  }, []);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  // const [nextToken, setNextToken] = useState();
  const getAllBooks = async () => {
    setLoading(true);
    const books: any = await API.graphql(
      graphqlOperation(listBooks, {limit: 3}),
    );

    setBooks(books.data.listBooks.books);
    // setNextToken(books.data.listBooks.nextToken);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="spinner-border  m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : books && books.length ? (
        books.map((book: Book) => (
          <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={book.imageUrl ? book.imageUrl : ''}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <h6>Author: {book.author}</h6>
                  <span className="badge bg-secondary">
                    Price: {book.price}
                  </span>
                </div>
                <div>
                  <Link
                    className="btn btn-link"
                    style={{display: 'block', margin: '1rem 0'}}
                    to={`/book-details/${book.bookId}`}
                    key={book.bookId}
                  >
                    See details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No books</h1>
      )}
      {/* TODO: <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${!nextToken && 'disabled'}`}>
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className={`page-item ${!nextToken && 'disabled'}`}>
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </>
  );
};
