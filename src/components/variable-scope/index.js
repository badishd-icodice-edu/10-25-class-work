import axios from 'axios'
import { useEffect, useReducer } from 'react'
import { useState } from 'react'

export default function App() {
  /** Global Scope
   * A variable created using any of the variable
   * declaration keywords at the top of the scope.
   * In this case, a variable created at the top
   * of this component. Ex: state or any kind of
   * variable.
   * let class = 2023
   * var isActive = true
   * const width = 30
   */

  /** Function Scope
   * A variable that is declared inside a function.
   * That variable is only usable/accessible within
   * the function. Same for all 3 keywords and both
   * 'function keyword' and arrow functions.
   * function randomFunction() {
   *    const firstName = "Badral"
   * }
   * console.log(firstName) // ERR: firstName is not defined
   */

  /** Block Scope
   * A variabled that is declared inside of curly
   * brackets {}. var keyword makes a difference here.
   * if the variable is declared using var keyword,
   * it can be accessed from outside an {} bracket,
   * whereas the ones with let and const variables CAN NOT
   * be accessed from outside.
   * {
   *    var firstName = "Badral"
   * }
   * console.log(firstName) // "Badral"
   * {
   *    let firstName = "Badral"
   * }
   * console.log(firstName) // ERR: firstName is not defined
   */

  const globalScopeVariable =
    'Can be accessed from anywhere within this component'

  const scopeExample = () => {
    const functionScopeVariable = 'Only accessible inside this function'
    if (true) {
      const blockScopeVariable = 'Only accessible inside this if statement'
      console.log(globalScopeVariable) // global scope can be accessed here (inside { } of if statement)
      console.log(functionScopeVariable) // function scope can be accessed here (inside { } of if statement)
      console.log(blockScopeVariable) // block scope can be accessed here (inside { } of if statement)
    }
    // console.log(blockScopeVariable) --> variable inside if statement cannot be accessed here
  }

  // console.log(functionScopeVariable) --> function scope variable cannot be accessed from here

  return (
    <div>
      <button onClick={() => scopeExample()}>Scope Example Function</button>
    </div>
  )
}
