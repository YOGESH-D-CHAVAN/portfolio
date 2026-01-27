import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase mb-2 block">
            // Get in Touch
          </span>
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Let's start a conversation.
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-stone-50 border-b-2 border-stone-200 px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                required
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-stone-50 border-b-2 border-stone-200 px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                required
              />
            </div>
          </div>
          
          <div className="relative group">
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-stone-50 border-b-2 border-stone-200 px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
              required
            />
          </div>
          
          <div className="relative group">
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-stone-50 border-b-2 border-stone-200 px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors resize-none"
              required
            />
          </div>
          
          <div className="text-center pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-lg font-bold tracking-wide hover:bg-emerald-700 transition-all duration-300"
            >
              <FiSend size={18} />
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}