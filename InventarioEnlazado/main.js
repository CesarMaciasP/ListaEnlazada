import Item from "./item.js"
import List from "./list.js"

class App {

    constructor(){

        this.inventory=new List()

        this.btnAdd=document.getElementById('btnAdd')
        this.btnAdd.addEventListener('click',this.add)

        this.btnSearch=document.getElementById('btnSearch')
        this.btnSearch.addEventListener('click', this.search)

        this.btnDelete=document.getElementById('btnDelete')
        this.btnDelete.addEventListener('click',this.delete)

        this.btnList=document.getElementById('btnList')
        this.btnList.addEventListener('click', this.list)

        this.btnInverseList=document.getElementById('btnInverseList')
        this.btnInverseList.addEventListener('click',this.inverseList)

        this.btnInsert=document.getElementById('btnInsert')
        this.btnInsert.addEventListener('click',this.insert)

        this.detalles = document.getElementById('detalles')
    }

  cleanDetails = () => {
    this.detalles.innerHTML = ""
  }
    
  add = () => {

    this.cleanDetails()

    if(this.inventory.length == 19){
      document.getElementById('thisdetalles').innerHTML += `
            <p>Imposible agregar el articulo: el límite de articulos es de 20</p>`

            return 
    }

    let code=document.getElementById('txtCode').value
    let name=document.getElementById('txtName').value
    let quantity=document.getElementById('txtQuantity').value
    let cost=document.getElementById('txtCost').value

    if(code != false && name != false && quantity != false && cost != false){
    let item=new Item(code, name, quantity, cost)
    this.inventory.add(item)
    document.getElementById('detalles').innerHTML += `
            <p>Se agrego el aritculo ${item.name} correctamente</p>
            `
    } else {
      document.getElementById('detalles').innerHTML += `
            <p>ERROR: Se deben llenar todos los campos</p>
            `
    }

  }
  
  search = () => {

    this.cleanDetails()

    let code=document.getElementById('txtCode').value
    let search=this.inventory.findItem(code)
    
    if (search==null)
      this.detalles.innerHTML += '<p> No se encontro</p>'
    else
      this.detalles.innerHTML += '<p>Se encontró</p>' + search.infoHtml()
  }

  delete = () => {

    this.cleanDetails()

    let code=document.getElementById('txtCode').value
    let search=this.inventory.findItem(code);
    
    this.inventory.delete(code)
    if (search==null)
      this.detalles.innerHTML += '<p>No se encontró</p>'
    else
      this.detalles.innerHTML += '<p>Se eliminó:</p>' + search.infoHtml()
  }

  list = () => {
    console.log(this.inventory)
    this.cleanDetails()
    
   this.detalles.innerHTML += this.inventory.list()
    
  }  
 

  inverseList = () => {
    console.log(this.inventory)
    this.cleanDetails()
    
    this.detalles.innerHTML += this.inventory.inverseList()
    

  }

  insert = () => {
      
    this.cleanDetails()

    let pos=document.getElementById('txtPos').value

    console.log(pos)
    
    if(pos == ""){
        this.detalles.innerHTML += '<p>Rellene el campo "Posición"</p>'  
        return 
    
    }else if(pos > this.inventory.length || this.inventory.length <= 0){

        this.detalles.innerHTML += '<p>Esa posición no es válida o no existe</p>'  
        return 

    }else{

        let code=document.getElementById('txtCode').value
        let name=document.getElementById('txtName').value
        let quantity=document.getElementById('txtQuantity').value
        let cost=document.getElementById('txtCost').value

        let item=new Item(code, name, quantity, cost)

        this.inventory.insert(item,pos) 

        this.detalles.innerHTML += '<p>Se añadió el articulo</p>' 
    }
  }
}

let app = new App()