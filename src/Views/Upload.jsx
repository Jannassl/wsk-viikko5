import { useState } from 'react';

export const Upload = () => {
  const [file , setFile] = useState("");
  const [name , setName]= useState("");

  const handleSubmit= (event) => {
    event.preventDefault();
    console.log("Tiedostoa yritetään lähettää")
    console.log("")

  }
}


