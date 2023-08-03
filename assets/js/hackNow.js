const hackNow = async () => {
    const tbody = document.getElementById('tbody')
    const res = await fetch("https://script.google.com/macros/s/AKfycbypwVIKzxr0bE1IjZ1uI57piRRFZRGPnyRV3CrMuWwHAczl64mejW5qDyJSDr_KAz0P/exec")
    const data = await res.json().then(x => {
        console.log(x)
        let tab = ``
        for (let i in x) {
            tab += `<tr>
            <th scope="row">${x[i].Rank}</th>
            <td>${x[i].Name}</td>
            <td>${x[i].Score}</td>
        </tr>`
        }

        tbody.innerHTML = tab

    })


}

hackNow()

const unCheck = () => {
    const checkBox = document.getElementById('active')
    checkBox.checked = false
}