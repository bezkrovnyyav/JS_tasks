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

async function showResult(data){
  const result = await checkData(data);
  console.log(`The number is ${result}`);
}

showResult(4);
showResult(5);
showResult(true).catch( result => console.log(result));
showResult('check').catch( result => console.log(result));


