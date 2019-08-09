export class Order {

    constructor(public order_id:number, public quartermaster_id:number, public requester_id:number, public build_id:number, public status:string, public request_details:string){

    }
}
