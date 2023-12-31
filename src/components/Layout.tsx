const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BEH App</title>
        <script src="/public/htmx.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
