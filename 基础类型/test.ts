function test(){
 //布尔型
 let isBoolean: boolean = false;
 console.log('布尔型：isBoolean = ',isBoolean);

 //数字
 let isNumber: number = 23;
 console.log('数字类型：isNumber = ',isNumber);

 //字符串
 let isString: string = 'yhq';
 console.log('字符串类型：isString = ',isString);
 //数组
 let isArrayNum: number[] = [1,2,3];
 console.log('数组类型：isArrayNum = ',isArrayNum);
 let isArrayStr: string[] = ['aa','bb','cc'];
 console.log('数组类型：isArrayStr = ',isArrayStr);
 let list: Array<number> = [4,5,6];
 console.log('Array<number> ：list = ',list);

 //元组
let isTuple: [string,number];
isTuple = ['yanghuiqing',24];
console.log('元组类型：isTuple = ',isTuple)

 //枚举
enum Color {Red, Green = 2, Blue = 3};
let r:  Color = Color.Red;
let g:  Color = Color.Green;
let b:  string = Color[3];
console.log('r = ',r);
console.log('g = ',g);
console.log('b = ',b);

 //Any
let isAny: any = 4;
console.log('any:',isAny);
isAny = 'name:yhq';
console.log('any:',isAny);
isAny = true;
console.log('any:',isAny);

 //Void
 //1、如果函数返回类型为空 ，可以定义为void类型
 function warnUser(): void {
    console.log("This is my warning message");
}
let isVoid: void = undefined;
isVoid = null;  //只可以赋值这两个值 ，并没有多大的意义 ， 你觉得呢？

 //Null 和 undefined
 //默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
 let u: undefined = undefined;
 let n: null = null;

 //Never
 //never类型表示的是那些永不存在的值的类型
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message);
    }

    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }

    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {
        }
    }

 //Object

 //类型断言
 //对于电脑来说是any类型 ，但是对于程序员来说 ，我知道这是字符串类型
 //其一是“尖括号”语法
 let someValue: any = "this is a string";
 let strLength: number = (<string>someValue).length;
 console.log('类型断言:strLength', strLength);
 // //另一个为as语法：
 let someValue1: any = "this is a string";
 let strLength1: number = (someValue1 as string).length;
 let strLength2: number = someValue1.length;
 console.log('类型断言:strLength1', strLength1);
 console.log('类型断言:strLength2', strLength2);


}
