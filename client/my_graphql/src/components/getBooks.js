import React, { useEffect, useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import { LOAD_BOOKS } from '../GraphQL/Queries';

function GetBooks() {

    const {error, loading, data } = useQuery(LOAD_BOOKS)
    const [books, setBooks] = useState([])

    useEffect(( )=>{
        console.log("yo ",data?.books)
        if(data){
            console.log("yo ",data)
            setBooks( data?.books)
        }
       
    }, [data])



    return (
        <div> 
            { books.map( (book)=>{
                return( <h1> {book.name}</h1>)
            })}
        </div>
    )
    
}

export default GetBooks;