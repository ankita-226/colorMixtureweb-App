const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const button = document.getElementById("button")
 const colorBox = document.getElementById("resultcolorBox")
 const colorName = document.getElementById("colorName")
 button.addEventListener("click",mixingColor =() =>{
    
    let firstColor = color1.value.toLowerCase()
    let secondColor = color2.value.toLowerCase()
    let mixColor 
    switch(firstColor){
        case "red":
            switch(secondColor){
                case "blue":
                 mixColor = "purple"
                
                 break;
                 case "yellow":
                    mixColor = "orange"
                 
                    break;
                    default:
                        mixColor = "invalid input"
                        
            }
            break;
            case "blue":
                switch(secondColor){
                    case "red":
                     mixColor = "purple"
                
                     break;
                     case "yellow":
                        mixColor = "green"
                          
                        break;
                        default:
                            mixColor = "invalid input"
                            
                }
                break;
                case "yellow":
                    switch(secondColor){
                        case "red":
                         mixColor = "orange"
                        
                         break;
                         case "blue":
                            mixColor = "green"
                             
                            break;
                            default:
                                mixColor = "invalid input"
                                
                    }
                    break;
                    default:
                        mixColor = "invalid input"
                
  
    }
    if(mixColor == "invalid input"){
        colorBox.style.backgroundColor = "white"

    }else{
        colorBox.style.backgroundColor = mixColor;
    }
    colorName.textContent = mixColor
 })
                