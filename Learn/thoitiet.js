// 418d123a8a610f690bbd1cdff706380b


function submit_fnc(e, elm) {
    e.preventDefault()
    const input_all = elm.querySelectorAll("input")
    const lat = input_all[0].value
    const lon = input_all[1].value
    axios.get(`
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=418d123a8a610f690bbd1cdff706380b&units=Metric
    `)
        .then((data) => {
            console.log(data.data)
            const main = data.data.main
            document.querySelector("#humidity").innerHTML = "Độ ẩm: " + main.humidity
            document.querySelector("#pressure").innerHTML = "Áp lực: " + main.pressure
            document.querySelector("#temp").innerHTML = "Nhiệt độ: " + main.temp
        })
}


function submit_fnc_2(e, elm) {
    e.preventDefault()
    const input = elm.querySelector("input")
    axios.get(`
    http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=418d123a8a610f690bbd1cdff706380b
    `)
        .then((data) => {
            if (data.data.length == 0) {
                alert("Khu vực không hợp lệ")
                return false
            }
            const lat = data.data[0].lat
            const lon = data.data[0].lon
            return axios.get(`
            https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=418d123a8a610f690bbd1cdff706380b&units=Metric
        `)
                .then((data) => {
                    if (data != false) {
                        const main = data.data.main
                        document.querySelector("#humidity").innerHTML = "Độ ẩm: " + main.humidity
                        document.querySelector("#pressure").innerHTML = "Áp lực: " + main.pressure
                        document.querySelector("#temp").innerHTML = "Nhiệt độ: " + main.temp
                    }
                })

        })

}




// axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=HP&appid=418d123a8a610f690bbd1cdff706380b`)
//     .then((data) => {
//         console.log(data.data)
//     })