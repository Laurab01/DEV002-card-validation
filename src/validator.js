const validator = {
  // ...
  isValid: (CCardNumber) => {
    let reversed = (CCardNumber.split("").reverse())
    let posicionPar = 0;
    let posicionImpar = 0;
    let sum = 0;
    for (let i = 0; i < reversed.length; i++) {
      if ((i % 2) == 1) {
        posicionPar = parseInt(reversed[i]) * 2;
        if (posicionPar > 9) {
          //10 = 1 //  (10 -9) + 1 //(10-10)+1
          //16 = 7 // (16-9) +  1// (16 - 10)+1
          posicionPar = (posicionPar - 10) + 1;

        }
        sum += posicionPar;

      }
      else {
        posicionImpar = parseInt(reversed[i]);
        sum += posicionImpar;

      }
    }
    //80 % 10 = 0
    //81 % 10 = 1
    if (sum % 10 == 0) {
      return true;

    }
    else {
      return false;
    }
  },

  maskify: (CCardNumber) => {
    let selectNumber = CCardNumber.length;
    let maskingNumber = ""
    for (let i = 0; i < selectNumber - 4; i++) {
      maskingNumber += "#";
    }
    return maskingNumber + CCardNumber.substring(selectNumber - 4, selectNumber)

  }

}


export default validator;

// 4083952015263
// 3625102593804

// 6 + 6 + 4 + 5 + 2 + 0 + 4 + 5 + 9 + 3 + 7 + 0 + 8