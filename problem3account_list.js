/*Account list
Let's build upon a previous account object exercise. A bank account is still defined by:
A name property 
A balance property, initialy set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description 
Write a program that creates 3 accounts;
- one belonging to Sean
- another to Brad 
-and the third to George
These accounts are stored in in a array
Next, the program credits 1000 to each account and shows its description.

Expected results:
owner:Sean,balance: 1000
owner:Brad,balance: 1000
owner: George, balance: 1000*/

class Account{
  constructor(name,balance){
    this.name = name
    this.balance = balance
    
  }
  credit(credit){
    this.balance+= credit
  }

  descibe(){
    return`owner:${this.name},balance:${this.balance}`
  }
}

const accountList = [new Account("Sean",0),new Account("Brad",0),new Account("Georges",0)]

let credit = 1000

accountList.forEach(item => {
  item.credit(credit)
  console.log(item.descibe());
})


