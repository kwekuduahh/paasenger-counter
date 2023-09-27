var count = 0;


const counterAdd = () => {
  document.getElementById('previous-num').innerHTML = count;
  return document.getElementById("counter").innerHTML = ++count;
}

const counterSub = () => {
  document.getElementById('previous-num').innerHTML = count;
  return document.getElementById("counter").innerHTML = --count;
}

document.getElementById("btn-increase").addEventListener('click', counterAdd);
document.getElementById("btn-decrease").addEventListener('click', counterSub)


