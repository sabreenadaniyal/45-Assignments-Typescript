let Countries:string[]=["Switzerland","France","America","Pakistan","Canada"];
//original.
console.log("original",Countries);
//alphabetical order.
console.log("alphabetical order",[...Countries].sort());
//original order after sorting
console.log("original order after sorting",Countries);
//reverse alphabetically order.
console.log("reverse alphabetically order",[...Countries].sort().reverse());
//original order after reverse sorting.
console.log("original order after reverse sorting",Countries);
//reversed order.
console.log("reversed order",Countries.reverse());
//back to original.
console.log("back to original",Countries.reverse());
//sorted in alphabetical order.
console.log("sorted in alphabetical order",Countries.sort());
//sorted in reverse alphabetically order.
console.log("sorted in reverse alphabetically order",[...Countries].sort().reverse());
