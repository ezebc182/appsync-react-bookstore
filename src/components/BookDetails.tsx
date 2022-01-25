import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {getBookById} from '../graphql/queries/book';

export const BookDetails = () => {
  let params = useParams();
  useEffect(() => {
    getBookDetails();
  }, [params.bookId]);
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({
    bookId: '',
    title: '',
    price: '',
    author: '',
    imageUrl: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  });

  const getBookDetails = async () => {
    setLoading(true);
    const book: any = await API.graphql(
      graphqlOperation(getBookById, {id: params.bookId}),
    );

    setBook(book.data.getBookById);
    setLoading(false);
  };

  const bookDetails = () => {
    return (
      <>
        <NavLink to={'/books'} className="btn btn-secondary">
          Go back to list
        </NavLink>
        <article style={{margin: 20}}>
          <div key={book.bookId} className="card" style={{width: '18rem'}}>
            <img
              src={book.imageUrl ? book.imageUrl : ''}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text text-truncate">{book.description}</p>
              <a
                className="btn btn-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Show more
              </a>
              <div className="collapse" id="collapseExample">
                <p>{book.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Author: {book.author}</li>
                <li className="list-group-item">
                  Price:{' '}
                  <span className="badge bg-secondary">{book.price}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </>
    );
  };

  return (
    <>
      <hr />
      {loading ? (
        <div className="spinner-border  m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        book.bookId && bookDetails()
      )}
    </>
  );
};
