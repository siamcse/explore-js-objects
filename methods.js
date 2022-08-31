const student = {
    name:"kodom ali",
    age: 25,
    money: 5000,
    study: 'math',
    subjects: ['calculus','data structure','algorithm'],
    exam: function(){
        return this.name+" is participating in an exam";
    },
    improveExam: function(subject){
        console.log(this.exam());
        return `${this.name} is participating in a ${subject} exam.`;
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
//no parameter
const output = student.exam();
// console.log(output);

//one parameter
const improve = student.improveExam('Math');
// console.log(improve);

//two parameter
const treat = student.treatDey(900,100);
console.log(treat);
//object er inside value change hoi function call er maddhome
const treat2 = student.treatDey(500,50);
console.log(treat2);