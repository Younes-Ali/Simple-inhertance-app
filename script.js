let allMoney = document.getElementById("allMoney");
let numOfBoys = document.getElementById("numOfBoys");
let numOfGirls = document.getElementById("numOfGirls");
let submit = document.getElementById('submit');
let demo = document.getElementById('demo');

submit.onclick = function() {
    let wifePortion = Number(allMoney.value) * (1 / 8);
    let newallMoney = Number(allMoney.value) - wifePortion;

    let totalShares = Number(numOfBoys.value) * 2 + Number(numOfGirls.value);
    let portion = newallMoney / totalShares;

    let boyShare;
    let girlShare;

    if(Number(numOfBoys.value)>0){
        boyShare = portion * 2;
    }
    else{
        boyShare = 0;
    }
    if(Number(numOfGirls.value)>0){
        girlShare = portion * 1;
    }
    else{
        girlShare = 0;
    }
    demo.innerHTML = `
    <h2 class="text-cyan-600 text-2xl">The All Money : <span class="text-white">${Number(allMoney.value)}</span></h2>
    <h2 class="text-cyan-600 text-2xl">Wife portion : <span class="text-white">${wifePortion}</span></h2>
    <h2 class="text-cyan-600 text-2xl">All boys get : <span class="text-white">${boyShare * Number(numOfBoys.value)}</span></h2>
    <h2 class="text-cyan-600 text-2xl">All girls get : <span class="text-white">${girlShare * Number(numOfGirls.value)}</span></h2>
    <h2 class="text-cyan-600 text-2xl">Each boy gets : <span class="text-white">${boyShare}</span></h2>
    <h2 class="text-cyan-600 text-2xl">Each girl gets : <span class="text-white">${girlShare}</span></h2>
    `;
}