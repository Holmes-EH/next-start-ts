This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) implementing typescript ([`NextJs and typescript documentation page`](https://nextjs.org/docs/basic-features/typescript#create-next-app-support)).

## What did I change from `create-next-app --typescript`:

-   I emptied most of the Vercel boilerplate (favicon, logo, css).
-   Installed **@svgr/webpack** as dev dependency to transform SVG into React components -> [`github repo`](https://github.com/gregberge/svgr/tree/main).
-   Wrapped App in global context using `React.createContext()`

-   Simplified import paths in compilerOptions, you will need to add to `tsconfig.json`

```
    "paths": {
        "@context/*": ["context/*"],
        ...
    }

```

-   Added Head to \_app.tsx for proper mobile device scaling:

```
<meta name='viewport' content='minimum-scale=1, initial-scale=1,maximum-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
```
