export type Mentor = {
  name: string;
  country: string;
  linkedin: string;
  email?: string;
  expertise: string;
};

export type Resource = {
  title: string;
  fileUrl: string;
  sizeMb: number;
};

export const mentors: Mentor[] = [
  {
    name: 'Amara Diallo',
    country: 'Senegal',
    linkedin: 'https://linkedin.com/in/amara-diallo',
    email: 'amara@example.com',
    expertise: 'Astrophysics',
  },
  {
    name: 'Ade Okafor',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/ade-okafor',
    expertise: 'Satellite Engineering',
  },
  {
    name: 'Aisha Mensah',
    country: 'Ghana',
    linkedin: 'https://linkedin.com/in/aisha-mensah',
    email: 'aisha@example.com',
    expertise: 'Space Policy',
  },
  {
    name: 'Abebe Girma',
    country: 'Ethiopia',
    linkedin: 'https://linkedin.com/in/abebe-girma',
    expertise: 'Remote Sensing',
  },

  {
    name: 'Bola Nkosi',
    country: 'South Africa',
    linkedin: 'https://linkedin.com/in/bola-nkosi',
    email: 'bola@example.com',
    expertise: 'Aerospace Engineering',
  },
  {
    name: 'Bright Asante',
    country: 'Ghana',
    linkedin: 'https://linkedin.com/in/bright-asante',
    expertise: 'Orbital Mechanics',
  },

  {
    name: 'Chidi Eze',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/chidi-eze',
    email: 'chidi@example.com',
    expertise: 'CubeSat Development',
  },
  {
    name: 'Chioma Obi',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/chioma-obi',
    expertise: 'Space Law',
  },
  {
    name: 'Cyrus Kamau',
    country: 'Kenya',
    linkedin: 'https://linkedin.com/in/cyrus-kamau',
    email: 'cyrus@example.com',
    expertise: 'Propulsion Systems',
  },

  {
    name: 'Damilola Adeyemi',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/damilola-adeyemi',
    expertise: 'STEM Education',
  },
  {
    name: 'Danai Moyo',
    country: 'Zimbabwe',
    linkedin: 'https://linkedin.com/in/danai-moyo',
    email: 'danai@example.com',
    expertise: 'Astrobiology',
  },

  {
    name: 'Emeka Nwosu',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/emeka-nwosu',
    expertise: 'Ground Station Operations',
  },
  {
    name: 'Eshe Banda',
    country: 'Zambia',
    linkedin: 'https://linkedin.com/in/eshe-banda',
    email: 'eshe@example.com',
    expertise: 'Space Medicine',
  },

  {
    name: 'Fatima El-Amin',
    country: 'Sudan',
    linkedin: 'https://linkedin.com/in/fatima-elamin',
    expertise: 'Planetary Science',
  },
  {
    name: 'Femi Adebayo',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/femi-adebayo',
    email: 'femi@example.com',
    expertise: 'Robotics',
  },

  {
    name: 'Grace Wanjiku',
    country: 'Kenya',
    linkedin: 'https://linkedin.com/in/grace-wanjiku',
    expertise: 'Earth Observation',
  },
  {
    name: 'Getnet Tadesse',
    country: 'Ethiopia',
    linkedin: 'https://linkedin.com/in/getnet-tadesse',
    email: 'getnet@example.com',
    expertise: 'Space Debris Mitigation',
  },

  {
    name: 'Hassan Ouedraogo',
    country: 'Burkina Faso',
    linkedin: 'https://linkedin.com/in/hassan-ouedraogo',
    expertise: 'Telecommunications',
  },

  {
    name: 'Imani Kariuki',
    country: 'Kenya',
    linkedin: 'https://linkedin.com/in/imani-kariuki',
    email: 'imani@example.com',
    expertise: 'Nanosatellites',
  },
  {
    name: 'Ife Oladele',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/ife-oladele',
    expertise: 'Space Architecture',
  },

  {
    name: 'Jabari Mwangi',
    country: 'Tanzania',
    linkedin: 'https://linkedin.com/in/jabari-mwangi',
    email: 'jabari@example.com',
    expertise: 'Launch Systems',
  },

  {
    name: 'Kwame Boateng',
    country: 'Ghana',
    linkedin: 'https://linkedin.com/in/kwame-boateng',
    expertise: 'Space Entrepreneurship',
  },
  {
    name: 'Kofi Asiedu',
    country: 'Ghana',
    linkedin: 'https://linkedin.com/in/kofi-asiedu',
    email: 'kofi@example.com',
    expertise: 'Signal Processing',
  },

  {
    name: 'Leila Benhaddou',
    country: 'Morocco',
    linkedin: 'https://linkedin.com/in/leila-benhaddou',
    expertise: 'Aerospace Materials',
  },
  {
    name: 'Lindiwe Dlamini',
    country: 'Eswatini',
    linkedin: 'https://linkedin.com/in/lindiwe-dlamini',
    email: 'lindiwe@example.com',
    expertise: 'Space Policy',
  },

  {
    name: 'Makena Njoroge',
    country: 'Kenya',
    linkedin: 'https://linkedin.com/in/makena-njoroge',
    expertise: 'Astrophotography',
  },
  {
    name: 'Moussa Coulibaly',
    country: 'Mali',
    linkedin: 'https://linkedin.com/in/moussa-coulibaly',
    email: 'moussa@example.com',
    expertise: 'Space Data Analytics',
  },

  {
    name: 'Ngozi Uchenna',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/ngozi-uchenna',
    expertise: 'Bioastronautics',
  },
  {
    name: 'Nadia Benali',
    country: 'Algeria',
    linkedin: 'https://linkedin.com/in/nadia-benali',
    email: 'nadia@example.com',
    expertise: 'Fluid Dynamics',
  },

  {
    name: 'Olumide Fashola',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/olumide-fashola',
    expertise: 'Spacecraft Systems',
  },
  {
    name: 'Onyeka Igwe',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/onyeka-igwe',
    email: 'onyeka@example.com',
    expertise: 'Space Robotics',
  },

  {
    name: 'Priya Naidoo',
    country: 'South Africa',
    linkedin: 'https://linkedin.com/in/priya-naidoo',
    expertise: 'Computational Astrophysics',
  },

  {
    name: 'Rashid Osman',
    country: 'Somalia',
    linkedin: 'https://linkedin.com/in/rashid-osman',
    email: 'rashid@example.com',
    expertise: 'Space Communications',
  },
  {
    name: 'Rudo Chikwanda',
    country: 'Zambia',
    linkedin: 'https://linkedin.com/in/rudo-chikwanda',
    expertise: 'Aerospace Education',
  },

  {
    name: 'Seun Adeyinka',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/seun-adeyinka',
    email: 'seun@example.com',
    expertise: 'Mission Design',
  },
  {
    name: 'Siyanda Dube',
    country: 'South Africa',
    linkedin: 'https://linkedin.com/in/siyanda-dube',
    expertise: 'Space Weather',
  },

  {
    name: 'Tariq El-Fassi',
    country: 'Morocco',
    linkedin: 'https://linkedin.com/in/tariq-elfassi',
    email: 'tariq@example.com',
    expertise: 'Navigation Systems',
  },
  {
    name: 'Tolu Adeniyi',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/tolu-adeniyi',
    expertise: 'Thermal Engineering',
  },

  {
    name: 'Uche Okonkwo',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/uche-okonkwo',
    email: 'uche@example.com',
    expertise: 'Space Startups',
  },

  {
    name: 'Wanjiru Kamau',
    country: 'Kenya',
    linkedin: 'https://linkedin.com/in/wanjiru-kamau',
    expertise: 'Remote Sensing',
  },

  {
    name: 'Yemi Osinowo',
    country: 'Nigeria',
    linkedin: 'https://linkedin.com/in/yemi-osinowo',
    email: 'yemi@example.com',
    expertise: 'Orbital Dynamics',
  },
  {
    name: 'Yosef Alemu',
    country: 'Ethiopia',
    linkedin: 'https://linkedin.com/in/yosef-alemu',
    expertise: 'Space Instrumentation',
  },

  {
    name: 'Zara Traore',
    country: "Côte d'Ivoire",
    linkedin: 'https://linkedin.com/in/zara-traore',
    email: 'zara@example.com',
    expertise: 'Aerospace Research',
  },
  {
    name: 'Zintle Mbeki',
    country: 'South Africa',
    linkedin: 'https://linkedin.com/in/zintle-mbeki',
    expertise: 'Space Governance',
  },
];

export const resources: Resource[] = [
  {
    title: 'Introduction to CubeSat Design',
    fileUrl: '/resources/cubesat-design.pdf',
    sizeMb: 2.4,
  },
  {
    title: 'Africa Space Industry Report 2024',
    fileUrl: '/resources/africa-space-report-2024.pdf',
    sizeMb: 5.1,
  },
  {
    title: 'Orbital Mechanics for Beginners',
    fileUrl: '/resources/orbital-mechanics-beginners.pdf',
    sizeMb: 3.8,
  },
  {
    title: 'Space Law & Policy in Africa',
    fileUrl: '/resources/space-law-africa.pdf',
    sizeMb: 1.9,
  },
  {
    title: 'Remote Sensing Applications Guide',
    fileUrl: '/resources/remote-sensing-guide.pdf',
    sizeMb: 4.2,
  },
  {
    title: 'Student Launchpad Program Handbook',
    fileUrl: '/resources/launchpad-handbook.pdf',
    sizeMb: 2.0,
  },
  {
    title: 'Satellite Communications Fundamentals',
    fileUrl: '/resources/sat-comms-fundamentals.pdf',
    sizeMb: 6.3,
  },
  {
    title: 'STEM Careers in the Space Sector',
    fileUrl: '/resources/stem-careers-space.pdf',
    sizeMb: 1.5,
  },
  {
    title: 'Earth Observation for Climate Monitoring',
    fileUrl: '/resources/earth-obs-climate.pdf',
    sizeMb: 7.1,
  },
  {
    title: 'Research Orbit Fellowship Guide 2025',
    fileUrl: '/resources/research-orbit-2025.pdf',
    sizeMb: 2.8,
  },
  {
    title: 'Propulsion Systems Overview',
    fileUrl: '/resources/propulsion-overview.pdf',
    sizeMb: 3.3,
  },
  {
    title: 'Space Debris & Mitigation Strategies',
    fileUrl: '/resources/space-debris.pdf',
    sizeMb: 2.1,
  },
  {
    title: 'African Aerospace Startups Landscape',
    fileUrl: '/resources/africa-startups.pdf',
    sizeMb: 4.7,
  },
  {
    title: 'Introduction to Astrophysics',
    fileUrl: '/resources/intro-astrophysics.pdf',
    sizeMb: 8.2,
  },
  {
    title: 'Ground Station Design & Operations',
    fileUrl: '/resources/ground-station-ops.pdf',
    sizeMb: 3.6,
  },
];
