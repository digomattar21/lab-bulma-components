import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import CoolButton from '../coolbutton/CoolButton';
import FormField from '../formfield/FormField';


const SignUp = () =>{
  return(
    <>
      <Navbar/>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormFieldield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormFieldield label="Password" type="password" placeholder="********" />
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </>
  )
}

export default SignUp;