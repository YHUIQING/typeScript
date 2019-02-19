function test() {
    //布尔型
    var isBoolean = false;
    console.log('布尔型：isBoolean = ', isBoolean);
    //数字
    var isNumber = 23;
    console.log('数字类型：isNumber = ', isNumber);
    //字符串
    var isString = 'yhq';
    console.log('字符串类型：isString = ', isString);
    //数组
    var isArrayNum = [1, 2, 3];
    console.log('数组类型：isArrayNum = ', isArrayNum);
    var isArrayStr = ['aa', 'bb', 'cc'];
    console.log('数组类型：isArrayStr = ', isArrayStr);
    var list = [4, 5, 6];
    console.log('Array<number> ：list = ', list);
    //元组
    var isTuple;
    isTuple = ['yanghuiqing', 24];
    console.log('元组类型：isTuple = ', isTuple);
    //枚举
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    ;
    var r = Color.Red;
    var g = Color.Green;
    var b = Color[3];
    console.log('r = ', r);
    console.log('g = ', g);
    console.log('b = ', b);
    //Any
    var isAny = 4;
    console.log('any:', isAny);
    isAny = 'name:yhq';
    console.log('any:', isAny);
    isAny = true;
    console.log('any:', isAny);
    //Void
    //1、如果函数返回类型为空 ，可以定义为void类型
    function warnUser() {
        console.log("This is my warning message");
    }
    var isVoid = undefined;
    isVoid = null; //只可以赋值这两个值 ，并没有多大的意义 ， 你觉得呢？
    //Null 和 undefined
    //默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
    var u = undefined;
    var n = null;
    //Never
    //never类型表示的是那些永不存在的值的类型
    // 返回never的函数必须存在无法达到的终点
    function error(message) {
        throw new Error(message);
    }
    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }
    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop() {
        while (true) {
        }
    }
    //Object
    //类型断言
    //对于电脑来说是any类型 ，但是对于程序员来说 ，我知道这是字符串类型
    //其一是“尖括号”语法
    var someValue = "this is a string";
    var strLength = someValue.length;
    console.log('类型断言:strLength', strLength);
    // //另一个为as语法：
    var someValue1 = "this is a string";
    var strLength1 = someValue1.length;
    var strLength2 = someValue1.length;
    console.log('类型断言:strLength1', strLength1);
    console.log('类型断言:strLength2', strLength2);
}
