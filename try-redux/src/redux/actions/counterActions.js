import ActionsTypes from "../actionsTypes";

const sayiArtir = (val) => {

    return {type:ActionsTypes.count.SAYI_ARTIR,payload:val}
}

const sayiAzalt = (val) => {

    return {type:ActionsTypes.count.SAYI_AZALT,payload:val}
}

const sayiAksiyon = {sayiArtir,sayiAzalt}

export default sayiAksiyon;