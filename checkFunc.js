window.onload=function () {
    let checkBtn=document.getElementById("checkBtn");
    checkBtn.onclick=function()
    {
        $ajax({
            method:"POST",
            url:"http://localhost:8088/check.php",
        })
      window.location.reload();
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

    }
}