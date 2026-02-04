import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
const User = z.object({
   firstname: z.string().min(3,"minimum length should be 3").max(20),
   lastname: z.string().min(3,"minimum length should be 3").max(20),
   age:z.coerce.number().min(10,"age should be minimum 10").max(50,"maximum age hould be 50"),
   password:z.string().min(3,"minimum length should be 3").max(20),
});

const UseForm = () => {
    const[submitData,setSubmitData]=useState([])
const{register,handleSubmit,reset,formState:{errors}}=useForm({resolver:zodResolver(User)})
const submitForm=((data)=>{
setSubmitData(prev=>[...prev,data])
console.log(data);
reset();
})

  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
            <input  placeholder="enter first name"{...register('firstname')}/>
                      {errors.firstname&&<p>{errors.firstname.message}</p>}
            <input placeholder='enter last name'{...register('lastname',{required:true})}/>
            {errors.lastname&&<p>{errors.lastname.message}</p>}
              <input placeholder="enter age" {...register('age')}/>
           {errors.age&&<p>{errors.age.message}</p>}
                 <input placeholder="enter password" {...register('password')}/>
                  {errors.password&&<p>{errors.password.message}</p>}
               <input type="submit"/>
        </form>
           {/* Display submitted data */}
      {submitData.map((data)=>(
<div key={data.password}>
     {data.firstname} {data.lastname} | Age: {data.age} | Password: {data.password}
    </div>
      ))
      }
    </div>
  )
}

export default UseForm