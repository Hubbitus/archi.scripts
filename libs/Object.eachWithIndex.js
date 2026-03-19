/**
* Unfortunately we can't just add EObjectProxyCollection.prototype.eachWithIndex, probably because it is Java class wrapped.
* Using Object for that
* @param func - callback function with 3 arguments: eachWithIndex(element, i, length)
**/
Object.prototype.eachWithIndex = function(func){
  let i=1;
  this.each(it => func(this[i-1], i++, this.length));
}
