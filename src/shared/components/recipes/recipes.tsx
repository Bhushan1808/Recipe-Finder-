import { RecipeResponse } from "../../../core/frame/Frame"

function Card({item}:{item: RecipeResponse}){
    return <>
    <div id={item.id.toString()}>
        <h1>{item.title}</h1>
        <hr></hr>
        <img src={item.image}></img>
    </div>
    </>
}



export default function recipes({items}: {
    items: RecipeResponse[]
}){
    const list = items.map((item)=> <Card item={item}></Card>)
    return <>
    <div>
        {list}
    </div>
    </>
}