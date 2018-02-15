import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

toggle_color("#a86e6e", "#90a2c6", 3000, 1000);

function toggle_color(color1, color2, cycle_time, wait_time) {

    setInterval(function first_color() {
        document.body.style.backgroundColor = color1;
        setTimeout(change_color, wait_time);
    }, cycle_time);

    function change_color() {
        document.body.style.backgroundColor = color2;
    }
}
<html>
<head>
    <title>Button Fun</title>
    <script src = 'bower_components/jquery/dist/jquery.js'></script>
    <script type="home.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css"/>
    <script type="text/javascript">
        clicked = true;
        $(document).ready(function(){
        $("button").click(function(){
            if(clicked){
                $(this).css('background-color', 'red');
                clicked  = false;
            } else {
                $(this).css('background-color', 'blue');
                clicked  = true;
            }
        });
    });
    </script>
</head>
<body>

<button>Press</button>

</body>
</html>


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
