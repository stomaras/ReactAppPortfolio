import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

/*
Configureing routes
Navigation on button click
Navigating programatically
Dynamic routes
Nested Routes
Route parameters
Lazy Loadng
Authentication

npm iinstall react-router-dom@6

---------------------------------------------------------Configuring Routes---------------------------------------------------------------------------------------
localhost:3000 ---> home page
localhost:300/about ---> about page

Now the first step to configuring routes with react router is to connect the url in the browser with our react application 
For this react-router provide a component called browser router with which we need to wrapour entire app
import { BrowserRouter } from "react-router-dom"; ---> in index.js

<BrowserRouter>
    <App />
</BrowserRouter>

With this we can use the entire feature within the app component tree

In app.js 

We define 
<Routes>
  <Route></Route>
</Routes>

<Route path="/" element={<Home />}></Route>

Reflects the path in the url , when the url matches this path the element which will be rendered is <Home/>

Step 1 ---> We wrapped the app component with Browser Router 
Step 2 ---> Create the components that need to be rendered at different url paths, Home, About
Step 3 ---> Configure the routes using the routes and route component  from react-router

------------------------------------------------------------------------------------Link-------------------------------------------------------------------------------------------

import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>

In absolute routes the path begins with forward slash


-------------------------------------------------------------------------------Active Links-------------------------------------------------------------------------------------

React router provides another component called nav link which knows whether or not it is the active link, we can use that component to style the active link in our navbar

 const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  <NavLink style={navLinkStyles} to="/">
        Home
  </NavLink>


----------------------------------------------------------------------------Navigating Programatically------------------------------------------------------------------------------

Let's say you are placing an order on amazon , if the form submission is succesful you would be naviagted to order confirmation page

localhost:3000 ------------------------->    localhost:3000/order-summary
Place order                                   Order confirmed

Simulate the scenario and in the button click you go aytomatically 
In our example in the link of place order button in the hopme page let's navigate to the order summary page 
Add a button in the home page that says place order

After click of Place Order button in Home Page we want to navigate programatically on OrderSummary Route
to navigate programatically react router provides the use navigate hook 

import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const naviagte = useNavigate();
  return (
    <>
      <div>Order Confirmed!</div>
      <button onClick={() => naviagte("/")}>Back to Home</button>
    </>
  );
};

we place a value of -1

if we want to replace the history, we set replace:true
<button onClick={() => navigate("order-summary", { replace: true })}>
        Back
</button>


--------------------------------------------------------------No Match Route----------------------------------------------------------------------------
Configuring a no macth route in our react application
Inform the user that url does not macth any route in our application

Let's create a component for the urls that does not match any of the configure routes

<Route path="*" element={<NoMatch />} />
 ---> this will route when no other routes do

 -----------------------------------------------------------------------Nested Routes------------------------------------------------------------------
 Scenario:
 react router also helps to switch between a portion of the view inside the page

 In our navbar consider a navigation link tghird called products 
 when we click on Products we navigate to /products which renders a new products page 
 In this products page we have a search bar to search for a product 

 In products page we have additional two links 1)Featured 2)View
 if we link on Featured we go to localhost:3000/products/featured and new render page will go under th links about feature products
 a portion of the ui changes based on the route, to achieve this we make use of nested routes

 Relative Paths (without'/')
 which we will learn about later on in the series

 we need to create two new components that must be rendered for Featured Products and New Products
 and also configure the new routes

 <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
</Route>

1) We create a products component and configured a route for the same component
2) Add a nav link to the navbar to navigate to the products page
3) Create two more components for featured and new products ( we configure the routes to these components as nested routes)
   parent component path will be products the child component path will automatically have the parent path as a prefix
   so new routes becomes /products/featured
4) Parent Component want to know what to do with these child components in the tree , for this we use an outlet component from 
   react-router-dom
   The outlet component renders the child component corresponding to the matching child route from the parent list of routes

----------------------------------------------------------------------------------------Index Route-------------------------------------------------------------------------
Index route is going to be a nested route so within the products route add Route , 
we do not specify the path prop instead we specify the prop index
<Route index element={<FeaturedProducts/>}/>

So when you have nested routes and you want a route to be rendered at the parent url make use of index route
the index route will contain the index prop instead of path prop, the path will be the same as the parent route

---------------------------------------------------------------------------------Dynamic Routes--------------------------------------------------------------------------

localhost:3000/users                localhost:3000/users/id                     localhost:3000/users/1
---------------------------         ------------------------------------        -----------------------------------
User 1                              User Details                                User 1 details
User 2
User 3


Create Users Component
Configure a route for this component 

Create another one component UserDetails

<Route path="users/:userId" element={<UserDetails />} />

This userId param will match any value as long as the pattern is the same , users/...any value
<Route path="users/admin" element={<Admin />} />

react router is smart enough to first match the route that is more specific

First when dealing with a list detail pattern or if the route parameter can vary in value make use of dynamic routes
specify the url param denoted by a colon prefix in the path

React Router will try to macth the route that is more specific before trying to match a dynamic route 
so /admin before /userId

-----------------------------------------------------------------------URL Patterns--------------------------------------------------------------------------------------------------
Now in order to extract the route parameter we need to import a hook from the react router package

make use of hook useParam() in order to get parameters from the route

import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>Details About User {userId}</div>;
};

(or)----------------------(or)-----------------------------(or)--------------------------(or)-------------------------------(or)------------------------------------


import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userId } = useParams();

  return <div>Details About User {userId}</div>;
};

---------------------------------------------------------------------Search Params-----------------------------------------------------------------------------------
url params is not the only way to add parameters to a route , we can also add an optional query string , for example at the end of the current url 
localhost:3000/users/1?filter=active, these parameters called search params in the react-router

Search Params

localhost:3000/users                        localhost:3000/users?filter=active

Active Users | Reset Filter                 Active Users | Reset Filter

Users Page                                  Users Page

Showing all users                           Showing active users

if we press the button reset filter we remove the search param and revert the text

to deal with search params react router provides a hook called use search params 

this hook act as useState hook but instead of storing state in memory though it is stored 
in the url

import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Show Active Users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
};

using searchParams hook is very common when you have to apply filters in a listing page

import useSearchParams Hook and invoke it

------------------------------------------------------------------Relative Links--------------------------------------------------------------------------------------------------------

A relative link is a link that does not start with forward slash and will inherit the closest route in which they are rendered
Since Products page render in /Products the feature link will apopend /featured to /products 

Now if you wish to use absolute paths 
/feature
/new

This will construct the path from the root of the app and not the current url

In order to work with absolute paths 

<Link to="/products/featured">Featured</Link>
<Link to="/products/new">New</Link>

Relative Paths or relative links does not start with/ and inherit the closest route in which they are rendered

absolute links make more sense for components like the primary navigation bar

-----------------------------------------------------------------------Lazy Loading--------------------------------------------------------------------------------------------
is a technique where the components not required on the home page can be split into seperate code bundles and downloaded only when the user navigates to that page 
you can think it as incrementally downloading the application , it helps reduce initial load time thereby improving performance 

To lazy load a route we need to use dynamic imports and react suspense

for dynamic imports we need a default export of the component

As your application increase in size bundle size bloats up causing the initial load time to be very long
in these cases you can lazy loads such routes with the help of React.Suspense and React.lazy(() => import('./components/About'))

-----------------------------------------------------Authentication and Protected Routes-------------------------------------------------------------

Sometimes you might need to protect the routes from users that are not loged in for example in an ecommerce site profile page or the order history requires user be logged in 
react-router itself does not have feature to protect routes 
but you can implement the functionality without so much duifficulty

Let's see how to protect router using react router and c0ontext api from react 

localhost:3000                          localhost:3000/login              localhost:3000/profile

Home About Products Profile             Home About Products Profile       Home About Products Profile

Home Page                               username login                    Welcome username Logout


lets create the profile page  add the link in the navabr and configure the corresponding route

We are going to maintain a user state variable and provide it to the entire component tree using react context

with user context provider we have access to the user login and logout function through out our application

let's implement a login route 

*/
