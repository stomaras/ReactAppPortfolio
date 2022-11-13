import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";

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
                <Link to="/super-heroes">Traditional Super heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHeroPage />
            </Route>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

/*
React Query 
A library for fetching data in a React Application

Why?
1. Since React is a ui library there is no specific pattern for data fetching 
2. useEffect hook for data fetching and useState hook to maintain component state like loading, error or resulting data
3. if the data is needed throughout the app , we tend to use state management libraries.
4. Most of the state management libraries are good for working with client state.
Ex: 'theme' for the application / whether a modal is open
5. State management libraries are not great for working with asynchronous or server state

Client vs Server State

Client State 
---------------------------------------------------------------------------
Persisted in your app memory and accessing or updating it is synchronous.


Server State
----------------------------------------------------------------------------
Persisted remotely and requires asynchronous apis for fetching or updating
Has shared ownership
Data can be updated by someone else without your knowledge
UI data may not be in sync with the remote data
Challenging when you have to deal with caching, deduping multiple requests for the same data,
updating stale data in the background, performance optimizations.

Course Content
Baic queries
Poll data
RQ dev tools
Create Reusable query hooks
Query By ID
Parallel queries
Dynamic Queries
Dependent queries
Dynamic Queries
Infinite and paginated queries
Updata data using mutations
Invalidate queries
Optyimistic updates
Axios interceptor

Project set up
1. new react project using cra
2. set up an API endpoint that serves mock data for use in our application
3. set up react router and a few routes in the application
4. fetch data the traditional way using useEffect and useState

after we setup and enpoint in json server we set up a script called 
inside package.json inside scripts:
"serve-json":"json-server --watch db.json --port 4001"

Inside db.json we setup data , which we serve as API data

UseQuery abstracts all that and makes it really simple to fetch data in a react component
also with use query we can fetch data outside of api call

React Query Tutorial - 6 - Query Cache

By default every query result is cached for five minutes 
and react query relies on that cache for subsequent requests

One of the reasons of caching the query results is being able to reuse the results for suubsequent queries 
that will allow the user to view the previously getched data without having to view the loading indicator every single 
time thus leading to a slightly better user experience 

----------------------------------------------------Polling--------------------------------------------------------------------

Polling basically refers to the process of fetching data at regular intervals.. for example if you have a component
that show the real time price of different stocks , you might want to fetch data every second to update the ui 
thins ensures that the UI will always be in sync with the remote data irrespective with configurations like refetch 
on mount or refetching on windows focus which is depend on user interaction.
in order to poll data with react query we can make use of another configuration called refetch interval 
refetchInterval:false

refetchInterval: 2000 ---> will refetch every two seconds the query
polling or automatic refetching is paused if the window loses focus 
if you do want background refetching at regular intervals you can specify another configuration
called refetch interval 
refetchIntervalInBackground:true

---------------------------------------------------useQuery on click---------------------------------------------------------
depending on the requirements we might want to fetch the data when an event occurs and not when component mounts 
let's see how to use fetchData using useQuery but only on click of a button

step 1) disable fetching on mount using the enabled flag 
step 2) fetch data on click of a button:

--------------------------------------------------Success and Error Callbacks-------------------------------------------------------------
when a query happens could be opening a modal navigating to a different route or even display toast notifications
to cater to these scenarios react query lets us specify success and error callbacks as configurations or options to the useQuery Hook

combine polling with callbacks use the refetch interval option to pull the api data in every three seconds behind the scenes add a fourth suoper hero 
of your choice to the superheroes array in db.json 
onSuccess callback check if the number of heroes is four and if it is the case i want to stop the polling
use a state varibale which will be assigned to refetch interval configuration inside of callback functions check for the rsponse and error and set the value to false

-------------------------------------------------Data Transformation----------------------------------------------------------------------------
react query provides a select configuration option which we can specify on the use query hook 
for data transformation we specify an option or a configuration called select

select automatically receives the api data as an argument

select option to transform or select a part of data returned by query function

--------------------------------------------Custom Query Hook----------------------------------------------------------------------------------------
the use query hook is used to fetch data , the first argument is a unique key the second argument is a fetcher function and the third argument 
is an object where we can specify options or configurations to tweak its behaviour the hook also returns a number of values which we can use 
to render the components jsx

In large applications the same query required in a different component one approcah will be to duplicate the code 
what we need is a way to reuse the useQuery Hook 

That is how you create a custom query hook

define the fetcher function 
wrap the use query hook and pass in arguments if necessary

-------------------------------------------------Query By Id-----------------------------------------------------------------------------------------
Querying by Id setup

1. Create a new page that will eventually display the details about one single super hero 
2. Configure the route to that page and add alink from the super heroes list page to the super hero details page
3. Fetch a superhero by id and display the details in the UI

Link component sort of behaves like an anchor tag for navigating within the app, in our case navigating from superheroes list page 
to the superhero details page 


*/
