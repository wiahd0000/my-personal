import React from 'react'
import { useForm } from 'react-hook-form'

function Contact() {
  const{register,
    handleSubmit,
    reset,
    formState: {errors}
  }=useForm();

  const onSubmit = ((data)=>{
    alert("Your mail was send successfully 📩 ");
    reset();
  })
  return (
    <>
<div className="contact">
  <span>Contact-Me</span>
  <form action="#" onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder='Enter name' {...register("name", {required:"Name is Required"})}/>
{errors.name && <p>{errors.name.message}</p>}

  </form>
</div>
    
    </>
  )
};

export default Contact;