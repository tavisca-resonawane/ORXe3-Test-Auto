class FullName
{
     firstname:string;
     middlefame:string;
     lastname:string;
    
     myFullName(fname:string='',mname:string='',lname:string=''):string
    {
        this.firstname=fname;
        this.middlefame=mname;
        this.lastname=lname;

        return this.firstname+" "+this.middlefame+" "+this.lastname;
    }
}

var objGetNm= new FullName();
console.log (objGetNm.myFullName('abc','xyz'));
console.log(objGetNm.myFullName('lml','xyz','pqr'));
console.log (objGetNm.myFullName('xyz'));


class AddNCancat{
    a:number;
    b:number;
    abc:string;
    xyz:string;

    addNumbers()
    {
        return this.a+this.b;
    }
    concatStrings()
    {
        return this.abc+this.xyz;
    }
}
    var addnCon=new AddNCancat();
    addnCon.a=2;
    addnCon.b=3;
    addnCon.abc='Hello';
    addnCon.xyz='How are you';
    console.log(addnCon.addNumbers());
    console.log(addnCon.concatStrings());
