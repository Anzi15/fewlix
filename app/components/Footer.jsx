import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/mvpblocks',
  instaLink: 'https://instagram.com/mvpblocks',
  twitterLink: 'https://twitter.com/mvpblocks',
  githubLink: 'https://github.com/mvpblocks',
  dribbbleLink: 'https://dribbble.com/mvpblocks',
  services: {
    webdev: '/web-development',
    webdesign: '/web-design',
    marketing: '/marketing',
    googleads: '/google-ads',
  },
  about: {
    history: '/company-history',
    team: '/meet-the-team',
    handbook: '/employee-handbook',
  },
  contact: {
    email: 'info@fewlix.com',
  },
  company: {
    name: 'Fewlix',
    description:
      'We are a team of passionate individuals dedicated to delivering top-notch web solutions that drive success for our clients.',
    logo: '',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Dribbble, label: 'Dribbble', href: data.dribbbleLink },
];

const aboutLinks = [
  { text: 'Company History', href: data.about.history },
  { text: 'Meet the Team', href: data.about.team },
  { text: 'Employee Handbook', href: data.about.handbook },
];

const serviceLinks = [
  { text: 'Logo Design', href: "/services/logo-design" },
  { text: 'Packing Label Design', href:"/services/packing-label-design" },
  { text: 'Signage Design', href: "/services/signage-design" },
  { text: 'Social Media Cover', href:"/services/social-media-cover" },
  { text: 'Social Media Post', href:"/services/social-media-post" },
  { text: 'Trade Show Booth Design', href:"/services/trade-show-booth-design" },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
];

export default function Footer4Col() {
  return (
    <footer className="bg-black mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-white flex justify-center gap-2 sm:justify-start">
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
            </div>

            <p className="text-gray-400 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white hover:text-gray-300 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-400 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-400 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">GETSTARTED</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text }, index) => (
                  <li key={index}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href={`mailto:${text}`}
                    >
                      <Icon className="text-white size-5 shrink-0 shadow-sm" />
                      <span className="text-gray-400 flex-1 transition">
                        {text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-gray-400 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
