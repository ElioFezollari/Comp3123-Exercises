// **** Exercise 4 ****
const angle_Type = (angle) =>{
    if(angle<90){
        return "Acute Angle"
    }
    else if(angle == 90){
        return "Right angle"
    }
    else if(angle>90 && angle<180){
        return "Obtuse angle"
    }
    else{
        return "Straight angle"
    }
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))
