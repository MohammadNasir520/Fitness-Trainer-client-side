import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';

const AddServices = () => {

    const handleSubmit =event=>{
        event.preventDefault()
        const name=event.target.name.value;
        const price=event.target.price.value;
        const description=event.target.description.value;
        const image=event.target.image.value;
        console.log(name,price,description,image)
    }



    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 mx-auto">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="enter your name"
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
          <TextInput id="imageUrl" name="image" type="text"  placeholder="tell about services" required={true} />
        </div>
  
        <Button type="submit">AddServices</Button>
      </form>
    );
};

export default AddServices;