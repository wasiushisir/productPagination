import { ADDCHOSENPRODFORYOU, CHOSENPRODFORYOU, LOAD_PRODUCTS, PAGINATION } from "../constants/productsConstant"

const initialState={
    products:[],
    chosenProdForYou:[]
    
    
}


const productReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case LOAD_PRODUCTS:

        return{
            ...state,
            products:actions.payload
        }

        case PAGINATION:
            return{
                ...state,
                products:actions.payload
            }

        case CHOSENPRODFORYOU:
            return{
                ...state,
                chosenProdForYou:actions.payload

            }

            case ADDCHOSENPRODFORYOU:
                return{
                    ...state,
                    chosenProdForYou:[...state.chosenProdForYou,actions.payload]

                }


        default:
            return state;
    }

   
}

export default productReducer