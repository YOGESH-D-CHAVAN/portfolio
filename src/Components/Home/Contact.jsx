import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
              required
            />
          </div>
          
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            required
          />
          
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
            required
          />
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 mx-auto md:mx-0"
          >
            <FiSend size={20} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}