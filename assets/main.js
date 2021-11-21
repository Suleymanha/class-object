
class Actions{
    constructor(Num,num1,num2,num3,num4){
        this.Num=Num;
        this.num1=num1;
        this.num2=num2;
        this.num3=num3;
        this.num4=num4;

    }
        
    Multiply = function(num1){
        return this.Num*num1
    }
    
    Add = function(num2){
        return this.Num+num2
    }

    Subtract = function (num3){
        return this.Num-num3

    }
    Divide =function (num4) {
        return this.Num/num4
        
    }
    

}

var result = new Actions(50).Add(6).Divide(30)

console.log(result);























