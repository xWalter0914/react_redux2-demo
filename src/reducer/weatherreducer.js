const initialState = {
  imgUrl:'',
  weathertext:''
};
export default (state=initialState,action)=>{
    switch (action.type) {
        case 'weather':
            return{...state,imgUrl:action.payload.imgUrl,weathertext:action.payload.weathertext};
        default:
            return state;
    }
}