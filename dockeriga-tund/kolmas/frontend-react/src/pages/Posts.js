import { useContext, useState, useRef, useEffect, useImperativeHandle } from "react";
import { Context } from "../store";
import { addPost, emptyPost, removePost, updatePosts } from "../store/actions";
import { Table, Space } from "antd";

function Posts() {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(Context);
  const [data, setData] = useState("");
  const inputRef = useRef(null);
  

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  /*const updatePosts=()=>{
    fetch(
      "http://localhost:8081/api/post/")
      .then((res) => res.json())
      .then((json) => {
        ds = json
      });
  }*/

    useEffect(() => {
      fetch("http://localhost:8081/api/post/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(emptyPost())
        dispatch(addPost(data))
        setData(data)
      });
    }, [])
  console.log(state);
  console.log(data);


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
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
      firstName: "test",
      lastName: "test",
      title,
      id: Date.now(),
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt

    dispatch(addPost(newPost));
  };

  console.log({ inputRef });
//<Table dataSource={rows} columns={columns} />;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <Table dataSource={rows} columns={columns} />;
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>

      {state.posts.data.map((e) => (
        <li key={e.id}>
          {e.id} {e.title}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removePost(e.id))}
          >
            &#128540;
          </span>
        </li>
      ))}
    </div>
  );
}

export default Posts;
