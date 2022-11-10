import { Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTittle from "../../Hooks/Hooks";

const SignUp = () => {


  //dynamic title set
  useTittle('signUp')
  const { createUserWithEmail,loading,updateNameAndPhotURL } = useContext(AuthContext);

//spinner added
  if (loading) {
    return (
      <div className="text-center mt-6">
        <Spinner color="success" aria-label="Success spinner example" />
      </div>
    );
  }

//handle signup function
  const handleSignup =event=>{
    event.preventDefault()
    const email=event.target.email.value;
    const name=event.target.name.value;
    const photURL=event.target.PhotoURL.value;
    const password=event.target.password.value;
    console.log(email,password,name,photURL)
    createUserWithEmail(email,password)
    .then(result=>{
        const user=result.user
        console.log(user)
        handleSetNameAndPhoto(name, photURL)
    })
    .catch(err=>{
        console.log(err)
    })
  }


// name and photoUrl passing handlar to the function in auth provider
const handleSetNameAndPhoto=(name, photoURL)=>{
  const profile={
    displayName: name,
    photoURL: photoURL
  }
  updateNameAndPhotURL(profile)
}


  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4 w-1/2 mx-auto my-9">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your Full Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="photURL" value="Your PhotoURL" />
        </div>
        <TextInput
          id="PhotoURL"
          type="text"
          name="PhotoURL"
          placeholder="PhotoURL"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          name="email"
          placeholder="Email"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" name="password" type="password" required={true} />
      </div>

      <Button type="submit">SignUp</Button>

      <h1> Alrady Have an account? please <Link className="text-teal-500" to="/login">LogIn</Link></h1>

    </form>
  );
};

export default SignUp;
