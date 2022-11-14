import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page.";
import { HomePage } from "./components/Home.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
            <Route
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

/*
React query 

a library for fetching data in a react application

why?
since react is a ui library, there is no specific pattern for data fetching
useEffect hook for data fetching and useState hook to maintain component state like loading, error or resulting data
if the data is needed throughtout the app, we tend to use state management libraries
most of the state management libraries are good for working with client state
state management libraries are not great for working with asynchronous or server state

Client State
------------------
Persisted in your app memory and accessing or updating it is synchronous

Server State
---------------
Persisted remotely and requires asynchronous APIs for fetching or updating
Has shared ownership
Data can be updated by someone else without your knowledge
UI data may not be in sync with the remote data
Challenging when you have to deal wirth caching, deduping multiple requests for the same data, 
updating stale data in the background, performance optimizations. etc

Basic Queries
Poll data
RQ dev tools
Create Reusable query hooks
Query by ID
Parallel queries
Dynamic Queries
Dependent queries 
Infinite and paginated queries
Update data using mutations
Invalidate queries
Optimistic updates
Axios Interceptor

Project Set up
1) New React project using CRA
2) Set up an API end point that serves mock data for use in our application
3) Set up react router and a few routes in the application
4) Fetch data the traditional way using useEffect and useState

----------------------------------------------------------------------3. Fetching data with useQuery--------------------------------------------------------------------

At the top of component tree we need to add the react query provider and provide the client to our application 


*/
