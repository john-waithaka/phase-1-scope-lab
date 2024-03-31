// Write your solution in this file!
var customerName = 'bob';

//test 2
function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
        customerName = customerName.toUpperCase();
    }
}

// test 3
// setBestCustomer(): Write a function that when called, declares a variable called bestCustomer
 //in global scope and assigns it to be 'not bob'. (Poor Bob.) Also, poor us, declaring a global variable
 // from inside a function is one of those things we would never want to do normally, but is good for us
  // to explore right now.

  function setBestCustomer() {
 bestCustomer = "not bob";
  }

  //test 4
//   describe('overwriteBestCustomer()', function() {
//     it('overwrites the best customer', function() {
//       overwriteBestCustomer('maybe bob');

//       expect(window.bestCustomer).to.equal('maybe bob');
//     });
//   });

  function overwriteBestCustomer() {
bestCustomer = "maybe bob";
  }

//   test 5
// describe('changeLeastFavoriteCustomer()', function() {
//     it('unsuccessfully tries to reassign the least favorite customer', function() {
//       expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//     });
//   });
// });

const leastFavoriteCustomer = "myself";
function changeLeastFavoriteCustomer() {

leastFavoriteCustomer = "Bob";
}
