// 第一次尝试
var hello = "Hello TS";
console.log(hello);
// 规约
// TypeScript 区分大小写   分号是可选的
// 单行注释 ( // ) − 在 // 后面的文字都是注释内容。
// 多行注释 (/* */) − 这种注释可以跨越多行。
// 编写一个类
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.walk = function () {
        console.log("KimZing is walking");
    };
    return Person;
}());
(new Person()).walk();
var Car = /** @class */ (function () {
    // 构造函数 
    function Car(engine) {
        this.engine = engine;
    }
    // 方法 
    Car.prototype.disp = function () {
        console.log("发动机为 :   " + this.engine);
    };
    return Car;
}());
// 基础类型 
// number 
// string 
// boolean 
// 数组类型 []  
// 元组 let x: [string, number];  
// 枚举 enum Color {Red, Green, Blue};  
// void	
// null	
// undefined
// never
// Any 类型 任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型
// 变量声明
// var [变量名] : [类型] = 值;
// 逻辑运算与条件运算都一样，不多解释
// 函数定义
function function_name() {
    // 执行代码
}
function function_name2() {
    // 语句
    return 1;
}
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
// 在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？
// 可选参数
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // 正确
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
var result3 = buildName("Bob", "Adams"); // 正确
// 默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
// 剩余参数
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
//匿名函数
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
// 匿名函数自调用
(function () {
    var x = "Hello!!";
    console.log(x);
})();
// TS中有Map类型
//  static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
//  访问控制修饰符
// TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。
// public（默认） : 公有，可以在任何地方被访问。
// protected : 受保护，可以被其自身以及其子类和父类访问。
// private : 私有，只能被其定义所在的类访问。
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj = new Encapsulate();
console.log(obj.str1); // 可访问 
//  console.log(obj.str2)   // 编译错误， str2 是私有的
