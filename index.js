fetch("https://www.googleapis.com/youtube/v3/captions").then(data => {
    return data.json()
}).then(data => {
    console.log(data)
})

// AIzaSyAmZikW_8-Zil0RwetxXLVONrYam8QOuXo