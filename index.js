const button = document.querySelector("#submitBtn")


const calamount=()=>{
    const p = parseFloat(document.querySelector("#principal").value);
    const r = parseFloat(document.querySelector("#rateOfInt").value);
    const t = parseFloat(document.querySelector("#duration").value);


    const invested = document.querySelector("#invested");
    const estimate = document.querySelector("#estimate");
    const returns = document.querySelector("#returns");

    const sum = p+(p*r*t)/100;

    invested.innerHTML = `₹ ${p}`;
    estimate.innerHTML = `₹ ${sum}`;
    returns.innerHTML = `₹ ${sum+p}`
}

button.addEventListener("click",calamount)
