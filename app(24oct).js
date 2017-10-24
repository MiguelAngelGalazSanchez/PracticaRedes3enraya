var game = new Phaser.Game(1920, 1080, Phaser.AUTO , 'phaser-example', { preload: preload, create: create,update: update});

var jugador1=true;
var jugador2=false;
var tablero=[];
var victoria;
var titulo;
var play;
var mejoresjugadores;
var ganadorX = ["-", "-", "-", 
               "-", "-", "-",
               "-", "-", "-"];



var scoreText;

function preload() {
    
    game.load.image('titulo','titulo.png')
    game.load.image('mj','fondoCarta.png')
    game.load.image('play','fondoCarta.png')
    game.load.image('fondo','fondoCarta.png')
    game.load.image('fondogrande','FONDO.jpg')
    game.load.image('X', 'x-png.png');
    game.load.image('win','fondoCarta.png')
    game.load.image('0', 'o-png.png');
    game.load.image('board', 'board.png');
    game.load.image('trans','fondoCartaTransp.png')
}

function creartablero()
{
  //Crea el tablero y habilita que se pueda hacer click sobre las casillas y que al dejar el cursor encima se cambie  
     var fichas=game.add.group()

     test1=fichas.create(550,300,'fondo');tablero.push(test1);test1.i=0;
     test2= fichas.create(700, 300, 'fondo');tablero.push(test2);test2.i=1;
     test3= fichas.create(850, 300, 'fondo');tablero.push(test3);test3.i=2;
     test4= fichas.create(550, 450, 'fondo');tablero.push(test4);test4.i=3;
     test5= fichas.create(700, 450, 'fondo');tablero.push(test5);test5.i=4;
     test6= fichas.create(850, 450, 'fondo');tablero.push(test6);test6.i=5;
     test7= fichas.create(550, 610, 'fondo');tablero.push(test7);test7.i=6;
     test8= fichas.create(700, 610, 'fondo');tablero.push(test8);test8.i=7;
     test9= fichas.create(850, 610, 'fondo');tablero.push(test9);test9.i=8;

    
for(i=0;i<9;i++)
    {
        
        
        tablero[i].inputEnabled=true;
        tablero[i].input.useHandCursor = true;
        
    }
    
   
    
   
    return tablero;
    

}



function create()
{
   
   var fondo=game.add.sprite(0, 0, 'fondogrande');
   var titulo=game.add.sprite(-200, 0, 'titulo');
   
   var play=game.add.sprite(game.world.centerX/2+220, 350, 'play');
   
   var mejoresjugadores=game.add.sprite(game.world.centerX/2+220,800, 'mj');
    
   
    
        play.inputEnabled=true;
        play.input.useHandCursor = true;
        mejoresjugadores.inputEnabled=true;
        mejoresjugadores.input.useHandCursor = true;
        play.events.onInputDown.add(generartablero, this);
        mejoresjugadores.events.onInputDown.add(generarjugadores, this);
    
   
   
    

    
    
    
    
}


function generartablero(play)
{ 
    board= game.add.sprite(game.world.centerX/2+30, 250, 'board');
    tablero=creartablero();
    play.destroy();
    
    
}
function generarjugadores(play,mejoresjugadores)
{
   scoreText = game.add.text(60, 16, 'Mejores Jugadores', { fontSize: '32px', fill: '#000' }); 
   scoreText = game.add.text(80, 60, '1.Juan', { fontSize: '20px', fill: '#000' });
   scoreText = game.add.text(80, 100, '2.Ana', { fontSize: '20px', fill: '#000' });
   scoreText = game.add.text(80, 140, '3.Miguel', { fontSize: '20px', fill: '#000' });
   scoreText = game.add.text(80, 180, '4.Pedro', { fontSize: '20px', fill: '#000' });
   play.destroy();
   
}

function update()
{
    
    
    for(i=0;i<tablero.length;i++)
        {
         tablero[i].events.onInputDown.add(change, this);
        
                 
        }
    
     if((ganadorX[0]==='X')&&(ganadorX[1]==='X')&&(ganadorX[2]==='X'))
         
        {
            var victoria=game.add.sprite(game.world.centerX,game.world.centerY,'win')
            console.log("win");
            
            game.paused=true;
    
            
            
        }
    else if((ganadorX[0]==='X')&&(ganadorX[3]==='X')&&(ganadorX[6]==='X'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
    else if((ganadorX[0]==='X')&&(ganadorX[4]==='X')&&(ganadorX[8]==='X'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[1]==='X')&&(ganadorX[4]==='X')&&(ganadorX[7]==='X'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
      else if((ganadorX[2]==='X')&&(ganadorX[5]==='X')&&(ganadorX[8]==='X'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[3]==='X')&&(ganadorX[4]==='X')&&(ganadorX[5]==='X'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[6]==='X')&&(ganadorX[7]==='X')&&(ganadorX[8]==='X'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[2]==='X')&&(ganadorX[4]==='X')&&(ganadorX[6]==='X'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
    
    //////////////////////////////////////////////////
    
     if((ganadorX[0]==='0')&&(ganadorX[1]==='0')&&(ganadorX[2]==='0'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
    else if((ganadorX[0]==='0')&&(ganadorX[3]==='0')&&(ganadorX[6]==='0'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
    else if((ganadorX[0]==='0')&&(ganadorX[4]==='0')&&(ganadorX[8]==='0'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[1]==='0')&&(ganadorX[4]==='0')&&(ganadorX[7]==='0'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
      else if((ganadorX[2]==='0')&&(ganadorX[5]==='0')&&(ganadorX[8]==='0'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[3]==='0')&&(ganadorX[4]==='0')&&(ganadorX[5]==='0'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[6]==='0')&&(ganadorX[7]==='0')&&(ganadorX[8]==='0'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[2]==='0')&&(ganadorX[4]==='0')&&(ganadorX[6]==='0'))
         
        {
            console.log("win");
            game.paused=true;
            
        }
    
}




function change(tc) {
    //Administra los cambios de ficha
   
       if(
       (tc.key=='fondo')&&(jugador1==true)   
       )
            {
                  tc.loadTexture('X', 0, false);
                  jugador1=false;
                  jugador2=true;
                  ganadorX[tc.i]='X';
                  
                  
               
                
                  
                
                  
                  
            } 
       else if
           (
       (tc.key=='fondo')&&(jugador2==true)     
       )
            {
                  tc.loadTexture('0', 0, false);
                  jugador1=true
                  jugador2=false;
                  ganadorX[tc.i]='0';
                  
               
            } 
    
   
}


