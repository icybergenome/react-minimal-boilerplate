import {observable, action, computed} from 'mobx'



class fetcheddata {

   @observable fetchingStatus = [{fetchingData:false, data:[], fetchError:''}];

   
   @action setFetchingStatus = ({fetchingData, data, fetchError}) =>{
       this.fetchingStatus = [{
        fetchingData, data, fetchError
       }]

   }
   @computed get getFetchingStatus(){
       return this.fetchingStatus
   }
    


}

const store = new fetcheddata()
export default store

