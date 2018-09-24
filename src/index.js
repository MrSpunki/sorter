class Sorter {

  constructor() {
    // your implementation
    this.sorter = [];
    this.count = 0;
    this.standart = 1;
  }

  add(element) {
    // your implementation
    this.sorter[this.count] = (element);
    this.count++;
  }

  at(index) {
    // your implementation
    return this.sorter[index];
  }

  get length() {
    // your implementation
    return this.sorter.length;
  }

  toArray() {
    // your implementation
    return this.sorter;
  }

  sort(indices) {
    // your implementation

    var temp;
        indices.sort(function(a, b) {
            return a - b;
        });
        if (this.standart) {
            for (var j = 0; j < indices.length; j++) {
                for (var i = 0; i < indices.length - 1; i++) {
                    if (this.sorter[indices[i]] > this.sorter[indices[i + 1]]) {
                        temp = this.sorter[indices[i]];
                        this.sorter[indices[i]] = this.sorter[indices[i + 1]];
                        this.sorter[indices[i + 1]] = temp;
                    };
                };
            };
        }
        else {

        	var temp = [];

            for (var i =0; i < indices.length; i++) {
            	temp[temp.length]=this.sorter[indices[i]];
            }

            temp.sort(this.compare);

            for (var i =0; i < indices.length; i++) {
            	this.sorter[indices[i]] = temp[i];
            }
        }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compare = compareFunction;
    this.standart = 0;
  }
}

module.exports = Sorter;
