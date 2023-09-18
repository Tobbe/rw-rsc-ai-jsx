# Redwood RSC Demo 4

Repo demonstrating the RedwoodJS React Server Components implementation

This app shows using a Server Function as an action to call the OpenAI
api using [ai-jsx](https://www.npmjs.com/package/ai-jsx)

## How to run

Add your OpenAI API Key to `.env`. The variable name should be
`OPENAI_API_KEY`. Make sure you have credits

`yarn install`

`yarn rw build -v && yarn rw serve`

## What to do

1. Look at the imports in `App.tsx`. RW's RSC implementation is compatible with
   packages built for NextJS.
2. Talk to the bot 🤖
