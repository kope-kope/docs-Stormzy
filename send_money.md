## Send Money

> To start sending money, with Gamma, visit 👉🏾  our “Get Started” page. Log into your dashboard and retrieve your API Keys, from the settings page.

With two easy steps, you can send money out using the Gamma API: 
 
 -  Fund your virtual account
 -  Call the Initate payout API to make transfers.

### Fund your account
  
  Once you start receiving funds through Gamma, a virtual Gamma account is created. You can fund this account at your convenience through bank transfers, and make subsequent payouts from this virtual account. 

<!-- Refer to Funding my virtual account -->

### Initiate Transfer

You send money to a single or multiple beneficiaries in the  single call, by simply initiating the transfer, and Gamma handles the rest.

### Call the Initiate payout endpoint

<br/>


<!-- tabs:start -->

#### ** Request **

```json
  {
    "source_account":"8000008900",
    "beneficiaries" :
    [
    {
        "account_name":"John Doe",
        "destination_nuban":"0427521260",
        "bank_code":"044",
        "bank_code_scheme": "NIP",
        "currency_code": "NGN",
        "narration":"Nov 2020 Salary",
        "amount":300000,
        "reference": "425267383",
        "callback_url" : "http://callmeback.com",
        "meta_data":
        {
        "beneficiary_phone":"08033212933", 
        "beneficiary_email":"johndoe@testme.com"
        }
      },
    {
        "account_name":"James Crown",
        "destination_nuban":"1227140533",
        "bank_code":"012",
        "bank_code_scheme": "CBN",
        "currency_code": "NGN",
        "narration":"Bonus",
        "amount":10000,
        "reference": "425267312",
        "callback_url" : "http://callmeback1.com",
        "meta_data":
        {
            "beneficiary_phone":"08146136593", 
            "beneficiary_email":"james4crown@testme.com"
        }
     },
     {
        "account_name":"Thiago Jota",
        "destination_nuban":"1227140381",
        "bank_code":"000012",
        "bank_code_scheme": "NIP",
        "currency_code": "NGN",
        "narration":"Nov 2020 Salary",
        "amount":10000,
        "reference": "425267112",
        "callback_url" : "http://callmeback1.com",
        "meta_data":
        {
            "beneficiary_phone":"09056615212", 
            "beneficiary_email":"thiago.jota@testme.com"
        }
      }
   ]
  }

```

#### ** Response **
```json
{
    "code" : 200,
    "status":"success",
    "message":"The process completed successfully",
    "data":{
     "batch_reference":"BAPY_TXN_0090"
    }
}

```





<!-- tabs:end -->



<!-- {REQUEST PAYLOAD}
     {RESPONSE PAYLOAD} -->
