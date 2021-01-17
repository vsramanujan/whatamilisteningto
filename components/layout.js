import Nav from "./nav"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Nav />
      <main className="layout-parent w-1/2 md:w-full mx-auto flex flex-col justify-evenly -mt-8">
        {children}
      </main>
    </div>
  )
}
