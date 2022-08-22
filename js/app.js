
function getBalance(incomeAmount, total) {
    const balance = incomeAmount - total
    return balance
}

function getTotal() {
    const foodAmount = parseFloat(document.getElementById("foodField").value)
    const rentAmount = parseFloat(document.getElementById("rentField").value)
    const clothesAmount = parseFloat(document.getElementById("clothesField").value)

    const total = foodAmount + rentAmount + clothesAmount
    return total
}

function calculate() {
    const foodAmount = parseFloat(document.getElementById("foodField").value)
    const rentAmount = parseFloat(document.getElementById("rentField").value)
    const clothesAmount = parseFloat(document.getElementById("clothesField").value)

    document.getElementById("aleart").classList.add("d-none")




    if (isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothesAmount)) {

        document.getElementById("allfield").classList.remove("d-none")


    } else {
        document.getElementById("allfield").classList.add("d-none")
        const total = getTotal()
        const incomeAmount = parseFloat(document.getElementById("incomeField").value)

        if (total < incomeAmount) {
            const balance = getBalance(incomeAmount, total)
            document.getElementById("totalId").innerText = total
            document.getElementById("balanceId").innerText = balance
        } else {
            document.getElementById("aleart").classList.remove("d-none")
        }
    }

}



function save() {
    const saveAmount = parseFloat(document.getElementById("saveField").value)
    const incomeAmount = parseFloat(document.getElementById("incomeField").value)

    const savingAmount = incomeAmount * (saveAmount / 100)
    document.getElementById("savingId").innerText = savingAmount

    const total = getTotal()
    const balance = getBalance(incomeAmount, total)
    const remainingAmount = balance - savingAmount
    document.getElementById("remainingId").innerText = remainingAmount

}


