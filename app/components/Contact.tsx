export default function Contact() {
  return (
    <section
      className="py-20 px-6 bg-gradient-to-t from-gray-200 to-gray-100 text-gray-900"
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10">Contact Information</h2>
        <ul className="space-y-8 text-lg">
          <li>
            <strong className="block text-xl mb-1">Address:</strong>
            <address className="not-italic leading-relaxed">
              Wat Nak Village, Sisattanak District,<br />
              Vientiane Capital, Laos
            </address>
          </li>
          <li>
            <strong className="block text-xl mb-1">Phone:</strong>
            <a
              href="tel:+8562094176292"
              className="text-blue-600 hover:underline font-medium"
            >
              +856 2094176292
            </a>
          </li>
          <li>
            <strong className="block text-xl mb-1">Email:</strong>
            <a
              href="mailto:souksamlan.bmbp@gmail.com"
              className="text-blue-600 hover:underline font-medium"
            >
              souksamlan.bmbp@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
