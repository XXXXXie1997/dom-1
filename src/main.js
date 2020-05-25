const div = dom.find("#list>.chlid")[1];
console.log(div);

console.log("--获取list中第二个类为chlid的标签");

dom.style(second, "color", "red");

console.log("--将id为second的标签color改为red");

const divList = dom.find(".chlid");
dom.each(divList, (n) => console.log(n));

console.log("--遍历所有属于chlid类的标签");
