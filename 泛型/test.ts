function test(){
    //利用泛型可以创建支持多种类型的可冲用的组建
    //定义一个泛型函数
    function identity<T>(arg: T):T{
        return arg;
    }
    //调用泛型函数有两种方式
    //第一种是传入所有参数，包含类型参数
    let output = identity<string>('myTest');
    console.log('output:',output);
    //第二种普遍些，利用了类型推论--编译器会跟传入的参数自动的帮我们确定T的类型
    let output1 = identity('myTest');
    console.log('output1:',output1);
    //注意：如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。

    //使用泛型变量
    // function loggingIdentity<T>(arg: T): T { //会报错，因为不知道 arg 有没有length属性
    //     console.log(arg.length);  // Error: T doesn't have .length
    //     return arg;
    // }
    function loggingIdentity<T>(arg: T[]): T[] { //这样改就好了，因为数组参数一定会有length属性
        console.log(arg.length);
        return arg;
    }
    
}
