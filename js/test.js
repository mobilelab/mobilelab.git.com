/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 13-5-12
 * Time: 下午3:09
 * To change this template use File | Settings | File Templates.
 */

var birthday = new Date(prompt('请输入出生年月日(月/日/年)', '6/5/1987'));
birthday.setFullYear(birthday.getFullYear()+80);

function lastSeconds() {
    var today = new Date();
   document.getElementById('time').innerHTML = '您还剩：' + Math.round((birthday.getTime() - today.getTime())/1000) + '秒';
    setTimeout('lastSeconds()', 500);
}



