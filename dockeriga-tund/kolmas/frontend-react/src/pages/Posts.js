import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { Link } from "react-router-dom";
import { addPost, emptyPost } from "../store/actions";
import { Table, Space, Button } from "antd";


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

    function ShowEdit(){
      if(state.auth.email != undefined && state.auth.email != null){
        return (
        <Space size="middle">
          <Button><Link to ="/editpost" >Manage(edit) your posts</Link></Button>
        </Space>
      )
      } else {
          return (
            <h3>Login to edit your posts</h3>
          )
      }
      
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
  ];

  
//<a onClick ={() => EditPostTEST(record.id)}>Edit</a>
  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = () => {
    const newPost = {
      firstName: state.auth.firstName,
      lastName: state.auth.lastName,
      title: title,
      email: state.auth.email,
      id: Date.now(),
    };

    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt
    if(state.auth.email != undefined && state.auth.email != null && title != "" && title != null ){
      fetch("http://localhost:8081/api/post/create", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {"Content-Type":"application/json"}
      }).then(response => {
        console.log("Success");
      }).catch((error) => {
        console.log(error);
      });
      dispatch(addPost(newPost));
    } else {
      throw new Error("Postitusel puudub sisu või pole sisselogitud");
      //console.log("Postitusel puudub sisu või pole sisselogitud.")
    }
    
  };

//<Table dataSource={rows} columns={columns} />;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <Table dataSource={rows} columns={columns} />
      {ShowEdit()}
        <hr></hr>
        <br></br>
      <form onSubmit={handleSubmit}>
        <h2>Add new post</h2>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
      <br></br>

      <hr></hr>
    </div>
  );
}

export default Posts;
