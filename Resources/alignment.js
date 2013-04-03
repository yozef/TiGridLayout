exports.setAlign =  function (obj){
        switch(obj.align){
            case 'center':
            break;
            case 'left':
                obj.left = 0;
            break;
            case 'right':
                obj.right = 0;
            break;
            case 'top':
                obj.top = 0;
            break;
            case 'bottom':
                obj.bottom = 0;
            break;
            case 'topleft':
                obj.left = 0;
                obj.top = 0;
            break;
            case 'topright':
                obj.right = 0;
                obj.top = 0;
            break;
            case 'leftbottom':
                obj.left = 0;
                obj.bottom = 0;
            break;
            case 'rightbottom':
                obj.right = 0;
                obj.bottom = 0;
            break;
        }
    return obj;
}