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

function draw(x, y) {
    let number = document.createElement("div");
    for (let j = 0; j < y; j++) {
        let ul = document.createElement("ul");
        for (let i = 0; i < x; i++) {
            let li = document.createElement('li');
            let cell = document.createElement('div');
            let ccell = document.createAttribute("class");
            ccell.value = "cell";
            cell.setAttributeNode(ccell);
            if (j === 0) {
                let top = document.createElement('div');
                let ctop = document.createAttribute("class");
                ctop.value = "top";
                top.setAttributeNode(ctop);
                top.innerHTML = i + 1;
                cell.appendChild(top);
            } else if (i === 0) {
                let top = document.createElement('div');
                let ctop = document.createAttribute("class");
                ctop.value = "top";
                top.setAttributeNode(ctop);
                top.innerHTML = j + 1;
                cell.appendChild(top);
            } else {
                let values = document.createAttribute("class");
                values.value = "val";
                li.setAttributeNode(values);
                let front = document.createElement('div');
                let fclass = document.createAttribute("class");
                fclass.value = "front";
                front.setAttributeNode(fclass);
                let back = document.createElement('div');
                let bclass = document.createAttribute("class");
                bclass.value = "back";
                back.setAttributeNode(bclass);
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
    let att = document.createAttribute("class");
    att.value = "table";
    number.setAttributeNode(att);
    document.body.appendChild(number);
}

function change() {
    none();
    if (document.getElementById("X").checked === true)
        xChange();
    else if (document.getElementById("3divide").checked === true)
        div3Change();
    else if (document.getElementById("none").checked === true)
        none();
    else if (document.getElementById("chess").checked === true)
        chessChange();
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
    if(document.getElementsByClassName("table").length !== 0)
        document.getElementsByClassName("table")[0].classList.remove("n-table");
}

function xChange() {
    let myUl = document.getElementsByTagName("ul");
    let myLis = document.getElementsByTagName("li");
    let lenli = myLis.length;
    let len = myUl.length;
    if (len === 2) {
        return;
    }
    let index = Math.min(lenli / len, len);
    for (let i = 1; i < index; i++) {
        let myCell1 = myUl[i].getElementsByClassName("front")[i - 1];
        myCell1.style.backgroundColor = "white";
        let myCell2 = myUl[i].getElementsByClassName("front")[index - i - 1];
        myCell2.style.backgroundColor = "white";
    }
}

function div3Change() {
    let myUl = document.getElementsByTagName("ul");
    let len = myUl.length;
    if (len === 2) {
        return;
    }
    for (let i = 1; i < len; i++) {
        let myCell = myUl[i].getElementsByClassName("front");
        if ((i + 1) % 3 === 0) {
            let myCell1 = myUl[i].getElementsByClassName("front");
            for (let j = 0; j < myCell1.length; j++) {
                myCell1[j].style.backgroundColor = "white";
            }
        } else {
            for (let j = 0; j < myCell.length; j++) {
                if ((j + 2) % 3 === 0) {
                    let myCell1 = myCell[j];
                    myCell1.style.backgroundColor = "white";
                }
            }
        }

    }
}

function chessChange() {
    let chess = document.createAttribute("class");
    chess.value = "chess";
    if(document.getElementsByClassName("table").length !== 0)
        document.getElementsByClassName("table")[0].classList.toggle("n-table");
}