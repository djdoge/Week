const weekColours = ["#193996", "#51173A", "#F8970C", "#8B1C62", "#175032",
                     "#d80a3a", "#820000", "#001063", "#af0000", "#000000",
                     "#87008c", "#115aad", "#a0ad11", "#00bfaf", "#e00000",
                     "#4f4f4f", "#3ca035", "#0e637c", "#683607", "#b7247f",
                     "#4924b7", "#1f1882", "#188234", "#3d7dcc", "#074214",
                     "#470719", "#dd7c04", "#6904dd", "#8fbf00", "#00bf3c",
                     "#347887", "#270949", "#2f606d", "#382f6d", "#105e1b",
                     "#898989", "#037715", "#77035a", "#032077", "#bc185f",
                     "#601b1e", "#1b6034", "#5c9112", "#123f91", "#2e777c",
                     "#567c2e", "#3a248c", "#d60c2b", "#550cb5", "#0cb59e",
                     "#9e940b", "#9e190b"];
var thisWeek;
function update() {
    var newWeek = getWeekNumber(new Date())[1];
    
    if(newWeek!=thisWeek) {
        thisWeek=newWeek;
        $('.week').html(thisWeek);        
        autoColours();
    }
    
}

function autoColours() {
    $("body").css("background", weekColours[thisWeek-1]);
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

setInterval(update, 10000);
