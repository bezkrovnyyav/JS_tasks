function checkData(data){
  return new Promise((res, rej) => {
    if(typeof(data) === 'number'){
      if(data % 2 == 0){
        return setTimeout(() => res('even'), 2000);
      } else {
        return setTimeout(() => res('odd'), 1000);
      }
    } else {
      return rej('error');
    }
  })
}

function showResult(result){
    console.log(`The number is ${result}`);
}

checkData(3).then(showResult,  result => console.log(result));
checkData(2).then(showResult,  result => console.log(result));
checkData(333).then(showResult,  result => console.log(result));
checkData(444).then(showResult,  result => console.log(result));
checkData(true).then(showResult, result => console.log(result));
checkData('check').then(showResult, relult => console.log(relult));