import NavigationBar from "@components/NavigationBar";
import Careers from "@components/Careers";
import Footer from "@components/Footer";

import Nano, { Helmet } from "nano-jsx";

const App = () => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Careers | Contoso Japan</title>
      </Helmet>
      <NavigationBar />
      <Careers />
      <Footer />
    </div>
  );
};

export const onRequestGet: PagesFunction<Env> = async (ctx) => {
  const app = Nano.renderSSR(<App />);
  const { body, head, footer, attributes } = Helmet.SSR(app);
  const html = `
<!DOCTYPE html>
<html ${attributes.html.toString()}>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${head.join("\n")}
  </head>
  <body ${attributes.body.toString()}>
    ${body}
    ${footer.join("\n")}
  </body>
</html>
`;

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
};
