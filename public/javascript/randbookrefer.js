const randbookrefer = () => {
    result = Math.floor(Math.random()*10)
    for (let i = 0; i < 5; i++) {    
        result += String.fromCharCode(65+Math.floor(Math.random() * 26))
    }
    return result
}

module.exports = randbookrefer