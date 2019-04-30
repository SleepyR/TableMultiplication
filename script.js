var tID, move;
var direction = 0;

$(document).ready(function () {
    $("*").click(function (event) {
        let myImg = $("#image");
        myImg.css({left: 0});
        myImg.css({top: 0});
        myImg.css("display", "block");
        if (myImg.position().left === 0) {
            myImg.addClass("fly");
            myImg.css({left: event.pageX - 80});
            setTimeout(myImg.css({top: event.pageY - 80}),2000);
        } else {
                if (event.pageX < myImg.position().left){
                    myImg.removeClass("fly");
                    myImg.addClass("left");
                }
                else if (event.pageX > myImg.position().left){
                    myImg.removeClass("fly");
                    myImg.addClass("right");
                }
            myImg.css({left: event.pageX - 80, top: event.pageY - 80});
        }
    });
});

let fly = 1;
function animateScript(positionx) {
    tID = setInterval(() => {
            document.getElementById("image").style.backgroundPosition = `-${positionx}px -${direction * 180}px`;
            if (positionx < 540 && fly===1) {
                positionx = positionx + 180;
            } else if(positionx>0){
                fly = 0;
                positionx = positionx - 180;
            }
            else fly =1;
        }
        , 100);
}


function validateForm() {
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    if (x > 75 || y > 75) {
        alert("Input a number between 0 and 75.");
        return false;
    } else if (Number.isInteger(x * 1) && Number.isInteger(y * 1) && x > 0 && y > 0) {
        if (document.getElementsByClassName("table").length !== 0) {
            myTable = document.getElementsByClassName("table")[0];
            myTable.parentNode.removeChild(myTable);
        }
        draw(x, y);
        change();
        return true;
    } else {
        alert("Number must be filled out.");
        return false;
    }

}

function createEl(str, cls) {
    if (cls) {
        let cl = document.createAttribute("class");
        cl.value = cls;
        let el = document.createElement(str);
        el.setAttributeNode(cl);
        return el;
    } else {
        return document.createElement(str);
    }
}

function draw(x, y) {
    let number = createEl("div", "table");
    for (let j = 0; j < y; j++) {
        let li;
        let ul = createEl("ul");
        for (let i = 0; i < x; i++) {
            let cell = createEl("div", "cell");
            if (j === 0 || i === 0) {
                li = createEl('li');
                let top = createEl('div', "top");
                top.innerHTML = i + j + 1;
                cell.appendChild(top);
            } else {
                li = createEl('li', "val");
                let front = createEl('div', "front");
                let back = createEl('div', "back");
                front.innerHTML = (i + 1) * (j + 1);
                back.innerHTML = `${parseInt(i + 1)} X ${parseInt(j + 1)}`
                cell.appendChild(front);
                cell.appendChild(back);
            }
            li.appendChild(cell);
            ul.appendChild(li);
        }
        number.appendChild(ul);
    }
    document.body.appendChild(number);
}

function change() {
    none();
    switch (true) {
        case document.getElementById("X").checked:
            xChange();
            break;
        case document.getElementById("3divide").checked:
            div3Change();
            break;
        case document.getElementById("chess").checked:
            chessChange();
            break;
    }
}


function none() {
    let myUl = document.getElementsByTagName("ul");
    let myLis = document.getElementsByTagName("li");
    let len = myUl.length;
    let lenli = myLis.length / len;
    for (let i = 1; i < len; i++) {
        let myCell = myUl[i].getElementsByClassName("front");
        for (let j = 0; j < lenli - 1; j++) {
            myCell[j].style.backgroundColor = "gold";
        }
    }
    if (document.getElementsByClassName("table").length !== 0)
        document.getElementsByClassName("table")[0].classList.remove("n-table");
}


function bgcolor(str, obj) {
    obj.style.backgroundColor = "white";
}


function xChange() {
    let myUl = document.getElementsByTagName("ul");
    let lenli = document.getElementsByTagName("li").length;
    let len = myUl.length;
    if (len === 2) {
        return;
    }
    let index = Math.min(lenli / len, len);
    for (let i = 1; i < index; i++) {
        let myCell1 = myUl[i].getElementsByClassName("front")[i - 1];
        bgcolor("white", myCell1);
        let myCell2 = myUl[i].getElementsByClassName("front")[index - i - 1];
        bgcolor("white", myCell2);
    }
}

function div3Change() {
    let myUl = document.getElementsByTagName("ul");
    let len = myUl.length;
    let lenli = document.getElementsByTagName("li").length / len;
    if (len === 2) {
        return;
    }
    for (let i = 1; i < len; i++) {
        let myCell = myUl[i].getElementsByClassName("front");
        if ((i + 1) % 3 === 0) {
            for (let j = 0; j < lenli - 1; j++) {
                bgcolor("white", myCell[j]);
            }
        } else {
            for (let j = 1; j < lenli - 1; j += 3) {
                bgcolor("white", myCell[j]);
            }
        }

    }
}

function chessChange() {
    let chess = document.createAttribute("class");
    chess.value = "chess";
    if (document.getElementsByClassName("table").length !== 0)
        document.getElementsByClassName("table")[0].classList.toggle("n-table");
}

