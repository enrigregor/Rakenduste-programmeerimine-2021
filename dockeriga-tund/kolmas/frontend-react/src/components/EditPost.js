import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, emptyPost, removePost, updatePosts } from "../store/actions";
import { Table, Space, Form, Input, Button, Select } from "antd";
import { Content } from "antd/lib/layout/layout";

function EditPost() {
    const [state, dispatch] = useContext(Context);
    const [userPostData, setUserPostData] = useState("");


    useEffect(() => {
        if(state.auth.email != undefined && state.auth.email != null) {
           const userEmail = {
            email: state.auth.email,
        }
        fetch("http://localhost:8081/api/post/user", {
            method: "POST",
            body: JSON.stringify(userEmail),
            headers: {"Content-Type":"application/json"}
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          dispatch(emptyPost())
          dispatch(addPost(data))
          setUserPostData(data)
        });
      
        } else {
            dispatch(emptyPost());
            return ("empty")
        }
        }, [])
        


    function EditPostTitle(values, userPostData) {
        //console.log("MINA OLEN POSTITUSE ID: ", id);
        const newTitle = {
            title: values.postTitle,
        }
        const updatedPost = {
            firstName: state.auth.firstName,
            lastName: state.auth.lastName,
            email: state.auth.email,
            id: values.postId,
            title: values.postTitle
            
        }

        //if(userPostData.email == state.auth.email){
            fetch("http://localhost:8081/api/post/edit/" + values.postId, {
                method: "PUT",
                body: JSON.stringify(newTitle),
                headers: {"Content-Type":"application/json"}
            }).then(response => {
                console.log(response);
                if(response.ok){
                  console.log("Success")
                } else {
                  throw new Error("Failed at updating the post.")
                }
            }).catch((error) => {
                console.log(error);
            })
            dispatch(updatePosts(updatedPost))
        /*} else {
            if(state.auth.email != undefined && state.auth.email != null) {
                console.log("That post is not yours!");
            } else {
                console.log("You have to be signed in to edit posts!");
            }*/
            
        
        
      }
  
      function DeletePost(id) {
        //console.log("MINA OLEN POSTITUSE ID DELETES: ", id);

        fetch("http://localhost:8081/api/post/delete/" + id, {
                method: "DELETE",
            }).then(response => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        dispatch(removePost(id))
      }

    const columns = [
        {
          title: 'Firstname',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Lastname',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'PostID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a onClick ={() => DeletePost(record.id)}>Delete</a> 
            </Space>
          ),
        },  
      ];

      let rows;   
  if(state.posts.data !== undefined){     
    const iteratedData = state.posts.data.map(row => ({       
      key: row.id,       
      firstName: row.firstName,       
      lastName: row.lastName,       
      title: row.title,
      id: row.id    
    }))        
      rows = [       
        ...iteratedData     
      ];   
    } else {     
      rows = []   
    };
    console.log("mina olen userPostData.email ESIMENE", rows.email);

    const { Option } = Select;

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    
      const [form] = Form.useForm();
    
      const onFinish = (values) => {
          EditPostTitle(values)
        //console.log(values);
      };

    
      return (
        <Content>
        <Table dataSource={rows} columns={columns} />
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="postId" label="Post ID that you want to change" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        <Form.Item name="postTitle" label="New title" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </Content>
      );
    
    
        
    
}
export default EditPost