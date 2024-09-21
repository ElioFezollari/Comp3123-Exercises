var http = require("http");
let employees = require('./Employee')
console.log("Lab 03 -  NodeJs");


//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Welcome to Lab Exercise 03</h1>');
            res.end();
        }

        if (req.url === '/employee') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(employees));
            res.end();
            return;
    
        }

        if (req.url === '/employee/names') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            let firstNames = []
            employees.forEach((employee)=>{firstNames.push(employee.firstName + " " +  employee.lastName)})
            firstNames.sort((personOne,personTwo)=>{
                return personOne.localeCompare(personTwo)
            })
            res.write(JSON.stringify(firstNames));
            res.end();
        }

        if (req.url === '/employee/totalsalary') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const totalSalary = employees.reduce((accumulator, employee) => {
                return accumulator + employee.Salary;
            }, 0);
            res.write(JSON.stringify(totalSalary))
            res.end();
    }

}
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})