import ActionsTypes from "../actionsTypes";


const İNİTİAL_STATE = 0;


const countReducer = (state=İNİTİAL_STATE,action)=>{

   switch(action.type)
   {
         case ActionsTypes.count.SAYI_ARTIR:
            return state+action.payload;
            case ActionsTypes.count.SAYI_AZALT:
                return state-action.payload;
                default:
                    return state;
   }
}

export default countReducer;

