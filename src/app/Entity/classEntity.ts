export class ClassEntity{
        id: number ; 
        userId: number = 4;
        name: string;
        description: string;
        startdate: string;
      constructor(id: number ,
        userId: number ,
        name: string,
        description: string,
        startdate: string){
                this.description=description;
                this.id=id;
                this.name=name;
                this.startdate=startdate;
        }

}

