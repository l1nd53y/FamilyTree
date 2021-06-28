class FamilyMember {
    constructor(name, parents) {
      this.name = name;
      this.parents = parents;
    }
    
    childOf(){
        return this.name + ' is a child of ' + this.parents.join(' & ') + "." || "unknown";
    }

}
  
  
  let james = new FamilyMember("James", ['Fleamont', 'Euphemia']);
  
  let harry = new FamilyMember("Harry", ['James', 'Lily']);
  
  let albusSeverus = new FamilyMember("Albus Severus", ['Harry', 'Ginny']);
  
  
  console.log(james.childOf());
  console.log(harry.childOf());
  console.log(albusSeverus.childOf());