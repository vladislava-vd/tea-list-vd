class TeaList {
    constructor() {
      this.teas = [];
    }
  
    addTea(tea) {
      this.teas.push(tea);
    }
  
    removeTea(tea) {
      const index = this.teas.indexOf(tea);
      if (index !== -1) {
        this.teas.splice(index, 1);
      }
    }
  
    getTeas() {
      return this.teas;
    }
  
    filterTeasByType(type) {
      return this.teas.filter(tea => tea.type === type);
    }
  
    sortTeasByName() {
      this.teas.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    sortTeasByRating() {
      this.teas.sort((a, b) => b.rating - a.rating);
    }
  }
  
  // Example usage:
  const teaList = new TeaList();
  
  // Adding teas
  teaList.addTea({ name: 'Green Tea', type: 'Green', rating: 4 });
  teaList.addTea({ name: 'Black Tea', type: 'Black', rating: 5 });
  teaList.addTea({ name: 'Oolong Tea', type: 'Oolong', rating: 3 });
  
  console.log(teaList.getTeas()); // Output: [{name: "Green Tea", type: "Green", rating: 4}, {name: "Black Tea", type: "Black", rating: 5}, {name: "Oolong Tea", type: "Oolong", rating: 3}]
  
  // Removing a tea
  teaList.removeTea({ name: 'Oolong Tea', type: 'Oolong', rating: 3 });
  console.log(teaList.getTeas()); // Output: [{name: "Green Tea", type: "Green", rating: 4}, {name: "Black Tea", type: "Black", rating: 5}]
  
  // Filtering teas by type
  console.log(teaList.filterTeasByType('Green')); // Output: [{name: "Green Tea", type: "Green", rating: 4}]
  
  // Sorting teas by name
  teaList.sortTeasByName();
  console.log(teaList.getTeas()); // Output: [{name: "Black Tea", type: "Black", rating: 5}, {name: "Green Tea", type: "Green", rating: 4}]
  
  // Sorting teas by rating
  teaList.sortTeasByRating();
  console.log(teaList.getTeas()); // Output: [{name: "Black Tea", type: "Black", rating: 5}, {name: "Green Tea", type: "Green", rating: 4}]
  