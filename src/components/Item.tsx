import {Button} from "@mui/material"
import { CartItemType } from "../App"

type Props = {
    item:CartItemType,
    handleAddToCart : (clickedItem:CartItemType)=>void;
}

const Item = ({item,handleAddToCart}: Props) => {
  return (
    <div className="flex w-full h-full flex-col justify-between m-4 rounded-lg border-2 border-gray-400">
        <img src={item.image} className="max-h-[250px] object-cover " alt="" />
        <div className="flex flex-col justify-between items-center w-5/6 mx-auto gap-4 mt-8">
            <h3 className="font-bold text-orange-900">{item.title}</h3>
            <p className="max-h-[50px] overflow-hidden">{item.description}</p>
            <h3 className="font-bold text-orange-900 text-lg">${item.price}</h3>
        </div>
        <Button  variant="contained" color="success" onClick={()=>handleAddToCart(item)}>Add to cart</Button>
    </div>
  )
}

export default Item