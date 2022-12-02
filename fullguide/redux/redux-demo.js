const redux = require("redux");

const countReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(countReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

/*
ReducerFunction -----------------------------> Central Data(State) Store--------------------------------> Components -------------> Action ------------------> Reducer Function
                Mutates(=changes)Store Data                                 Subscription                                Dispatch            Forwaded to


1) First we create a store , how we procced what we do with that store 
That store should manage some data , the data it manages is in the enddetermined by the reducer function 
because is the reducer function which will produce new state snapshots
The reducer must produce a new state snapshot whenever an action reaches it 
when we execute the code for the first time the reducer will also be executed with a default action 
that should split out theinitial state

2) we need to add a reducer function , reducer function isa standard Javascript function, but it will be called by the redux library 
   and it will always receive two pieces of input 
   Inputs: Old State + Dispatched Action ---> new state object 

3) Action is a plain javascript object

*/
