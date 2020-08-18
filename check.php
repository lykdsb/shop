<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
session_start();
//登录
$conn = @mysqli_connect("localhost:3302","root","");
if (!$conn){
    die("连接数据库失败：");
}
mysqli_select_db($conn,"test1" );
//字符转换，读库
mysqli_query($conn,"set character set 'utf8'");
//写库
mysqli_query($conn,"set names 'utf8'");
$result=mysqli_query($conn,"select * from cart");
while($row = mysqli_fetch_array($result))
{
    $productName=$row['productName'];
    $price=$row['price'];
    $num=$row['num'];
    $time=date("Y-m-d H:i:s");
    mysqli_query($conn,"insert into history values('$productName','$price','$num','$time')");
}

$query=mysqli_query($conn,"delete from cart");
if($query)
{
    echo "付款成功";
}

else{
    echo "付款失败";
}
?>
