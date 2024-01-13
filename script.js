var list;
var row = 0;
var word="heard";
var unfoundWords = word.split("")
attempts = 6
readableAttempts = 7
gameOver = false;
document.addEventListener("DOMContentLoaded", function(){
    

    list = document.getElementsByTagName("TR");


});

function submit() {
    input = document.getElementById("input").value;
    if (input.length != 5) {
        alert("Your guess isn't five letters")
    } else if (gameOver) {
        alert("Game already over");
    } else {
        
        columns = list[row].getElementsByTagName("TH");
        console.log(columns)
        for (let index = 0; index < input.length; index++) {
            columns[index].innerText = input[index];
            if (input[index] == word[index]) {
                columns[index].style = "background-color: green;"
                const inde = unfoundWords.indexOf(input[index]);
                unfoundWords.splice(inde, 1); // 2nd parameter means remove one item only
            }
    
        }

        for (let index = 0; index < input.length; index++) {
            columns[index].innerText = input[index];
                if (word.includes(input[index]) && unfoundWords.includes(input[index])) {
                
                    columns[index].style = "background-color: yellow;"
                }
        }

        for (let index = 0; index < input.length; index++) {
            columns[index].innerText = input[index];
            if (input[index] == word[index]) {
                columns[index].style = "background-color: green;"

            }
    
        }

        unfoundWords = word.split("");
        row++;
        if (input == word) {
            setTimeout(() => {
                alert("you win")
                gameOver = true
            }, 200);
            
        } else if (row == attempts) {
            setTimeout(() => {
                alert("you lose")
                gameOver = true
            }, 200);
        }
        
    }



}
