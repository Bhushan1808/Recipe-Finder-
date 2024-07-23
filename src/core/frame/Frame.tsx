import './Frame.scss';
import RecipeSearch from './../../shared/components/search-bar/recipe-search';
import Recipes from '../../shared/components/recipes/recipes';
import { useState } from 'react';

export type RecipeResponse = {
    id: number;
    title: string;
    image: string;
    imageType: string;
    nutrition: {
        nutrients: {
            name: string;
            amount: number;
            unit: string;
        }[];
    };
}

export default function Frame(){
    const [data, setData] = useState<RecipeResponse[]>([])

    function fetchRecipes(items: string){
       const ingredients = (items.split(' ') ?? []).reduce((val,s)=>s=s + ',+' + val);

       console.log(ingredients)
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}`,{
            headers:{
                'x-api-key': 'cc971ec729db447e9a4002c4165873ee'
            }
        }).then((response)=> response.json()).then(response => {
            setData(response)
        })
    }

    return <>
    <div className="frame">
    <RecipeSearch submitted={fetchRecipes}></RecipeSearch>
    <Recipes items={data ?? []}></Recipes>

    </div>
    </>
}

