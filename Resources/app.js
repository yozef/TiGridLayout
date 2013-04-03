// Main Window App
var win = Ti.UI.createWindow({
    backgroundImage: 'images/background.png',
});

// Reusable Modal Window
var modalWin = Ti.UI.createWindow({
    modal: true, barColor: '#ABABAB',
});
closeBtn = Ti.UI.createButton({title:'close'});
closeBtn.addEventListener('click', function(){modalWin.close()});
modalWin.rightNavButton = closeBtn;
    
var objArrays = []; // Array to place your Buttons/UI View

// Create your Buttons / UI View
var btn = Ti.UI.createButton({
    title: "", height: '83', width: '89', backgroundImage: 'images/icon1.png', name:'win1',
});
btn.addEventListener('click', openWindow);
var btn1 = Ti.UI.createButton({
    title: "", height: '83', width: '89', backgroundImage: 'images/icon2.png', name:'win2',
});
btn1.addEventListener('click', openWindow);
var btn2 = Ti.UI.createButton({
    title: "", height: '83', width: '89', backgroundImage: 'images/icon3.png', name:'win3',
});
btn2.addEventListener('click', openWindow);
var btn3 = Ti.UI.createButton({
    title: "", height: '83', width: '89', backgroundImage: 'images/icon4.png', name:'win4',
});
btn3.addEventListener('click', openWindow);
var btn4 = Ti.UI.createButton({
    title: "", height: '83', width: '89', backgroundImage: 'images/icon5.png', name:'win5',
});
btn4.addEventListener('click', openWindow);
var btn5 = Ti.UI.createButton({
    title: "", height: '83', width: '89', backgroundImage: 'images/icon6.png', name:'win6',
});
btn5.addEventListener('click', openWindow);

function openWindow(e){
    if (e.source.name == 'win1') {
        modalWin.title = 'win 1';
        modalWin.backgroundColor = 'red';
    } else if (e.source.name == 'win2') {
        modalWin.title = 'win 2';
        modalWin.backgroundColor = 'blue'
    } else if (e.source.name == 'win3') {
        modalWin.title = 'win 3';
        modalWin.backgroundColor = 'green'
    } else if (e.source.name == 'win4') {
        modalWin.title = 'win 4';
        modalWin.backgroundColor = 'gray'
    } else if (e.source.name == 'win5') {
        modalWin.title = 'win 5';
        modalWin.backgroundColor = 'pink'
    } else if (e.source.name == 'win6') {
        modalWin.title = 'win 6';
        modalWin.backgroundColor = 'yellow'
    }
    modalWin.open();
}

// Add your Buttons or UI Objects in Order
objArrays.push(btn);
objArrays.push(btn1);
objArrays.push(btn2);
objArrays.push(btn3);
objArrays.push(btn4);
objArrays.push(btn5);

// GridLayout(row, col, padding, objects, spacePercentage)
var grid = require("libs/GridLayout").GridLayout(3,2,5,objArrays,80);

win.add(grid);
 
win.open();