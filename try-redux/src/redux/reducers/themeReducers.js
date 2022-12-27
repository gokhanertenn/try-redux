import ActionsTypes from "../actionsTypes";


const İNİTİAL_STATE = {backgroundColor:"red"}
const KOYU_TEMA = {backgroundColor:"black"}
const AÇIK_TEMA = {backgroundColor:"white"}




const themeReducer = (state=İNİTİAL_STATE,action) => {


    switch(action.type) {

        case ActionsTypes.theme.TEMA_AÇIK:
            return AÇIK_TEMA;
            case ActionsTypes.theme.TEMA_KOYU:
                return KOYU_TEMA;
                default:
                   return state;
    } 



}
 
export default themeReducer;