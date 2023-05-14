# Module 02 - Promises

## Consuming promises
* We created a promise and talked about "subscribing" to it using `then`
* We saw that instead of `then` we can use `async await` which is a compiler syntactic sugar
* We saw that `then` returns a `Promise` which is composed of the source promise and a continuation
* We saw that async await does the same thing
* We saw that in moderen JS all functions run at 0 time
* Therefore - `async await` is implemented by compiling a function into 2 parts.

## Promise Producer
* We saw that we can create a promise that we manually decide when to complete, and what the result will be
* We created a promise that completes when the user clicks a button
* To do that, we took advantage of the fact the the `Promise` constructor passes 2 functions to our callback
    * The `resolver` function which marks the promise as completed
    * The `rejecter` function which marks the promise as faulted
* We stored the `resolver` for later use, and then called it when the user clicked the button

## Promise Composition
* We defined an operator as:
    * A function
    * The function can only rely on its input parameters (not globals)
    * The function must not produce side effects (write to log, or file)
    * The function must be deterministic (same inputs always result in the same outputs)
    * The function must not mutate its inputs
    * The function must create a new value from the same domain (string operator - produces a new string, array paremeter produces a new array, and so on)
* We realized that `then` and `catch` are actually operators.
    * The receive one `Promise` input
    * They do not alter it
    * They produce a new `Promise` output
* We categorized operators into 3 groups
    1. Factories: create Promise from nothing
    2. Pipeable: create Promise from a single Promise (and therefore are chainable - pipeable)
    3. Combinators: create Promise from multiple promises
* So - `then` and `catch` are pipeable operators
* The constructor is a factory operator
* We saw 4 more operators:
    * `Promise.resolve` a factory that creates a completed promise
    * `Promise.reject` a factory that creates a faluted promise
    * `Promise.all` a combinator that combines many promises into one promises that returns all of their results
    * `Promise.race` a combinator that combines many promises into a single promise that returns the result of the one single input promise that completes first.

    