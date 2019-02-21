function test(){
    // 枚举
    // 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举

    //数字枚举
    enum Direction{
        Up,
        Down,
        Left = 36,
        Right
    }
    console.log('Direction:',Direction);
    console.log('Direction.Up:',Direction.Up);
    console.log('Direction.Down:',Direction.Down);

    function getSomeValue():number{
        return 10;
    }
    enum E {
        C,
        A = getSomeValue(),
        // B , // error! 'A' is not constant-initialized, so 'B' needs an initializer
    }
    console.log('E:',E);
    //字符串枚举
    enum Direc {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
    }
    console.log('Direc:',Direc);
    //异构枚举
    enum BooleanLikeHeterogeneousEnum {
        No = 0,
        Yes = "YES",
    }
    console.log('BooleanLikeHeterogeneousEnum:',BooleanLikeHeterogeneousEnum);
    //计算的和常量成员
    enum FileAccess {
        // constant members
        None,
        Read    = 1 << 1,
        Write   = 1 << 2,
        ReadWrite  = Read | Write,
        // computed member
        G = "123".length
    }
    console.log('FileAccess:',FileAccess);

    //联合枚举与枚举成员的类型
    enum ShapeKind {
        Circle,
        Square,
    }

    interface Circle {
        kind: ShapeKind.Circle;
        radius: number;
    }

    interface Square {
        kind: ShapeKind.Square;
        sideLength: number;
    }

    let c: Circle = {
        kind: ShapeKind.Circle,
        //    ~~~~~~~~~~~~~~~~ Error!
        radius: 100,
    }
    console.log('ShapeKind:',ShapeKind);
    console.log('c:',c);

    //const枚举
    const enum Enum {
        A = 2,
        B = A * 2

    }
    let enums = [Enum.A,Enum.B];
    console.log('enums:',enums)
    const enum Directions {
        Up,
        Down,
        Left,
        Right
    }
    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
    console.log('directions',directions);

    //外部枚举
    declare enum EnumDeclare { //Modifiers cannot appear here.  为什么报这个错
        A = 1,
        B,
        C = 2
    }
    console.log('EnumDeclare:',EnumDeclare)
}
