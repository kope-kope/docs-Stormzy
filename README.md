# Stormgarden Public API
The Stormgarden Public API allows you (has a Stormgarden partner) to programmatically onboard investors with our broker to buy and sell securities listed on the Nigerian Stock Exchange.

# Overview
1. You need valid [API and secret keys](#authorization), to send requests to the API endpoints. You can get your key from the settings menu on your [dashboard](http://console.staging.storm.trium.ng/settings/api)
2. This collection is divided into [test](#be905500-d634-4739-85e0-3065b9e237b3) and [live](#b563dc47-12a9-4a1e-ab22-d3b40a5fc727), use test keys for the test collection and live keys for the live collection.
3. `base_url = 'http://api.staging.storm.trium.ng`
4. Response to every request is sent in JSON format. 
5. The API calls will respond with a `2XX` code for successful requests. Stormgarden Public API uses [custom error codes](#Error) for likely errors.

# Authorization
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

