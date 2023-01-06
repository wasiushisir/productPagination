import React from 'react';
import { useSelector } from 'react-redux';

const ProductForYou = () => {
    const mainProducts = useSelector((state) => state.products)
    const chosenProducts = useSelector((state) => state.chosenProdForYou)
    console.log(mainProducts);
    console.log(chosenProducts);

    const result = mainProducts.filter(c => chosenProducts.some(s => s.productId === c._id));
    console.log(result);


    return (
        <div className='px-[60px] my-[40px] grid grid-cols-1 md:grid-cols-5  gap-6'>
            {
                result.map((r) => <>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                {/* <img class="rounded-t-lg" src={r?.seller?.seller?.logo} alt="" /> */}
                                <img className='rounded-t-lg' src={r.image
                                } alt="" />
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-base font-medium mb-2"><b>Catagory</b>: {r.category}</h5>
                                <h5 class="text-gray-900 text-base font-medium mb-2"><b>Name</b>: {r.name}</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    <b>Description</b>: {r.description.slice(0, 40)}
                                </p>
                                <p class="text-gray-700 text-base mb-4">
                                    <b>Price</b>: {r.price}
                                </p>

                            </div>
                        </div>
                    </div>

                </>)
            }

        </div>
    );
};

export default ProductForYou;