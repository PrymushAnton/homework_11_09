const moment = require("moment")

function getDate(){
    console.log(moment().format("YYYY/MM/DD HH:MM:SS"))
}

getDate()
