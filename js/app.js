"use-strict";
$('body').on('touchstart', (event) => handleTouchStart(event));
$('body').on('touchmove', (event) => handleTouchMove(event));

const weekColours = ["#193996", "#51173A", "#F8970C", "#8B1C62", "#175032",
"#d80a3a", "#820000", "#001063", "#af0000", "#000000",
"#87008c", "#115aad", "#a0ad11", "#00bfaf", "#e00000",
"#4f4f4f", "#3ca035", "#0e637c", "#ed0273", "#b7247f",
"#4924b7", "#1f1882", "#188234", "#3d7dcc", "#e89900",
"#470719", "#dd7c04", "#6904dd", "#8fbf00", "#00bf3c",
"#347887", "#270949", "#2f606d", "#382f6d", "#105e1b",
"#898989", "#037715", "#77035a", "#032077", "#bc185f",
"#601b1e", "#1b6034", "#5c9112", "#123f91", "#2e777c",
"#567c2e", "#3a248c", "#d60c2b", "#550cb5", "#0cb59e",
"#9e940b", "#9e190b", "#ff00bf"];

var xDown = null;
var yDown = null;

var display = 'week';
var thisWeek;
var newWeek;

function update() {
    if (display == 'week') {
        newWeek = getWeekNumber(new Date())[1];
    }
    if(newWeek!=thisWeek || !thisWeek) {
        thisWeek=newWeek;

        autoColours();
        if (thisWeek>47 || thisWeek<3) {
            snow();
        }
    }
    if (display === 'day') {
        //do stuff to show daynumber
    }
}

function autoColours() {
    $("body").animate({backgroundColor: weekColours[thisWeek-1]}, 2000);
    $(".week").fadeOut(1000, ()=> {
        $(".week").html(thisWeek);
      }
    ).fadeIn(1000);
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

function handleTouchStart(event) {
    xDown = event.touches[0].clientX;
    yDown = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = event.touches[0].clientX;
    var yUp = event.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        /*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            console.log('left');
            $(".week").html("Hello tester \n working on loads of new features!");
            $(".week").css({"overflow": "hidden", "text-align": "center"});
            $(".week").animate({"font-size": 30}, 500);

        } else {
            /* right swipe */
            console.log('right');
            $(".week").html(thisWeek);
            $(".week").animate({"font-size": 175}, 500);

        }
    }
    else {
        if ( yDiff > 0 ) {
            /* up swipe */
            console.log('up');
        } else {
            /* down swipe */
            console.log('down');
        }
    }

    /* reset values */
    xDown = null;
    yDown = null;

}

update();
