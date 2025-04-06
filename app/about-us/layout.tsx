export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>About Us</h1>
      {children}
      &copy; 2025 My Company
    </div>
  )
}