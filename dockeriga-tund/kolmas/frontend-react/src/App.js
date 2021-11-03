import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageHeader from "./components/PageHeader";
import { Link } from "react-router-dom";
import { Button, DatePicker } from 'antd';
import { Layout } from "antd";
import EditPost from "./components/EditPost";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Layout>
        <Content>
          <Header><Route path="/" component={PageHeader}/></Header>
            <Switch>
              <Route exact path="/" component={ShowMagic} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/editpost" component={EditPost} />
              <DatePicker />
            </Switch>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
    </BrowserRouter>
    
  );
}

export default App;
