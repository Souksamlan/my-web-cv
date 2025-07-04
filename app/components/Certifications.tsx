export default function Certifications() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900" id="certifications">
      <div className="max-w-4xl mx-auto">
        {/* Certifications */}
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <ul className="space-y-6 mb-12">
          <li>
            <h3 className="font-semibold text-xl">Volunteer Translator – Let’s Read Project <span className="text-gray-600">| 2024</span></h3>
            <p><span className="font-medium">Organization:</span> The Asia Foundation</p>
            <p className="text-gray-700">Translated children's stories from English to Lao for the Let's Read digital library.</p>
          </li>
        </ul>

        {/* Courses & Training */}
        <h2 className="text-3xl font-bold mb-6">Courses & Training</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="font-semibold text-xl">Full Stack Development Program</h3>
            <p className="text-gray-700">
              Gained practical experience in building web applications using modern technologies.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
