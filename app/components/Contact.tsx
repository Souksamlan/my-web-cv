export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-800" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <strong>Address:</strong><br />
            Wat Nak Village, Sisattanak District,<br />
            Vientiane Capital, Laos
          </li>
          <li>
            <strong>Phone:</strong><br />
            <a href="tel:+8562094176292" className="text-blue-600 hover:underline">+856 2094176292</a>
          </li>
          <li>
            <strong>Email:</strong><br />
            <a href="mailto:souksamlan.bmbp@gmail.com" className="text-blue-600 hover:underline">souksamlan.bmbp@gmail.com</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
