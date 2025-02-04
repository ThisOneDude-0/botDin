let courses = [
    "breakfast",
    "lunch",
    "dinner"
];

//menus
breakfast = {
    "eggs": "2.99",
    "waffles": "4.99",
    "pancakes": "3.49",
    "pizza": "5.24",
    "milk-n-cereal": "3.99"
}
lunch = {
    "eggs": "2.50",
    "beef": "5.99",
    "uranium": "154.99",
    "pizza": "5.24",
    "mashed potatoes": "3.99"
}
dinner = {
    "eggs": "2.99",
    "beef": "4.50",
    "uranium": "45.99",
    "pizza": "3.24",
    "mashed potatoes": "2.99"
}
//end of menus

function clear() {
    console.clear()
}

function print(tex) {
    console.log(tex)
}

course = 0
prompt("please press [ctrl]+[shift]+[i] (just press ok when you have)")
print("Welcome to the Bottega Diner!")
print(courses[0]+", "+courses[1]+", "+courses[2])
while (course != "breakfast" && course != "lunch" && course != "dinner")
course = prompt("please choose a course! Make sure spelling is right!")
clear()
print("We're so glad you joined us for "+course+"!")
print("Look at our page for the menu!")

cList = eval(course)

for (let i = 0; i < Object.keys(cList).length; i++) {
    let menItem = document.createElement('h2')
    menItem.textContent = i+1 + ". " + Object.keys(cList)[i] + ", " + cList[Object.keys(cList)[i]]
    document.body.appendChild(menItem);
}

input = 0
order = []
while (input != "done") {
    input = prompt("What item would you like? Please answer 'done' when you're ready to eat and pay.")
    order.push([input])
}
