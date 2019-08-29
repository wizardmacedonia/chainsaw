function upperPart(num) {
  const 
    tab = '#',
    array = [];

  if (num === 1) {
    console.log([tab]);    
    return tab;
  }
  else {
    let i = 0;
    while(i < num) {
      array[i] = '#';
      i++
    }
  }
  console.log(array);
  return upperPart(num - 1) + num;
}

function lowerPart(string) {
  const 
    array = string.slice(1);
    array2 = [];

  let i = 0
  while(i < array.length) {
    let j = 0

    while(j < array[i]) {
      array2.push('#');
      j++
    }

    console.log(array2);

    while(j > 0) {
      array2.pop();
      j--;
    }
    i++;
  }
  
}

const num = process.argv[2];
let con = '';

if( num > 1 ) 
  con = upperPart(num), lowerPart(con), 
  upperPart(num), lowerPart(con)
;