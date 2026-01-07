let count = 0;

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    count++;

    let tableBody = document.querySelector("#taskTable tbody");
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${count}</td>
        <td>${taskText}</td>
        <td><button onclick="deleteTask(this)">Delete</button></td>
    `;

    tableBody.appendChild(row);
    taskInput.value = "";
}

function deleteTask(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
    updateSerialNumbers();
}

function updateSerialNumbers() {
    let rows = document.querySelectorAll("#taskTable tbody tr");
    count = 0;
    rows.forEach((row, index) => {
        row.children[0].textContent = index + 1;
        count++;
    });
}
