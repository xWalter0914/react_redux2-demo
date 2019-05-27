const initialState = {
  oldPwd: '123',
  username:'Walter'
};
export default (state=initialState,action)=>{
    switch (action.type) {
        case 'alter':
            return{...state,oldPwd:action.payload};
        default:
            return state;
    }
}