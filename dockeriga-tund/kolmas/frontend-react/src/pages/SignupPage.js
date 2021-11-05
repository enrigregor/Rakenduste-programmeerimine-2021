import { React, useContext, useState } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";
import { Content } from "antd/lib/layout/layout";
import {
  Form,
  Input,
  Button,
} from 'antd';

function SignupPage() {
    const [state, dispatch] = useContext(Context);
    let error;

    function startSignup(values) {
        console.log("Values info väärtus: ", values);
            const userData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
            };

            return(
                fetch("http://localhost:8081/api/auth/signup", {
                    method: "POST",
                    body: JSON.stringify(userData),
                    headers: {"Content-Type":"application/json"}
                }).then(response => {
                    if(response.ok){
                        console.log("Success!")
                    } else {
                        throw new Error("Signup failed.")
                    }
                    return response.json();
                    
                }).then(data => {
                    dispatch(loginUser(data))
                }).catch(error => {
                    console.error("Signup error: ", error);
                })
                
            );
    }


    const formItemLayout = {
    labelCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 8,
        },
    },
    wrapperCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 16,
        },
    },
    };
    const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    },
    };

    const [form] = Form.useForm();

    //kahekordne parooli kontroll on formis sees
    const onFinish = (values) => {
        startSignup(values)
        console.log('Received values of form: ', values);
    };
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    if(state.auth.email != undefined){
        return (
            <Content>
                <h1>Oled sisselogitud</h1>
            </Content>
        )
    } else {
        return (
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
            >

            <Form.Item
                name="firstName"
                label="Firstname"
                tooltip="What is your firstname?"
                rules={[{ required: true, message: 'Please input your firstname!', whitespace: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="lastName"
                label="Lastname"
                tooltip="What is your lastname?"
                rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input />
            </Form.Item>
    
            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
    
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
    
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>
    
            
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Register
                </Button>
            </Form.Item>
    
            </Form>
        );

    }

    
}

export default SignupPage;