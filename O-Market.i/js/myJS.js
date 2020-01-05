// JavaScript Document
let dialog;
let dialogHeader;
let dialogMask;
// 處理拖曳
// 當使用這按住對話框，對話框跟著滑鼠移動
let differX;
let differY;

function init() {
    dialog = document.querySelector("#dialog"); // 先取得標籤，存放在變數中
    dialogHeader = document.querySelector("#dialog-header");
    dialogMask = document.querySelector("#dialog-mask");
    dialogHeader.addEventListener("mousedown", drag);
    dialogHeader.addEventListener("mouseup", drop);
}

function drag(e) {
    // 計算、紀錄滑鼠座標和對話框左上角的距離
    differX = e.clientX - dialog.offsetLeft;
    differY = e.clientY - dialog.offsetTop;
    // 在整份網頁文件 (document) 上做滑鼠移動事件處理，持續追蹤滑鼠位置
    document.addEventListener("mousemove", move);
}

function move(e) {
    //console.log(e.clientX,e.clientY);
    e.preventDefault(); // 阻止瀏覽器預設的事件處理發生
    dialog.style.left = (e.clientX - differX) + "px";
    dialog.style.top = (e.clientY - differY) + "px";
}

function drop() {
    document.removeEventListener("mousemove", move);
}

// 處理對話框開關
function openDialog(content) {
    let dialogContent = document.querySelector("#dialog-content");
    dialogContent.innerHTML = content;
    // 顯示對話框
    dialog.style.display = "block";
    dialogMask.style.display = "block";
}

function closeDialog() {
    dialog.style.display = "none";
    dialogMask.style.display = "none";
}


/////// 營養師組合 START ///////

var shoppingcarm = [];

function carm() {
    var ma, mb, mc, md, me;
    ma = document.getElementById("num1").value;
    mb = document.getElementById("num2").value;
    mc = document.getElementById("num3").value;
    md = document.getElementById("num4").value;
    me = document.getElementById("num5").value;
    var totalm = (ma * 1830) + (mb * 600) + (mc * 300) + (md * 300) + (me * 300);
    var valm = parseInt(ma * 1 )+ parseInt(mb * 1) + parseInt(mc * 1 )+ parseInt(md * 1) + parseInt(me * 1);
    shoppingcarm.push(valm, totalm);
    sessionStorage.setItem("shoppingcarm", JSON.stringify(shoppingcarm));
    window.location.href = "購物車.html";
}

function calm() {
    var ma, mb, mc, md, me;
    ma = document.getElementById("num1").value;
    mb = document.getElementById("num2").value;
    mc = document.getElementById("num3").value;
    md = document.getElementById("num4").value;
    me = document.getElementById("num5").value;
    var totalm = (ma * 1830) + (mb * 600) + (mc * 300) + (md * 300) + (me * 300);
    var valm = parseInt(ma * 1 )+ parseInt(mb * 1) + parseInt(mc * 1 )+ parseInt(md * 1) + parseInt(me * 1);
    document.getElementById("lable-g").innerHTML = valm;
    document.getElementById("lable-dollars").innerHTML = totalm;
}

/////// 營養師組合 END ///////


/////// 生活 START ///////

var shoppingcarl = [];

function carl() {
    var la, lb;
    la = document.getElementById("itml1").value;
    lb = document.getElementById("itml2").value;
    var totall = (la * 95) + (lb * 115);
    var vall = la * 1 + lb * 1;
    shoppingcarl.push(vall, totall);
    sessionStorage.setItem("shoppingcarl", JSON.stringify(shoppingcarl));
    window.location.href = "購物車.html";
}

function call() {
    var la, lb;
    la = document.getElementById("itml1").value;
    lb = document.getElementById("itml2").value;
    var totall = (la * 95) + (lb * 115);
    var vall = la * 1 + lb * 1;
    document.getElementById("lable-g").innerHTML = vall;
    document.getElementById("lable-dollars").innerHTML = totall;
}

/////// 生活 END ///////

/////// 冷凍 START ///////

var shoppingcarc = [];

function calc() {
    var ca, ca, cc, cd;
    ca = document.getElementById("itmc1").value;
    cb = document.getElementById("itmc2").value;
    cc = document.getElementById("itmc3").value;
    cd = document.getElementById("itmc4").value;
    var ctotal = (ca * 161) + (cb * 58) + (cc * 45) + (cd * 95);
    var cval = parseInt(ca) + parseInt(cb) + parseInt(cc) + parseInt(cd);
    document.getElementById("lable-dollars").innerHTML = ctotal;
    document.getElementById("lable-g").innerHTML = cval;
}

function ccar() {
    var ca, ca, cc, cd;
    ca = document.getElementById("itmc1").value;
    cb = document.getElementById("itmc2").value;
    cc = document.getElementById("itmc3").value;
    cd = document.getElementById("itmc4").value;
    var ctotal = (ca * 161) + (cb * 58) + (cc * 45) + (cd * 95);
    var cval = parseInt(ca) + parseInt(cb) + parseInt(cc) + parseInt(cd);
    shoppingcarc.push(cval, ctotal);
    sessionStorage.setItem("shoppingcarc", JSON.stringify(shoppingcarc));
    window.location.href = "購物車.html";
}

/////// 冷凍 END ///////


/////// 水果 START ///////

var shoppingcarf = [];

function calf() {
    var fa, fb, fc, fd, fe, ff, fg;
    fa = document.getElementById("itemf1").value;
    fb = document.getElementById("itemf2").value;
    fc = document.getElementById("itemf3").value;
    fd = document.getElementById("itemf4").value;
    fe = document.getElementById("itemf5").value;
    ff = document.getElementById("itemf6").value;
    fg = document.getElementById("itemf7").value;
    var totalf = fa * 38 + fb * 25 + fc * 20 + fd * 100 + fe * 147 + ff * 23 + fg * 65;
    var varf = fa * 1 + fb * 1 + fc * 1 + fd * 1 + fe * 1 + ff * 1 + fg * 1;
    document.getElementById("lable-dollars").innerHTML = totalf;
    document.getElementById("lable-g").innerHTML = varf;
}

function carf() {
    var fa, fb, fc, fd, fe, ff, fg;
    fa = document.getElementById("itemf1").value;
    fb = document.getElementById("itemf2").value;
    fc = document.getElementById("itemf3").value;
    fd = document.getElementById("itemf4").value;
    fe = document.getElementById("itemf5").value;
    ff = document.getElementById("itemf6").value;
    fg = document.getElementById("itemf7").value;
    var totalf = fa * 38 + fb * 25 + fc * 20 + fd * 100 + fe * 147 + ff * 23 + fg * 65;
    var varf = fa * 1 + fb * 1 + fc * 1 + fd * 1 + fe * 1 + ff * 1 + fg * 1;
    shoppingcarf.push(varf, totalf);
    sessionStorage.setItem("shoppingcarf", JSON.stringify(shoppingcarf));
    window.location.href = "購物車.html";
}

/////// 水果 END ///////


/////// 肉類 START ///////

shoppingcarmm = [];

function valmm() {
    var mma, mmb, mmc, mmd, mme, mmf, mmg;
    mma = document.getElementById("itmmm1").value;
    mmb = document.getElementById("itmmm2").value;
    mmc = document.getElementById("itmmm3").value;
    mmd = document.getElementById("itmmm4").value;
    mme = document.getElementById("itmmm5").value;
    mmf = document.getElementById("itmmm6").value;
    mmg = document.getElementById("itmmm7").value;
    var totalmm = mma * 61 + mmb * 30 + mmc * 28 + mmd * 6 + mme * 50 + mmf * 220 + mmg * 20;
    var varmm = mma * 1 + mmb * 1 + mmc * 1 + mmd * 1 + mme * 1 + mmf * 1 + mmg * 1;
    document.getElementById("lable-dollars").innerHTML = totalmm;
    document.getElementById("lable-g").innerHTML = varmm;
}

function carmm() {
    var mma, mmb, mmc, mmd, mme, mmf, mmg;
    mma = document.getElementById("itmmm1").value;
    mmb = document.getElementById("itmmm2").value;
    mmc = document.getElementById("itmmm3").value;
    mmd = document.getElementById("itmmm4").value;
    mme = document.getElementById("itmmm5").value;
    mmf = document.getElementById("itmmm6").value;
    mmg = document.getElementById("itmmm7").value;
    var totalmm = mma * 61 + mmb * 30 + mmc * 28 + mmd * 6 + mme * 50 + mmf * 220 + mmg * 20;
    var varmm = mma * 1 + mmb * 1 + mmc * 1 + mmd * 1 + mme * 1 + mmf * 1 + mmg * 1;
    shoppingcarmm.push(varmm, totalmm);
    sessionStorage.setItem("shoppingcarmm", JSON.stringify(shoppingcarmm));
    window.location.href = "購物車.html";
}

/////// 肉類 END ///////


/////// 蔬菜 START ///////

var shoppingcarv = [];

function vcar() {
    var vtg, vtt;
    vtg = document.getElementById("lable-g");
    vtt = document.getElementById("lable-dollars");
    var va, vb, vc, vd, ve, vf, vg, vh, vi, vj, vk, vl, vm, vn, vo, vp, vq, vr, vs, vt;
    va = document.getElementById("v1").value;
    vb = document.getElementById("v2").value;
    vc = document.getElementById("v3").value;
    vd = document.getElementById("v4").value;
    ve = document.getElementById("v5").value;
    vf = document.getElementById("v6").value;
    vg = document.getElementById("v7").value;
    vh = document.getElementById("v8").value;
    vi = document.getElementById("v9").value;
    vj = document.getElementById("v10").value;
    vk = document.getElementById("v11").value;
    vl = document.getElementById("v12").value;
    vm = document.getElementById("v13").value;
    vn = document.getElementById("v14").value;
    vo = document.getElementById("v15").value;
    vp = document.getElementById("v16").value;
    vq = document.getElementById("v17").value;
    vr = document.getElementById("v18").value;
    vs = document.getElementById("v19").value;
    vt = document.getElementById("v20").value;
    var vgg = va * 1 + vb * 1 + vc * 1 + vd * 1 + ve * 1 + vf * 1 + vg * 1 + vh * 1 + vi * 1 + vj * 1 + vk * 1 + vl * 1 + vm * 1 + vn * 1 + vo * 1 + vp * 1 + vq * 1 + vr * 1 + vs * 1 + vt * 1;
    var vtotal;
    vtotal = (va * 4) + (vb * 7) + (vc * 3) + (vd * 5) + (ve * 6) + (vf * 3) + (vg * 3) + (vh * 6) + (vi * 5) + (vj * 2) + (vk * 20) + (vl * 7) + (vm * 5) + (vn * 6) + (vo * 4) + (vp * 2) + (vq * 4) + (vr * 8) + (vs * 5) + (vt * 12);

    shoppingcarv.push(vgg, vtotal);
    sessionStorage.setItem("shoppingcarv", JSON.stringify(shoppingcarv));
    window.location.href = "購物車.html";
}

function calv() {
    var va, vb, vc, vd, ve, vf, vg, vh, vi, vj, vk, vl, vm, vn, vo, vp, vq, vr, vs, vt;
    va = document.getElementById("v1").value;
    vb = document.getElementById("v2").value;
    vc = document.getElementById("v3").value;
    vd = document.getElementById("v4").value;
    ve = document.getElementById("v5").value;
    vf = document.getElementById("v6").value;
    vg = document.getElementById("v7").value;
    vh = document.getElementById("v8").value;
    vi = document.getElementById("v9").value;
    vj = document.getElementById("v10").value;
    vk = document.getElementById("v11").value;
    vl = document.getElementById("v12").value;
    vm = document.getElementById("v13").value;
    vn = document.getElementById("v14").value;
    vo = document.getElementById("v15").value;
    vp = document.getElementById("v16").value;
    vq = document.getElementById("v17").value;
    vr = document.getElementById("v18").value;
    vs = document.getElementById("v19").value;
    vt = document.getElementById("v20").value;
    var vgg = va * 1 + vb * 1 + vc * 1 + vd * 1 + ve * 1 + vf * 1 + vg * 1 + vh * 1 + vi * 1 + vj * 1 + vk * 1 + vl * 1 + vm * 1 + vn * 1 + vo * 1 + vp * 1 + vq * 1 + vr * 1 + vs * 1 + vt * 1;
    var vtotal;
    vtotal = (va * 4) + (vb * 7) + (vc * 3) + (vd * 5) + (ve * 6) + (vf * 3) + (vg * 3) + (vh * 6) + (vi * 5) + (vj * 2) + (vk * 20) + (vl * 7) + (vm * 5) + (vn * 6) + (vo * 4) + (vp * 2) + (vq * 4) + (vr * 8) + (vs * 5) + (vt * 12);
    document.getElementById("lable-dollars").innerHTML = vtotal;
    document.getElementById("lable-g").innerHTML = vgg;
}

/////// 蔬菜 END ///////


/////// 購物車 START ///////

function btn() {
    var a;
    a = document.getElementById("tot").value;
    var txt;
    if (confirm("是否結帳?")) {
        txt = "金額為" + a + ",謝謝光臨!!";
    } else {
        txt = "You pressed Cancel!";
    }
    alert(txt);
}

function start() {
    var carnamev = [];
    carnamev = JSON.parse(sessionStorage.getItem("shoppingcarv"));
    //alert(carnamev);
    var carnamem = [];
    carnamem = JSON.parse(sessionStorage.getItem("shoppingcarm"));
    //alert(carnamem);
    var carnamec = [];
    carnamec = JSON.parse(sessionStorage.getItem("shoppingcarc"));
    //alert(carnamec);
    var carnamel = [];
    carnamel = JSON.parse(sessionStorage.getItem("shoppingcarl"));
    //alert(carnamel);
    var carnamef = [];
    carnamef = JSON.parse(sessionStorage.getItem("shoppingcarf"));
    //alert(carnamef);
    var carnamemm = [];
    carnamemm = JSON.parse(sessionStorage.getItem("shoppingcarmm"));

    if (carnamev != null) {
        document.getElementById("mon1").value = carnamev.pop();
        document.getElementById("itm1").value = carnamev.pop();
    }

    if (carnamem != null) {
        document.getElementById("mon2").value = carnamem.pop();
        document.getElementById("itm2").value = carnamem.pop();
    }

    if (carnamec != null) {
        document.getElementById("mon3").value = carnamec.pop();
        document.getElementById("itm3").value = carnamec.pop();
    }

    if (carnamel != null) {
        document.getElementById("mon4").value = carnamel.pop();
        document.getElementById("itm4").value = carnamel.pop();
    }

    if (carnamef != null) {
        document.getElementById("mon5").value = carnamef.pop();
        document.getElementById("itm5").value = carnamef.pop();
    }

    if (carnamemm != null) {
        document.getElementById("mon6").value = carnamemm.pop();
        document.getElementById("itm6").value = carnamemm.pop();
    }

    var a, b, c, d, e, f, g, h, i, j, k, l;
    a = document.getElementById("itm1").value;
    b = document.getElementById("itm2").value;
    c = document.getElementById("itm3").value;
    d = document.getElementById("itm4").value;
    e = document.getElementById("itm5").value;
    l = document.getElementById("itm6").value;

    f = document.getElementById("mon1").value;
    g = document.getElementById("mon2").value;
    h = document.getElementById("mon3").value;
    i = document.getElementById("mon4").value;
    j = document.getElementById("mon5").value;
    k = document.getElementById("mon6").value;

    //var tt = [(a * f) + (b * g) + (c * h) + (d * i) + (e * j) + (k * l)] * 0.88;
	var tt = ( f + g +  h +  i + j + k ) * 0.8
	//var tt = [parseInt( f )+parseInt( g )+ parseInt( h ) + parseInt( i ) + parseInt( j )+ parseInt(k)] * 0.8
	//var tt = parseInt( f + g +  h +  i + j + k ) * 0.8
    document.getElementById("tot").value = parseInt(tt);

}
// 優惠倒數
var SetMinute = 86400;

function Check_Time() {
    SetMinute -= 1;
    var Check_i = document.getElementById("Check_i");

    var Cal_Hour = Math.floor(SetMinute / 3600);
    var Cal_Minute = Math.floor(Math.floor(SetMinute % 3600) / 60);
    var Cal_Second = SetMinute % 60;
    var yy;
    var uu;
    Check_i.innerHTML = Cal_Hour + "小時" + Cal_Minute + "分" + Cal_Second + "秒";
    if (SetMinute <= 0) {
        yy = document.getElementById("tot").value;
        uu = yy * 1.25
        document.getElementById("tot").innerHTML = uu;
        /*document.getElementById("itm1").value="";
        document.getElementById("itm2").value="";
        document.getElementById("itm3").value="";
        document.getElementById("itm4").value="";
        document.getElementById("itm5").value="";*/
    }
}

function getSecs() {
    var mm = window.setInterval("Check_Time()", 1000);
}

/////// 購物車 END ///////


/////// enter START ///////

function validateCode(n) {
    //驗證碼可能包含的字元
    var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var ret = ""; //用於儲存生成的驗證碼
    //利用迴圈,隨機產生生成驗證碼的每一個字元
    for (var i = 0; i < n; i++) {
        var index = Math.floor(Math.random() * 62); //隨機產生一個0~62之間的數字
        ret += s.charAt(index); //將隨機產生的數字當作字串的位置下標,在字串s中取出該字元，並加入到ret中
    }
    return ret; //返回產生的驗證碼
}

/* 顯示隨機數的函式 */
function show() {
    document.getElementById("msg").innerHTML = validateCode(4); //在id為msg的物件顯示驗證碼
}

function login() {
    var a, b, d, e, f, g;
    f = document.getElementById("uid").value;
    g = document.getElementById("upwd").value;
    a = document.getElementById("msg").value;
    b = document.getElementById("che").value;
    d = localStorage.getItem("idd");
    e = localStorage.getItem("pwd1");
    /*alert("剛創建ID"+d);
    alert("剛創建密碼"+e);*/
    alert("登入成功!!");
    location.href = "index.html";
}

/* 顯示隨機數的函式 */

/////// enter END ///////


/////// foundpwd START ///////

function ok() {
    var a;
    var b, c, d, e;
    a = localStorage.getItem("eml");
    b = localStorage.getItem("idd");
    c = localStorage.getItem("pwd1");
    d = document.getElementById("iddd").value;
    e = document.getElementById("em").value;
    alert(a + b + c)
    if (b == d && a == e) {
        alert("您的密碼為:" + c)
    } else alert("輸入帳號或電子郵件不正確!");
}

/////// foundpwd END ///////


/////// new START ///////

function ck() {
    var a, b, c, d;
    a = document.getElementById("idd").value;
    b = document.getElementById("pwd1").value;
    c = document.getElementById("pwd2").value;
    d = document.getElementById("eml").value;
    localStorage.setItem("idd", document.getElementById("idd").value);
    localStorage.setItem("eml", document.getElementById("eml").value);
    localStorage.setItem("pwd1", document.getElementById("pwd1").value);
    if (b == c && a != "" && b != "" && c != "") {
        alert("已成功創立會員，請再次登入");
        window.location.href = "enter.html";
    } else {
        alert("二次密碼輸入不一樣");
    }
}

/////// new END ///////