class Private {
  #privateData = 0 // only accessible to inner methods
  
  getData(){
    return this.#privateData
  }  
  
  setData(data){
    this.#privateData += data
  }
}

const privt = new Private()

privt.getData()
privt.setData(20)
privt.getData()