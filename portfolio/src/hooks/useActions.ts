import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

/*
useDispatch is only used to get access to dispatch actions itself
is a function that is part of our redux store allow us to dispatch an action to all different reducers 

bindActionCreators(actionCreators, dispatch);
is going to give us an object that contains all the different action creators that we provided as a first argument
the return value from the action crators will automatically takenand provided to dispatch
{searchRepositories: dispatch(searchRepositories)}



*/
