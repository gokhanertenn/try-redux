import ActionsTypes from "../actionsTypes";

const temaAçık = (val) => {

    return {type:ActionsTypes.theme.TEMA_AÇIK,payload:val}
}
const temaKoyu = (val) => {


   return {type:ActionsTypes.theme.TEMA_KOYU,payload:val}

}



const temaGrup = {temaAçık,temaKoyu}

export default temaGrup;

