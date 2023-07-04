const Cartreducer = (state, action) => {
    switch (action.type) {
        case 'Set_Loading':
            return {
                ...state,
                isLoading: true,
            }
        case 'Get_Data':
            return {
                ...state,
                isLoading: false,
                cart: action.payload.cart,
            }
        case 'Add_Cart':
            return {
                ...state,
                isLoading: false,
                addcart: action.payload.addcart,
            }
        case 'Remove_Cart':
            return {
                ...state,
                isLoading: false,
                addcart: action.payload.addcart,
            }
        // case 'Total_Amount':
        //     return {
        //         isLoading: false,
        //         addcart: action.payload.total_amount,
        //     }
        default:
            return state;
    }
}

export default Cartreducer;