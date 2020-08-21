var Student = /** @class */ (function () {
    function Student(id, name) {
        this.sid = id;
        this.sname = name;
    }
    Student.prototype.Display = function () {
        console.log("StudentId is :" + this.sid +
            " And Student Name is" + this.sname);
    };
    return Student;
}());
var obj = new Student(101, "Aarav");
obj.Display();
