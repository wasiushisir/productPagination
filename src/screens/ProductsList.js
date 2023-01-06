import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import { Checkbox, Switch } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { chosenProdForYou, fetchChosenProdForYou, fetchProducts, paginatedProducts } from '../actions/productsAction';


const ProductsList = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.products)
    // const chose=useSelector((state)=>state.chosenProdForYou)
    console.log(state);
    // console.log(chose);

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchChosenProdForYou())


    }, [])


  


   

    const handleClick = async (data) => {
        const number = data.selected + 1

        dispatch(paginatedProducts(number))

    }

    const [check,setcheck]=useState(true)

    const handleCheckBox=(id)=>{
        console.log(id);
        dispatch(chosenProdForYou(id))
        // dispatch(fetchChosenProdForYou())

    }


//     useEffect(()=>{
        
//         dispatch(fetchChosenProdForYou())
      
// },[])
  
   



    return (
        <div>



            {/* <button onClick={() => handleClick('9')}>click</button> */}


            {/* heading */}
            <div className='hidden md:flex justify-center'>
                <div className='bg-[#E6EDF4] w-[1000px] flex justify-between items-center h-[36px] mt-[29px] rounded-r-[8px] text-[#010203] '>
                    <div className='ml-[16px] my-[8px] w-[190px] '>
                        <h1 className='text-[12px] font-medium'>ID</h1>

                    </div>

                    <div className='my-[8px] w-[280px]'>
                        <h1 className='text-[12px] font-medium'>PRODUCT NAME</h1>

                    </div>

                    <div className='my-[8px] w-[88px]  '>
                        <h1 className='text-[12px] font-medium'>AMOUNT</h1>

                    </div>


                    <div className='my-[8px] w-[63px]  '>
                        <h1 className='text-[12px] font-medium'>PRICE</h1>

                    </div>


                    <div className='my-[8px] w-[84px]  '>
                        <h1 className='text-[12px] font-medium'>ACTIVE</h1>

                    </div>




                </div>








            </div>



            <div className='hidden md:flex flex-col  justify-center items-center'>
                {
                    state.map((s) => <>
                        <div className=' bg-[#FFFFFF] w-[1000px] flex justify-between items-center  text-[16px] font-normal border border-b-gray-300'>
                            <div className='ml-[16px] my-[20px] w-[190px] '>
                                <h1>{s._id}</h1>
                            </div>

                            <div className=' md:w-[280px] my-[20px]'>
                                <h1>{s.name}</h1>

                            </div>

                            <div className='my-[20px] w-[5px] md:w-[83px] '>
                                <h1>{s.countInStock}</h1>

                            </div>

                            <div className='my-[20px] w-[60px]'>
                                <h1>${s.price}</h1>

                            </div>

                            <div className='my-[20px] w-[63px]  mr-[24px]'>
                        <Checkbox onClick={()=>handleCheckBox(s._id)}  color='green' id="ripple-on"  ripple={false} />

          
                      
                

                        </div>

                        </div>
                    </>)
                }

               



               









            </div>


            <div className='bg-[#FFFFFF] w-[255px] pl-[100px] mt-[50px] flex flex-col justify-center items-center space-y-6 md:hidden'>
                {
                    state.map((s)=><>
                    <div className='bg-[#FFFFFF] flex justify-between w-[220px]  items-start '>
                    <div className='space-y-2 font-bold'>
                        <h1 className='text-xs'>ID</h1>
                        <h1  className='text-xs'>PRODUCT NAME</h1>
                        <h1  className='text-xs'>AMOUNT</h1>
                        <h1  className='text-xs'>PRICE</h1>
                        <h1  className='text-xs'>ACTIVE</h1>
                       

                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-xs'>{s._id.slice(0,7)}...</h1>
                        <h1 className='text-xs'>{s.name.slice(0,7)}...</h1>
                        <h1 className='text-xs'>{s.countInStock}</h1>
                        <h1 className='text-xs'>${s.price}</h1>
                        <Checkbox className='h-[16px] w-[16px]'  color='green' id="ripple-on"  ripple={false} />
                        {/* <div className='w-[70px] h-[20px] bg-[#FFF7E4] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#E3920F] rounded-[4px]'>PENDING</p>
                        </div> */}

                    </div>

                    </div>
                    </>)
                }

            </div>









            <div className=' h-[150px] mt-[10px]  pt-[20px]'>

                <ReactPaginate

                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={26}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={1}
                    onPageChange={handleClick}
                    containerClassName={'flex justify-center items-center mt-[20px] space-x-1'}

                    pageLinkClassName={' px-[10px] py-[5px] md:px-[20px] md:py-[10px] text-[#FFFFFF]  text-[12px] md:text-2xl font-bold rounded-[6px] transition-colors duration-150 bg-[#333333]    focus:shadow-outline '}

                    // previousClassName={' px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'}
                    previousLinkClassName={ 'px-[10px] py-[5px] text-[12px]  md:px-[20px] md:py-[10px] text-[#000000] md:text-2xl font-bold rounded-[6px] transition-colors duration-150 bg-[#f90]    focus:shadow-outline '}


                    // nextClassName={'h-[20px] px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'}
                    nextLinkClassName={'px-[10px] py-[5px] text-[12px] md:px-[20px] md:py-[10px] text-[#000000] md:text-2xl font-bold bg-[#f90] rounded-[6px] transition-colors duration-150 bg-white  focus:shadow-outline'}
                    // breakLinkClassName={'px-[20px] py-[10px] text-[#FFFFFF] transition-colors duration-150 bg-white  bg-[#333333]  focus:shadow-outline '}
                    activeLinkClassName={' text-white transition-colors duration-150  border border-x-4 border-y-4 border-[#f90] focus:shadow-outline'}











                />
            </div>



        </div>
    );
};

export default ProductsList;