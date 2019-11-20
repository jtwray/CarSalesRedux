initialState={

}

const reducer(state=initialState,action){
    switch(action.type){
        case ADD_FEAT:
            const newFeature=action.payload;
            return{
                ...state,
                featuresList:[...state.featuresList, newFeature]
            }
            default:
                return state;
    }
}
export default reducer;