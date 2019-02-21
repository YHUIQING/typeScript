var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function test() {
    //定义一个类
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            console.log('hello ' + this.greeting);
            return 'hello ' + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter('yhq');
    greeter.greet();
    //继承
    //被继承者成为基类(超类) 继承者称为派生类（子类） 派生类从基类中继承了他的属性和方法
    //使用extends关键字创建了基类的派生类
    //如果派生类中有构造函数，它 必须调用 super()，它会执行基类的构造函数
    //如果派生类重写基类的方法，可以用super调用基类的那个被重写的方法
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " move " + distance + "m.");
        };
        return Animal;
    }());
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distance) {
            if (distance === void 0) { distance = 2; }
            console.log('Horse 的 move 方法！');
            // super.move(distance);
        };
        Horse.prototype.test = function () {
            console.log('Horse222 的 move 方法！');
            // super.move();  //报错
        };
        return Horse;
    }(Animal));
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Snake 的 move 方法！");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var sam = new Snake("Snake");
    var tom = new Horse("Horse");
    sam.move();
    tom.move(34);
    tom.test();
    //公共(public)，私有(private)与受保／／／／护(protected)的修饰符
    //在typescript中，成员默认都是public
    //当成员被标记成 private时，它就不能在声明它的类的外部访问,也就是说只有在声明这个类的时候才可以访问私有的属性
    var AnimalPri = /** @class */ (function () {
        function AnimalPri(theName) {
            this.name = theName;
        }
        return AnimalPri;
    }());
    // new AnimalPri("Cat").name; // 错误: 'name' 是私有的.
    //判断两个类是否兼容
    //TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
    //带有 private或 protected成员的类型,如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的, 对于 protected成员也使用这个规则。
    var Anima = /** @class */ (function () {
        function Anima(theName) {
            this.name = theName;
        }
        return Anima;
    }());
    var Rhino = /** @class */ (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super.call(this, "Rhino") || this;
        }
        return Rhino;
    }(Anima));
    var Employee = /** @class */ (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    }());
    var animal = new Anima("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    animal = rhino; //兼容   1、结构相同  2、有同一个私有属性  3、都是在Animal类中声明的
    // animal = employee; //不兼容 错误: Anima 与 Employee 不兼容.
    //protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
    //readonly修饰符
    //可以使用readonly关键字将属性设置为只读属性，只读属性必须在声明时或者构造函数中被初始化
    var Octopus = /** @class */ (function () {
        function Octopus(theName) {
            this.number = 8;
            this.name = theName;
        }
        return Octopus;
    }());
    var dad = new Octopus('yang hui qing');
    console.log('=========readonly========');
    console.log('dad.name', dad.name);
    // dad.name = 'yhq'; //错误! name 是只读的.
    console.log('=========readonly========');
    var Octopu = /** @class */ (function () {
        //这种方法创建类的属性：仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员
        function Octopu(name) {
            this.name = name;
            this.numberOfLegs = 8;
        }
        return Octopu;
    }());
    // 存取器
    // TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问
    // 如果只有get(),没有set(),默认是readonly属性
    // 需要指定编译到版本ES5或以上
    // 运行   tsc  test.ts  -t  es5
    var passcode = "secret passcode test";
    var Employe = /** @class */ (function () {
        function Employe() {
        }
        Object.defineProperty(Employe.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employe;
    }());
    var employe = new Employe();
    employe.fullName = "Bob Smith"; //相当于调用了set ，可以在修改属性之前做一些验证
    if (employe.fullName) {
        alert(employe.fullName); //相当于调用了get ， 获取属性，并且弹出
    }
    //静态属性
    //类的实例成员，那些仅当类被实例化的时候才会被初始化的属性
    //静态成员,类的属性，这些属性存在于类本身上面而不是类的实例上，如果要访问就要加上类名.，而不是this.
    var Grid = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    //抽象类
    //抽象类作为其他派生类的基类使用，一般不会被实例化，不同于接口，抽象类可以包含成员的实现细节，abstract用于定义抽象类和抽象方法
    //为什么会有抽象类呢？？？
    var Anim = /** @class */ (function () {
        function Anim() {
        }
        Anim.prototype.move = function () {
            console.log('roaming the earch...');
        };
        return Anim;
    }());
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log('Department name: ' + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, 'Accounting and Auditing') || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log('The Accounting Department meets each Monday at 10am.');
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log('Generating accounting reports...');
        };
        return AccountingDepartment;
    }(Department));
    var department; // 允许创建一个对抽象类型的引用
    // department = new Department(); // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    department.printName();
    department.printMeeting();
    // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
}
