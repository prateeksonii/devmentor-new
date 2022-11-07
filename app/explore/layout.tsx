export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <head>
      <title>Explore</title>
      <body>
        <main>
          <nav className="flex h-16 items-center bg-gray-900">
            <div className="container mx-auto">
              <span className="text-lg font-bold">DevMentor</span>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </head>
  );
}
