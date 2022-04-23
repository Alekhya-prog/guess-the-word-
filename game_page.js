 
 player1_name = localStorage.getItem ("player1");
player2_name = localStorage.getItem ("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById ("player2_name").innerHTML = player2_name + ":";

document.getElementById ("player1_score").innerHTML = player1_score;
document.getElementById ("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
 document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send (){
get_text = document.getElementById ("input1").value;
get_word = get_text.toLowerCase ();

position1 = get_word.charAt (1);
length_divided_2 = Math.floor(get_word.length/2);
position2 = get_word.charAt (length_divided_2);
length_1 = get_word.length - 1;
position3 = get_word.charAt (length_1);4

replace1 =  get_word.replace (position1 , "_");
replace2 = replace1.replace (position2 , "_");
replce3 = replace2.replace (position3 , "_");

question_word = "<h4 id = 'questionWord' > Q. "+replce3+ "</h4>";
input_text = "<br> <BR> <BR> Answer <input id= 'input_word'>";
button = "<BR> <BR>  <button id = 'button1' onclick =  'check ()'  > CHECK </button> ";
three_var = question_word + input_text + button; 
document.getElementById ("output").innerHTML = three_var;
document.getElementById ("input1").value="";
}

question_turn = "player1";
answer_turn = "player2";

function check () {
get_answer = document.getElementById ("input_word").value;
get_la = get_answer.toLowerCase () ;



if(get_la == get_word) 
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else 
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
    }
    else 
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
    }
    else 
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
    }

    document.getElementById("output").innerHTML = "";
}