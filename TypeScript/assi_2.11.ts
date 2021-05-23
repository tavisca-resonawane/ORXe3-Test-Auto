class Employee 
{
    constructor(protected name: string, protected age: number) {     
    }

    private getName(): string {
        return this.name;
    }

    getDetails(): string {
        return "Name is "+ this.getName();
    }
}

class Permanant extends Employee {
    readonly salary: number;
    constructor(name: string, age: number, salary: number) {
        super(name, age);  
        this.salary = salary;    
    }
    getSalary(): number {
        return this.salary;
    }
 
    setSalary(salary) {
        this.salary = salary;
    }
    getFullName(): string {
        return this.name;
    }  
    getDetails(): string {
        return "Name is Permanat employee "+ this.name;
    }
}

let emp1 = new Permanant('ABC', 28, 800);
console.log(emp1.getSalary()); 
console.log(emp1.getFullName()); 
console.log(emp1.getDetails());
//emp1.salary='2000';// can not assign as it is readonly