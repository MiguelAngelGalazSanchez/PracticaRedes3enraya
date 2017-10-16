# PracticaRedes3enraya
## app.js
var game = new Phaser.Game(1024, 800, Phaser.AUTO , 'phaser-example', { preload: preload, create: create});
var test;
var test2;
var test3;
function preload() {
    
    game.load.image('X', 'x-png.png');
    game.load.image('0', 'o-png.png');
    game.load.image('board', 'board.png');
}

function create() {
   var fondo=game.stage.backgroundColor="#9370DB"; 
   var board= game.add.sprite(game.world.centerX+30, 0, 'board');
     test= game.add.sprite(550, 0, 'X')
     test2= game.add.sprite(700, 0, 'X')
     test3= game.add.sprite(800, 0, 'X')
     game.input.onDown.addOnce(tes, this);
}

function tes() {
    if (test.key === 'X')
    {
        test.loadTexture('0', 0, false);
        
    }
}
## estilo.css
BODY {
 background-color:mediumpurple;
}
h1
{
    text-align: center;
    border-style: groove
    
    
}
## TresEnRaya.html
<HTML>
   <HEAD>
      <TITLE>Tres En Raya</TITLE>
         <script src="//cdn.jsdelivr.net/phaser/2.5.0/phaser.min.js"></script>
         <script src="jquery.js"></script>
        
        <script src="app.js"></script>
       <link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
       <link type="text/css" rel="stylesheet" href="estilo.css"/>
       
   </HEAD>
   <BODY>
       <h1><strong>Tres en raya</strong></h1>
      
           
       
       
       <nav class="navbar navbar-default navbar-fixed-bottom">
 <div class="navbar-inner navbar-content-center">
 <p class="text-center">&copy;Realizado por Miguel Angel Galaz Sanchez y Ana Maria Alcaide</p>
 </div>
</nav>

   </BODY>
</HTML>

