
function counter(n = 0){
    let val = n;
    const get = () => {return val};
    const next = () => val++
    return {get, next};
  }

  const {get: getA, next: nextA} =  new counter(1);
  console.log(getA());// 1
  nextA();
  console.log(getA());// 2
  const {get: getB, next: nextB} =  new counter(10);

  nextB();
  console.log(getA()); // 2
  console.log(getB()); // 11
  nextA();
  console.log(getA()); // 3
  console.log(getB()); // 11