import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const { createUserWithEmail } = useContext(AuthContext);


  const handleSubmit =event=>{
    event.preventDefault()
    const email=event.target.email.value;
    const password=event.target.password.value;
    console.log(email,password)
    createUserWithEmail(email,password)
    .then(result=>{
        const user=result.user
        console.log(user)
    })
    .catch(err=>{
        console.log(err)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 mx-auto">
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
    </form>
  );
};

export default SignUp;
