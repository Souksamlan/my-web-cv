export default function Certifications() {
  const certs = [
    { title: "Project Management", year: "2027", org: "The Project Management Institute" },
    { title: "System Optimization", year: "2028", org: "Scrum Learning Society" },
    { title: "Risk Management and Mitigation", year: "2028", org: "Internal Auditors Team" },
    { title: "Vendor Relations", year: "2030", org: "North State University" },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800" id="certifications">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <ul className="space-y-4">
          {certs.map((cert, idx) => (
            <li key={idx}>
              <h3 className="font-semibold">{cert.title} ({cert.year})</h3>
              <p>{cert.org}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
