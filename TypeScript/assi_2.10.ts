interface Area
{
    calculateArea():number
}

class Circle implements Area{
    radius:number
    calculateArea(): number {
        return 3.14*this.radius*this.radius;
    }
}

class Rectangle implements Area{
     length:number;
     breath:number;
    calculateArea(): number {
       return this.length*this.breath;
    }
}
class Square implements Area{
    side:number;
    calculateArea():number
    {
        return this.side*this.side;
    }
}

let obj=new Square();
obj.side=2;
console.log (obj.calculateArea());
let objC=new Circle();
objC.radius=2;
console.log (objC.calculateArea());
let objR=new Rectangle();
objR.length=2;
objR.breath=3;
console.log (objR.calculateArea());



