import { ADDCHOSENPRODFORYOU, CHOSENPRODFORYOU, LOAD_PRODUCTS, PAGINATION } from "../constants/productsConstant"

export const fetchProducts=()=>async(dispatch,getState)=>{
    const res=await fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/products')
    const data= await res.json()


    if(data?.products?.length){
        dispatch({type:LOAD_PRODUCTS,payload:data?.products})
    }
}


export const paginatedProducts=(pageNumber)=>async(dispatch,getState)=>{
    
    const res=await fetch(`https://backend.dokanbhai.dokanbhai.com:3002/api/products?pageNumber=${pageNumber}`)
    const data= await res.json()
    // console.log(data);

    if(data?.products?.length)
    dispatch({type:PAGINATION,payload:data?.products})
}


export const chosenProdForYou=(productId)=>async(dispatch,getState)=>{
    const res=await fetch('http://localhost:5000/api/chosenProdForYou',{
        method:"POST",
        body:JSON.stringify({productId}),
        headers:{
            "Content-type":"application/json"
        },
    });
    const data= await res.json()
    console.log(data);
    



    if(data){
        dispatch({type:ADDCHOSENPRODFORYOU,payload:data})

    }

    
    

}


export const fetchChosenProdForYou=()=>async(dispatch,getState)=>{
    const res=await fetch('http://localhost:5000/api/chosenProdForYou')
    const data=await res.json()

    if(data?.length){
        dispatch({type:CHOSENPRODFORYOU,payload:data})
    }


}
