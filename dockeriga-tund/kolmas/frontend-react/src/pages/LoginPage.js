import { useContext, useState, useRef, useEffect, useImperativeHandle } from "react";
import { Form, Input, Button} from 'antd';
import { Context } from "../store";
import { loginUser, logoutUser } from "../store/actions";
import { Content } from "antd/lib/layout/layout";
function LoginPage() {
    const [state, dispatch] = useContext(Context);

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
                }).catch((error) => {
                    console.log("Login error: ", error);
                })
            );
        }
        console.log(state);

        const onFinish = (values) => {
            startLogin(values);
            //console.log("parool:", values.password);
            console.log('Andmed õigel kujul');
        };
    
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        if(state.auth.email != undefined){
            return (
                <Content>
                 <div><h1>Oled sisselogitud</h1></div>   
                </Content>
                
            )
        } else {
            return (
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
        );
        };
        
        
}
export default LoginPage;