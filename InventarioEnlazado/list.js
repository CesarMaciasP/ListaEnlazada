export default class List{

    constructor(){
      this.start = null
      this.last = null
      this.length = 0
    }

    insert(item, pos){
      let i= 1
      let current = this.start

      while(i < pos - 1){
        current.next = current
        i++
      }

      item.next = current.next
      current.next = item
    }
    
    add(item){
      if (this.start == null){
        this.start = item
      } else {
        let current = this.start
        while(current.next != null){
          current = current.next
        }
        current.next = item
      }

      this.length += 1
    }

    delete(code){

      let deleted = null

      if(!this.start){
        return null
      }
      if(this.start.code == code){
        deleted = this.start
        this.start = this.start.next
        this.length -= 1
        return deleted
      } else {
        let currentA = this.start
        let currentB = this.start.next

        while(currentB != null){
          if(currentB.code == code){
            currentA.next = currentA.next.next
            deleted = currentB
            deleted.next = null
            this.length -= 1
            return deleted
          }else{
            currentA = currentB
            currentB = currentB.next
          }
        }

        this.length -= 1
        return null
        }

    }  

    findItem(code){
      if(!this.start){
        return null
      } 

      let item = this.start
      
      while(item != null){
      if(item.code == code){
        return item
      }
      item = item.next
      }
      return null
    }

    list(){
      let info = ""
      let current = this.start
      while(current != null){
        info += current.infoHtml() + "\n"
        current = current.next
      }

      return info
    }

    inverseList(){
      let info = ""
      let current = this.start
      while(current != null){
        info = current.infoHtml() + "\n" + info
        current = current.next
      }

      return info
    }


}