// Your code here
class Polygon{
    constructor(array){
        this.array=array
    }
    get countSides(){
        
        return this.array.length
    }
    get perimeter(){
  return this.array.reduce((a,b)=>a+b,0)
    }
}
class Triangle extends Polygon{
   
    get isValid(){// console.log(this.array[0]+this.array[1]>this.array[2])
        if (this.array[0]+this.array[1]>this.array[2]&&this.array[1]+this.array[2]>this.array[0]&&this.array[0]+this.array[2]>this.array[1]){
            return true
        }else return false

    }
}

class Square extends Polygon{
    get isValid(){let i=0;
        let y=i+1
      while (i<=y){
        if (this.array[i]===this.array[y]){
        i++;y++
        return true;}
        else{return false}}}
    get area(){
        return this.array[0]*this.array[1]
    }}
let tri=new Triangle([ 15, 10, 1 ]);
let squ= new Square([2,2,3])

