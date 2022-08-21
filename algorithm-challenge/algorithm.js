function multipleOfThreeRule(index, base) {
  return Math.ceil(index * 0.3 * base)
}

function nonMultipleOfThreeRule(index, base) {
  return Math.ceil(index * 0.1 * base)
}

function createList(base){
  const list = [];
  for(let index=1; index<=10; index++) {
    const isMultipleOfThree = index%3 === 0
    if(isMultipleOfThree) list.push(multipleOfThreeRule(index, base))
    else list.push(nonMultipleOfThreeRule(index, base))
  }
  return list
}

function isWithinValidNumbersInterval(value) {
  return value >= 100 && value < 1000;
}

function numberOutOfIntervalWarning() {
  console.log("Este número está fora do intervalo válido informado")
  console.log("Por favor, digite um número múltiplo de 10, entre 100 e 1000");
}

function validNumbersIntervalCheck(userInput) {
  if(!isWithinValidNumbersInterval(userInput)) {
    numberOutOfIntervalWarning()
    return false;
  }
  return true
}

function sumEvenIndexesValues(){
  const isEven = (num) => (num+1)%2 === 0;
  const sum = arr.reduce((acc, el, index) => {
    acc += isEven(index) ? el : 0
    return acc
  },0)
  console.log(sum);
}
function sumOddIndexesValues(){
  const isOdd = (num) => (num+1)%2 === 1;
  console.log(arr.reduce((acc, el, index) => {
    acc += isOdd(index) ? el : 0;
    return acc;
  },0));
}

function handleUserInput(userInput){
  switch(userInput){
    case 1:
      if(arr) {
        sumEvenIndexesValues();
        process.exit(1);
      }
      else numberOutOfIntervalWarning()
      break;
    case 2:
      if(arr) {
        sumOddIndexesValues();
        process.exit(1)
      }
      else numberOutOfIntervalWarning()
      break;
    default:
      if(!arr){
        if(validNumbersIntervalCheck(userInput)){
          arr = createList(userInput)
          console.log("Agora você pode solicitar o somatório dos valores gerados");
          console.log("Digite 1 para somar os índices pares\nDigite 2 para somar os índices ímpares");
        }
      }
      else {
        console.log("Opção inválida, digite 1 ou 2");
      }
      break;
  }
}

console.log("Por favor, digite um número múltiplo de 10, entre 100 e 1000");
let arr;
process.stdin.on('data', data => {
  const userInput = parseInt(data.toString())
  if(isNaN(userInput)) {
    console.log("Não foi possível interpretar seu comando")
    console.log("Por favor, siga a última instrução dada acima")
  } else {
    handleUserInput(userInput) 
  } 
});
