import React from 'react'
import "./restaurant.css"
import MenuCard from './menuCard'
import Menu from "./menuApi"
 



const MyCard = () => {
  const [MenuData, setMenuData] = React.useState(Menu)

  const filterItem = (category) =>{
   const UpdatedList = Menu.filter((curr)=>{
    return curr.category === category;
   })
   setMenuData(UpdatedList)
  }
 
  return (
    <>
    <header>

      <nav>
        <ul>
        <div className="buts">
      <button onClick={()=> filterItem("FrontendLanguages")} className="btns">
      Frontend Languages
      </button>
      <button onClick={()=> filterItem("BackendLanguages")} className="btns">
      Backend Languages
      </button>
      <button onClick={()=> setMenuData(Menu)}  className="btns">
            All
      </button>
      </div>
        </ul>
     
      </nav>
    </header>
  <MenuCard  MenuData={MenuData}/>
    </>
  )
}

export default MyCard;
