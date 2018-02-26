"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = require("./src/Account");
var winston = require("winston");
var parseArgs = require("minimist");
var argv = parseArgs(process.argv.slice(2));
winston.level = 'info';
var account = new Account_1.Account("XXXXXXXXXX", "***********") //账号信息
    .createOrder(["2018-02-26", "2018-02-27"] //发车日期
, "2018-02-25" //返程日期
, ["徐州", "上海"] //出发,经过站,到达站
, ["G129", "G1817", "G1227", "G1821", "G135", "G1825", "G137", "G1865", "G1251", "G1923", "G7295", "G43", "G141", "G1213", "G215", "G9471", "G145", "G225", "G1203", "G1969", "G1951", "G21", "G1935"] //车次
, ["张三"] //乘车人姓名 ["张三", "李四"]
, ["二等座"] // 座位等级
)
    .createOrder(["2018-02-26"] //发车日期
, "2018-02-25" //返程日期
, ["徐州", "宿州", "上海"] //出发到达站
, ["G1804", "G370", "G1808", "G1914", "G1926", "G1972", "G1954"] //车次
, ["张三"] //乘车人姓名 ["张三", "李四"]
, ["二等座", "一等座"]);
if (process.argv.length === 2) {
    account.submit();
}
else {
    account[argv._[0]].call(account, argv._.splice(1), argv);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseUNBQXNDO0FBQ3RDLGlDQUFvQztBQUNwQyxvQ0FBdUM7QUFDdkMsSUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFOUMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFFdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQyxNQUFNO0tBQzFELFdBQVcsQ0FBQyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQyxNQUFNO0VBQ2xDLFlBQVksQ0FBQyxNQUFNO0VBQ25CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFlBQVk7RUFDekIsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSTtFQUN6TSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQjtFQUMzQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Q0FDakI7S0FDWCxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNO0VBQ3BCLFlBQVksQ0FBQyxNQUFNO0VBQ25CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPO0VBQzFCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSTtFQUNuRSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQjtFQUMzQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUNmO0FBRWhCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFBQSxJQUFJLENBQUMsQ0FBQztJQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0FjY291bnR9IGZyb20gJy4vc3JjL0FjY291bnQnO1xuaW1wb3J0IHdpbnN0b24gPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5pbXBvcnQgcGFyc2VBcmdzID0gcmVxdWlyZSgnbWluaW1pc3QnKTtcbmNvbnN0IGFyZ3YgPSBwYXJzZUFyZ3MocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxud2luc3Rvbi5sZXZlbCA9ICdpbmZvJztcblxudmFyIGFjY291bnQgPSBuZXcgQWNjb3VudChcIlhYWFhYWFhYWFhcIiwgXCIqKioqKioqKioqKlwiKSAvL+i0puWPt+S/oeaBr1xuICAuY3JlYXRlT3JkZXIoW1wiMjAxOC0wMi0yNlwiLCBcIjIwMTgtMDItMjdcIl0gLy/lj5Hovabml6XmnJ9cbiAgICAgICAgICAgICAgICxcIjIwMTgtMDItMjVcIiAvL+i/lOeoi+aXpeacn1xuICAgICAgICAgICAgICAgLFtcIuW+kOW3nlwiLCBcIuS4iua1t1wiXSAvL+WHuuWPkSznu4/ov4fnq5ks5Yiw6L6+56uZXG4gICAgICAgICAgICAgICAsW1wiRzEyOVwiLCBcIkcxODE3XCIsIFwiRzEyMjdcIiwgXCJHMTgyMVwiLCBcIkcxMzVcIiwgXCJHMTgyNVwiLCBcIkcxMzdcIiwgXCJHMTg2NVwiLCBcIkcxMjUxXCIsIFwiRzE5MjNcIiwgXCJHNzI5NVwiLCBcIkc0M1wiLCBcIkcxNDFcIiwgXCJHMTIxM1wiLCBcIkcyMTVcIiwgXCJHOTQ3MVwiLCBcIkcxNDVcIiwgXCJHMjI1XCIsIFwiRzEyMDNcIiwgXCJHMTk2OVwiLCBcIkcxOTUxXCIsIFwiRzIxXCIsIFwiRzE5MzVcIl0gLy/ovabmrKFcbiAgICAgICAgICAgICAgICxbXCLlvKDkuIlcIl0gLy/kuZjovabkurrlp5PlkI0gW1wi5byg5LiJXCIsIFwi5p2O5ZubXCJdXG4gICAgICAgICAgICAgICAsW1wi5LqM562J5bqnXCJdIC8vIOW6p+S9jeetiee6p1xuICAgICAgICAgICAgIClcbiAgLmNyZWF0ZU9yZGVyKFtcIjIwMTgtMDItMjZcIl0gLy/lj5Hovabml6XmnJ9cbiAgICAgICAgICAgICAgICxcIjIwMTgtMDItMjVcIiAvL+i/lOeoi+aXpeacn1xuICAgICAgICAgICAgICAgLFtcIuW+kOW3nlwiLCBcIuWuv+W3nlwiLCBcIuS4iua1t1wiXSAvL+WHuuWPkeWIsOi+vuermVxuICAgICAgICAgICAgICAgLFtcIkcxODA0XCIgLFwiRzM3MFwiICxcIkcxODA4XCIgLFwiRzE5MTRcIiAsXCJHMTkyNlwiICxcIkcxOTcyXCIgLFwiRzE5NTRcIl0gLy/ovabmrKFcbiAgICAgICAgICAgICAgICxbXCLlvKDkuIlcIl0gLy/kuZjovabkurrlp5PlkI0gW1wi5byg5LiJXCIsIFwi5p2O5ZubXCJdXG4gICAgICAgICAgICAgICAsW1wi5LqM562J5bqnXCIsIFwi5LiA562J5bqnXCJdKVxuICAgICAgICAgICAgICAgO1xuXG5pZihwcm9jZXNzLmFyZ3YubGVuZ3RoID09PSAyKSB7XG4gIGFjY291bnQuc3VibWl0KCk7XG59ZWxzZSB7XG4gIGFjY291bnRbYXJndi5fWzBdXS5jYWxsKGFjY291bnQsIGFyZ3YuXy5zcGxpY2UoMSksIGFyZ3YpO1xufVxuIl19
