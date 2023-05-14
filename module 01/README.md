# Module 01 - Http Interceptor

* We created a server based on [`json-server`](https://www.npmjs.com/package/json-server)
* We created an application that uses `HttpClientModule` to fetch data from the web.
* We saw how to create an interceptor: A service that implements the `HttpInterceptor` interface
* We saw that the `intercept` method receives an `HttpRequest` and can do "pre send" logic, and also modify the request
* We saw that the `intercept` method also receives an `HttpHandler` object which is a pointer to the next node in the http pipeline (either the next interceptor or the http client itself)
* We saw that the `handler` returns an observable of `HttpEvent` which the interceptor is also supposed to return.
* We demonstrated how using `rxjs operators` we can create a new observable that is based on the original observable. We saw how to 
     - Plant side effects using the `tap` operator
     - Modify the response using the `map` operator
     - If the map operator is asyncronous, we saw how to flatten the type back using the `switchAll` operator