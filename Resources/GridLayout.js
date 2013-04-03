exports.GridLayout = function(row, col, padding, obj, space){
 
    var elementPadding = (padding ==0) ? 0 : padding + (padding/2);    //to balance the width of each element
    var elementViewWidth = (parseFloat(Math.floor(100 / col))/100) * Ti.Platform.displayCaps.platformWidth - elementPadding; //the element width
 
    // Grid container
    var vview = Ti.UI.createView({
        height: space + '%',
        width: '100%', layout: "vertical",
        backgroundColor: 'transparent'
    });
    
    var _counter=0;  //counter
    for(var x = 0; x < row ; x++){
        // Horizontal container
        var horzView = Ti.UI.createView({
            height: Math.floor(100 / row) + '%',
            width: '100%', layout: "horizontal",
            backgroundColor: 'transparent' // Use a Color to create a border
        });
        for(var y = 0; y < col; y++){
            // Element container (Column)
            var elementView = Ti.UI.createView({
                // Can Choose a Background Color
                backgroundColor: 'transparent', height: '100%', width: elementViewWidth, top: padding, left: padding
            });
            horzView.add(elementView);
            elementView.add(obj[_counter]);
            // Set alignment of the object inside the element
            require("alignment").setAlign(obj[_counter]);
            _counter++;
        }
        vview.add(horzView);
    }
    return vview;
}