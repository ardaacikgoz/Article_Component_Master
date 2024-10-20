const share_items = document.getElementsByClassName("icon");

for (let i = 0; i < share_items.length; i++) {
    share_items[i].onmouseover = function() {
        this.style.backgroundColor = "hsl(214, 17%, 51%)";
        this.querySelector('svg').style.fill = "white";
    };
    share_items[i].onmouseout = function() {
        this.style.backgroundColor = "hsl(210, 46%, 95%)";
    };


}
