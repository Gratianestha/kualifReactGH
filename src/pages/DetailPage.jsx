import { useQuery } from "@apollo/client/react"
import { ALL_ANIME } from "../lib/AnimeDetail"
import { useContext } from 'react';
import { DetailContext } from "../App";
import { useParams } from "react-router-dom";

export default function DetailPage(){
    const {data} = useContext(DetailContext)

    let {id} = useParams()
    console.log(id)
    return (
        // {data}
        <div>{id}</div>
        
    )
}