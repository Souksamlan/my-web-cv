export default function Education() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white text-gray-900" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Academic History</h2>
        <ul className="space-y-10">
          <li className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="font-semibold text-2xl mb-1 text-blue-700">
              Sisattanak Lower Secondary School{" "}
              <span className="text-gray-500 text-base font-normal">| 2012–2016</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Completed Senior Secondary Education (equivalent to Upper Secondary School)
            </p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="font-semibold text-2xl mb-1 text-blue-700">
              Sisattanak Upper Secondary School
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Completed Junior Secondary Education (equivalent to Lower Secondary School)
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
