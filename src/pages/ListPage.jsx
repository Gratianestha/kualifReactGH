import { useQuery } from "@apollo/client/react"
import { useState } from "react"
import { ALL_ANIME } from "../lib/AllAnime"
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { DetailContext } from "../App";

function ListPage(){
    const setData = useContext(DetailContext)
    console.log(setData)
    const [fav, setFav] = useState([])

    const {loading,error, data} = useQuery(ALL_ANIME, {
        variables:{
            page:1,
            perpage:50
        }
    })
setData[0](data.Page.media)
    var clickedFav = false
    const handleFav = (anime)=>{
        let favAnime = [...fav]
        let foundFav = fav.indexOf(anime)
        if(foundFav === -1){
            favAnime.push(anime)
            localStorage.setItem('favorite', JSON.stringify(favAnime))
        }
        else{
            favAnime.splice(foundFav,1)
            localStorage.setItem('favorite', JSON.stringify(favAnime))
        }
        console.log(favAnime)
        setFav(favAnime)
        clickedFav = true
        
    }

    let dataArray;

    if(!loading){
    //    console.log(data.Page.media)

      
       dataArray = data.Page.media.map((anime)=>
       <Link to={`/detail/${anime.id}`}>     
            <div style={{
                width: "170px",
                backgroundColor: "white",
                boxShadow:"0 2px 2px",
                borderRadius: "10px"
                 }}>
                <img src={anime.coverImage.large} style={{
                    width: "170px",
                    height: "200px"
                }}></img>
                <div style={{
                    height:"auto",
                    marginLeft:"5px",
                    marginRight:"5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between"
                }}>
                <p >{anime.title.romaji}</p>
                <button className="favButton" style={
                    clickedFav ? {backgroundColor: "grey"} : {backgroundColor:"white"}           
                } onClick={()=>handleFav(anime.id)}>❤️</button>
                </div>
            </div>
        </Link>
        );
       
    }

    
    
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gridGap: "10px",
            backgroundColor: "#ffffff",
            padding: "10px",
            }}>
            {dataArray && dataArray}
        </div>
    );

}
export default ListPage