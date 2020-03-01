
    
function priceToggle() {
    const basic = document.getElementById("basicYear");
    const pro = document.getElementById("proYear");
    const master = document.getElementById("masterYear"); 
    const basicDollar = document.getElementById("bMonthly");
    const proDollar = document.getElementById("pMonthly");
    const masterDollar = document.getElementById("mMonthly");

    if (basic.innerHTML === "199.99") {
        basic.innerHTML = "19.99";
        basic.style.marginLeft = "30%";
        basicDollar.style.marginLeft = "20%";
        pro.innerHTML = "24.99";
        pro.style.marginLeft = "25%";
        proDollar.style.marginLeft = "15%";
        master.innerHTML = "39.99";
        master.style.marginLeft = "25%";
        masterDollar.style.marginLeft = "15%";
    } else {
        basic.innerHTML = "199.99";
        basic.style.marginLeft = "20%";
        basicDollar.style.marginLeft = "10%";
        pro.innerHTML = "249.99";
        pro.style.marginLeft = "20%";
        proDollar.style.marginLeft = "10%";
        master.innerHTML = "399.99";
        master.style.marginLeft = "20%";
        masterDollar.style.marginLeft = "10%";
    }
} 

