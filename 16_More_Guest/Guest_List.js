"use strict";
let Guest_List = ['Sir Kamran Khan Tessori', 'Sir Zia Khan', 'Sir Daniyal Nagori'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Sir. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'Sir Kamran Khan Tessori';
let new_Guest = 'Sir Aalam';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Sir. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Sir. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we are inviteing 3 more guests.');
Guest_List.unshift('Hira Khan');
Guest_List.splice(2, 0, ' Sir Zeeshan');
Guest_List.push('Sir Awais');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Sir. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
