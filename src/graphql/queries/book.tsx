export const getBookById = `
    query getBookById($id: ID!) {
        getBookById(bookId: $id) {
            author
            title
            price
            imageUrl
            bookId
            createdAt
            description
            updatedAt
        }
    }
`;

export const listBooks = `
    query listBooks($limit: Int!, $nextToken: String) {
        listBooks(limit: $limit, nextToken: $nextToken) {
            books {
              author
              bookId
              updatedAt
              title
              price
              imageUrl
              description
              createdAt
            }
            nextToken
          }
    }
`;