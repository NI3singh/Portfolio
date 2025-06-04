import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailValidation {
  isValid: boolean | null;
  message: string;
  isValidating: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [emailValidation, setEmailValidation] = useState<EmailValidation>({
    isValid: null,
    message: '',
    isValidating: false
  });

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_CONFIG = {
    serviceId: 'service_g4rv1tp',      // Replace with your EmailJS service ID
    templateId: 'template_u0uef9h',   // Use the template ID from the guide
    publicKey: 'm2QZdBAnM5LM7VYT9'       // Replace with your EmailJS public key
  };

  // Email validation function
  const validateEmailFormat = (email: string): { valid: boolean | null; message: string } => {
    if (!email) return { valid: null, message: '' };
    
    // Basic format check
    const basicRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!basicRegex.test(email)) {
      return { valid: false, message: 'Invalid email format' };
    }

    // Advanced validation patterns
    const invalidPatterns = [
      { regex: /\.{2,}/, message: 'Multiple consecutive dots not allowed' },
      { regex: /^\./, message: 'Email cannot start with a dot' },
      { regex: /\.$/, message: 'Email cannot end with a dot' },
      { regex: /@\./, message: 'Invalid format after @' },
      { regex: /\.@/, message: 'Invalid format before @' },
    ];

    for (const pattern of invalidPatterns) {
      if (pattern.regex.test(email)) {
        return { valid: false, message: pattern.message };
      }
    }

    // Check domain validity
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain || domain.length < 2) {
      return { valid: false, message: 'Invalid domain' };
    }

    // Check for trusted providers
    const trustedDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
      'aol.com', 'icloud.com', 'protonmail.com', 'zoho.com',
      'live.com', 'msn.com', 'yandex.com', 'mail.com'
    ];

    if (trustedDomains.includes(domain)) {
      return { valid: true, message: '✓ Valid email from trusted provider' };
    }

    return { valid: true, message: '✓ Email format is valid' };
  };

  // Debounced email validation
  useEffect(() => {
    if (!formData.email) {
      setEmailValidation({ isValid: null, message: '', isValidating: false });
      return;
    }

    setEmailValidation(prev => ({ ...prev, isValidating: true }));

    const timeoutId = setTimeout(() => {
      const result = validateEmailFormat(formData.email);
      setEmailValidation({
        isValid: result.valid,
        message: result.message,
        isValidating: false
      });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [formData.email]);

  const contactDetails = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'ni3.singh.r@gmail.com',
      href: 'mailto:ni3.singh.r@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91 7041808600',
      href: 'tel:+917041808600',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      href: 'https://www.google.com/maps/search/?api=1&query=Surat+Gujarat+India',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-6 w-6" />,
      label: 'GitHub',
      href: 'https://github.com/NI3singh',
      color: 'hover:bg-gray-800 hover:text-white'
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nitinsinghr/',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: <FaXTwitter className="h-6 w-6" />,
      label: 'Twitter',
      href: 'https://x.com/NitinSingh333',
      color: 'hover:bg-black hover:text-white'
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/ni.3.singh/',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white'
    },
    {
      icon: <FaYoutube className="h-6 w-6" />,
      label: 'YouTube',
      href: 'https://www.youtube.com/@Nitinsinghcreation',
      color: 'hover:bg-red-600 hover:text-white'
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate email before submission
    if (emailValidation.isValid !== true) {
      setError('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    setError('');
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject || 'New Portfolio Contact',
        message: formData.message,
        from_name_initial: formData.name.charAt(0).toUpperCase(),
        current_time: new Date().toLocaleString()
      };

      // Send email using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.serviceId,
          template_id: EMAILJS_CONFIG.templateId,
          user_id: EMAILJS_CONFIG.publicKey,
          template_params: templateParams
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setEmailValidation({ isValid: null, message: '', isValidating: false });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly via email.');
      console.error('Email sending error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim() && emailValidation.isValid === true;

  return (
    <section id="contact" className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-100 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactDetails.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
                  >
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} text-white mr-5 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-gray-900">
                        {item.label}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 break-all">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Connect With Me</h3>
                <div className="flex justify-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Follow me for updates and connect professionally
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Send Me a Message</h3>
                  <p className="text-gray-600">I'd love to hear about your project</p>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Message Sent! 🎉</h4>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name*"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-500 text-gray-900"
                        />
                      </div>
                      
                      {/* Email input with validation */}
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email*"
                          required
                          className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-500 text-gray-900 ${
                            emailValidation.isValid === true ? 'border-green-300 focus:ring-green-500' :
                            emailValidation.isValid === false ? 'border-red-300 focus:ring-red-500' :
                            'border-gray-200 focus:ring-blue-500'
                          }`}
                        />
                        
                        {/* Email validation indicator */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {emailValidation.isValidating ? (
                            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                          ) : emailValidation.isValid === true ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : emailValidation.isValid === false ? (
                            <XCircle className="h-5 w-5 text-red-500" />
                          ) : null}
                        </div>
                      </div>
                    </div>
                    
                    {/* Email validation message */}
                    {emailValidation.message && (
                      <div className={`text-sm px-3 py-2 rounded-lg ${
                        emailValidation.isValid === true ? 'text-green-700 bg-green-50 border border-green-200' :
                        emailValidation.isValid === false ? 'text-red-700 bg-red-50 border border-red-200' :
                        'text-blue-700 bg-blue-50 border border-blue-200'
                      }`}>
                        {emailValidation.message}
                      </div>
                    )}
                    
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject (optional)"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-500 text-gray-900"
                      />
                    </div>
                    
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message*"
                        rows={5}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-500 text-gray-900 resize-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      className={`w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-xl transform hover:scale-105 hover:shadow-xl ${
                        isFormValid && !isSubmitting
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      * Required fields. Email will be validated automatically.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <p className="text-gray-600 mb-2">Prefer a quick chat?</p>
            <a 
              href="mailto:ni3.singh.r@gmail.com" 
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
            >
              Drop me an email directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;