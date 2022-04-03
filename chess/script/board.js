

block = chessSize / 8;
color = "black"
function render_squares(){
    //lines
    for (let i = 0; i < 8; i++){
        if(color == "white"){
            color = "black"
        }
        else{
            color = "white"
        }
        //columns
        for (let j = 0; j < 8; j++){
            if (color == "white"){
                canvas.fillStyle = "#f3e4bc";
                canvas.fillRect(j * block, i * block, block, block);
                color = "black"
            }
            else{
                canvas.fillStyle = "#543a35";
                canvas.fillRect(j * block, i * block, block, block);
                color = "white"
            }
        }   
        
    }
    red_board()
    
}
//onclick
var board_x1;
var board_x2;
var board_y1;
var board_y2;

function red_board(){
    board_x1 = Math.floor(x/block) * block;
    board_x2 = (Math.floor(x/block) + 1) * block;
    board_y1 = Math.floor(y/block) * block;
    board_y2 = (Math.floor(y/block) + 1) * block;
    canvas.fillStyle = "red";
    canvas.fillRect(board_x1, board_y1, block, block);
}