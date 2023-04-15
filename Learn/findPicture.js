axios.get("http://api.giphy.com/v1/gifs/search?q=funny&api_key=pBXpnaU9U2OKJeirORz0M1FwaFiU9vY6")
.then((data)=>{
    data=data.data
    console.log(data)
})