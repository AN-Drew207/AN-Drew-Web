import React,{useState} from 'react' 
 import emailjs from 'emailjs-com';

const EmailForm = () =>{
 const [form, setForm]= useState(
  {
  user_name:'',
  user_email:'',
  message:''
 }
 )

 function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_66djiuq', 'template_m9crxrs', e.target, 'user_poowqL0Hqg0zTF5mqqRhY')
      .then((result) => {
          window.alert("El correo ha sido enviado satisfactoriamente")
      }, (error) => {
          console.log(error.text);
      });
     setForm({  
      user_name:'',
      user_email:'',
      message:''
     });
  }
 return( 
  <>
  <h2 className="text-center">Envíame un Email</h2>
  <form className="form-group" onSubmit={sendEmail}>
   <input 
    className="form-control" 
    type="text" 
    name="user_name" 
    value={form.user_name}
    onChange={(e)=>setForm({...form,user_name:e.target.value})}
    placeholder="Nombre" 
    required
   />
   <input 
    className="form-control" 
    type="email" 
    name="user_email"
    value={form.user_email}
    onChange={(e)=>setForm({...form,user_email:e.target.value})}
    placeholder="Email" 
    required
   />
   <textarea
    className="form-control" 
    name="message" 
    placeholder="Texto"  
    value={form.message}
    onChange={(e)=>setForm({...form,message:e.target.value})}
    cols="30" 
    rows="10" 
    required
   />
   <input 
    className="btn btn-dark" 
    type="submit" 
    value="Enviar"
   />
  </form>
  </>
 )
}

export default EmailForm