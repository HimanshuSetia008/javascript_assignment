// Self-invoked function 
(function () {

    // Building an array containing details
    var details = new Array();
    details.push(["Name", "Age", "DOB", "Email", "Company"]);
    details.push(["Himanshu Setia", 21, "17/08/2001", "himanshu.setia@Geminisolutions.com", "Gemini Solutions"]);
    details.push(["Tim Cook", 24, "16/12/1998", "cooktim@Mindow.com", "Midow"]);
    details.push(["Rahul Vediya", 22, "23/09/2000", "rahul23@rangerfinances.com", "Ranger Finances"]);
    details.push(["Prince Narula", 30, "03/05/1996", "prince56@luca.com", "Luca Logistics"]);

    // HTML table element creation
    var table = document.createElement("TABLE");
    table.border = "4px solid black";
    table.style.width = "60%";
    table.style.padding = "2px";
    table.style.borderCollapse = 'collapse';
    table.align = "center";

    // Calculating columns count
    var columnCount = details[0].length;
    // console.log("Column count: " + columnCount);

    // Creation and Insertion of head row contents in table
    var row = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        var headCell = document.createElement("TH");
        headCell.innerHTML = details[0][i];
        headCell.style.backgroundColor = 'rgb(243,243,243)';
        headCell.style.padding = '8px';
        row.appendChild(headCell);
    }
    // console.log("Table header row created successfully");

    // Inserting data to rows 
    for (let i = 1; i < details.length; i++) {
        row = table.insertRow(-1);
        for (let j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = details[i][j];
            cell.style.padding = '8px';
            cell.style.textAlign = 'center';
        }
    }
    // console.log("Data entered in table successfully");

    var dynamicTable = document.getElementById("myTable");
    dynamicTable.innerHTML = "";
    dynamicTable.appendChild(table);
})();