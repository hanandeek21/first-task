var selectedRow = null;


function onFormSubmit() {
    if (validate()) {
        var formData = readstudentdata();
        if (selectedRow == null)
            insertstudent(formData);
        else
            updatestudent(formData);
        showdata();
    }
}

function readstudentdata() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["idd"] = document.getElementById("idd").value;
    formData["gpa"] = document.getElementById("gpa").value;

    return formData;
}

function insertstudent(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idd;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gpa;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}



function showdata() {
    document.getElementById("fullName").value = "";
    document.getElementById("idd").value = "";
    document.getElementById("gpa").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("idd").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gpa").value = selectedRow.cells[2].innerHTML;

}
function updatestudent(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.idd;
    selectedRow.cells[2].innerHTML = formData.gpa;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        showdata();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
