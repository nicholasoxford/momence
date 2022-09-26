# Momence Interview - Nicholas Oxford

Tech stack: React (+ Hooks), TypeScript, Styled Components, React Query.

I really enjoyed this project, especially utilzing React without the power of a framework.

I am so used to Tailwinds and Next.js, that getting started with styled components took a few minutes, but I quickly got used to its syntax.

The next steps of this project would be more error handling, adding test, and optimistic UI. For error handeling, I could see where passing in an invalid country code to the number formatter would return an unexpcted result. I would implement my favorite type:

```ts
export type result<T, Error_T> = {
  response: T | undefined;
  error: Error_T | undefined;
};
```

I am happy with the results, and how I was able to use typescript to make my life better.

# Run the project

```bash
npm install
npm start
```
