/*
Zadání

Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, 
a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
*/

const salary = (wage, hours, days) => {
     return wage * hours * days
}

const taxed = (salary, taxRate) => {
    let tax = salary * taxRate;
    let cistaMzda = salary - tax;
    return [tax, cistaMzda]
}


let monthlySalary = salary(250, 8, 20)
let taxRate = 0.15

let employee = taxed(monthlySalary, taxRate)

console.log(monthlySalary)
console.log(employee[1])

