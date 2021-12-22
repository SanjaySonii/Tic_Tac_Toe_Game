<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic_Tac_Toe</title>
    <link rel="stylesheet" href="project18_Tic_Tac_Toe.css">
    <style>
        @media screen and (max-width : 500px) {
            .container h1 {
                font-size: 2rem;
            }

            .btn {
                width: 6rem;
                height: 6rem;
            }

            #Turn,
            #C,
            #choice h3 {
                font-size: x-large;
            }

            #choosed,
            #choice {
                font-size: 1.5rem;
            }

            #choice input {
                width: 1rem;
                height: 1rem;
            }
            .O {
                width: 5.7rem;
                height: 5.7rem;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>This is Tic Tac Toe Game</h1>
        <div id="choice">
            What is your choice
            <div id="C">
                <input type="radio" class="myChoice" name="choice" id="circle" value="circle">
                <h3>circle</h3>
                <input type="radio" class="myChoice" name="choice" id="cross" value="cross">
                <h3>cross</h3>
            </div>
        </div>
        <div id="choosed">
        </div>
        <div id="Turn">
        </div>
        <div id="Game">
            <table cellpadding="0px" cellspacing="0px" width='200' style="align-self:center;">
                <tbody>
                    <tr>
                        <td><button class="btn" id="0"></button></td>
                        <td><button class="btn" id="1"></button></td>
                        <td><button class="btn" id="2"></button></td>
                    </tr>
                    <tr>
                        <td><button class="btn" id="3"></button></td>
                        <td><button class="btn" id="4"></button></td>
                        <td><button class="btn" id="5"></button></td>
                    </tr>
                    <tr>
                        <td><button class="btn" id="6"></button></td>
                        <td><button class="btn" id="7"></button></td>
                        <td><button class="btn" id="8"></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div><button id="refresh">REFRESH</button></div>
    </div>
    <script src="project18_Tic_Tac_Toe.js"></script>
</body>

</html>
 
