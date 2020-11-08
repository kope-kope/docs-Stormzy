# Authentication
API calls are authenticated by including your access token in the authorization header of every request.

To generate your access token, call the [Auth]() endpoint with your API and Secret keys. Generally, access token generated from test keys authenticates the test endpoints, while live endpoints are authenticated with access token generated from live keys.

Authorization headers should be set in this format : `Authorization: Bearer access_token`

> **Sample Authorization Header**
>
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVySWQiOiJkZDE3MmE3Zi0zM2I4LTQwZjQtODE5ZS0zMDg3M2EyZWE0NjIiLCJpZCI6ImJiOTQyNzcyLTI3ZTktNGNjMC05MTk4LWIyZTE3OTY1NmZlNiIsIm1vZGUiOiJsaXZlIiwiaWF0IjoxNjA0ODE4Mjg3LCJleHAiOjE2MTAwMDIyODd9.wZAec8Pw65ukgOxaknCNFxPKY8P6hYiPi3DOgUH803d

# Errors

| Error Codes | Description |
|-------------|-------------|
| 400         |             |
|             |             |
|             |             |