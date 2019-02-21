function test(){

    //定义一个类
    class Greeter{
        greeting: string;
        constructor(message: string){
            this.greeting = message;
        }
        greet(){
            console.log('hello '+ this.greeting);
            return 'hello '+ this.greeting;
        }
    }
    let greeter = new Greeter('yhq');
    greeter.greet();

     //继承
     //被继承者成为基类(超类) 继承者称为派生类（子类） 派生类从基类中继承了他的属性和方法
     //使用extends关键字创建了基类的派生类
     //如果派生类中有构造函数，它 必须调用 super()，它会执行基类的构造函数
     //如果派生类重写基类的方法，可以用super调用基类的那个被重写的方法
     class Animal{
         name: string;
         constructor(theName: string){
             this.name = theName
         }
         move(distance: number = 0){
             console.log(`${this.name} move ${distance}m.`)
         }
     }

     class Horse extends Animal{
         constructor(name: string){
             super(name);
         }
         move(distance = 2){
             console.log('Horse 的 move 方法！');
             // super.move(distance);
         }
         test(){
             console.log('Horse222 的 move 方法！');
             // super.move();  //报错
         }
     }

     class Snake extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
            console.log("Snake 的 move 方法！");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Snake");
    let tom = new Horse("Horse");

    sam.move();
    tom.move(34);
    tom.test();

    //公共(public)，私有(private)与受保／／／／护(protected)的修饰符
    //在typescript中，成员默认都是public
    //当成员被标记成 private时，它就不能在声明它的类的外部访问,也就是说只有在声明这个类的时候才可以访问私有的属性
    class AnimalPri {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    // new AnimalPri("Cat").name; // 错误: 'name' 是私有的.

    //判断两个类是否兼容
    //TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
    //带有 private或 protected成员的类型,如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的, 对于 protected成员也使用这个规则。

    class Anima {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Anima {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Anima("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;    //兼容   1、结构相同  2、有同一个私有属性  3、都是在Animal类中声明的
    // animal = employee; //不兼容 错误: Anima 与 Employee 不兼容.

    //protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问

    //readonly修饰符
    //可以使用readonly关键字将属性设置为只读属性，只读属性必须在声明时或者构造函数中被初始化
    class Octopus{
        readonly name: string;
        readonly number: number = 8;
        constructor(theName:string){
            this.name = theName;
        }
    }
    let dad = new Octopus('yang hui qing');
    console.log('=========readonly========');
    console.log('dad.name',dad.name);
    // dad.name = 'yhq'; //错误! name 是只读的.
    console.log('=========readonly========');

    class Octopu {
        readonly numberOfLegs: number = 8;
        //这种方法创建类的属性：仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员
        constructor(readonly name: string) {}
    }


    // 存取器
    // TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问
    // 如果只有get(),没有set(),默认是readonly属性
    // 需要指定编译到版本ES5或以上
    // 运行   tsc  test.ts  -t  es5

    let passcode = "secret passcode test";
    class Employe {
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employe = new Employe();
    employe.fullName = "Bob Smith";  //相当于调用了set ，可以在修改属性之前做一些验证
    if (employe.fullName) {
        alert(employe.fullName); //相当于调用了get ， 获取属性，并且弹出
    }

    //静态属性
    //类的实例成员，那些仅当类被实例化的时候才会被初始化的属性
    //静态成员,类的属性，这些属性存在于类本身上面而不是类的实例上，如果要访问就要加上类名.，而不是this.
    class Grid {
    static origin = {x: 0, y: 0};
        calculateDistanceFromOrigin(point: {x: number; y: number;}) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor (public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

    //抽象类
    //抽象类作为其他派生类的基类使用，一般不会被实例化，不同于接口，抽象类可以包含成员的实现细节，abstract用于定义抽象类和抽象方法
    //为什么会有抽象类呢？？？
    abstract class Anim { //抽象类
        abstract makeSound(): void; //抽象方法 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
        move(): void {
            console.log('roaming the earch...');
        }
    }

    //例子：
    abstract class Department {
        constructor(public name: string) {}
        printName(): void {
            console.log('Department name: ' + this.name);
        }
        abstract printMeeting(): void; // 必须在派生类中实现
    }

    class AccountingDepartment extends Department {
        constructor() {
            super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
        }
        printMeeting(): void {
            console.log('The Accounting Department meets each Monday at 10am.');
        }
        generateReports(): void {
            console.log('Generating accounting reports...');
        }
    }
    let department: Department; // 允许创建一个对抽象类型的引用
    // department = new Department(); // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    department.printName();
    department.printMeeting();
    // department.generateReports(); // 错误: 方法在声明的抽象类中不存在




}
