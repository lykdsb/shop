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
mysqli_query($conn,"set character set 'gbk'");
//写库
mysqli_query($conn,"set names 'gbk'");
$username = $_POST['username'];
$password = $_POST['password'];
//包含数据库连接文件
//检测用户名及密码是否正确
$check_query = mysqli_query($conn,"select * from user1 where username='$username' and password='$password'");
if(mysqli_fetch_array($check_query)){
    //登录成功
    $_SESSION['username'] = $username;
    echo $username,'您已登录';
    exit;
} else {
    exit('用户名或密码错误');
}


?>