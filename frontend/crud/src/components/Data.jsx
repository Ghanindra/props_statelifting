import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);   // store user object instead of boolean
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    const Alldata = async () => {
      const res = await axios.get("http://localhost:5000/users");
      setUsers(res.data);
    };
    Alldata();
  }, []);

  // DELETE USER
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    setUsers(users.filter((u) => u._id !== id));
  };

  


  const updateUser=async(e)=>{
e.preventDefault();
const formData=new FormData();
formData.append("username",editUser.username)
    formData.append("email", editUser.email);
    formData.append("phone", editUser.phone);
       // if new image selected send it else keep old
if(newImage){
  formData.append("image",newImage)
}else{
  formData.append("image",editUser.Image)
}
const res = await axios.put(
      `http://localhost:5000/users/${editUser._id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    //  update list without reload
    setUsers(users.map((u) => (u._id === res.data._id ? res.data : u)));
    setEditUser(null); 
  }
  return (
    <div className="userlist">
      <h1>Users</h1>

      {/* SHOW USERS */}
      {users.map((u) => (
        <div
          key={u._id}
          style={{ border: "1px solid gray", margin: 10, padding: 10 }}
        >
          <p>
            <strong>Name:</strong> {u.username}
          </p>
          <p>
            <strong>Email:</strong> {u.email}
          </p>
          <p>
            <strong>Phone:</strong> {u.phone}
          </p>

          {u.image && (
            <img
              src={`http://localhost:5000/uploads/${u.image}`}
              alt="user"
              width="120"
            />
          )}

          <button onClick={() => setEditUser(u)}>Edit</button>
          <button onClick={() => handleDelete(u._id)}>Delete</button>
        </div>
      ))}

     

      {editUser &&(
        <form onSubmit={updateUser}>
          <h1>edit user</h1>
          <input type="text" name="name" value={editUser.username} onChange={(e)=>setEditUser({...editUser,username:e.target.value})}/>
          <input type="email" name="email" value={editUser.email} onChange={(e)=>setEditUser({...editUser,email:e.target.value})}/>
          <input type="text" name="phone" value={editUser.phone} onChange={(e)=>setEditUser({...editUser,phone:e.target.value})}/>
       {editUser.image&&(
<img
              src={`http://localhost:5000/uploads/${editUser.image}`}
              alt="current"
              width="120"
            />
       )}
       <br/>
       <input type="file" name="image" onChange={(e)=>setNewImage(e.target.files[0])}/>
       <button type="submit">update</button>
       <button type="button" onClick={()=>(setEditUser(null))}>cancel</button>
        </form>
      )}
    </div>
  );
};

export default Data;
