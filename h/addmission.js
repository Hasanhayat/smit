
class form {
    name = "";
    subject = "";
    phone = 0;
    qualification = "";
    age = 0;
    submit() {
        alert(`your addmission for ${this.subject} group is submitted`);
        console.log(`your addmission for ${this.subject} group is submitted`);
    }
    cancel() {
        alert(`your addmission for ${this.subject} group is canceled`);
        console.log(`your addmission for ${this.subject} group is canceled`);
    }
}
let student1 = new form;
student1.name = "hassan";
student1.subject = "science";
student1.phone = 923395001230;
student1.age = 17;
student1.cancel();

