import React, { useEffect, useState } from 'react'
import {Card} from './Card'
import "./CardTable.css"

   // const table = document.createElement('div')
    // populate the card table
    // for(const card in cards){
        
    //   const newElement = document.createElement('h1')
    //   newElement.textContent = "hi"
    //    table.appendChild(newElement)
    // }

export const CardTable = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function fetchData(){
            // add object destructuing if needed for fetching the json 
            var cards = await fetch('./src/Cards.json').then(response => response.json()). 
            then(response => {
              return response
            })
            .catch(function (error){
              console.error("something wrong")
              console.error(error)
            })
            console.log(cards)
            setCards(cards['cards'])
        }
        fetchData()
    }, [])


    return(

        <div className='card-table'>
        {cards.length === 0 && "No Todos"}
        {cards.map((todo) => {
          return (
            <Card key={crypto.randomUUID()} imgSrc={"https://picsum.photos/300/200"} imgAlt={'image'} description={"this is description of card"} title={"card title"} link={'cardpage'} buttonText={"learn more"}/>
          );
        })}
        </div>

//   <div>
      //  {/* {console.log(cards)} */}
        // <Card imgSrc={"https://picsum.photos/300/200"} imgAlt={'image'} description={"this is description of card"} title={"card title"} link={'cardpage'} buttonText={"learn more"}/>

        // </div>
    )
}