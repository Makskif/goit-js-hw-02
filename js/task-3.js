function checkForSpam(message) {

    let mes = message.toLowerCase();
    console.log(mes);
    console.log(mes.includes('sale') || mes.includes('spam'));
}
 
checkForSpam("Latest technology news"); // false
checkForSpam("JavaScript weekly newsletter"); // false
checkForSpam("Get best sale offers now!"); // true
checkForSpam("Amazing SalE, only tonight!"); // true
checkForSpam("Trust me, this is not a spam message"); // true
checkForSpam("Get rid of sPaM emails. Our book in on sale!"); // true
checkForSpam("[SPAM] How to earn fast money?"); // true
