import React ,{useState}from 'react'
import axios from 'axios'
const Form = () => {

const [username,setUsername]=useState("sajan")
const [email,setEmail]=useState("bibash@gmal.com")
const [phone,setPhone]=useState("123")
const [image,setImage]=useState(null)

  const typeHandler=(e)=>{
    const{name,value,files}=e.target
    if(name==="username") setUsername(value);
    else if(name==="email")setEmail(value);
    else if(name==="phone")setPhone(value);
    else if(name==="image")setImage(files[0]);
  }
  const submitHandler=async(e)=>{
    e.preventDefault()
    try {
       const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone.toString());
    if (image) formData.append("image", image); // append file

    const res = await axios.post("http://localhost:5000/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // important!
      },
      
    })
     console.log("User created:", res.data);
    alert("User submitted successfully!");

    // Reset form
    setUsername("");
    setEmail("");
    setPhone("");
    setImage(null);
   } catch (error) {
      console.error("Error submitting user:", error);
      alert("Submission failed!");
    }


  }
  return (
    <div className="container">
<h1> form</h1>
<form onSubmit={submitHandler}>
<input type="text"name="username" value={username} placeholder="username" onChange={typeHandler}/>
<input type="email"  name="email" value={email} placeholder="email"  onChange={typeHandler}/>
<input type="number" name="phone" value={phone} placeholder="phone no"  onChange={typeHandler}/>
<input type="file" name="image" placeholder="image"  onChange={typeHandler}/>
<button type="submit">Submit</button>
</form>

    </div>
  )
}

export default Form