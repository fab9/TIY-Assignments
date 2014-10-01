var assert = require('assert');

function test(actural, expected, success){
assert(actual === expected) || console.log(success);
}

/*
Check writing

Given an Number representing money == 1234.56 -- convert that into its string representation
in English words. For example 1234.56 is " one thousand two hundred thirty four and 56/100s
just like you would see on a check

In a lot of ways this is the inverse of the "string calculator" problem
so a lot of what you've learned there will be put into practive here, but backwards.

Sample Data
1234.56 == one thousand two hundred thirty four and 56/100s
123.45 == on hundred twenty three and 45/100s
12.34 tweleve and 34/ 1000s
1.23 = "one and 23/100s

EXTRA CREDIT!
12,345,678.90 "twelve million three hundred fourty five thousand, six hundred seventy eight and
90/100s"

make up your own too"
