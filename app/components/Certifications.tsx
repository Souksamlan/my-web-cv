export default function Certifications() {
  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white text-gray-900"
      id="certifications"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Certifications */}
        <div>
          <h2 className="text-4xl font-extrabold mb-8 text-center">Certifications</h2>
          <ul className="space-y-8">
            <li className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-semibold text-xl text-blue-700 mb-2">
                Volunteer Translator – Let’s Read Project{" "}
                <span className="text-gray-600 text-base font-normal">| 2024</span>
              </h3>
              <p>
                <span className="font-medium">Organization:</span> The Asia Foundation
              </p>
              <p className="text-gray-700 mt-2">
                Translated children's stories from English to Lao for the Let's Read digital library.
              </p>
            </li>
          </ul>
        </div>

        {/* Courses & Training */}
        <div>
          <h2 className="text-4xl font-extrabold mb-8 text-center">Courses & Training</h2>
          <ul className="space-y-8">
            <li className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="font-semibold text-xl text-blue-700 mb-2">
                Full Stack Development Program
              </h3>
              <p className="text-gray-700">
                Gained practical experience in building web applications using modern technologies.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
