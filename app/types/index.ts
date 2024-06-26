
export class Props{

    constructor(){
    }

    getProp(prop:any){
      //@ts-ignore
      return this[prop]
    }
    
    addProps(prop:object){
        Object.assign(this,prop)
    }

    addPropsIfExist(prop:object,ifProp:any){
      if(ifProp && ifProp!=''){
        this.addProps(prop)
      }
    }

    addPropsIfExistElse(prop:object,ifProp:any,elseProp:object){
      if(ifProp){
        this.addProps(prop)
      }
      else{
        this.addProps(elseProp)
      }
    }

    addPropsIfAllTrue(prop:object,conditions:boolean[]){
      for(let condition of conditions){
        if(!condition) return
      };
      this.addProps(prop)
    }

    addPropsIfAllTrueElse(prop:object,conditions:boolean[],elseProp:object){
      for(let condition of conditions){
        if(!condition) {
          this.addProps(elseProp)
          return
        }
      }
      this.addProps(prop)
    }

    addPropsIfSomeTrue(prop:object,conditions:boolean[]){
      for(let condition of conditions){
        if(condition) {
          this.addProps(prop)
          return
        }
      }
    }
  }