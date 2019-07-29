function checkNames(){
let name1 = prompt('enter name 1');
let name2 = prompt('enter name 2');
let name3 = prompt('enter name 3');

if ((name1.length==name2.length)&&(name1.length==name3.length)) {
    return "All three names, " + name1 + ", " + name2+ ", and " + name3 + " are the same length.";
}
if ((name1.length==name2.length)&&(name1.length>name3.length)) {
    return name1 + " and " + name2 + " are the longest names.";
}
if ((name1.length==name3.length)&&(name1.length>name2.length)){
    return name1 + " and " + name3 + " are the longest names.";
}
if ((name2.length==name3.length)&&(name2.length>name1.length)){
    return name2 + " and " + name3 + " are the longest names.";
}
if ((name1.length>name2.length)&&(name1.length>name3.length)){
    return name1 + " is the longest name.";
}
if ((name2.length>name1.length)&&(name2.length>name3.length)){
    return name2 + " is the longest name.";
}
if ((name3.length>name2.length)&&(name3.length>name1.length)){
    return name3 + " is the longest name.";
}
}
alert(checkNames());