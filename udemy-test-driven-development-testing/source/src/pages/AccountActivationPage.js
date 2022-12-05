import { activate } from "../api/apiCalls";
import { useEffect, useState } from "react";

const AccountActivationPage = (props) => {
    const [result, setResult] = useState();

    useEffect(() => {
        activate(props.match.params.token).then(() => {
            setResult("success");
        }).catch(() => {
            setResult("fail");
        })
    },[])

    return (
        <div data-testid="activation-page">
            {result === "success" && (<h1 className="alert alert-success mt-3">Account is activated</h1>)}
            {result === 'fail' && (<h1 className="alert alert-danger mt-3">Activation Failed</h1>)}
        </div>
    )
}

export default AccountActivationPage;