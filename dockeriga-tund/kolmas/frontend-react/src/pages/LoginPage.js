import { useContext } from "react";
import { Form, Input, Button, Alert} from 'antd';
import { Context } from "../store";
import { Link } from "react-router-dom";
import { loginUser } from "../store/actions";
import { Content } from "antd/lib/layout/layout";
function LoginPage() {
    const [state, dispatch] = useContext(Context);
    let errorLogin;
    let checkLog = "";

       function startLogin(values) {
           console.log("Values info väärtus: ", values);
            const userData = {
                
                email: values.email,
                password: values.password,
            };
            

            return(
                fetch("http://localhost:8081/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify(userData),
                    headers: {"Content-Type":"application/json"}
                }).then(response => {
                    return response.json();
                }).then(data => {
                    dispatch(loginUser(data))
                    checkLog = "done";
                    CheckAlert();
                }).catch((error) => {
                    console.log("Login error: ", error);
                    checkLog = "done";
                    CheckAlert();
                })
            );

        }

        const onFinish = (values) => {
            startLogin(values);
        };

        function CheckAlert() {
               if((state.auth.email == undefined || state.auth.email == null) && checkLog == "done"){
                   errorLogin = <Alert message="Failed to login!" type="error" />
                } 
            return errorLogin
            
        }
    
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
            CheckAlert();

        };
        if(state.auth.email != undefined){
            return (
                <Content>
                 <div><h1>Oled sisselogitud</h1></div>   
                </Content>
                
            )
        } else {
            return (
                <Content>
                <Button><Link to ="/signup">Sign up  </Link></Button>
            <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            {CheckAlert()}
            <Form.Item
                label="Email"
                name="email"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input />
            </Form.Item>
    
            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
    
            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" >
                Submit
                </Button>
            </Form.Item>
            </Form>
            </Content>
        );
        };
        
        
}
export default LoginPage;