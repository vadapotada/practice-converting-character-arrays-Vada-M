// Tasks
// Task 1: Decode the Following Reversed Messages
// Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
// arrays dynamically. Then log the messages.


// 1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
// gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"

console.log("Message 1:");
let firstMessage = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let splitFirstMessage = firstMessage.split("");
let reversedFirstMessage = splitFirstMessage.reverse();
let joinedFirstMessage = reversedFirstMessage.join("");
console.log(joinedFirstMessage);

// 2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
// gnitirw edoc tuB"

console.log("Message 2:");
let secondMessage = " !ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let splitSecondMessage = secondMessage.split("");
let reversedSecondMessage = splitSecondMessage.reverse();
let joinedSecondMessage = reversedSecondMessage.join("");
console.log(joinedSecondMessage);

// 3. Message 3: "!elpoep rehto morf tnereﬃd on era uoy ,elbuort evah uoy fI
// .lanoisseforp a ekil leef ot evah t'nod uoY"

console.log("Message 3:");
let thirdMessage = " !elpoep rehto morf tnereﬃd on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let splitThirdMessage = thirdMessage.split("");
let reversedThirdMessage = splitThirdMessage.reverse();
let joinedThirdMessage = reversedThirdMessage.join("");
console.log(joinedThirdMessage);

// 4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
// tcefrep eht rof tiaw t'noD .yadot trats tsuJ"

console.log("Message 4:");
let fourthMessage = " .rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
let splitFourthMessage = fourthMessage.split("");
let reversedFourthMessage = splitFourthMessage.reverse();
let joinedFourthMessage = reversedFourthMessage.join("");
console.log(joinedFourthMessage);


console.log("Combined Messages: " + joinedFirstMessage + joinedSecondMessage + joinedThirdMessage + joinedFourthMessage);

// Task 2: Write your own reverse messages
// 1. First, write your own short messages of inspiration (without reversing them).

let quote1 = "Sucking at something is the first step towards being really good at something. "
let quote2 = "To live life, you need problems. If you get everything you want the minute you want it, then what's the point of livin'? -Jake the Dog, Adventure Time "

// 2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
// strings and arrays dynamically so that you have a reverse output.

let splitQuote1 = quote1.split("");
let splitQuote2 = quote2.split("");
console.log(splitQuote1);
console.log(splitQuote2);

let reversedQuote1 = splitQuote1.reverse();
let reversedQuote2 = splitQuote2.reverse();
console.log(reversedQuote1);
console.log(reversedQuote2);

let joinedQuote1 = reversedQuote1.join("");
let joinedQuote2 = reversedQuote2.join("");
console.log(joinedQuote1);
console.log(joinedQuote2);

let combinedQuote = joinedQuote1 + joinedQuote2;
console.log("Reversed Output: " + combinedQuote);
