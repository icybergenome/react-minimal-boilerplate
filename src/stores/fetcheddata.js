import {observable, action, computed} from 'mobx'



class fetcheddata {
   @observable data = [];

   @action setData = (newData) =>{
       this.data = newData
   }

   @computed get getData(){
       return this.data
   }
}

const store = new fetcheddata()
export default store

