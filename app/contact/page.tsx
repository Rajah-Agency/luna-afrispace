import { MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';

import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from 'react-icons/fa6';

import { Metadata } from 'next';
import { channelName } from '@/constants/youtube.constant';
import { socials } from '@/constants/socials.constant';

export const metadata: Metadata = {
  title: 'Contact Us | L.U.N.A',
  description: 'Get in touch with us.',
};

export default function Contact() {
  return (
    <main className="pt-40 md:pt-50 pb-24 min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-luna-royal-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-widest text-glow">
            CONTACT US
          </h1>
          <p className="font-body text-xl text-white max-w-2xl mx-auto">
            We’re always ready to connect with you. Whether you have questions, feedback,
            partnership opportunities, or simply want to learn more, our team is here to
            listen and respond.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-luna-deep-navy/40 backdrop-blur-md border border-luna-royal-blue/30 p-8 md:p-12">
            <h2 className="font-heading text-2xl text-white mb-8 tracking-widest border-b border-luna-royal-blue/30 pb-4">
              SEND US A MESSAGE
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-heading text-sm tracking-widest text-white">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-luna-bg/50 border border-luna-royal-blue/50 px-4 py-3 font-body text-white focus:outline-none focus:border-luna-glow-blue focus:box-glow transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-heading text-sm tracking-widest text-white">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full bg-luna-bg/50 border border-luna-royal-blue/50 px-4 py-3 font-body text-white focus:outline-none focus:border-luna-glow-blue focus:box-glow transition-all"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-heading text-sm tracking-widest text-white">
                  SUBJECT
                </label>
                <input
                  type="text"
                  className="w-full bg-luna-bg/50 border border-luna-royal-blue/50 px-4 py-3 font-body text-white focus:outline-none focus:border-luna-glow-blue focus:box-glow transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-heading text-sm tracking-widest text-white">
                  MESSAGE PAYLOAD
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-luna-bg/50 border border-luna-royal-blue/50 px-4 py-3 font-body text-white focus:outline-none focus:border-luna-glow-blue focus:box-glow transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-luna-bg font-heading tracking-widest text-lg px-8 py-4 hover:bg-luna-glow-blue hover:box-glow transition-all mt-4"
              >
                TRANSMIT MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-2xl text-white mb-8 tracking-widest border-b border-luna-royal-blue/30 pb-4">
                MISSION CONTROL
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-luna-royal-blue/20 flex items-center justify-center border border-luna-royal-blue/50 mr-6 shrink-0">
                    <MapPinIcon className="text-luna-glow-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-white tracking-widest mb-2">
                      HEADQUARTERS
                    </h3>
                    <p className="font-body text-white">
                      PO Box 26554
                      <br />
                      Gaborone
                      <br />
                      Botswana
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-luna-royal-blue/20 flex items-center justify-center border border-luna-royal-blue/50 mr-6 shrink-0">
                    <MailIcon className="text-luna-glow-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-white tracking-widest mb-2">
                      EMAIL
                    </h3>
                    <p className="font-body text-white">info@lunafrispace.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-luna-royal-blue/20 flex items-center justify-center border border-luna-royal-blue/50 mr-6 shrink-0">
                    <PhoneIcon className="text-luna-glow-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-white tracking-widest mb-2">
                      PHONE
                    </h3>
                    <p className="font-body text-white">+1 386 285 7841</p>
                    <p className="font-body text-white">+267 714 64815</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-white mb-6 tracking-widest">
                SOCIAL NETWORK
              </h2>
              <div className="flex space-x-4">
                <a
                  href={socials.facebook}
                  className="w-14 h-14 bg-luna-deep-navy/50 border border-luna-royal-blue/50 flex items-center justify-center text-white hover:text-white hover:border-luna-glow-blue hover:bg-luna-royal-blue/20 transition-all group"
                >
                  <FaFacebook
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  target="_blank"
                  href={socials.twitter}
                  className="w-14 h-14 bg-luna-deep-navy/50 border border-luna-royal-blue/50 flex items-center justify-center text-white hover:text-white hover:border-luna-glow-blue hover:bg-luna-royal-blue/20 transition-all group"
                >
                  <FaXTwitter
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  target="_blank"
                  href={socials.linkedin}
                  className="w-14 h-14 bg-luna-deep-navy/50 border border-luna-royal-blue/50 flex items-center justify-center text-white hover:text-white hover:border-luna-glow-blue hover:bg-luna-royal-blue/20 transition-all group"
                >
                  <FaLinkedin
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  target="_blank"
                  href={socials.instagram}
                  className="w-14 h-14 bg-luna-deep-navy/50 border border-luna-royal-blue/50 flex items-center justify-center text-white hover:text-white hover:border-luna-glow-blue hover:bg-luna-royal-blue/20 transition-all group"
                >
                  <FaInstagram
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href={`https://www.youtube.com/${channelName}`}
                  target="_blank"
                  className="w-14 h-14 bg-luna-deep-navy/50 border border-luna-royal-blue/50 flex items-center justify-center text-white hover:text-white hover:border-luna-glow-blue hover:bg-luna-royal-blue/20 transition-all group"
                >
                  <FaYoutube
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
