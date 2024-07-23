import { useState } from 'react'

import './recipe-search.scss'

export type Props = {
    submitted: (items: string)=>void
}

export default function SearchRecipe({submitted}: Props){

    const [recipeItems, setNewRecipeItems] = useState('');


    return <>
    <div className="search-container">

    <div className="search-recipe">
    <input className='search-recipe__input' onChange={(e)=>setNewRecipeItems(e.target.value)} type="text"></input>
    <button className='search-recipe__btn btn btn-primary' onClick={()=> submitted(recipeItems)}> Search Recipe</button>
    </div>
    </div>
    </>
}