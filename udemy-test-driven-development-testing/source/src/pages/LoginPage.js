import { useEffect, useState } from "react";

const LoginPage = (props) => {

    const [counter, setCounter] = useState(0);

   

    useEffect(() => {
        console.log("new random: "+props.random);
    },[props.random])


    return <div data-testid="login-page"><h1>Login Page</h1>{counter}</div>
}

export default LoginPage;