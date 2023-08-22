let initDemo = () =>{
    console.log("THIS IS WORKING");

    //Getting the canvas from HTML
    let canvas = document.getElementById('screen');
    let gl = canvas.getContext('webgl'); //GETTING THE WEBGL CONTEXT
    // Up to line 6 is enough for Chrome , and Firefox this is enough to get it to work on other browsers we do the next thing

    if (!gl) {
        console.log("WEBGL is not supported Experimental Webgl")
        gl = canvas.getContext('experimental-webgl');
        
    }

    if (!gl) {
        console.log("Browser does not support WebGL");
    }


    //Clearing the context color
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

};