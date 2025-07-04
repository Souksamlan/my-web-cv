export default function Skills() {
  const skills = ['Html-Css', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Firebase', 'Git', 'SQL']

  return (
    <section className="py-16 px-6 bg-white text-black" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded shadow-sm text-center font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
