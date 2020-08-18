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
$productName = $_POST['productName'];
$price = $_POST['price'];
echo $productName;
$query1=mysqli_query($conn,"select * from cart where productName='$productName'");
$query2=mysqli_query($conn,"insert into cart values('$productName','$price',0)");
if($query1)
{
mysqli_query($conn,"update cart set num=num+1 where productName='$productName'");
}
else{
    if($query2)
        echo "添加成功";
    else
        echo "添加失败";
}
?>