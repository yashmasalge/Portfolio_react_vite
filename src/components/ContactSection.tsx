
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    sendMessage(e);
  }

  const sendMessage = (e) => {
    e.preventDefault();

    // Format the email body with form data
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      
      Message:
      ${formData.message}
    `.replace(/\n/g, '%0A'); // Replace newlines with URL encoding

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=myash2101@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${emailBody}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md dark:bg-secondary/30">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:myash2101@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    myash2101@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+919665449672"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9665449672
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-12 mb-6">Social Profiles</h3>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/yashmasalge"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/yashmasalge"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333333] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <form className="bg-white p-8 rounded-lg shadow-md dark:bg-secondary/30" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name='name'
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name='email'
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium ">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name='subject'
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Job Opportunity"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name='message'
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
