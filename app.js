const weekColours = ["#193996", "#51173A", "#F8970C", "#8B1C62"];
var thisWeek;
function update() {
    var newWeek = getWeekNumber(new Date())[1];
    $('.week').html(thisWeek);
    console.log("HOLY MOTHER OF GOD!!!!") 
}

function randomColours() {
}
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0,0,0,0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(),0,1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getFullYear(), weekNo];
}

update();
$("body").css("background", weekColours[Math.floor(Math.random()*weekColours.length)]);
setInterval(update, 10000);
