export class Order {

    // {
    //     "orderId": 0,
    //     "qmId": 0,
    //     "rId": 0,
    //     "aId": 0,
    //     "build": "parts go in here",
    //     "status": "status",
    //     "requestDetails": "details of the request"
        
    // }

    constructor(public orderId:number, public qmId:number, public rId:number,public aId:number, public build:string, public status:string, public requestDetails:string){

    }
}
