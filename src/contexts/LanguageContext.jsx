import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      collection: 'Collection',
      journal: 'Journal',
      about: 'About',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      subtitle: 'Jewelry with Emeralds',
      title: 'Luxury and',
      titleAccent: 'Tradition',
      description: 'Discover our first collection of natural emerald jewelry. Each piece tells a story of craftsmanship, tradition, and the beauty of these magnificent gemstones. Set in vibrant 18k gold, these emeralds carry the spirit of the Muisca, who saw them as symbols of life, light, and sacred connection.',
      exploreCollection: 'Explore Collection',
      ourStory: 'Our Story',
      scroll: 'Scroll'
    },
    // Story Section
    story: {
      subtitle: 'Our First Collection',
      title: 'The Beginning of a',
      titleAccent: 'Journey',
      paragraph1: 'ADIELA was born from a passion for timeless beauty and exceptional craftsmanship. Our inaugural collection represents months of careful curation, featuring emeralds of extraordinary quality and brilliance.',
      paragraph2: 'Each piece in this first collection tells the story of our vision—to create jewelry that transcends trends and becomes a cherished part of your life\'s most precious moments.',
      paragraph3: 'These emeralds, sourced from the finest mines, are set in meticulously crafted 18k gold settings that honor both tradition and contemporary elegance.',
      discoverStory: 'Discover Our Story'
    },
    // Featured Products
    featured: {
      title: 'Featured',
      titleAccent: 'Collection',
      subtitle: 'Handcrafted Excellence'
    },
    // Video Section
    video: {
      title: 'Craftsmanship',
      titleAccent: 'in Motion',
      subtitle: 'Behind the Scenes',
      description: 'Witness the meticulous artistry behind each ADIELA piece. From selecting the finest emeralds to the final polish, every step embodies our commitment to excellence.'
    },
    // Journal Section
    journal: {
      title: 'From Our',
      titleAccent: 'Journal',
      subtitle: 'Stories & Insights',
      readMore: 'Read More'
    },
    // Footer
    footer: {
      newsletter: 'Stay Updated',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      copyright: '© 2024 ADIELA. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    },
    // Buttons
    buttons: {
      exploreCollection: 'Explore Collection',
      viewAll: 'View All',
      addToCart: 'Add to Cart',
      learnMore: 'Learn More'
    },
    // About Page
    about: {
      title: 'Our Story',
      subtitle: 'Weaving together the threads of ancient tradition, unparalleled craftsmanship, and the luminous beauty of emeralds.',
      sectionTitle1: 'A Gem of Tradition and Prestige',
      sectionTitle2: 'Inspired by Enduring Design',
      sectionTitle3: 'Our Commitment',
      paragraph1: 'Welcome to ADIELA. Our journey began with a profound appreciation for the majestic emerald, a gemstone steeped in centuries of history, revered for its vibrant color, and symbolic of deep-rooted traditions.',
      paragraph2: 'Long before the Spanish Conquistadors arrived in South America, indigenous cultures such as the Muisca and the Incas held emeralds in the highest esteem. These were not merely decorative stones but sacred objects, symbols of power, fertility, and protection. The Muisca, for example, believed emeralds to be the tears of their goddess Fura. These gems were integral to their rituals and daily life, representing an unbreakable bond with the natural and spiritual worlds.',
      paragraph3: 'At ADIELA, we are inspired by this legacy. We believe that each emerald carries within it stories of ancient civilizations, of lush mountains where they were formed, and of the skilled hands that bring their beauty to light. Our mission is to honor this heritage by creating jewelry that is not only exquisite but also meaningful.',
      paragraph4: 'Our design philosophy is guided by timeless elegance and meticulous craftsmanship. We strive for:',
      designPoint1: 'Simplicity and Elegance: Creating pieces where the natural beauty of the emerald is the focal point, complemented by the richness of 18k gold.',
      designPoint2: 'Storytelling through Design: Each piece is conceived to evoke the narratives of tradition, prestige, and protection associated with emeralds.',
      designPoint3: 'Lasting Quality: Using only the finest materials and ethical sourcing practices to ensure that your jewelry is a treasure to be cherished for generations.',
      paragraph5: 'We are committed to ethical sourcing, ensuring that our emeralds are mined responsibly and that our practices support the communities from which these precious gems originate. Every piece of ADIELA jewelry is a testament to our dedication to quality, authenticity, and the enduring allure of emeralds.',
      paragraph6: 'Join us in celebrating a legacy of beauty, tradition, and protection, crafted for the modern connoisseur.'
    },
    // Contact Page
    contact: {
      title: 'Connect With Us',
      subtitle: 'Whether you have a question about our collection, a custom design inquiry, or need assistance, our team is here to help.',
      formTitle: 'Send Us a Message',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      sendMessage: 'Send Message',
      emailUs: 'Email Us',
      emailDescription: 'We typically respond within 24 business hours.',
      callUs: 'Call Us',
      callDescription: 'Monday - Friday, 9am - 6pm (GMT-5)',
      visitUs: 'Visit Our Atelier (By Appointment)',
      requestAppointment: 'Request an Appointment',
      faq: 'Frequently Asked Questions'
    },
    // Products Page
    products: {
      title: 'Our Collection',
      subtitle: 'Each piece in our collection is a testament to the enduring beauty of emeralds and the artistry of fine jewelry.',
      loading: 'Our collection is currently being curated.',
      loadingSubtitle: 'Please check back soon to discover our exquisite emerald jewelry.',
      returnHome: 'Return to Homepage',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock'
    }
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      collection: 'Colección',
      journal: 'Revista',
      about: 'Nosotros',
      contact: 'Contacto'
    },
    // Hero Section
    hero: {
      subtitle: 'Joyería con Esmeraldas',
      title: 'Lujo y',
      titleAccent: 'Tradición',
      description: 'Descubre nuestra primera colección de joyería de esmeraldas naturales. Cada pieza cuenta una historia de artesanía, tradición y la belleza de estas magníficas gemas. Engastadas en vibrante oro de 18k, estas esmeraldas llevan el espíritu de los Muisca, quienes las veían como símbolos de vida, luz y conexión sagrada.',
      exploreCollection: 'Explorar Colección',
      ourStory: 'Nuestra Historia',
      scroll: 'Deslizar'
    },
    // Story Section
    story: {
      subtitle: 'Nuestra Primera Colección',
      title: 'El Comienzo de un',
      titleAccent: 'Viaje',
      paragraph1: 'ADIELA nació de una pasión por la belleza atemporal y la artesanía excepcional. Nuestra colección inaugural representa meses de cuidadosa curación, presentando esmeraldas de calidad y brillantez extraordinarias.',
      paragraph2: 'Cada pieza de esta primera colección cuenta la historia de nuestra visión: crear joyería que trascienda las tendencias y se convierta en una parte querida de los momentos más preciosos de tu vida.',
      paragraph3: 'Estas esmeraldas, obtenidas de las mejores minas, están engastadas en monturas de oro de 18k meticulosamente elaboradas que honran tanto la tradición como la elegancia contemporánea.',
      discoverStory: 'Descubre Nuestra Historia'
    },
    // Featured Products
    featured: {
      title: 'Colección',
      titleAccent: 'Destacada',
      subtitle: 'Excelencia Artesanal'
    },
    // Video Section
    video: {
      title: 'Artesanía',
      titleAccent: 'en Movimiento',
      subtitle: 'Detrás de Escena',
      description: 'Observa la meticulosa artesanía detrás de cada pieza ADIELA. Desde la selección de las mejores esmeraldas hasta el pulido final, cada paso encarna nuestro compromiso con la excelencia.'
    },
    // Journal Section
    journal: {
      title: 'De Nuestra',
      titleAccent: 'Revista',
      subtitle: 'Historias y Perspectivas',
      readMore: 'Leer Más'
    },
    // Footer
    footer: {
      newsletter: 'Manténte Informado',
      emailPlaceholder: 'Ingresa tu email',
      subscribe: 'Suscribirse',
      quickLinks: 'Enlaces Rápidos',
      followUs: 'Síguenos',
      copyright: '© 2024 ADIELA. Todos los derechos reservados.',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio'
    },
    // Buttons
    buttons: {
      exploreCollection: 'Explorar Colección',
      viewAll: 'Ver Todo',
      addToCart: 'Agregar al Carrito',
      learnMore: 'Saber Más'
    },
    // About Page
    about: {
      title: 'Nuestra Historia',
      subtitle: 'Tejiendo los hilos de la tradición antigua, la artesanía excepcional y la belleza luminosa de las esmeraldas.',
      sectionTitle1: 'Una Gema de la Tradición y el Prestigio',
      sectionTitle2: 'Inspirado por el Diseño Duradero',
      sectionTitle3: 'Nuestro Compromiso',
      paragraph1: 'Bienvenido a ADIELA. Nuestro viaje comenzó con una profunda apreciación por la esmeralda majestuosa, una gema de raíces profundas en la historia, reverenciada por su color vibrante y símbolo de tradiciones profundamente arraigadas.',
      paragraph2: 'Antes de que los conquistadores españoles llegaran a América del Sur, las culturas indígenas como los Muisca y los Incas valoraban las esmeraldas en la máxima estima. No eran solo piedras decorativas sino objetos sagrados, símbolos de poder, fertilidad y protección. Por ejemplo, los Muisca creían que las esmeraldas eran las lágrimas de su diosa Fura. Estas gemas eran esenciales para sus ritos y vida cotidiana, representando un vínculo indestructible con los mundos natural y espiritual.',
      paragraph3: 'En ADIELA, nos inspiramos en esta herencia. Creemos que cada esmeralda lleva dentro de sí historias de civilizaciones antiguas, de montañas exuberantes donde se formaron, y de manos hábiles que les dan vida a su belleza.',
      paragraph4: 'Nuestra filosofía de diseño está guiada por la elegancia eterna y la artesanía meticulosa. Nos esforzamos por:',
      designPoint1: 'Simplicidad y Elegancia: Crear piezas donde la belleza natural de la esmeralda es el punto focal, complementado por la riqueza de oro de 18k.',
      designPoint2: 'Narración a través del Diseño: Cada pieza se concibe para evocar las narraciones de la tradición, el prestigio y la protección asociadas con las esmeraldas.',
      designPoint3: 'Calidad Duradera: Usando solo los materiales más finos y prácticas de origen ético para garantizar que su joyería sea un tesoro para ser apreciado por generaciones.',
      paragraph5: 'Estamos comprometidos con la fuente ética, asegurándonos de que nuestras esmeraldas se extraigan responsablemente y que nuestras prácticas apoyen a las comunidades de donde provienen estas joyas preciosas.',
      paragraph6: 'Únete a nosotros en celebrar la herencia de la belleza, la tradición y la protección, hecha para el connoisseur moderno.'
    },
    // Contact Page
    contact: {
      title: 'Conecta con Nosotros',
      subtitle: 'Si tienes alguna pregunta sobre nuestra colección, una consulta sobre diseño personalizado o necesitas ayuda, nuestro equipo está aquí para ayudarte.',
      formTitle: 'Envíanos un Mensaje',
      fullName: 'Nombre Completo',
      emailAddress: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje',
      emailUs: 'Email Nosotros',
      emailDescription: 'Normalmente respondemos dentro de las 24 horas hábiles.',
      callUs: 'Llámanos',
      callDescription: 'Lunes a Viernes, de 9am a 6pm (GMT-5)',
      visitUs: 'Visítanos en el Atelier (Por Cita)',
      requestAppointment: 'Solicitar una Cita',
      faq: 'Preguntas Frecuentes'
    },
    // Products Page
    products: {
      title: 'Nuestra Colección',
      subtitle: 'Cada pieza en nuestra colección es un testimonio de la belleza duradera de las esmeraldas y la artesanía de joyería de lujo.',
      loading: 'Nuestra colección está actualmente siendo curada.',
      loadingSubtitle: 'Por favor, compruebe de nuevo pronto para descubrir nuestra joyería de esmeralda exquisita.',
      returnHome: 'Regresar a la Página de Inicio',
      inStock: 'En Stock',
      outOfStock: 'Fuera de Stock'
    }
  }
};

export const LanguageProvider = ({ children, initialLanguage }) => {
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage || 'en');

  // Update language when initialLanguage prop changes
  useEffect(() => {
    if (initialLanguage) {
      console.log('Setting language to:', initialLanguage);
      setCurrentLanguage(initialLanguage);
    }
  }, [initialLanguage]);

  const setLanguage = (language) => {
    console.log('Language changed to:', language);
    setCurrentLanguage(language);
    localStorage.setItem('adiela-language', language);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const value = {
    currentLanguage,
    setLanguage,
    t
  };

  console.log('Current language in context:', currentLanguage);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext; 