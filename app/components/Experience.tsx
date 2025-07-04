export default function LearningJourney() {
  return (
    <section className="py-16 px-6 bg-white text-gray-900" id="learning">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">University Experience</h2>

        {/* Year 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Year 1 – Foundations</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-800">
            <li>Built static web pages using HTML, CSS, and JavaScript.</li>
            <li>Gained a solid understanding of front-end structure and responsive design.</li>
            <li>Practiced CRUD operations (Create, Read, Update, Delete) on a sample database.</li>
            <li>Learned how to write and test basic SQL queries.</li>
            <li>Designed basic web interfaces including login and home pages using Figma.</li>
            <li>Learned principles of clean layouts and user-focused design.</li>
          </ul>
        </div>

        {/* Year 2 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Year 2 – Expanding Skills</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-800">
            <li>Built small-scale projects using React components and JSX.</li>
            <li>Learned the basics of React Native for mobile app interfaces.</li>
            <li>Used Tailwind CSS to create responsive and modern interfaces.</li>
            <li>Applied utility-first styling to real projects.</li>
            <li>Explored mobile development with Flutter.</li>
            <li>Created simple mobile UIs using Dart and Flutter widgets.</li>
          </ul>
        </div>

        {/* Year 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Year 3 – Applied Projects</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-800">
            <li>Currently working on real-world style projects and preparing for internships.</li>
            <li>Combining front-end tools (React + Tailwind + Next.js) into more complete UI flows.</li>
            <li>Exploring web hosting, GitHub, and version control for project collaboration.</li>
            <li>Improving UI/UX design flow using both Figma and live coding.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
