const shoeReducer = (state = [], action) => {
   switch (action.type) {
       case "ADD_SHOES": return [...state, action.payload]
          
   
       default: return state
   }
    

}



export default shoeReducer;