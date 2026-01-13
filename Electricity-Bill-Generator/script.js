const mr = document.getElementById("mr");
const cu = document.getElementById("cu");
const pu = document.getElementById("pu");
const name = document.getElementById("name");
const amount = document.getElementById("amount");

pu.addEventListener("blur", calculateBill);

function calculateBill() {

    if (name.value.trim() === "" || mr.value === "" || isNaN(mr.value)) {
       alert("Please enter valid Name and Meter Number.");
       return;
    }

    if (cu.value === "" || pu.value === "") {
      alert("Please enter both Current Unit and Previous Unit.");
      return;
    }

    if (Number(cu.value) < Number(pu.value)) {
      alert("Current Unit cannot be less than Previous Unit.");
      return;
    }

    const totalUnits = parseFloat(cu.value) - parseFloat(pu.value);
    let billAmount = 0;

    if (totalUnits <= 200) {
        billAmount = totalUnits * 1;
    }
    else if (totalUnits <= 300){
        billAmount = (200 * 1) + (totalUnits - 200) * 1.25;
    }
    else if (totalUnits <= 400) {
        billAmount = (200 * 1) + (100 * 1.25) + (totalUnits - 300) * 1.50;
    }
    else if (totalUnits <= 500) {
        billAmount = (200 * 1) + (100 * 1.25) + (100 * 1.50) + (totalUnits - 400) * 1.75;
    }
    else {
        billAmount = (200 * 1) + (100 * 1.25) + (100 * 1.50) + (100 * 1.75) + (totalUnits - 500) * 2;
    }

    const subcharges = billAmount * 0.10;
    const total = billAmount + subcharges;
    document.getElementById("amount").innerText = billAmount
    document.getElementById("subcharges").innerText = subcharges;
    document.getElementById("total").innerText = total;
}

document.getElementById("resetBtn").onclick = clearAll;

function clearAll() {
  mr.value = "";
  name.value = "";
  cu.value = "";
  pu.value = "";
  amount.innerText = "";
  subcharges.innerText = "";
  total.innerText = "";

  mr.focus();

}

