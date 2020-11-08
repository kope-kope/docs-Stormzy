# Introduction
Figure out how to integrate StormGarden's APIs into your application
 

# Basics
The Stormgarden API allows you (has a Stormgarden partner) to programmatically onboard investors with a top broker enabling them to buy and sell securities listed on the Nigerian Stock Exchange through your application.

> # Before you Start
[Register as a partner](http://console.staging.storm.trium.ng/settings/api). You will be provided with test API and Secret keys, that you can use to make API calls

# Example Requests
We give sample API calls close to every endpoint using cURL. You simply have to insert  your specific values, and you can test the calls from the command line. You can [read this article](https://linuxize.com/post/curl-rest-api/) to learn how to use cURL with APIs.

Not familiar with cURL? You can use [Postman](https://www.postman.com/downloads/). Postman is a collaboration environment for API development including making HTTP requests. Run the [Stormgarden APIs Collection](https://documenter.getpostman.com/view/11930516/TVYF6xeD) in Postman to make testing quicker and easier.

# Requests and Responses
The request and response bodies are formatted in JSON. The Content-type for all responses is set to `application/json`. 
Successful and Error responses are in the following formats:

<!-- tabs:start -->
#### ** Successful **

```JSON
{
    "status": [integer],
    "data": [object]
}
```
#### ** Error **

```JSON
{
    "status": [integer],
    "errors": [array]
}
```
<!-- tabs:end -->

The status key contains the HTTP status code in order to determine the result of an API call, if it was successful call. Typicall, `2xx` indicates that a request was successful.

The data key has the result of a request. Its data type is an object (or an array) depending on the request made. A request to GET an investor's details returns an object in the data key, while a request to GET an investor's portfolio returns an array in the data key.

The error key contains the description of the error(s) with the request made.


1. You need valid [API and secret keys](#authorization), to send requests to the API endpoints. You can get your key from the settings menu on your [dashboard](http://console.staging.storm.trium.ng/settings/api)
2. This collection is divided into [test](#be905500-d634-4739-85e0-3065b9e237b3) and [live](#b563dc47-12a9-4a1e-ab22-d3b40a5fc727), use test keys for the test collection and live keys for the live collection.
3. `base_url = 'http://api.staging.storm.trium.ng`
4. Response to every request is sent in JSON format. 
5. The API calls will respond with a `2XX` code for successful requests. Stormgarden Public API uses [custom error codes](#Error) for likely errors.

# Authorizat 
A `Bearer Token` is required to be set in the Authorization header as part of every request to the public API. You can get the token with the [Auth](#8d2c6b8a-cc92-42f0-8344-24e87b7d4d7c) endpoint on both **test** and **live**.

## Authorization related response
If a bearer token is missing, expired or invalid, you will receive a  ` ` response code and the following JSON response:

```json
  {
    "status": 401,
    "errors": [
        "You cannot access this resource"
    ]
}
```

