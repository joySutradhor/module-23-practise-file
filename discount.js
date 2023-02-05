
//  Protom ---> 100 ticktes price ==100 taka ;
//  second ----> 100-200 ticketes price  == 90 taka ;
//  third ---->200+ tickets price == 70 taka;

function tickets (numberOftickets) {
    let first100 = 100;
    let second100 = 90;
    let remaining = 70 ;
    if (numberOftickets<=100){
        return numberOftickets * first100;
    }
    else if (numberOftickets>100 && numberOftickets<=200) {
        let firstTicketsPrice = 100 * first100 ;
        let secondTicketsCost = (numberOftickets-100) * second100;
        let costOfSecond100 =  firstTicketsPrice + secondTicketsCost;
        return costOfSecond100 ;
        
    }
    else if (numberOftickets > 200) {
        let first100Cost = 100 * first100 ;
        let second100Cost = 100 * second100;
        let thirdAnyCost = (numberOftickets-200) * remaining ;
        return first100Cost + second100Cost + thirdAnyCost ;
    }
    else {
        return "Enter your tickets number"
    }
}

let totalTickets = tickets(260) ;
console.log(totalTickets , "Is total tickets Cost");