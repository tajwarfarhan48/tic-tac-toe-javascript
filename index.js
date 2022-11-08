let p1Turn = true;
let counter = 0;

var p1Win = false;
var p2Win = false;
var draw = false;

let box = document.getElementsByClassName('box')[0];
let status_text = document.getElementsByClassName('status')[0];

const init_box_html = box.innerHTML;
const init_status_text = status_text.innerText;

let sub_boxes = Array.from(document.getElementsByClassName('sub-box'));
sub_boxes.forEach((element) => {
    element.addEventListener('click', function () {
        if (this.dataset.clicked == "false") {
            if (p1Turn) {
                this.innerHTML = "x";
            }

            else {
                this.innerHTML = "o";
            }

            this.dataset.clicked = "true";
            counter++;
            p1Turn = !p1Turn;
        }

        if (counter % 2 == 1) {
            status_text.innerText = "Player 2's Turn";
        }

        else {
            status_text.innerText = "Player 1's Turn";
        }

        check_win();
        // console.log(`Player 1 Win: ${p1Win}. Player 2 Win: ${p2Win}.`);

        if (p1Win) {
            disable_all();
            status_text.innerText = "Congratulations, Player 1 has won!";
        }

        else if (p2Win) {
            disable_all();
            status_text.innerText = "Congratulations, Player 2 has won!";
        }

        else if ((counter == 9) && (!check_win())) {
            disable_all();
            status_text.innerText = "It's a draw!";
        }
    })
});

function check_win() {
    let line_classes = ['r1', 'r2', 'r3', 'c1', 'c2', 'c3', 'd1', 'd2'];
    let lines = [];

    line_classes.forEach((className, i) => {
        lines[i] = document.getElementsByClassName(className);
    })

    lines.forEach((line, i) => {
        if ((line[0].innerHTML == "x") && (line[1].innerHTML == "x") && (line[2].innerHTML == "x")) {
            p1Win = true;
            return true;
        }
        else if ((line[0].innerHTML == "o") && (line[1].innerHTML == "o") && (line[2].innerHTML == "o")) {
            p2Win = true;
            return true;
        }
    });

    return false;
}

function disable_all() { // Disables all the boxes once a result has been reached
    collection = document.getElementsByClassName('sub-box');
    for (let i = 0; i < collection.length; i++) {
        collection[i].dataset.clicked = true;
    }
}

let restart_button = document.getElementsByClassName('restart')[0];
restart_button.addEventListener('click', function () {
    p1Turn = true;
    counter = 0;

    p1Win = false;
    p2Win = false;
    draw = false;

    status_text.innerText = init_status_text;
    box.innerHTML = init_box_html;

    let sub_boxes = Array.from(document.getElementsByClassName('sub-box'));
    sub_boxes.forEach((element) => {
        element.addEventListener('click', function () {
            if (this.dataset.clicked == "false") {
                if (p1Turn) {
                    this.innerHTML = "x";
                }

                else {
                    this.innerHTML = "o";
                }

                this.dataset.clicked = "true";
                counter++;
                p1Turn = !p1Turn;
            }

            if (counter % 2 == 1) {
                status_text.innerText = "Player 2's Turn";
            }

            else {
                status_text.innerText = "Player 1's Turn";
            }

            check_win();
            // console.log(`Player 1 Win: ${p1Win}. Player 2 Win: ${p2Win}.`);

            if (p1Win) {
                disable_all();
                status_text.innerText = "Congratulations, Player 1 has won!";
            }

            else if (p2Win) {
                disable_all();
                status_text.innerText = "Congratulations, Player 2 has won!";
            }

            else if ((counter == 9) && (!check_win())) {
                disable_all();
                status_text.innerText = "It's a draw!";
            }
        })
    });
})