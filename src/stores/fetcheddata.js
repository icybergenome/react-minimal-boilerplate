import {observable, action, computed} from 'mobx'



class fetcheddata {
    //anything that is observable then tis is the data u want to keep track of
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

