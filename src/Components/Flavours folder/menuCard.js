import React from 'react'
import "./restaurant.css"

const MenuCard = ({MenuData}) => {
 
  return (
    <>

{ MenuData.map((curr)=>{
return     <section className="main_container"><div className="container" key={curr.id}>
    <div className="cardname">
       <h2 >{curr.name}</h2>
    </div>
    <hr />
    <div className="desc">
    <p>{curr.desc}</p>

    </div>
    <hr />
    <div className="picture">
    <img src={curr.img} alt="Picture" />
    <hr />
    </div>
   </div>
   </section> 
  })
}

    </>
  )
}

export default MenuCard