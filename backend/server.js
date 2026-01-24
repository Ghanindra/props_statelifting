const express=require('express')
const app=express()
const connectDB = require("./db");
const User=require('./model/data')
const port=5000;
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors=require('cors')
//middleware to parse json
app.use(express.json())
app.use(cors());
connectDB();
// ---------- Multer setup ----------
const uploadFolder = path.join(__dirname, "uploads");

// Create 'uploads' folder if it doesn't exist
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
app.post("/users", upload.single("image"),async(req,res)=>{
    try {
        const{username,email,phone}=req.body
        console.log(req.body);
         console.log("req.file:", req.file);
        // const image = req.file?req.file.filename:null;
        
    if (!username || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }
        const newUser=await User.create({ username, email, phone, 
             image: req.file ? req.file.filename : null

         })
        console.log("new user0",newUser);
        
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}
)
app.get("/users",async(req,res)=>{
try {
  const users= await User.find();
  res.json(users);
} catch (err) {
   res.status(500).json({ error: err.message });
}
} )
app.put("/users/:id",upload.single("image"),async(req,res)=>{
  try {
      const { id } = req.params;
    const{username,email,phone}=req.body;
       const updateData = { username, email, phone };
    if(req.file) 
      updateData.image=req.file.filename;
    const user= await User.findByIdAndUpdate(id,updateData,{
      new:true
    
    })
       res.json(user);
  } catch (err) {
     res.status(500).json({ error: err.message });
  }
})
app.delete("/users/:id",async(req,res)=>{
  try {
await User.findByIdAndDelete(req.params.id)
    res.json({message:"user deleted"})
  } catch (err) {
     res.status(500).json({ error: err.message });
  }
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}` );
    
})