var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Countries = ["Switzerland", "France", "America", "Pakistan", "Canada"];
//original.
console.log("original", Countries);
//alphabetical order.
console.log("alphabetical order", __spreadArray([], Countries, true).sort());
//original order after sorting
console.log("original order after sorting", Countries);
//reverse alphabetically order.
console.log("reverse alphabetically order", __spreadArray([], Countries, true).sort().reverse());
//original order after reverse sorting.
console.log("original order after reverse sorting", Countries);
//reversed order.
console.log("reversed order", Countries.reverse());
//back to original.
console.log("back to original", Countries.reverse());
//sorted in alphabetical order.
console.log("sorted in alphabetical order", Countries.sort());
//sorted in reverse alphabetically order.
console.log("sorted in reverse alphabetically order", __spreadArray([], Countries, true).sort().reverse());
