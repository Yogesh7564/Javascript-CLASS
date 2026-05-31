let person={
    fname:"vishal",
    lname:"kumar",
    age:36,
    place:"delhi",
    detail:function(){
        console.log("Name is "+this.fname+" "+this.lname+" Age is "+this.age+" Place is "+this.place)
    }
}
person.detail()


