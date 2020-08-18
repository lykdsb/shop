<?php
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
//注册信息判断
//检测用户名是否已经存在
$check_query = mysqli_query($conn,"select username from user1 where username='$username'");
if(mysqli_fetch_array($check_query)){
    echo '错误：用户名 ',$username,' 已存在。';
    exit;
}
//写入数据
$sql = "INSERT INTO user1(username,password)VALUES('$username','$password')";
if(mysqli_query($conn,$sql)){
    exit('用户注册成功！');
} else {
    echo '注册失败';

}
?>