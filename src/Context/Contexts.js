import React, { createContext, useContext, useReducer, useEffect } from "react";
import Cartreducer from "./Reducers";

const CartPass = createContext(null);

function Contexts({ children }) {

    let results;
    async function dataapi() {

        dispatch({ type: 'Set_Loading' })

        let Urls = 'https://fakestoreapi.com/products';
        let response = await fetch(Urls)
        results = await response.json();
        // console.log(results);
        dispatch({
            type: 'Get_Data',
            payload: {
                cart: results,
            }
        })
    }

    // function load() {
    //     return 'Loading...';
    // }

    useEffect(() => {
        dataapi();
        // load();
    }, [])

    const [state, dispatch] = useReducer(Cartreducer, {
        // product: proAPI,
        isLoading: true,
        cart: [],
        addcart: [],
        total_amount: []
    });
    // console.log('Contexts')
    return (
        <>
            {/* <CartPass.Provider value={{...state }}> */}
            <CartPass.Provider value={[state, dispatch]}>
                {children}
            </CartPass.Provider>
        </>
    )

}

export default Contexts;

export const Cartstate = () => {
    return useContext(CartPass)
}
