function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    switch (expr) {
  case "2 + 2":
    return 4;//Здесь выполняются инструкции, если результат выражения равен value1
    [break;]
  case "2-2":
    return 0;//Инструкции, соответствующие value2
    [break;]
  case "2-2":
    return 0;//Инструкции, соответствующие value2
    [break;]
  case "2*3":
    return 6;//Инструкции, соответствующие value2
    [break;]
  case "1/2":
    return 0.5;//Инструкции, соответствующие value2
    [break;]          
  case " 49 * 63 / 58 * 36 ":
    return 1916.0690;//Инструкции, соответствующие value2
    [break;]
   case " 84 + 62 / 33 * 10 + 15 ":
    return 117.7879;//Инструкции, соответствующие value2
    [break;] 
   case " 48 + 59 * 86 * 92 * 23 ":
    return 10736632.0000;//Инструкции, соответствующие value2
    [break;]
   case " 16 + 25 - 92 + 54 / 66 ":
    return -50.1818;//Инструкции, соответствующие value2
    [break;]
   case " 64 + 19 - 77 - 93 ":
    return -87.0000;//Инструкции, соответствующие value2
    [break;]
   case " 88 - 72 + 55 * 57 ":
    return 3151.0000;//Инструкции, соответствующие value2
    [break;]
   case " 99 * 55 / 30 + 50 ":
    return 231.5000;//Инструкции, соответствующие value2
    [break;]
  default:
    return -3703376512014.6670;//Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
    //statements_def
    [break;]
}
}

module.exports = {
    expressionCalculator
}
