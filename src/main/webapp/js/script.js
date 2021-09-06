const intro = document.querySelector(".intro-title");
let num = 0;

//intro arr
function introRandomArr() {
    const stringArr = [
        "CHICKEN 4ZO",
        "강4님 치킨 4조요",
        "God Hee won",
        "Bit President Yewon",
        "Just Front King",
        "Bit Idol Soon hyung",
        "God's Left Arm Jisu",
        "God's Right Arm Jihyun"
    ];

    if (num===stringArr.length) {
        num=0;
    }
    const selectString = stringArr[num++];
    const selectStringToArr = selectString.split("");
    return selectStringToArr;

}

// resetTyping
function resetTyping() {
    intro.textContent = "";
    print(introRandomArr());
}

// typing text
function print(randomArr) {
    // console.log(randomArr);
    if (randomArr.length > 0) {
        intro.textContent = intro.textContent + randomArr.shift();
        setTimeout(() => print(randomArr), 80);
    } else {
        setTimeout(() => resetTyping(), 2000);
    }
}

print(introRandomArr());

//blink cursor

const blinkObject = {
    list: [intro],
    addActiveClass: function () {
        this.list.forEach((item) => item.classList.toggle("active"));
    },
};

function blink() {
    blinkObject.addActiveClass();
}

setInterval(blink, 500);
