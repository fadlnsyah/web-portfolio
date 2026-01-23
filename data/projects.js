const projects = {
  id: [
    {
      id: 1,
      title: "Kopi Cerita",
      description:
        "Dibangun dengan Next.js, Prisma, dan Neon PostgreSQL. Aplikasi e-commerce coffee shop full-stack dengan menu interaktif, keranjang belanja, checkout, program loyalitas, dan dashboard admin real-time.",
      tech: ["Next.js", "TypeScript", "Prisma", "Neon", "NextAuth"],
      images: [
        "/images/projects/kopi-cerita/kopi-cerita1.png",
        "/images/projects/kopi-cerita/kopi-cerita2.png",
        "/images/projects/kopi-cerita/kopi-cerita3.png",
        "/images/projects/kopi-cerita/kopi-cerita4.png",
        "/images/projects/kopi-cerita/kopi-cerita5.png",
        "/images/projects/kopi-cerita/kopi-cerita6.png",
      ],
      github: "https://github.com/fadlnsyah/kopi-cerita",
      youtube: null,
      website: "https://kopi-cerita.vercel.app/",
    },

    {
      id: 2,
      title: "E-Commerce Katalog",
      description:
        "Dibangun dengan Laravel dan Filament. Website katalog produk modern dengan panel admin yang powerful, manajemen produk efisien, dan UI toko yang elegan.",
      tech: ["Laravel", "Filament", "PHP", "MySQL"],
      images: [
        "/images/projects/irwandhy/irwandhy.png",
        "/images/projects/irwandhy/irwandhy2.png",
      ],
      github: "https://github.com/fadlnsyah/website-katalog",
      youtube: null,
      website: "https://irwandhyofficial.com",
    },

    {
      id: 3,
      title: "Portfolio Developer",
      description:
        "Dibangun dengan Next.js dan Framer Motion. Website portfolio interaktif dengan animasi smooth, dark/light mode, dan dukungan dwibahasa untuk impress recruiter dan klien.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      images: ["/images/projects/porto/porto.png"],
      github: "https://github.com/fadlnsyah/web-porto",
      youtube: null,
      website: "https://fadlan-portofolio-dev.vercel.app/",
    },

    {
      id: 4,
      title: "Platform E-Learning",
      description:
        "Dibangun dengan Laravel. Platform pembelajaran digital untuk sekolah dasar dengan kuis interaktif, penilaian otomatis, dan dashboard analitik untuk guru dan siswa.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      images: [
        "/images/projects/elearn-sd261/sd1.png",
        "/images/projects/elearn-sd261/sd2.png",
        "/images/projects/elearn-sd261/sd3.png",
      ],
      github: "https://github.com/fadlnsyah/elearn-sd261",
      youtube: null,
      website: null,
    },

    {
      id: 5,
      title: "AI Egg Predictor",
      description:
        "Model machine learning untuk prediksi berat telur dari gambar menggunakan Mask R-CNN dan XGBoost. Proyek riset yang dipublikasikan di jurnal ilmiah dengan akurasi tinggi.",
      tech: ["Python", "Mask R-CNN", "XGBoost", "OpenCV"],
      images: [
        "/images/projects/egg/egg.png",
        "/images/projects/egg/egg2.png",
        "/images/projects/egg/egg3.png",
      ],
      kaggle: "https://www.kaggle.com/code/muhammadfadlansyah/train-code",
      journal:
        "https://bright-journal.org/Journal/index.php/JADS/article/view/1004",
      youtube: null,
      website: null,
    },
  ],

  en: [
    {
      id: 1,
      title: "Kopi Cerita",
      description:
        "Built with Next.js, Prisma, and Neon PostgreSQL. Full-stack coffee shop e-commerce app featuring interactive menu, shopping cart, checkout, loyalty program, and real-time admin dashboard.",
      tech: ["Next.js", "TypeScript", "Prisma", "Neon", "NextAuth"],
      images: [
        "/images/projects/kopi-cerita/kopi-cerita1.png",
        "/images/projects/kopi-cerita/kopi-cerita2.png",
        "/images/projects/kopi-cerita/kopi-cerita3.png",
        "/images/projects/kopi-cerita/kopi-cerita4.png",
        "/images/projects/kopi-cerita/kopi-cerita5.png",
        "/images/projects/kopi-cerita/kopi-cerita6.png",
      ],
      github: "https://github.com/fadlnsyah/kopi-cerita",
      youtube: null,
      website: "https://kopi-cerita.vercel.app/",
    },

    {
      id: 2,
      title: "E-Commerce Catalog",
      description:
        "Built with Laravel and Filament. Modern product catalog website with powerful admin panel, efficient product management, and elegant storefront UI.",
      tech: ["Laravel", "Filament", "PHP", "MySQL"],
      images: [
        "/images/projects/irwandhy/irwandhy.png",
        "/images/projects/irwandhy/irwandhy2.png",
      ],
      github: "https://github.com/fadlnsyah/website-katalog",
      youtube: null,
      website: "https://irwandhyofficial.com",
    },

    {
      id: 3,
      title: "Developer Portfolio",
      description:
        "Built with Next.js and Framer Motion. Interactive portfolio website with smooth animations, dark/light mode, and bilingual support to impress recruiters and clients.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      images: ["/images/projects/porto/porto.png"],
      github: "https://github.com/fadlnsyah/web-porto",
      youtube: null,
      website: "https://fadlan-portofolio-dev.vercel.app/",
    },

    {
      id: 4,
      title: "Siakad Platform",
      description:
        "Built with Laravel. Digital learning platform for elementary schools featuring interactive quizzes, auto-grading, and analytics dashboard for teachers and students.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      images: [
        "/images/projects/siakad/elearn1.png",
        "/images/projects/siakad/elearn2.png",
      ],
      github: "https://github.com/fadlnsyah/siakad",
      youtube: null,
      website: null,
    },

    {
      id: 5,
      title: "AI Egg Predictor",
      description:
        "Machine learning model for predicting egg weight from images using Mask R-CNN and XGBoost. A published research project with high accuracy results.",
      tech: ["Python", "Mask R-CNN", "XGBoost", "OpenCV"],
      images: [
        "/images/projects/egg/egg.png",
        "/images/projects/egg/egg2.png",
        "/images/projects/egg/egg3.png",
      ],
      kaggle: "https://www.kaggle.com/code/muhammadfadlansyah/train-code",
      journal:
        "https://bright-journal.org/Journal/index.php/JADS/article/view/1004",
      youtube: null,
      website: null,
    },
  ],
};

export default projects;
