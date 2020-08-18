window.onload=function () {

function jump(){
    window.location.href = "http://localhost:8088/register.php";
}
function InputCheck(RegForm) {
    if (RegForm.username.value == "") {
        alert("username couldnt be void!");
        RegForm.username.focus();
        return (false);
    }

    if (RegForm.password.value == "") {
        alert("you must set your password");
        RegForm.password.focus();
        return (false);
    }

    if (RegForm.repass.value != RegForm.password.value) {
        alert("two passwords are not the same");
        RegForm.repass.focus();
        return (false);
    }

    if (RegForm.username.value.length < 3 || RegForm.username.value.length > 15) {
        alert("the length of username is illegal");
        RegForm.username.focus();
        return (false);
    }
    if (RegForm.password.value.length <6) {
        alert("the length of passworde is illegal");
        RegForm.password.focus();
        return (false);
    }
}

function getFormQueryString(frmID) //frmID是表单的ID号，请在表单form中先命名一个ID号
{
    var frmID=document.getElementById(frmID);
    var i,queryString = "",and = "";
    var item;
    var itemValue;
    for( i=0;i<frmID.length;i++ )
    {
        item = frmID[i];
        if ( item.name!='' )
        {

            itemValue = item.value;
            itemValue = escape(itemValue);
            queryString += and + item.name + '=' + itemValue;
            and="&";
        }
    }
    return queryString;
}

    let btn1=document.getElementById("button1");
    btn1.onclick=function()
    {
        $ajax({
            method:"POST",
            url:"http://localhost:8088/addToCart.php",
            data:"productName=HUAWEI MatePad Pro 10.8英寸&price=3999"
        })
    }
    let btn2=document.getElementById("button2");
    btn2.onclick=function()
    {
        $ajax({
            method:"POST",
            url:"http://localhost:8088/addToCart.php",
            data:"productName=HUAWEI WATCH GT 2 运动款&price=1438"
        })
    }
    let btn3=document.getElementById("button3");
    btn3.onclick=function()
    {
        $ajax({
            method:"POST",
            url:"http://localhost:8088/addToCart.php",
            data:"productName=HUAWEI MateBook 13 锐龙版&price=4699"
        })
    }
    let btn4=document.getElementById("button4");
    btn4.onclick=function()
    {   $ajax({
        method:"POST",
        url:"http://localhost:8088/addToCart.php",
        data:"productName=凌霄双核Wi-Fi 6&price=224"
    })
    }
    let btn5=document.getElementById("button5");
    btn5.onclick=function()
    {   $ajax({
        method:"POST",
        url:"http://localhost:8088/addToCart.php",
        data:"productName=华为智慧屏 V65i 65英寸&price=4999"
    })
    }
    let btn6=document.getElementById("button6");
    btn6.onclick=function()
    {   $ajax({
        method:"POST",
        url:"http://localhost:8088/addToCart.php",
        data:"productName=荣耀智能体脂秤2 白色&price=99"
    })
    }
function $ajax(
    {
        method="POST",
        url="http://localhost:8088/login.php",
        data
    }

)
{
    var xhr=null;
    xhr=new XMLHttpRequest();
    xhr.open(method,url,true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(data);
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==4)
        {
            alert(xhr.responseText);
        }
    };
}

}