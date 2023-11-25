let count = 0;
let countNum = document.getElementById("counter");
let previousEntry = document.getElementById("previous-entries");

const counterAdd = () => {
  return countNum.innerHTML = ++count;
}

const counterSave = () => {
  let preNum = countNum.innerHTML;
  return previousEntry.innerText += ` ${preNum} - `;
}

document.getElementById("btn-increase").addEventListener('click', counterAdd);
document.getElementById("btn-save").addEventListener('click', counterSave)
