function createEmployeeRecord(arr) {
  return {
    firstName : arr[0],
    familyName : arr[1],
    title : arr[2],
    payPerHour : arr[3],
    timeInEvents : [],
    timeOutEvents : []
  }
}

function createEmployeeRecords(arrOfArr) {
  let employeeArray = [];
  arrOfArr.forEach((employee)=>{
    employeeArray.push(createEmployeeRecord(employee));
  })
  return employeeArray;
}

function createTimeInEvent(dateStamp) {
  const fullDate = dateStamp.split(" ");
  const date =  fullDate[0];
  const time = fullDate[1];
  const info = {
    type : "TimeIn",
    hour : parseInt(time),
    date : date
  };
  this.timeInEvents.push(info)
  return this
}

function createTimeOutEvent(dateStamp){
  const fullDate = dateStamp.split(" ");
  const date =  fullDate[0];
  const time = fullDate[1];
  const info = {
    type : "TimeOut",
    hour : parseInt(time),
    date : date
  };
  this.timeOutEvents.push(info);
  return this;
}

function hoursWorkedOnDate(dateStamp) {
  let hoursWorked = 0;
  const dayIn =this.timeInEvents.find((date) => {return date.date === dateStamp});
  const dayOut = this.timeOutEvents.find((date) =>{return date.date === dateStamp});
  hoursWorked = (dayOut.hour - dayIn.hour)/100;
  return hoursWorked;
}

function wagesEarnedOnDate(dateStamp) {
  return hoursWorkedOnDate.call(this,dateStamp) * this.payPerHour;
}

// function allWagesFor(record) {
//   let totalWages = 0;
//   record.timeInEvents.forEach((timeIn)=>{
//       totalWages += wagesEarnedOnDate(record,timeIn.date);
//       //console.log("Total Wages: ===================================="+totalWages)
//   })
//   return totalWages;
// }

function findEmployeeByFirstName(arr,firstName) {
  return arr.find((employee)=>{
    return employee.firstName === firstName;
  })
}

function calculatePayroll(arr) {
  let totalWages = 0;
  arr.forEach((employee)=>{
    totalWages += allWagesFor.call(employee);
  })
  return totalWages;
}





/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}