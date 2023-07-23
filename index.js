class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1, string.length)

  }
  static sanitize(string){
    return string.replace(/[^a-z0-9\.,_' -]/gi,"");
  }
  static titleize(string){
    const arr = string.split(" ").map(word => {
      if (['the','a','an','but','of','and','for','at','by','from'].includes(word)){
        return word
      }
      else {
        return this.capitalize(word)
      }
     })
     return this.capitalize(arr.join(' '))
  }
} 