export default function Skills() {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'Firebase',
    'Git',
    'SQL',
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 text-gray-900" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center font-semibold text-blue-700 hover:bg-blue-100 transition cursor-default select-none"
              title={`Skill: ${skill}`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
