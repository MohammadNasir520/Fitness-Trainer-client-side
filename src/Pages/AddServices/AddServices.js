import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTittle from '../../Hooks/Hooks';

const AddServices = () => {

    const {user}=useContext(AuthContext)
  useTittle('AddServices')

    const handleSubmit =event=>{
        event.preventDefault()
        const name=event.target.name.value;
        const price=event.target.price.value;
        const description=event.target.description.value;
        const image=event.target.image.value;
        const email=event.target.email.value;
        console.log(name,email,price,description,image)
        const services={
            name,email,price,description,image
        }

        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(services)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('services placed')
                event.target.reset();
            }
        })
        .catch(err=>console.log(err));
    }



    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Service name" />
          </div>
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="enter service name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Services price" />
          </div>
          <TextInput id="price" name="price" type="number"  placeholder="$ price" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Services description" />
          </div>
          <TextInput id="description" name="description" type="text"  placeholder="tell about services" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="imageUrl" value="Services imageUrl" />
          </div>
          <TextInput id="imageUrl" name="image" type="text"  placeholder="paste here service image url" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Email" value="Your Email" />
          </div>
          <TextInput id="Email" name="email" type="email" defaultValue={user?.email} readOnly  placeholder="Your Email" required={true} />
        </div>
  
        <Button type="submit">AddServices</Button>
      </form>
    );
};

export default AddServices;