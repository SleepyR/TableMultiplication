
function div3Change() {
    let myUl = document.getElementsByTagName("ul");
    let len = myUl.length;
    let lenli = document.getElementsByTagName("li").length/len;
    if (len === 2) {
        return;
    }
    for (let i = 1; i < len; i++) {
        let myCell = myUl[i].getElementsByClassName("front");
        if ((i + 1) % 3 === 0) {
            for (let j = 0; j < lenli-1; j++) {
                myCell[j].style.backgroundColor = "white";
            }
        } else {
            for (let j = 1; j <lenli-1; j+=3) {
                myCell[j].style.backgroundColor = "white";
            }
        }

    }
}
