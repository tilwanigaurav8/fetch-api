fetch("https://dummyjson.com/user").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData="";
    objectData.users.map((values)=>{
        tableData+=`<tr>
        <td>${values.firstName} </td>
        <td>${values.lastName} </td>
        <td>${values.age} </td>
        <td>${values.email} </td>
        </tr>`
    });
    document.getElementById("table_body").innerHTML=tableData;
})