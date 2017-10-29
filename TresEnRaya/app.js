var game = new Phaser.Game(1920, 1080, Phaser.AUTO , 'phaser-example', { preload: preload, create: create,update: update});

var jugador1=true;
var jugador2=false;
var tablero=[];
var victoria;
var titulo;
var play;
var sound
var sound2;
var mejoresjugadores;
var ganadorX = ["-", "-", "-", 
               "-", "-", "-",
               "-", "-", "-"];



var scoreText;

function preload() {
    
    game.load.image('titulo','titulo.png')
    game.load.image('mj','mejoresjugadores.png')
    game.load.image('play','play2.png')
    game.load.image('fondo','fondoCarta.png')
    game.load.image('fondogrande','FONDO.png')
    game.load.image('X', 'x-png.png');
    game.load.image('win','jugador1.png')
    game.load.image ('win2','jugador2.png')
    game.load.image('0', 'o-png.png');
    game.load.image('board', 'board.png');
    game.load.image('trans','fondoCartaTransp.png')
    game.load.audio('click', 'click.mp3');
    game.load.audio('card', 'card.wav');
    
}

function creartablero()
{
  //Crea el tablero y habilita que se pueda hacer click sobre las casillas y que al dejar el cursor encima se cambie  
     var fichas=game.add.group()

     test1=fichas.create(750,300,'fondo');tablero.push(test1);test1.i=0;
     test2= fichas.create(940, 300, 'fondo');tablero.push(test2);test2.i=1;
     test3= fichas.create(1130, 300, 'fondo');tablero.push(test3);test3.i=2;
     test4= fichas.create(750, 490, 'fondo');tablero.push(test4);test4.i=3;
     test5= fichas.create(940, 490, 'fondo');tablero.push(test5);test5.i=4;
     test6= fichas.create(1130, 490, 'fondo');tablero.push(test6);test6.i=5;
     test7= fichas.create(750, 680, 'fondo');tablero.push(test7);test7.i=6;
     test8= fichas.create(940, 680, 'fondo');tablero.push(test8);test8.i=7;
     test9= fichas.create(1130, 680, 'fondo');tablero.push(test9);test9.i=8;

    
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
   var titulo=game.add.sprite(500, 60, 'titulo');
   sound = game.add.audio('click');
   sound2 = game.add.audio('card');
   var play=game.add.sprite(400, 500, 'play');
   
   var mejoresjugadores=game.add.sprite(1300,500, 'mj');
    
   //Habilitamos poder clikear sobre los botones y que se cambie el cursor a una mano
    
        play.inputEnabled=true;
        play.input.useHandCursor = true;
        mejoresjugadores.inputEnabled=true;
        mejoresjugadores.input.useHandCursor = true;
    
    //Asociamos los eventos de raton necesarios a sus funciones
    
        play.events.onInputOver.add(alfachangeplay, this)
        mejoresjugadores.events.onInputOver.add(alfachangeplay, this)
        play.events.onInputDown.add(generartablero, this);
        mejoresjugadores.events.onInputDown.add(generarjugadores, this);
        play.events.onInputOut.add(alfachangeplay2, this)
        mejoresjugadores.events.onInputOut.add(alfachangeplay2, this)
   
   
    

    
    
    
    
}
function alfachangeplay(a)
{
    //Se llama al pasar el raton por encima
    a.alpha=0.7;
}
function alfachangeplay2(a)
{ 
    //Se llama al dejar de pasar el raton por encima
    a.alpha=1;
}



function generartablero(play)
{   
    
    board= game.add.sprite(game.world.centerX/2+200, 250, 'board');
    //Rellenamos nuestro array tablero con la función que hacia un return de un array
    tablero=creartablero();
    sound.play();
    //Destruimos el boton play para que no interfiera en la partida
    play.destroy();
    
    
}
function generarjugadores(play)
{
    sound.play();
    //Generamos una simulación de lo que saldría al dar a mejores jugadores con mero texto por pantalla
   scoreText = game.add.text(100, 200, 'Mejores Jugadores', { fontSize: '32px', fill: '#ffffff' }); 
   scoreText = game.add.text(150, 250, '1.Juan', { fontSize: '20px', fill: '#ffffff' });
   scoreText = game.add.text(150, 300, '2.Ana', { fontSize: '20px', fill: '#ffffff' });
   scoreText = game.add.text(150, 350, '3.Miguel', { fontSize: '20px', fill: '#ffffff' });
   scoreText = game.add.text(150, 400, '4.Pedro', { fontSize: '20px', fill: '#ffffff' });
    //Destruimos el boton Mejoresjugadores para que no interfiera en la partida
   play.destroy();
   
}

function update()
{
    //Al llamarse cada frame , hacemos que si en  cualquier momento se pincha una ficha active su evento de raton al clikearla
    
    for(i=0;i<tablero.length;i++)
        {
         tablero[i].events.onInputDown.add(change, this);
        
                 
        }
    
    //comprobamos las posibles soluciones ganadoras
     if((ganadorX[0]==='X')&&(ganadorX[1]==='X')&&(ganadorX[2]==='X'))
         
        {
            var victoria=game.add.sprite(550,200,'win')
            console.log("win");
            
            game.paused=true;
    
            
            
        }
    else if((ganadorX[0]==='X')&&(ganadorX[3]==='X')&&(ganadorX[6]==='X'))
         
        {
            var victoria=game.add.sprite(550,200,'win')
            
            console.log("win");
            game.paused=true;
            
        }
    else if((ganadorX[0]==='X')&&(ganadorX[4]==='X')&&(ganadorX[8]==='X'))
         
        {
            var victoria=game.add.sprite(550,200,'win')
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[1]==='X')&&(ganadorX[4]==='X')&&(ganadorX[7]==='X'))
         
        {
            var victoria=game.add.sprite(550,200,'win')
            console.log("win");
            game.paused=true;
            
        }
      else if((ganadorX[2]==='X')&&(ganadorX[5]==='X')&&(ganadorX[8]==='X'))
         
        {
            var victoria=game.add.sprite(550,200,'win')
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[3]==='X')&&(ganadorX[4]==='X')&&(ganadorX[5]==='X'))
         
        {
            var victoria=game.add.sprite(550,200,'win')
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[6]==='X')&&(ganadorX[7]==='X')&&(ganadorX[8]==='X'))
         
        {
            var victoria=game.add.sprite(550,200,'win')
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[2]==='X')&&(ganadorX[4]==='X')&&(ganadorX[6]==='X'))
         
        {
            var victoria=game.add.sprite(550,200,'win')
            console.log("win");
            game.paused=true;
            
        }
    
    //////////////////////////////////////////////////
    
     if((ganadorX[0]==='0')&&(ganadorX[1]==='0')&&(ganadorX[2]==='0'))
         
        {
            var victoria=game.add.sprite(550,200,'win2')
            console.log("win");
            game.paused=true;
            
        }
    else if((ganadorX[0]==='0')&&(ganadorX[3]==='0')&&(ganadorX[6]==='0'))
         
        {
            var victoria=game.add.sprite(550,200,'win2')
            console.log("win");
            game.paused=true;
            
        }
    else if((ganadorX[0]==='0')&&(ganadorX[4]==='0')&&(ganadorX[8]==='0'))
         
        {
            var victoria=game.add.sprite(550,200,'win2')
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[1]==='0')&&(ganadorX[4]==='0')&&(ganadorX[7]==='0'))
         
        {
            var victoria=game.add.sprite(550,200,'win2')
            console.log("win");
            game.paused=true;
            
        }
      else if((ganadorX[2]==='0')&&(ganadorX[5]==='0')&&(ganadorX[8]==='0'))
         
        {var victoria=game.add.sprite(550,200,'win2')
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[3]==='0')&&(ganadorX[4]==='0')&&(ganadorX[5]==='0'))
         
        {
            var victoria=game.add.sprite(550,200,'win2')
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[6]==='0')&&(ganadorX[7]==='0')&&(ganadorX[8]==='0'))
         
        {
            var victoria=game.add.sprite(550,200,'win2')
            console.log("win");
            game.paused=true;
            
        }
     else if((ganadorX[2]==='0')&&(ganadorX[4]==='0')&&(ganadorX[6]==='0'))
         
        {
            var victoria=game.add.sprite(550,200,'win2')
            console.log("win");
            game.paused=true;
            
        }
    
}




function change(tc) {
    //Administra los cambios de ficha
   
    
    //Si la ficha esta boca abajo(aun no la ha pulsado ningun jugador ) y es el turno del juegador uno , pone una X , cambia el turno y añade 
    //al array en el cual comprobamos la solución una X

       if(
       (tc.key=='fondo')&&(jugador1==true)   
       )
            {
                  tc.loadTexture('X', 0, false);
                  jugador1=false;
                  jugador2=true;
                  sound2.play()
                  ganadorX[tc.i]='X';
                  
                  
               
                
                  
                
                  
                  
            } 
    
    //Hace lo mismo pero poniendo un 0 ya que es otro jugador y rellenando el array con el que comprobamos la solución con un 0
       else if
           (
       (tc.key=='fondo')&&(jugador2==true)     
       )
            {
                  tc.loadTexture('0', 0, false);
                  jugador1=true
                  jugador2=false;
                  sound2.play()
                  ganadorX[tc.i]='0';
                  
               
            } 
    
   
}


