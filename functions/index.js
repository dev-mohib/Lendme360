const functions = require('firebase-functions');
const express = require('express')
const engines = require('consolidate')
const cookieParser = require('cookie-parser')
const admin = require('firebase-admin')
admin.initializeApp()
const env = {
  DOMAIN : "https://lendme360.web.app", //"http://localhost:5000",
  PAYMENT_METHODS : "card",
  PRICE : "price_1HDSASGjRUMSznxqLjk6ppSx",
  STRIPE_PUBLISHABLE_KEY : "pk_test_51HCiNYGjRUMSznxq6yy0k9tjJX1q0M0X8uEbXmZwxlmLLJaUyJZUUx0M0uilfkDpMGrhH2JgljS6xtE2aFpX6aHW00TFkVtYPv",
  STRIPE_SECRET_KEY : "rk_test_51HCiNYGjRUMSznxqWLyv81wUT67UxjszkMSyi4cbTK2Gk8MWnbDn0trMuiOiCQjjqfY9KOva8dECwOgaEJ8bXevd00AnF5xqoJ",
  STRIPE_WEBHOOK_SECRET : "whsec_BI9pqVkN74mgbvgbGzxKKvZjE8RFbmtr"
}
const stripe = require('stripe')(env.STRIPE_SECRET_KEY);
const db = admin.firestore()
const app = express()
app.engine('hbs', engines.handlebars)
app.set('views', './views')
app.use(cookieParser())
app.set('view engine', 'hbs')

app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.get('/', (req, res) => {
  res.render('index', {name : 'some-name'})
})
app.get('/login', (req, res) => {
  res.render('login', {pageData : 'some-data'})
})

//Profile Route
app.get('/profile', async (req, res) => {
  res.render('profile', { pageData : "some data"})
})

app.get('/view-reports', async (req, res) => {
  // if(!req.cookies.idToken)
  // res.redirect('/login')
  // if(!decodedToken)
  // res.redirect('/login')
  // const decodedToken = await admin.auth().verifyIdToken(req.cookies.idToken)
  res.render('view-reports', { pageData : "some data"})
})


app.get('/reports/generate', async (req, res) => {
  res.render('generate-raport', { pageData : "some data"})
})
app.get('/about', async (req, res) => {
  res.render('about')
})
app.get('/reports/view', (req, res) => {
  res.render('view-reports', {name : 'some-name'})
})
app.get('/signup', (req, res) => {
  res.render('signup')
})
// app.get('/profile/edit', (req, res) => {
//   res.render('edit-profile', {name : 'some-name'})
// })

app.get('/edit-profile', async (req, res) => {
  res.render('edit-profile', { pageData : "some data"})
})



app.get('/buy', async (req, res) => {
  res.render('buy', {example : "Some Example"});
})

app.get('/config', async (req, res) => {
  const price = await stripe.prices.retrieve(env.PRICE);

  res.send({
    publicKey: env.STRIPE_PUBLISHABLE_KEY,
    unitAmount: price.unit_amount,
    currency: price.currency,
  });
});

// Fetch the Checkout Session to display the JSON result on the success page
app.get('/checkout-session', async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

app.post('/create-checkout-session', async (req, res) => {
  const domainURL = env.DOMAIN;

  const { quantity, locale } = req.body;
  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [customer_email] - lets you prefill the email input in the Checkout page
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  const session = await stripe.checkout.sessions.create({
    payment_method_types: env.PAYMENT_METHODS.split(', '),
    mode: 'payment',
    locale: locale,
    line_items: [
      {
        price: env.PRICE,
        quantity: quantity
      },
    ],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled`,
  });
  res.send({
    sessionId: session.id,
  });
});

// Webhook handler for asynchronous events.
app.post('/webhook', async (req, res) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'checkout.session.completed') {
    console.log(`🔔  Payment received!`);
  }

  res.sendStatus(200);
});

app.get('/success', (req, res) => {
  res.render('payment-success')
})
app.get('/canceled', (req, res) => {
  res.render('payment-canceled')
})



//Getting user from server side
const getUserFromCookie = async (req) => {
  const rawCookies = req.headers.cookie.split('; ');
  // rawCookies = ['myapp=secretcookie, 'analytics_cookie=beacon;']
  const parsedCookies = {};
  rawCookies.forEach(rawCookie=>{
  const parsedCookie = rawCookie.split('=');
   parsedCookies[parsedCookie[0]] = parsedCookie[1];
  })
  try {
    const decodedToken = await admin.auth().verifyIdToken(parsedCookies.idToken);
    return { isFound : true, user : decodedToken }
  } catch (err) {
    console.log(err);
    return { isFound : false}
  }
 }

 app.get('/config', async (req, res) => {
  const price = await stripe.prices.retrieve(env.PRICE);
  res.send({
    publicKey: 'pk_test_51HCiNYGjRUMSznxq6yy0k9tjJX1q0M0X8uEbXmZwxlmLLJaUyJZUUx0M0uilfkDpMGrhH2JgljS6xtE2aFpX6aHW00TFkVtYPv',
    unitAmount: 2000,
    currency: 'usd',
  })
});

exports.app = functions.https.onRequest(app)