let person={
    fname:"vishal",
    lname:"kumar",
    age:20,
    place:"delhi",
    detail:function(){
        console.log(this.fname,this.lname,this.age,this.place)
    }
}
person.detail()