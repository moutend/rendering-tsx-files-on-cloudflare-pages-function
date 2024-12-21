# Rendering TSX Files on Cloudflare Pages Function

This is a demonstration of rendering TSX files using Cloudflare Pages Function. Check it out here:  

https://contoso-japan.pages.dev  

Note: Contoso Japan is a fictional company for demonstration purposes and does not exist in reality.

## HTMLRewriter vs TSX

Cloudflare Workers and Pages provide `HTMLRewriter`, an API for manipulating the DOM. It can also function as a lightweight HTML template engine when viewed from a different perspective.  
However, as a server-side HTML rendering solution, `HTMLRewriter` can feel somewhat limited. For example, combining components or dynamically assembling UI elements is not straightforward.  

On the other hand, TSX (JSX written in TypeScript) allows for building and combining UI components with ease. Additionally, TSX ensures type safety, reducing the risk of deploying broken or buggy UI.

## Approach

This sample project uses [Nano JSX](https://nanojsx.io) as the TSX renderer. While JSX/TSX is often associated with React, it is a standalone technology for building UI, independent of React.  

The only library dependency in this project is Nano JSX. This ensures a small bundle size, minimizing the risk of deployment failures.

## Side Note

I am visually impaired, so the CSS for this project was suggested by ChatGPT. If you find the appearance of the page unusual, I would greatly appreciate it if you could submit a pull request to improve it!

## Author

Yoshiyuki Koyanagi

## License

MIT  

--- 

Let me know if you need further adjustments!
