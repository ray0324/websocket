class List {
  this.list = [];
  add(item){
    this.list.push(item);
  }
  remove(item){
    const index = this.list.indexOf(item);
    this.list.splice(index,1);
  }
}

module.exports = List;