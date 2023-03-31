import React, { useState } from 'react'
import { CREATE_BOOK_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

function Form() {
    const [Name, setBookName] = useState("");
    const [authorId, setAuthorId] = useState("");

    const [addBook, {error} ] = useMutation(CREATE_BOOK_MUTATION);


    const addBooks = () => {
        addBook({ 
            variables: {
                name: Name,
                authorId: parseInt(authorId)
            }
        });

        if(error){
            console.log(error);
        }

    };
  return (
    <div>
        <input
            type="text"
            placeholder="Book Name"
            onChange={(e) => {
                setBookName(e.target.value);
            }}
        />
        <input
            type="text"
            placeholder="author Id"
            onChange={(e) => {
                setAuthorId(e.target.value);
            }}
        />
        <button onClick={addBooks}> Create Book</button>
    </div>
  )
}

export default Form