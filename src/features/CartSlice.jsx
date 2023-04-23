import { createSlice } from "@reduxjs/toolkit";

const inintailState={
    isCartOpen:false,
    cart:[],
    items:[],
    count:1,
}

export const cartSlice=createSlice({
    name:'cart',
    initialState:inintailState,
    reducers:{
        setIsCartOpen:(state,action)=>{
            state.isCartOpen=!state.isCartOpen
        },
        setItems:(state,action)=>{
            state.items=action.payload
        },
        addToCart:(state,action)=>{
            const item = state.cart.find((item) => item.id === action.payload.id);
            if(item){   
                item.count += action.payload.count;
                state.count=1
                return
            }else{
                state.cart.push(action.payload)
                state.count=1
            }
            state.isCartOpen=true
        },
        increaseCount:(state)=>{
            state.count++
        },
        
        decreaseCount:(state)=>{
            if(state.count>1){
                state.count--
            }
        },
        deleteProduct:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload)
        },
        deleteAll:(state)=>{
            state.cart=[]
        
    }
}
})


export const {setItems,setIsCartOpen,addToCart,increaseCount,decreaseCount,deleteProduct,deleteAll}=cartSlice.actions
export default cartSlice.reducer;