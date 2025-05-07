# Flashcards Proxy

Simple proxy for the [wordnik word of the day endpoint](https://developer.wordnik.com/docs#!/words/getWordOfTheDay) written in php and primarily used for the [Flashcards extension](https://github.com/Dinika/flashcards).
The proxy is written to avoid the rish of leaking the API_KEY for wordnik on the client side of Flashcards exntesion.

## Use

The endpoint is available at https://flashcards-proxy.vercel.app/word-of-the-day

Sample output:
```json
{
  "_id": "680e67217939e84db364c9c2",
  "word": "ochlophobist",
  "contentProvider": {
    "name": "wordnik",
    "id": 711
  },
  "definitions": [
    {
      "source": "century",
      "text": "One who fears crowds or mobs; one who dreads the ascendancy of the mob or mob-rule.",
      "note": null,
      "partOfSpeech": "noun"
    }
  ],
  "publishDate": "2025-05-07T03:00:00.000Z",
  "examples": [
    {
      "url": "https://www.google.com/books/edition/The_Academy_and_Literature/dFc_AQAAMAAJ?hl=en&gbpv=1&dq=ochlophobist+-Easter&pg=PA42&printsec=frontcover",
      "title": "The Academy and Literature",
      "text": "The present writer has a great dislike of packed crowds, but it is only from Dr. Murray that he has learned to call himself an ochlophobist."
    }
  ],
  "pdd": "2025-05-07",
  "htmlExtra": null,
  "note": "The word 'ochlophobist' comes from Greek roots meaning 'crowd' and 'fear'."
}
```

## Deploy

Currently the server is deployed on Vercel. I want to change this soon. After making desired changes, the api can be deployed by running the following command:
```bash
vercel --prod
```
