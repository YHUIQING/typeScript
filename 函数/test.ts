function test(){
    console.log('函数');
    //函数的定义
    function add (x: number,y: number): number{
        return x + y;
    }
    let myAdd = function(x: number,y: number): number{
        return x + y;
    };
    //完整的函数类型
    let addComplete: (x: number,y: number) => number =
        function(x: number, y: number):number{return x + y; };

    //可选参数和默认参数
    //传递给一个函数的参数必须与函数期望的参数一致
    function buildName(firstName: string, lastNmae: string){
        return firstName + ' '+ lastNmae;
    }
    // let result1 = buildName('Bob'); // error, too few parameters
    // let result1 = buildName('yang','hui','qing'); // error, too many parameters
    let result1 = buildName('yang','huiqing'); // error, too few parameters
    console.log('result1:',result1);
    //在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能
    //可选参数必须跟在必须参数后面。 如果我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。
    function buildName1(firstName: string,lastNmae?:string){
        if(lastNmae){
            return firstName + ' ' +lastNmae;
        }else{
            return firstName;
        }
    }
    let res1 = buildName1('yang');
    console.log('res1:',res1);
    let res2 = buildName1('yang','huiqing');
    console.log('res2:',res2);
    // let res3 = buildName1('yang','hui','qing'); //Expected 1-2 arguments, but got 3.
    // console.log('res3:',res3);

    //在typescript中，我们也可以为参数提供一个默认值，当用户没有传或者为undefined的时候，参数值为我们设置的默认值，叫做默认初始化的参数
    function buildName2(firstName:string,lastNmae = 'huiqing'){
        return firstName + " " + lastNmae;
    }

    let resu1 = buildName2('yang');
    let resu2 = buildName2('yang','daye');
    // let resu3 = buildName2('yang','hui','qing');//Expected 1-2 arguments, but got 3.
    console.log('resu1:',resu1);
    console.log('resu2:',resu2);
    // console.log('resu3:',resu3);

    //如果默认参数在必须参数前面，那么调用的时候，默认参数需要传undefined
    function buildName3(first = 'yang',last: string){
        return first + ' ' +last;
    }
    buildName3(undefined,'huiqing');

    //剩余参数
    //必要参数、默认参数和可选参数 都是针对的某一个参数，但是如果想操作多个参数呢？
    //在条ypescript中，你可以把所有参数收集到一个变量里，是不是很神奇呢？
    function buildName4(firstName: string, ...restOfName: string[]){
        return firstName + '' + restOfName.join(' ');
    }
    let myName = buildName4('Y','a','n','g','H','u','i','Q','i','n','g');
    console.log('myName:',myName);

    //可怕的this

    let test1 = {
        x:3,
        y:6,
        testFun: function(){
            return function(){
                return this.x + this.y;
            }
        }
    }

    let obj1 = test1.testFun();
    console.log('obj:',obj1());//返回的数据为Nan ，因为 createCardPicker返回的函数里的this被设置成了window而不是deck对象。 因为我们只是独立的调用了 cardPicker()。 顶级的非方法式调用会将 this视为window。 （注意：在严格模式下， this为undefined而不是window）。

    //为了解决这个问题，我们可以在函数被返回时就绑好正确的this ，可以用Es6的尖头函数

    let test = {
        x:3,
        y:6,
        testFun: function(){
            return ()=>{ //箭头函数
                return this.x + this.y;
            }
        }
    }
    let obj = test.testFun();
    console.log('obj:',obj()); //可以返回正确的数据了

    //this还没有结束。。。。

    //重载
    //为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用
    //为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。
    //注意，function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
    function pickCard(x:{a: string,b: number}):number;
    function pickCard(x:number):{a: string,b: number};
    function pickCard(x):any{
        if(typeof x == 'object'){
            return 4;
        }else if(typeof x == 'number'){
            return {a:'yhq',b:22};
        }
    }

    let pick1 = pickCard({a:'yhq',b:22});
    let pick2 = pickCard(22);
    console.log('pick1',pick1);
    console.log('pick2',pick2)
}
