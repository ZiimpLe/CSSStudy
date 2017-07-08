/**
 * Created by ziimple on 2017/7/1.
 */
window.onload = function () {
    var btn = document.getElementById("btn");
    var p = document.getElementById("p");
    btn.onclick = function changeInner() {
        var str = document.getElementById("p").innerHTML;
        p.innerHTML = str.search(/w3cschool/i);
    };

    function closeConfirm() {
        confirm("是否要关闭页面？");
    }

    document.getElementsByTagName("body")[0].onunload = closeConfirm();
};
