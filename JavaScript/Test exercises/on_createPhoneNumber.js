let createPhoneNumber = (numbers) => {
   let checkPhone = /^\(\d{3}\)\s{1}\d{3}\-{1}\d{4}/;
  let phoneString;  
  let len = numbers.length;
  
  let first = '(';
  let second = '';
  let third = '';

  for(let f = 0; f < 3; f++){
    first = first + numbers[f];
  }

  first = first + ') ';

  for(let s = 3; s < 6; s++){
    second = second + numbers[s];
  }
  
  second = second + '-';

  for(let t = 6; t < 10; t++){
    third = third + numbers[t];
  }

  phoneString = first + second + third;
  
  if(checkPhone.test(phoneString)){
    return phoneString;
  } 
}
