window.onload = function (e) {
    zam("Person");
};

var zam = function (urli) {
    var url = "http://localhost:8084/CA2/api/" + urli;
    var promise = fetch(url, {method: 'get'});
    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);  
        var personArray = JSON.parse(text);
        if(JSON.parse(text).length === undefined){
            personArray = [JSON.parse(text)];
        } 
            tabBody = document.getElementsByTagName("tbody").item(0);
            tabBody.innerHTML = null;
        for (var i = 0; i < personArray.length; i++) {
            row = document.createElement("tr");
            cell1 = document.createElement("td");
            cell2 = document.createElement("td");
            cell3 = document.createElement("td");
            cell4 = document.createElement("td");
            cell5 = document.createElement("td");
            cell6 = document.createElement("td");
            cell7 = document.createElement("td");
            cell8 = document.createElement("td");
            cell9 = document.createElement("td");
            cell10 = document.createElement("td");
            cell11 = document.createElement("td");
            cell12 = document.createElement("td");
            a = document.createElement("a");
            textnode1 = document.createTextNode(personArray[i].id);
            textnode2 = document.createTextNode(personArray[i].firstName);
            textnode3 = document.createTextNode(personArray[i].lastName);
            textnode4 = document.createTextNode(personArray[i].email);
            textnode5 = document.createTextNode(personArray[i].address.street);
            textnode6 = document.createTextNode(personArray[i].address.additionalInfo);
            textnode7 = document.createTextNode(personArray[i].hobbies[0].description);
            textnode8 = document.createTextNode(personArray[i].hobbies[0].name);
            textnode9 = document.createTextNode(personArray[i].phones[0].description);
            textnode10 = document.createTextNode(personArray[i].phones[0].number);
            textnode11 = document.createTextNode(personArray[i].cityInfo.city);
            textnode12 = document.createTextNode(personArray[i].cityInfo.zip);
            cell1.appendChild(a);
            a.appendChild(textnode1);
            a.setAttribute('onclick',"zam(\"Person/"+personArray[i].id+"\")" );
            cell2.appendChild(textnode2);
            cell3.appendChild(textnode3);
            cell4.appendChild(textnode4);
            cell5.appendChild(textnode5);
            cell6.appendChild(textnode6);
            cell7.appendChild(textnode7);
            cell8.appendChild(textnode8);
            cell9.appendChild(textnode9);
            cell10.appendChild(textnode10);
            cell11.appendChild(textnode11);
            cell12.appendChild(textnode12);
            
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);
            row.appendChild(cell7);
            row.appendChild(cell8);
            row.appendChild(cell9);
            row.appendChild(cell10);
            row.appendChild(cell11);
            row.appendChild(cell12);
            tabBody.appendChild(row);
        }
    });
};