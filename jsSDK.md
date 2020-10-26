# Use the Gamma JavaScript SDK Script

## How it works

Gamma Pay provides a simple and convenient payment flow for web.
It can be integrated in 2 easy steps, making it the easiest way to start accepting payments. See demo of the payment methods on the checkout here.

### 1. Embed the script

Include our javascript file somewhere is you code 👇🏾

```javascript
<script src="http://js.woven.finance/gamma.js"></script>
```

### 2. Customer Information

You can send Gamma your existing customer information, or send in a customer reference if your customers already exist on Gamma.

Customer information can be retrived from your database or collected a form like this 👇🏾.

<!-- tabs:start -->

#### ** HTML **

```html
<div class="form-group">
  <label for="email">Email Address</label>
  <input class="form-control" type="email" id="email" required />
</div>
<div class="form-group">
  <label for="amount">Amount</label>
  <input class="form-control" type="amount" id="amount" required />
</div>
<div class="form-group">
  <label for="full-name">Full Name</label>
  <input class="form-control" type="text" id="fullName" />
</div>
<div class="form-group">
  <label for="first-name">Phone Number</label>
  <input class="form-control" type="text" id="phoneNumber" />
</div>
<div class="text-center">
  <pay-with-woven id="pay-with-gamma" theme="black" onclick="callGamma()" />
</div>
```

#### ** JavaScript **

```javascript
function callGamma() {
  var gamma = Gamma.setup({
    key: "YOUR_KEY",
    email: document.getElementById("email").value,
    amount: parseInt(document.getElementById("amount").value) * 100,
    customer_name: document.getElementById("fullName").value,
    mobile_number: document.getElementById("phoneNumber").value,
    ref: "WAPIC0001",
    callback_url: document.getElementById("callback").value,
    callback: function (ref) {
      console.log(ref);
      alert("Payment successful. Give value here...");
    },
    onClose: function () {
      console.log("Gamma pop closed");
    },
  });
  gamma.pop();
}
```

<!-- tabs:end -->

> If you choose not to collect customer information, Gamma will generate a smart form for you. <br/> If the customer already exists, simply pass the customer's reference

<!-- #### ** Styling: Gamma Pay Button ** -->

<a href="demo" class="mt-1 pay-with-gamma">See a demo</a>

## After Payments
