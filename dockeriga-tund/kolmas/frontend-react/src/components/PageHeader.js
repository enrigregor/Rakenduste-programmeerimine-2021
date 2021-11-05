import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Context } from "../store";
import { logoutUser } from "../store/actions";

function PageHeader(){
const [state, dispatch] = useContext(Context);
    function userLogout() {
        dispatch(logoutUser());
    }

    function LoggedIn() {
        if(state.auth.email != undefined && state.auth.email != null){
            return (
                <Button onClick={() => userLogout()}><Link to="/">Logout</Link></Button>
            )
        } else {
            return (
                <Button><Link to ="/login">Login  </Link></Button>
            )
        }
    }

    return (
        <div>
            <Button><Link to ="/">Main Page  </Link></Button>
            <Button><Link to ="/posts">Posts  </Link></Button>
            {LoggedIn()}
        </div> 
        
    )
}

export default PageHeader