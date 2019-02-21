function test() {
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 36] = "Left";
        Direction[Direction["Right"] = 37] = "Right";
    })(Direction || (Direction = {}));
    console.log('Direction:', Direction);
    console.log('Direction.Up:', Direction.Up);
    console.log('Direction.Down:', Direction.Down);
    function getSomeValue() {
        return 10;
    }
    var E;
    (function (E) {
        E[E["C"] = 0] = "C";
        E[E["A"] = getSomeValue()] = "A";
        // B , // error! 'A' is not constant-initialized, so 'B' needs an initializer
    })(E || (E = {}));
    console.log('E:', E);
    var Direc;
    (function (Direc) {
        Direc["Up"] = "UP";
        Direc["Down"] = "DOWN";
        Direc["Left"] = "LEFT";
        Direc["Right"] = "RIGHT";
    })(Direc || (Direc = {}));
    console.log('Direc:', Direc);
    var BooleanLikeHeterogeneousEnum;
    (function (BooleanLikeHeterogeneousEnum) {
        BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
        BooleanLikeHeterogeneousEnum["Yes"] = "YES";
    })(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
    console.log('BooleanLikeHeterogeneousEnum:', BooleanLikeHeterogeneousEnum);
    var FileAccess;
    (function (FileAccess) {
        // constant members
        FileAccess[FileAccess["None"] = 0] = "None";
        FileAccess[FileAccess["Read"] = 2] = "Read";
        FileAccess[FileAccess["Write"] = 4] = "Write";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
        // computed member
        FileAccess[FileAccess["G"] = "123".length] = "G";
    })(FileAccess || (FileAccess = {}));
    console.log('FileAccess:', FileAccess);
    var ShapeKind;
    (function (ShapeKind) {
        ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
        ShapeKind[ShapeKind["Square"] = 1] = "Square";
    })(ShapeKind || (ShapeKind = {}));
    var c = {
        kind: ShapeKind.Circle,
        //    ~~~~~~~~~~~~~~~~ Error!
        radius: 100,
    };
    console.log('ShapeKind:', ShapeKind);
    console.log('c:', c);
    var enums = [2 /* A */, 4 /* B */];
    console.log('enums:', enums);
    var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
    console.log('directions', directions);
    var EnumDeclare;
    (function (EnumDeclare) {
        EnumDeclare[EnumDeclare["A"] = 1] = "A";
        EnumDeclare[EnumDeclare["B"] = 2] = "B";
        EnumDeclare[EnumDeclare["C"] = 2] = "C";
    })(EnumDeclare || (EnumDeclare = {}));
    console.log('EnumDeclare:', EnumDeclare);
}
