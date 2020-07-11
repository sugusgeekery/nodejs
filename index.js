var censor = ["bad", "had"];
var censorTemp = [];

function add(val) {
    censorTemp.push(val);
}
exports.censor = censor;
exports.add = add;