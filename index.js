const componentesPc = "Ram"


switch (componentesPc) { 
    case "Placa mae" : 
    case "Placa de video" :
    case "Ram":
    case "Gabinete": {
        console.log("Pertence a categoria de peças do computador.")
        break;
    }
    default : { 
        console.log("Categoria não identificada.")
    }

}