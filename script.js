
async function getData(){
    let num = document.getElementById("number").value

    let factNumber = await fetch (`https://kontests.net/api/v1/${num}`)

    let res = await factNumber.json()

    console.log(res);
    const listing_table = document.getElementById('table-data');
    listing_table.innerHTML = '';
    for (let i = 0; i < res.length; i++) {
        listing_table.innerHTML +=
            `
        <tr>
        <td>${res[i].name}</td>
        <td>${res[i].url}</td>
        <td>${res[i].start_time}</td>
        <td>${res[i].end_time}</td>
        <td>${(res[i].duration)/60}</td>
        </tr>
        `;
    }

}

