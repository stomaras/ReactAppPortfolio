import { useEffect, useState } from "react";

const LoginPage = (props) => {

    const [counter, setCounter] = useState(0);

    // // will act as the componentDidMount with the empty array
    // useEffect(() => {
    //     console.log("this is like component did mount");
    //     let interval = setInterval(() => {
    //         console.log('increasing counter');
    //         setCounter((previousState) => {
    //           return previousState + 1
    //         });
    //       }, 1000);
    //     return () => {
    //         console.log("this is like component will unmount");
    //         clearInterval(interval);
    //     };
    // },[]);

    // // this is like componentDidUpdate
    // useEffect(() => {
    //     console.log('this is like component did update , but is for specified dependency');
    // },[counter])

    useEffect(() => {
        console.log("new random: "+props.random);
    },[props.random])


    return <div data-testid="login-page"><h1>Login Page</h1>{counter}</div>
}

export default LoginPage;