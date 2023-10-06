let isStatus = document.querySelector("#status");
let removeBtn = document.querySelector("#remove-btn");
let addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function () {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
})

removeBtn.addEventListener("click", function() {
    isStatus.innerHTML = "Removed";
    isStatus.style.color = "red";
})