const Types = require('../types');

/**
 * @file index.js is the root file for this example app
 * @author Vladd Cantor
 * @see {@link https://example.com|Example Official Site}
 */

/**
 * @typedef {Types.Student} Student
 * @typedef {Types.Person} PersonTypes
 */

/**
 * Student Name
 *
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Array of grades
 *
 * @type {Array<number>}
 */
const grades = [86, 84, 92, 94, 87];

/**
 * Todo object
 *
 * @type {Object}
 */
const todo = {
  id: '1',
  text: 'Hello',
};

/**
 * Calculates the tax.
 *
 * @param {number} amount - Total amount
 * @param {number} tax    - Tax Percentage
 *
 * @returns {string} Total with a dollar sign
 */
const calculateTax = (amount, tax) => `$${amount + tax * amount}`;

/**
 * Student interfaced object. See {@link Types.Student}
 *
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  isActive: true,
};

/**
 * This class describes a person and greets.
 * @implements {PersonTypes}
 */
class Person {
  /**
   * @param {{name: string, age: number}} personInfo - Personal Information about the person
   */
  constructor(personInfo) {
    /**
     * @prop {string} name - Person's name
     */
    this.name = personInfo.name;
    /**
     * @prop {number} age  - Person's age
     */
    this.age = personInfo.age;
  }
  /**
   * @prop {Function} greet - Console logs greeting
   *
   * @returns {void}
   */
  greet() {
    console.log(`Hello! my name is ${this.name} and I am ${this.age}`);
  }
  /**
   * Sleep
   * @prop {Function} sleep - Make the person sleep
   * @static
   * 
   * @returns {void}
   */
  static sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

/**
 * See {@link Person}
 * @type {Person}
 */
const person1 = new Person({
  name: 'John Doe',
  age: 24,
});
