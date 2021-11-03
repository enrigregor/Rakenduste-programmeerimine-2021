import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Layout} from "antd";
const { Header, Content, Footer, Sider } = Layout;

function PageHeader(){
    return (
        <div>
            <Button><Link to ="/">Pealeht  </Link></Button>
            <Button><Link to ="/posts">Postitused  </Link></Button>
            <Button><Link to ="/login">Login  </Link></Button>
            <Button><Link to ="/signup">Sign up  </Link></Button>
        </div> 
        
    )
}

export default PageHeader