import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import {Nav} from './components/Nav';
import {BookList} from './components/BookList';
import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import {BookDetails} from './components/BookDetails';

function App({isPassedToWithAuthenticator, signOut, user}: any) {
  return (
    <>
      <Nav signOut={signOut} user={user} />
      <div style={{padding: 20}}>
        <Router>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="books" element={<BookList />} />
            <Route path="book-details/:bookId" element={<BookDetails />} />
            <Route
              path="*"
              element={
                <main style={{padding: '1rem'}}>
                  <h1>Welcome to BookStore!</h1>
                  <Outlet />
                </main>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default withAuthenticator(App);
// export default App;

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}
