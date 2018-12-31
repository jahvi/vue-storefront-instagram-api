# Vue Storefront Instagram API

API Endpoint for VueStorefront to fetch a user's Instagram feed

## Pre requisites

1. Register a FB app in [Facebook Developers](https://developers.facebook.com/)

## Installation

1. In the root of your VS API directory run `npm install --save vue-storefront-instagram-api` or `yarn add vue-storefront-instagram-api`
2. Add "vue-storefront-instagram-api" to the list of `registeredExtensions` in your `local.json` config file.
3. Add an `instagram` property to the `extensions` list with the following information:

```json
"instagram": {
  "pageId": "FB PAGE ID",
  "accessToken": "FB PAGE ACCESS TOKEN"
}
```

To get your page ID follow these instructions:
https://www.facebook.com/help/community/question/?id=378910098941520

To get a "never expire" access token follow this SO answer:
https://stackoverflow.com/a/35481577/455319

If done correctly going to `your-vs-api-url.com/api/ext/vue-storefront-instagram-api/feed` should return a list of the user's most recent Instagram posts.

## Parameters

### limit (int)

Limits the posts number returned from the API.

Eg:

```
your-vs-api-url.com/api/ext/vue-storefront-instagram-api/feed?limit=5
```
