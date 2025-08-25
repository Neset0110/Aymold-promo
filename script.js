// Translation data
const translations = {
    tr: {
        // Navigation
        'nav-home': 'Ana Sayfa',
        'nav-services': 'Hizmetler',
        'nav-machines': 'Makine Parkuru',
        'nav-gallery': 'Galeri',
        'nav-about': 'Hakkımızda',
        'nav-contact': 'İletişim',
        'nav-mold-design': 'Kalıp Tasarımı',
        'nav-mold-production': 'Kalıp Üretimi',
        'nav-cnc-machining': 'CNC Fason İşleme',
        'nav-wire-erosion': 'Tel Erezyon Fason Üretim',
        'nav-wire-edm': 'Tel Erezyon Fason Üretim',
        'nav-plastic-injection': 'Plastik Enjeksiyon Fason Baskı',
        'nav-product-design': 'Ürün Tasarımı',
        
        // Hero Section
        'hero-title-1': '#1 Kalıp Üretimi',
        'hero-title-2': 'CNC Makineleri',
        'hero-title-3': 've Hassas İşleme Merkezi',
        'hero-subtitle': 'Yurtiçi ve yurtdışından 500+ firmanın güvendiği kalıp üreticisi - yüksek kalite, hızlı teslimat ve uygun fiyatlarla.',
        'hero-button': 'Platform Turu',
        
        // Hero Slider Additional Slides
        'hero-slide2-title-1': 'Hassas İşleme',
        'hero-slide2-title-2': 'Mikron Seviyesinde',
        'hero-slide2-title-3': 'Kalıp Üretimi',
        'hero-slide2-subtitle': 'En son teknoloji CNC makineleri ile mikron hassasiyetinde işleme. Karmaşık geometriler ve zorlu projeler için uzman çözümler.',
        'hero-slide2-button': 'Hizmetlerimiz',
        
        'hero-slide3-title-1': 'Deneyimli Ustalar',
        'hero-slide3-title-2': 'Kaliteli Makineler',
        'hero-slide3-title-3': 'Profesyonel Çözümler',
        'hero-slide3-subtitle': '30 yıllık deneyimli ustalarımız ve en son teknoloji makinelerimizle. Her proje için özel çözümler ve mükemmel sonuçlar.',
        'hero-slide3-button': 'Teklif Al',
        
        // Trusted By Section
        'trusted-by-title': 'Yurtiçi ve yurtdışından 500+ firmanın güvendiği kalıp üreticisi, küçük işletmelerden büyük kurumsal firmalara kadar',
        
        // Features Section
        'features-title': 'Her proje için hassas kalıp çözümleri, tek adresten',
        'features-subtitle': 'Kaliteli üretim, hızlı teslimat, uygun fiyat ve müşteri memnuniyeti odaklı çalışma prensibi.',
        'features-countries': '+ Ülke',
        'features-countries-desc': 'Yurtiçi ve yurtdışından müşteriler',
        'features-sectors': ' Farklı Sektör',
        'features-sectors-desc': 'Beyaz Eşya, Elektrik Elektronik, Temizlik Ekipmanları, Mutfak Eşyası, Otomotiv, Bakalit Kalıpları',
        'features-experience': ' Yıllık Tecrübe',
        'features-experience-desc': 'Kalıp üretiminde uzmanlık',
        'features-export': '+ Ülkeye Sipariş',
        'features-export-desc': 'Dünya çapında kalıp ihracatı',
        
        // Channels Section
        'channels-title': '6 sektörde kalıp çözümleri',
        'channels-subtitle': 'Beyaz eşya, elektrik elektronik, temizlik ekipmanları, mutfak eşyası, otomotiv ve bakalit kalıpları sektörlerinde kalıp üretimi. Bu seviyede uzmanlığı başka hiçbir firmada bulamazsınız.',
        'channel-white-goods-title': 'Beyaz Eşya Sektörü',
        'channel-white-goods-desc': 'Buzdolabı, çamaşır makinesi, bulaşık makinesi gibi beyaz eşyalar için hassas kalıp üretimi. Dayanıklı ve uzun ömürlü kalıp çözümleri.',
        'channel-white-goods-link': 'Beyaz Eşya Keşfet',
        'channel-electrical-electronics-title': 'Elektrik Elektronik Sektörü',
        'channel-electrical-electronics-desc': 'Elektrik ve elektronik cihazlar için hassas kalıp üretimi. PCB, kasa, bağlantı elemanları ve elektronik parçalar için özel tasarımlar.',
        'channel-electrical-electronics-link': 'Elektrik Elektronik Keşfet',
        'channel-cleaning-equipment-title': 'Temizlik Ekipmanları Sektörü',
        'channel-cleaning-equipment-desc': 'Temizlik makineleri ve ekipmanları için kalıp üretimi. Endüstriyel temizlik çözümleri için özel kalıp tasarımları.',
        'channel-cleaning-equipment-link': 'Temizlik Ekipmanları Keşfet',
        'channel-kitchenware-title': 'Mutfak Eşyası Sektörü',
        'channel-kitchenware-desc': 'Mutfak eşyaları ve aletleri için kalıp üretimi. Mutfak gereçleri, saklama kapları ve mutfak aletleri için özel çözümler.',
        'channel-kitchenware-link': 'Mutfak Eşyası Keşfet',
        'channel-automotive-title': 'Otomotiv Sektörü',
        'channel-automotive-desc': 'Otomotiv parçaları için hassas kalıp üretimi. Motor, şanzıman, fren sistemi ve gövde parçaları için özel çözümler.',
        'channel-automotive-link': 'Otomotiv Keşfet',
        'channel-bakelite-title': 'Bakalit Kalıpları Sektörü',
        'channel-bakelite-desc': 'Bakalit malzeme kalıpları için özel üretim. Elektrik yalıtımı ve ısı direnci için özel tasarım kalıp çözümleri.',
        'channel-bakelite-link': 'Bakalit Kalıpları Keşfet',
        
        // Testimonials Section
        'testimonials-title': 'İyi şirketlerle çalışıyorsunuz',
        'testimonial1-quote': '"AY MOLD ile çalışmaya başladığımızdan beri kalıp kalitemizde %40 artış elde ettik. Hassas işleme kapasiteleri ve hızlı teslimat süreleri ile beklentilerimizi aştılar."',
        'testimonial1-author': 'Mehmet Özkan',
        'testimonial1-position': 'Üretim Müdürü',
        'testimonial1-stat1': '40%',
        'testimonial1-stat1-label': 'Kalite artışı',
        'testimonial1-stat2': '50%',
        'testimonial1-stat2-label': 'Teslimat süresi azalması',
        'testimonial2-quote': '"AY MOLD\'un CNC işleme merkezi ve uzman ekibi ile karmaşık projelerimizi başarıyla tamamladık. 5 eksen işleme kapasiteleri ile zorlu geometrileri bile mükemmel şekilde üretebiliyorlar."',
        'testimonial2-author': 'Fatma Kaya',
        'testimonial2-position': 'Teknik Direktör',
        'testimonial2-stat1': '5X',
        'testimonial2-stat1-label': 'Hassasiyet artışı',
        'testimonial2-stat2': '30%',
        'testimonial2-stat2-label': 'Maliyet azalması',
        
        // CTA Section
        'cta-main-title': 'Tek adres, sonsuz kalıp çözümleri',
        'cta-main-subtitle': 'Müşterilerimizin üretim süreçlerini optimize etmek için, her proje için özel kalıp çözümleri sunarak misyonumuzu yerine getiriyoruz.',
        'cta-main-button': 'Platform Turu',
        
        // Form Fields
        'form-name': 'Ad Soyad *',
        'form-name-placeholder': 'Tam adınız',
        'form-email': 'E-posta *',
        'form-email-placeholder': 'your.email@example.com',
        'form-phone': 'Telefon',
        'form-phone-placeholder': '+90 555 123 45 67',
        'form-company': 'Firma Adı *',
        'form-company-placeholder': 'Firmanızın adı',
        'form-sector': 'Sektör',
        'form-sector-select': 'Sektör Seçiniz',
        'form-sector-white-goods': 'Beyaz Eşya',
        'form-sector-electrical-electronics': 'Elektrik Elektronik',
        'form-sector-cleaning-equipment': 'Temizlik Ekipmanları',
        'form-sector-kitchenware': 'Mutfak Eşyası',
        'form-sector-automotive': 'Otomotiv',
        'form-sector-bakelite': 'Bakalit Kalıpları',
        'form-sector-other': 'Diğer',
        'form-service': 'Hizmet Türü',
        'form-service-select': 'Hizmet Seçiniz',
        'form-service-plastic': 'Plastik Enjeksiyon Kalıbı',
        'form-service-metal': 'Metal Kalıbı',
        'form-service-cnc': 'CNC İşleme',
        'form-service-maintenance': 'Kalıp Bakımı',
        'form-quantity': 'Adet',
        'form-quantity-placeholder': 'Üretim adedi',
        'form-description': 'Proje Açıklaması *',
        'form-description-placeholder': 'Kalıp ihtiyacınızı detaylandırın...',
        'form-file': 'Dosya Ekle (Opsiyonel)',
        'form-file-note': 'PDF, DWG, STEP, STL dosyaları kabul edilir (Max: 10MB)',
        'form-submit': 'Teklif İste',
        'form-success': 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
        'form-error': 'Hata Oluştu',
        'form-error-message': 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
        
        // Quote Section
        'quote-title': 'Ücretsiz Teklif Alın',
        'quote-subtitle': 'Projeniz için özel kalıp çözümlerimiz hakkında bilgi almak için formu doldurun. 24 saat içinde size dönüş yapacağız.',
        'quote-form-name': 'Ad Soyad *',
        'quote-form-company': 'Firma Adı *',
        'quote-form-email': 'E-posta *',
        'quote-form-phone': 'Telefon *',
        'quote-form-sector': 'Sektör',
        'quote-form-quantity': 'Adet',
        'quote-form-description': 'Proje Açıklaması *',
        'quote-form-file': 'Dosya Ekle (Opsiyonel)',
        'quote-form-file-note': 'PDF, DWG, STEP, STL dosyaları kabul edilir (Max: 10MB)',
        'quote-form-submit': 'Teklif İste',
        
        // Services Page
        'services-title': 'Hizmetlerimiz',
        'services-subtitle': 'Kalıp üretimi ve CNC işleme çözümleri',
        'main-services-title': 'Ana Hizmetlerimiz',
        'main-services-subtitle': '20 yıllık deneyimimizle sunduğumuz çözümler',
        'service-plastic-title': 'Plastik Enjeksiyon Kalıpları',
        'service-plastic-desc': 'Yüksek hassasiyetli plastik enjeksiyon kalıpları üretimi. Kompleks geometriler için uzman çözümler.',
        'service-metal-title': 'Metal Kalıpları',
        'service-metal-desc': 'Çelik ve alüminyum kalıpları ile metal parça üretimi. Dayanıklı ve uzun ömürlü kalıp çözümleri.',
        'service-cnc-title': 'CNC İşleme',
        'service-cnc-desc': '5 eksen CNC makineleri ile hassas işleme. Prototip ve seri üretim için profesyonel çözümler.',
        'service-maintenance-title': 'Kalıp Bakımı',
        'service-maintenance-desc': 'Mevcut kalıplarınızın bakımı ve onarımı. Performans optimizasyonu hizmetleri.',
        'industries-title': 'Hizmet Verdiğimiz Sektörler',
        'industries-subtitle': 'Farklı sektörlerde uzmanlaşmış çözümler',
        'industry-white-goods-title': 'Beyaz Eşya',
        'industry-white-goods-desc': 'Buzdolabı, çamaşır makinesi, bulaşık makinesi gibi beyaz eşyalar için hassas kalıp üretimi.',
        'industry-electrical-electronics-title': 'Elektrik Elektronik',
        'industry-electrical-electronics-desc': 'Elektrik ve elektronik cihazlar için özel kalıp tasarımları ve üretimi.',
        'industry-cleaning-equipment-title': 'Temizlik Ekipmanları',
        'industry-cleaning-equipment-desc': 'Temizlik makineleri ve ekipmanları için kalıp üretimi ve özel tasarımlar.',
        'industry-kitchenware-title': 'Mutfak Eşyası',
        'industry-kitchenware-desc': 'Mutfak eşyaları ve aletleri için kalıp üretimi ve özel çözümler.',
        'industry-automotive-title': 'Otomotiv',
        'industry-automotive-desc': 'Otomotiv sektörü için hassas kalıp üretimi ve parça çözümleri.',
        'industry-bakelite-title': 'Bakalit Kalıpları',
        'industry-bakelite-desc': 'Bakalit malzeme kalıpları için özel üretim ve tasarım çözümleri.',
        
        // Footer Sections
        'footer-services-title': 'Hizmetlerimiz',
        'footer-services-mold': 'Kalıp Üretimi',
        'footer-services-cnc': 'CNC İşleme',
        'footer-services-precision': 'Hassas İşleme',
        'footer-services-prototype': 'Prototip Üretimi',
        'footer-services-plastic': 'Plastik Enjeksiyon Kalıpları',
        'footer-services-metal': 'Metal Kalıpları',
        'footer-services-maintenance': 'Kalıp Bakımı',
        'footer-quick-access-title': 'Hızlı Erişim',
        'footer-quick-machines': 'Makine Parkuru',
        'footer-quick-gallery': 'Galeri',
        'footer-quick-contact': 'İletişim',
        'footer-quick-quote': 'Teklif Al',
        'footer-company-title': 'Şirket',
        'footer-company-about': 'Hakkımızda',
        'footer-company-services': 'Hizmetlerimiz',
        'footer-company-design': 'Kalıp Tasarımı',
        'footer-company-injection': 'Plastik Enjeksiyon',
        'footer-contact-title': 'İletişim Bilgileri',
        'footer-contact-address': 'Adres:',
        'footer-contact-phone': 'Telefon:',
        'footer-contact-email': 'E-posta:',
        'footer-contact-address-text': 'Organize Sanayi Bölgesi',
        'footer-contact-address-text-2': 'A Blok No: 15',
        'footer-contact-address-text-3': '34000 İstanbul, Türkiye',
        
        // About Page
        'about-title': 'Hakkımızda',
        'about-subtitle': '20 yılı aşkın deneyimimizle kalıp üretiminde öncü firma',
        'story-title': 'Hikayemiz',
        'story-text-1': 'Hakkımızda Aymold, enjeksiyon kalıp imalatında 25 yılı aşkın tecrübesi, güçlü teknik altyapısı ve uzman kadrosuyla sektöre yön veren firmalardan biridir. Müşterilerimizin ihtiyaçlarını sadece kalıp üretimiyle sınırlı görmüyoruz; projeye ürün tasarımı aşamasından itibaren dahil oluyor, fikirden üretime kadar tüm süreçte çözüm ortağı olarak yer alıyoruz.',
        'story-text-2': 'Modern CAD/CAM sistemleri, 3D modelleme ve mühendislik destekli analizlerle ürünlerin hem fonksiyonel hem de üretilebilir olmasını sağlıyoruz. Ardından kalıp tasarımı sürecinde, dayanıklılık, üretim hızı ve maliyet optimizasyonunu dikkate alarak en verimli çözümleri sunuyoruz. Geniş ve sürekli yenilenen makine parkurumuz, yüksek hassasiyetli CNC işleme merkezlerimiz ve deneyimli operatör kadromuz ile kalıp üretim sürecini kalite standartlarından ödün vermeden gerçekleştiriyoruz. Her bir proje, titizlikle yönetilen kalite kontrol süreçlerinden geçerek müşterilerimize eksiksiz şekilde teslim ediliyor. Aymold olarak biz, sadece kalıp üretmiyoruz; markaların ürünlerini hayata geçiriyor, onların rekabet gücünü artıracak teknik çözümler sunuyoruz. Ürün fikrinden seri üretime uzanan yolculukta yanınızdayız. Aymold –yüksek hassasiyetli enjeksiyon kalıp imalatında güvenilir çözüm ortağınız.',
        'story-years': 'Yıl Deneyim',
        'story-projects': 'Tamamlanan Proje',
        'story-customers': 'Mutlu Müşteri',
        
        // Social Media
        'social-instagram': 'Instagram',
        'social-whatsapp': 'WhatsApp',
        
        // Machines Page
        'machines-cta-title': 'Makine Parkurumuzla Tanışın',
        'machines-cta-subtitle': 'En son teknoloji makinelerimizle projelerinizi hayata geçirin. Ücretsiz teknik danışmanlık için bizimle iletişime geçin.',
        'machines-cta-button1': 'Teklif Alın',
        'machines-cta-button2': 'Galeriyi İnceleyin',
        
        // Gallery Page
        'gallery-cta-title': 'Projelerinizi Hayata Geçirin',
        'gallery-cta-subtitle': 'Galerimizde gördüğünüz kalite ve hassasiyeti projelerinizde de deneyimleyin. Ücretsiz teknik danışmanlık için bizimle iletişime geçin.',
        'gallery-cta-button-1': 'Teklif Alın',
        'gallery-cta-button-2': 'Makine Parkuru',
        
        // Footer Additional
        'footer-company-title': 'Şirket',
        'footer-contact-title': 'İletişim',
        
        // Machines Page - Hero Section
        'machines-hero-title': 'Makine Parkuru',
        'machines-hero-subtitle': 'En son teknoloji CNC makineleri ve hassas işleme merkezleri',
        
        // Machines Page - CNC Section
        'machines-cnc-title': 'CNC İşleme Merkezleri',
        'machines-cnc-subtitle': '5 eksen işleme kapasitesi ile karmaşık geometriler için hassas çözümler',
        
        // Machines Page - Machine Cards
        'machine-5axis-title': '5 Eksen CNC İşleme Merkezi',
        'machine-5axis-desc': 'Karmaşık geometriler ve zorlu projeler için 5 eksen işleme kapasitesi. Mikron hassasiyetinde işleme.',
        'machine-5axis-size': 'Çalışma Alanı: 800x600x500mm',
        'machine-5axis-speed': 'Maksimum Hız: 12,000 RPM',
        'machine-5axis-tools': 'Takım Sayısı: 24',
        
        'machine-3axis-title': '3 Eksen CNC İşleme Merkezi',
        'machine-3axis-desc': 'Yüksek hassasiyetli 3 eksen işleme merkezi. Kalıp üretimi için optimize edilmiş performans.',
        'machine-3axis-size': 'Çalışma Alanı: 1000x800x600mm',
        'machine-3axis-speed': 'Maksimum Hız: 15,000 RPM',
        'machine-3axis-tools': 'Takım Sayısı: 30',
        
        'machine-edm-title': 'EDM Tel Erozyon',
        'machine-edm-desc': 'Yüksek hassasiyetli tel erozyon makinesi. Sert malzemeler için ideal çözüm.',
        'machine-edm-size': 'Çalışma Alanı: 400x300x200mm',
        'machine-edm-accuracy': 'Hassasiyet: ±0.005mm',
        'machine-edm-wire': 'Tel Çapı: 0.1-0.3mm',
        
        // Machines Page - Measurement Equipment
        'machines-measurement-title': 'Ölçüm Ekipmanları',
        'machines-measurement-subtitle': 'Kalite kontrol için gelişmiş ölçüm sistemleri',
        
        'equipment-cmm-title': '3D Koordinat Ölçüm Makinesi',
        'equipment-cmm-desc': 'Yüksek hassasiyetli 3D ölçüm sistemi. Mikron seviyesinde ölçüm kapasitesi.',
        'equipment-cmm-accuracy': 'Hassasiyet: ±0.003mm',
        
        'equipment-microscope-title': 'Dijital Mikroskop',
        'equipment-microscope-desc': 'Yüzey kalitesi kontrolü için dijital mikroskop sistemi.',
        'equipment-microscope-magnification': 'Büyütme: 50x-500x',
        
        'equipment-caliper-title': 'Dijital Kumpas',
        'equipment-caliper-desc': 'Hassas ölçüm için dijital kumpas setleri.',
        'equipment-caliper-accuracy': 'Hassasiyet: ±0.01mm',
        
        // Machines Page - Software Section
        'machines-software-title': 'CAD/CAM Yazılımları',
        'machines-software-subtitle': 'En son teknoloji tasarım ve üretim yazılımları',
        
        'software-cad-title': 'CAD Yazılımları',
        'software-solidworks': 'Solidworks',
        'software-cimatron': 'Cimatron',
        
        'software-cam-title': 'CAM Yazılımları',
        'software-esprit': 'Esprit TNG',
        'software-cimatron': 'Cimatron',
        
        'software-simulation-title': 'Simülasyon Yazılımları',
        'software-flow': 'Moldflow',
        'software-simulate': 'SolidWorks Simulation',
        'software-ansys': 'ANSYS',
        
        // Gallery Page - Hero Section
        'gallery-hero-title': 'Galeri',
        'gallery-hero-subtitle': 'Tamamlanan projelerimizden örnekler ve çalışma ortamımız',
        
        // Gallery Page - Filter Buttons
        'filter-all': 'Tümü',
        'filter-molds': 'Kalıplar',
        'filter-machines': 'Makineler',
        'filter-projects': 'Projeler',
        'filter-workshop': 'Atölye',
        
        // Gallery Page - Gallery Items
        'gallery-mold1-title': 'Beyaz Eşya Kalıbı',
        'gallery-mold1-desc': 'Buzdolabı parçası için üretilen hassas kalıp',
        'gallery-mold2-title': 'Elektrik Elektronik Kalıbı',
        'gallery-mold2-desc': 'Elektrik cihazları için özel tasarım kalıp',
        'gallery-mold3-title': 'Temizlik Ekipmanları Kalıbı',
        'gallery-mold3-desc': 'Temizlik makineleri için özel tasarım kalıp',
        
        'gallery-machine1-title': '5 Eksen CNC Makinesi',
        'gallery-machine1-desc': 'Karmaşık geometriler için 5 eksen işleme',
        'gallery-machine2-title': 'EDM Tel Erozyon',
        'gallery-machine2-desc': 'Sert malzemeler için hassas işleme',
        'gallery-machine3-title': '3 Eksen CNC Makinesi',
        'gallery-machine3-desc': 'Yüksek hassasiyetli 3 eksen işleme',
        
        'gallery-project1-title': 'Mutfak Eşyası Projesi',
        'gallery-project1-desc': 'Mutfak gereçleri için üretilen özel kalıp',
        'gallery-project2-title': 'Bakalit Kalıpları Projesi',
        'gallery-project2-desc': 'Elektrik yalıtımı için üretilen bakalit kalıp',
        'gallery-project3-title': 'Otomotiv Projesi',
        'gallery-project3-desc': 'Otomotiv parçaları için üretilen hassas kalıp',
        
        'gallery-workshop1-title': 'Ana Atölye',
        'gallery-workshop1-desc': 'Modern CNC makineleri ile donatılmış atölye',
        'gallery-workshop2-title': 'Kalite Kontrol',
        'gallery-workshop2-desc': 'Hassas ölçüm ekipmanları ile kalite kontrol',
        'gallery-workshop3-title': 'Tasarım Ofisi',
        'gallery-workshop3-desc': 'CAD/CAM yazılımları ile tasarım süreci',
        
        'gallery-view-btn': 'Görüntüle',
        
        // Footer Links
        'footer-mold-design': 'Kalıp Tasarımı',
        'footer-mold-production': 'Kalıp Üretimi',
        'footer-cnc-machining': 'CNC Fason İşleme',
        'footer-wire-edm': 'Tel Erezyon',
        'footer-plastic-injection': 'Plastik Enjeksiyon',
        'footer-product-design': 'Ürün Tasarımı',
        'footer-about': 'Hakkımızda',
        'footer-machines': 'Makine Parkuru',
        'footer-gallery': 'Galeri',
        'footer-contact': 'İletişim',
        'footer-address': 'İkitelli O.S.B Tormak San. Site. N Blok No: 4, Başakşehir İST.',
        
        // CNC Outsourcing Page
        'cnc_outsourcing.tech4_description': 'Solidworks, Cimatron, Esprit TNG',
        
        // Service Mold Design Page
        'service-mold-design-tech1-desc': 'Solidworks, Cimatron'
    },
    ru: {
        // Navigation
        'nav-home': 'Главная',
        'nav-services': 'Услуги',
        'nav-machines': 'Парк Станков',
        'nav-gallery': 'Галерея',
        'nav-about': 'О нас',
        'nav-contact': 'Контакты',
        'nav-mold-design': 'Проектирование Пресс-форм',
        'nav-mold-production': 'Производство Пресс-форм',
        'nav-cnc-machining': 'Обработка с ЧПУ',
        'nav-wire-erosion': 'Электроэрозионная Проволока',
        'nav-wire-edm': 'Электроэрозионная Проволока',
        'nav-plastic-injection': 'Пластиковое Литье',
        'nav-product-design': 'Проектирование Продукта',
        
        // Hero Section
        'hero-title-1': '#1 Производство Пресс-форм',
        'hero-title-2': 'Станки с ЧПУ',
        'hero-title-3': 'и Центр Точной Обработки',
        'hero-subtitle': 'Доверяют более 500 компаний из внутреннего и международного рынков - высокое качество, быстрая доставка и конкурентоспособные цены.',
        'hero-button': 'Экскурсия по Платформе',
        
        // Hero Slider Additional Slides
        'hero-slide2-title-1': 'Точная Обработка',
        'hero-slide2-title-2': 'Микронный Уровень',
        'hero-slide2-title-3': 'Производство Пресс-форм',
        'hero-slide2-subtitle': 'Микронная точность обработки на станках с ЧПУ последнего поколения. Экспертные решения для сложной геометрии и сложных проектов.',
        'hero-slide2-button': 'Наши Услуги',
        
        'hero-slide3-title-1': 'Опытные Мастера',
        'hero-slide3-title-2': 'Качественные Станки',
        'hero-slide3-title-3': 'Профессиональные Решения',
        'hero-slide3-subtitle': 'С нашими опытными мастерами и станками последнего поколения. Индивидуальные решения и отличные результаты для каждого проекта.',
        'hero-slide3-button': 'Получить Предложение',
        
        // Trusted By Section
        'trusted-by-title': 'Доверяют более 500 компаний из внутреннего и международного рынков, от малых предприятий до крупных корпоративных компаний',
        
        // Features Section
        'features-title': 'Точные решения для пресс-форм для каждого проекта, все в одном месте',
        'features-subtitle': 'Качественное производство, быстрая доставка, конкурентоспособные цены и принцип работы, ориентированный на удовлетворенность клиентов.',
        'features-countries': '+ Страны',
        'features-countries-desc': 'Клиенты из внутреннего и международного рынков',
        'features-sectors': ' Различных Секторов',
        'features-sectors-desc': 'Бытовая техника, Электроника, Оборудование для уборки, Кухонная утварь, Автомобильная промышленность, Пресс-формы Бакелита',
        'features-experience': ' Лет Опыта',
        'features-experience-desc': 'Экспертиза в производстве пресс-форм',
        'features-export': '+ Страны Заказов',
        'features-export-desc': 'Мировой экспорт пресс-форм',
        
        // Channels Section
        'channels-title': 'Решения для пресс-форм в 6 секторах',
        'channels-subtitle': 'Производство пресс-форм в секторах бытовой техники, электроники, оборудования для уборки, кухонной утвари, автомобильной промышленности и пресс-форм бакелита. Такого уровня экспертизы вы не найдете ни в одной другой компании.',
        'channel-white-goods-title': 'Сектор Бытовая Техника',
        'channel-white-goods-desc': 'Точное производство пресс-форм для бытовой техники, такой как холодильники, стиральные машины, посудомоечные машины. Долговечные и долговечные решения для пресс-форм.',
        'channel-white-goods-link': 'Изучить Бытовая Техника',
        'channel-electrical-electronics-title': 'Сектор Электроника',
        'channel-electrical-electronics-desc': 'Точное производство пресс-форм для электрических и электронных устройств. Специальные конструкции для печатных плат, корпусов, соединительных элементов и электронных деталей.',
        'channel-electrical-electronics-link': 'Изучить Электронику',
        'channel-cleaning-equipment-title': 'Сектор Оборудование для Уборки',
        'channel-cleaning-equipment-desc': 'Производство пресс-форм для машин и оборудования для уборки. Специальные конструкции пресс-форм для промышленных решений для уборки.',
        'channel-cleaning-equipment-link': 'Изучить Оборудование для Уборки',
        'channel-kitchenware-title': 'Сектор Кухонная Утварь',
        'channel-kitchenware-desc': 'Производство пресс-форм для кухонных предметов и инструментов. Специальные решения для кухонных принадлежностей, контейнеров для хранения и кухонных инструментов.',
        'channel-kitchenware-link': 'Изучить Кухонная Утварь',
        'channel-automotive-title': 'Автомобильный Сектор',
        'channel-automotive-desc': 'Точное производство пресс-форм для автомобильных деталей. Специальные решения для двигателя, трансмиссии, тормозной системы и кузовных деталей.',
        'channel-automotive-link': 'Изучить Автомобильный',
        'channel-bakelite-title': 'Сектор Пресс-формы Бакелита',
        'channel-bakelite-desc': 'Специальное производство для пресс-форм из бакелитового материала. Специальные решения для пресс-форм для электрической изоляции и термостойкости.',
        'channel-bakelite-link': 'Изучить Пресс-формы Бакелита',
        
        // Testimonials Section
        'testimonials-title': 'Вы работаете с хорошими компаниями',
        'testimonial1-quote': '"С тех пор как мы начали работать с AY MOLD, мы достигли 40% увеличения качества наших пресс-форм. Они превзошли наши ожидания своими возможностями точной обработки и быстрыми сроками доставки."',
        'testimonial1-author': 'Мехмет Озкан',
        'testimonial1-position': 'Менеджер по Производству',
        'testimonial1-stat1': '40%',
        'testimonial1-stat1-label': 'Увеличение качества',
        'testimonial1-stat2': '50%',
        'testimonial1-stat2-label': 'Сокращение времени доставки',
        'testimonial2-quote': '"Мы успешно завершили наши сложные проекты с центром обработки с ЧПУ AY MOLD и экспертной командой. Они могут производить даже сложную геометрию идеально с их возможностями 5-осевой обработки."',
        'testimonial2-author': 'Фатма Кая',
        'testimonial2-position': 'Технический Директор',
        'testimonial2-stat1': '5X',
        'testimonial2-stat1-label': 'Увеличение точности',
        'testimonial2-stat2': '30%',
        'testimonial2-stat2-label': 'Сокращение затрат',
        
        // CTA Section
        'cta-main-title': 'Один адрес, бесконечные решения для пресс-форм',
        'cta-main-subtitle': 'Мы выполняем нашу миссию, предлагая специальные решения для пресс-форм для каждого проекта, чтобы оптимизировать производственные процессы наших клиентов.',
        'cta-main-button': 'Экскурсия по Платформе',
        
        // Form Fields
        'form-name': 'Имя *',
        'form-name-placeholder': 'Ваше полное имя',
        'form-email': 'Электронная почта *',
        'form-email-placeholder': 'your.email@example.com',
        'form-phone': 'Телефон',
        'form-phone-placeholder': '+90 555 123 45 67',
        'form-company': 'Компания',
        'form-company-placeholder': 'Название вашей компании',
        'form-sector': 'Сектор',
        'form-sector-select': 'Выберите Сектор',
        'form-sector-white-goods': 'Бытовая Техника',
        'form-sector-electrical-electronics': 'Электроника',
        'form-sector-cleaning-equipment': 'Оборудование для Уборки',
        'form-sector-kitchenware': 'Кухонная Утварь',
        'form-sector-automotive': 'Автомобильная промышленность',
        'form-sector-bakelite': 'Пресс-формы Бакелита',
        'form-sector-other': 'Другое',
        'form-service': 'Услуга',
        
        // Machines Page
        'machines-cta-title': 'Познакомьтесь с Нашим Парком Станков',
        'machines-cta-subtitle': 'Воплотите в жизнь ваши проекты с нашими станками последнего поколения. Свяжитесь с нами для бесплатной технической консультации.',
        'machines-cta-button1': 'Получить Предложение',
        'machines-cta-button2': 'Посмотреть Галерею',
        
        // Gallery Page
        'gallery-cta-title': 'Воплотите в Жизнь Ваши Проекты',
        'gallery-cta-subtitle': 'Испытайте качество и точность, которые вы видите в нашей галерее, в ваших проектах тоже. Свяжитесь с нами для бесплатной технической консультации.',
        'gallery-cta-button-1': 'Получить Предложение',
        'gallery-cta-button-2': 'Парк Станков',
        
        // Footer Additional
        'footer-company-title': 'Компания',
        'footer-contact-title': 'Контакты',
        
        // Machines Page - Hero Section
        'machines-hero-title': 'Парк Станков',
        'machines-hero-subtitle': 'Станки с ЧПУ последнего поколения и центры точной обработки',
        
        // Machines Page - CNC Section
        'machines-cnc-title': 'Центры Обработки с ЧПУ',
        'machines-cnc-subtitle': 'Точные решения для сложной геометрии с возможностью 5-осевой обработки',
        
        // Machines Page - Machine Cards
        'machine-5axis-title': '5-Осевой Центр Обработки с ЧПУ',
        'machine-5axis-desc': 'Возможность 5-осевой обработки для сложной геометрии и сложных проектов. Обработка с микронной точностью.',
        'machine-5axis-size': 'Рабочая Область: 800x600x500мм',
        'machine-5axis-speed': 'Максимальная Скорость: 12,000 об/мин',
        'machine-5axis-tools': 'Количество Инструментов: 24',
        
        'machine-3axis-title': '3-Осевой Центр Обработки с ЧПУ',
        'machine-3axis-desc': 'Высокоточный 3-осевой центр обработки. Производительность оптимизирована для производства пресс-форм.',
        'machine-3axis-size': 'Рабочая Область: 1000x800x600мм',
        'machine-3axis-speed': 'Максимальная Скорость: 15,000 об/мин',
        'machine-3axis-tools': 'Количество Инструментов: 30',
        
        'machine-edm-title': 'Электроэрозионная Проволока',
        'machine-edm-desc': 'Высокоточная машина электроэрозионной проволоки. Идеальное решение для твердых материалов.',
        'machine-edm-size': 'Рабочая Область: 400x300x200мм',
        'machine-edm-accuracy': 'Точность: ±0.005мм',
        'machine-edm-wire': 'Диаметр Проволоки: 0.1-0.3мм',
        
        // Machines Page - Measurement Equipment
        'machines-measurement-title': 'Измерительное Оборудование',
        'machines-measurement-subtitle': 'Передовые измерительные системы для контроля качества',
        
        'equipment-cmm-title': '3D Координатно-измерительная Машина',
        'equipment-cmm-desc': 'Высокоточная 3D измерительная система. Возможность измерения на микронном уровне.',
        'equipment-cmm-accuracy': 'Точность: ±0.003мм',
        
        'equipment-microscope-title': 'Цифровой Микроскоп',
        'equipment-microscope-desc': 'Система цифрового микроскопа для контроля качества поверхности.',
        'equipment-microscope-magnification': 'Увеличение: 50x-500x',
        
        'equipment-caliper-title': 'Цифровой Штангенциркуль',
        'equipment-caliper-desc': 'Наборы цифровых штангенциркулей для точного измерения.',
        'equipment-caliper-accuracy': 'Точность: ±0.01мм',
        
        // Machines Page - Software Section
        'machines-software-title': 'CAD/CAM Программное Обеспечение',
        'machines-software-subtitle': 'Программное обеспечение для проектирования и производства последнего поколения',
        
        'software-cad-title': 'CAD Программное Обеспечение',
        'software-solidworks': 'Solidworks',
        'software-cimatron': 'Cimatron',
        
        'software-cam-title': 'CAM Программное Обеспечение',
        'software-esprit': 'Esprit TNG',
        'software-cimatron': 'Cimatron',
        
        'software-simulation-title': 'Программное Обеспечение для Симуляции',
        'software-flow': 'Moldflow',
        'software-simulate': 'SolidWorks Simulation',
        'software-ansys': 'ANSYS',
        
        // Gallery Page - Hero Section
        'gallery-hero-title': 'Галерея',
        'gallery-hero-subtitle': 'Примеры наших завершенных проектов и рабочей среды',
        
        // Gallery Page - Filter Buttons
        'filter-all': 'Все',
        'filter-molds': 'Пресс-формы',
        'filter-machines': 'Станки',
        'filter-projects': 'Проекты',
        'filter-workshop': 'Мастерская',
        
        // Gallery Page - Gallery Items
        'gallery-mold1-title': 'Пресс-форма для Бытовой Техники',
        'gallery-mold1-desc': 'Точная пресс-форма, изготовленная для деталей холодильника',
        'gallery-mold2-title': 'Пресс-форма для Электроники',
        'gallery-mold2-desc': 'Специальная пресс-форма для электрических устройств',
        'gallery-mold3-title': 'Пресс-форма для Оборудования Уборки',
        'gallery-mold3-desc': 'Специальная пресс-форма для машин уборки',
        
        'gallery-machine1-title': '5-Осевой Станок с ЧПУ',
        'gallery-machine1-desc': '5-осевая обработка для сложной геометрии',
        'gallery-machine2-title': 'Электроэрозионная Проволока',
        'gallery-machine2-desc': 'Точная обработка для твердых материалов',
        'gallery-machine3-title': '3-Осевой Станок с ЧПУ',
        'gallery-machine3-desc': 'Высокоточная 3-осевая обработка',
        
        'gallery-project1-title': 'Проект Кухонная Утварь',
        'gallery-project1-desc': 'Специальная пресс-форма, изготовленная для кухонных принадлежностей',
        'gallery-project2-title': 'Проект Пресс-формы Бакелита',
        'gallery-project2-desc': 'Пресс-форма бакелита, изготовленная для электрической изоляции',
        'gallery-project3-title': 'Автомобильный Проект',
        'gallery-project3-desc': 'Точная пресс-форма, изготовленная для автомобильных деталей',
        
        'gallery-workshop1-title': 'Главная Мастерская',
        'gallery-workshop1-desc': 'Мастерская, оснащенная современными станками с ЧПУ',
        'gallery-workshop2-title': 'Контроль Качества',
        'gallery-workshop2-desc': 'Контроль качества с точным измерительным оборудованием',
        'gallery-workshop3-title': 'Конструкторский Офис',
        'gallery-workshop3-desc': 'Процесс проектирования с CAD/CAM программным обеспечением',
        
        'gallery-view-btn': 'Просмотр',
        
        // Footer Links
        'footer-mold-design': 'Проектирование Пресс-форм',
        'footer-mold-production': 'Производство Пресс-форм',
        'footer-cnc-machining': 'Обработка с ЧПУ',
        'footer-wire-edm': 'Электроэрозионная Проволока',
        'footer-plastic-injection': 'Пластиковое Литье',
        'footer-product-design': 'Проектирование Продукта',
        'footer-about': 'О нас',
        'footer-machines': 'Парк Станков',
        'footer-gallery': 'Галерея',
        'footer-contact': 'Контакты',
        'footer-address': 'Икителли О.С.Б Тормак Сан. Сайт. Н Блок № 4, Башакшехир ИСТ.',
        
        'form-service-select': 'Выберите Услугу',
        'form-service-plastic': 'Пластиковая Пресс-форма для Литья',
        'form-service-metal': 'Металлическая Пресс-форма',
        'form-service-cnc': 'Обработка с ЧПУ',
        'form-service-maintenance': 'Обслуживание Пресс-форм',
        'form-quantity': 'Количество',
        'form-quantity-placeholder': 'Количество продукции',
        'form-description': 'Описание Проекта *',
        'form-description-placeholder': 'Детализируйте вашу потребность в пресс-форме...',
        'form-file': 'Добавить Файл (Опционально)',
        'form-file-note': 'Принимаются файлы PDF, DWG, STEP, STL (Макс: 10МБ)',
        'form-submit': 'Запросить Предложение',
        'form-success': 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.',
        'form-error': 'Произошла Ошибка',
        'form-error-message': 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
        
        // Quote Section
        'quote-title': 'Получить Бесплатное Предложение',
        'quote-subtitle': 'Заполните форму, чтобы получить информацию о наших специальных решениях для пресс-форм для вашего проекта. Мы свяжемся с вами в течение 24 часов.',
        'quote-form-name': 'Имя *',
        'quote-form-company': 'Компания *',
        'quote-form-email': 'Электронная почта *',
        'quote-form-phone': 'Телефон *',
        'quote-form-sector': 'Сектор',
        'quote-form-quantity': 'Количество',
        'quote-form-description': 'Описание Проекта *',
        'quote-form-file': 'Добавить Файл (Опционально)',
        'quote-form-file-note': 'Принимаются файлы PDF, DWG, STEP, STL (Макс: 10МБ)',
        'quote-form-submit': 'Запросить Предложение',
        
        // Services Page
        'services-title': 'Наши Услуги',
        'services-subtitle': 'Производство пресс-форм и решения с ЧПУ',
        'main-services-title': 'Наши Основные Услуги',
        'main-services-subtitle': 'Профессиональные решения с 20-летним опытом',
        'service-plastic-title': 'Пластиковые Пресс-формы для Литья',
        'service-plastic-desc': 'Высокоточное производство пластиковых пресс-форм. Экспертные решения для сложных геометрий.',
        'service-metal-title': 'Металлические Пресс-формы',
        'service-metal-desc': 'Стальные и алюминиевые пресс-формы для производства металлических деталей. Долговечные и долговечные решения.',
        'service-cnc-title': 'Обработка с ЧПУ',
        'service-cnc-desc': 'Точная обработка с 5-осевыми станками с ЧПУ. Профессиональные решения для прототипов и серийных производств.',
        'service-maintenance-title': 'Обслуживание Пресс-форм',
        'service-maintenance-desc': 'Обслуживание и ремонт ваших существующих пресс-форм. Услуги по оптимизации производительности.',
        'industries-title': 'Секторы, в которых мы работаем',
        'industries-subtitle': 'Специализированные решения в разных секторах',
        'industry-white-goods-title': 'Бытовая Техника',
        'industry-white-goods-desc': 'Точное производство пресс-форм для бытовой техники, такой как холодильники, стиральные машины, посудомоечные машины.',
        'industry-electrical-electronics-title': 'Электроника',
        'industry-electrical-electronics-desc': 'Специальные дизайны и производство для электрических и электронных устройств.',
        'industry-cleaning-equipment-title': 'Оборудование для Уборки',
        'industry-cleaning-equipment-desc': 'Производство пресс-форм и специальные дизайны для машин и оборудования для уборки.',
        'industry-kitchenware-title': 'Кухонная Утварь',
        'industry-kitchenware-desc': 'Производство пресс-форм и специальные решения для кухонных предметов и инструментов.',
        'industry-automotive-title': 'Автомобильная промышленность',
        'industry-automotive-desc': 'Точное производство пресс-форм и решения для автомобильной промышленности.',
        'industry-bakelite-title': 'Пресс-формы Бакелита',
        'industry-bakelite-desc': 'Специальное производство и дизайн-решения для пресс-форм из бакелитового материала.',
        
        // Footer Sections
        'footer-services-title': 'Наши Услуги',
        'footer-services-mold': 'Производство Пресс-форм',
        'footer-services-cnc': 'Обработка с ЧПУ',
        'footer-services-precision': 'Точная Обработка',
        'footer-services-prototype': 'Производство Прототипов',
        'footer-services-plastic': 'Пластиковые Пресс-формы для Литья',
        'footer-services-metal': 'Металлические Пресс-формы',
        'footer-services-maintenance': 'Обслуживание Пресс-форм',
        'footer-quick-access-title': 'Быстрый Доступ',
        'footer-quick-machines': 'Парк Станков',
        'footer-quick-gallery': 'Галерея',
        'footer-quick-contact': 'Контакты',
        'footer-quick-quote': 'Получить Предложение',
        'footer-company-title': 'Компания',
        'footer-company-about': 'О нас',
        'footer-company-services': 'Наши Услуги',
        'footer-company-design': 'Проектирование Пресс-форм',
        'footer-company-injection': 'Пластиковое Литье',
        'footer-contact-title': 'Контактная Информация',
        'footer-contact-address': 'Адрес:',
        'footer-contact-phone': 'Телефон:',
        'footer-contact-email': 'Электронная почта:',
        'footer-contact-address-text': 'Организованная Промышленная Зона',
        'footer-contact-address-text-2': 'Стамбул, Турция',
        'footer-contact-address-text-3': 'Блок А, № 15, 34000, Стамбул, Турция',
        
        // CNC Outsourcing Page
        'cnc_outsourcing.tech4_description': 'Solidworks, Cimatron, Esprit TNG',
        
        // Service Mold Design Page
        'service-mold-design-tech1-desc': 'Solidworks, Cimatron',
        
        // About Page
        'about-title': 'О нас',
        'about-subtitle': 'Ведущая компания в производстве пресс-форм с более чем 20-летним опытом',
        'story-title': 'Наша История',
        'story-text-1': 'О нас Aymold - одна из компаний, ведущих сектор в производстве пресс-форм для литья под давлением с более чем 25-летним опытом, сильной технической инфраструктурой и экспертной командой. Мы не рассматриваем потребности наших клиентов ограниченными только производством пресс-форм; мы участвуем в проекте с этапа проектирования продукта, действуя как партнер-решение на протяжении всего процесса от идеи до производства.',
        'story-text-2': 'С современными системами CAD/CAM, 3D-моделированием и инженерно-поддерживаемым анализом мы обеспечиваем, чтобы продукты были как функциональными, так и производимыми. Затем в процессе проектирования пресс-форм мы предлагаем наиболее эффективные решения, учитывая долговечность, скорость производства и оптимизацию затрат. С нашим обширным и постоянно обновляемым парком станков, высокоточными центрами обработки с ЧПУ и опытным персоналом операторов мы осуществляем процесс производства пресс-форм без компромиссов в стандартах качества. Каждый проект проходит через тщательно управляемые процессы контроля качества и доставляется нашим клиентам полностью. Как Aymold, мы не просто производим пресс-формы; мы воплощаем в жизнь продукты брендов, предлагая технические решения, которые увеличат их конкурентную силу. Мы с вами на пути от идеи продукта до массового производства. Aymold – ваш надежный партнер-решение в высокоточном производстве пресс-форм для литья под давлением.',
        'story-years': 'Лет Опыта',
        'story-projects': 'Завершенных Проектов',
        'story-customers': 'Довольных Клиентов',
        
        // Social Media
        'social-instagram': 'Instagram',
        'social-whatsapp': 'WhatsApp'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-machines': 'Machine Park',
        'nav-gallery': 'Gallery',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'nav-mold-design': 'Mold Design',
        'nav-mold-production': 'Mold Production',
        'nav-cnc-machining': 'CNC Machining',
        'nav-wire-erosion': 'Wire EDM Production',
        'nav-wire-edm': 'Wire EDM Production',
        'nav-plastic-injection': 'Plastic Injection Molding',
        'nav-product-design': 'Product Design',
        
        // Hero Section
        'hero-title-1': '#1 Mold Manufacturing',
        'hero-title-2': 'CNC Machines',
        'hero-title-3': 'and Precision Processing Center',
        'hero-subtitle': 'Trusted by 500+ companies from domestic and international markets - high quality, fast delivery and competitive prices.',
        'hero-button': 'Platform Tour',
        
        // Hero Slider Additional Slides
        'hero-slide2-title-1': 'Precision Processing',
        'hero-slide2-title-2': 'Micron Level',
        'hero-slide2-title-3': 'Mold Manufacturing',
        'hero-slide2-subtitle': 'Micron precision processing with latest technology CNC machines. Expert solutions for complex geometries and challenging projects.',
        'hero-slide2-button': 'Our Services',
        
        'hero-slide3-title-1': 'Expert Engineers',
        'hero-slide3-title-2': 'Advanced Technology',
        'hero-slide3-title-3': 'Premium Quality',
        'hero-slide3-subtitle': 'With our expert engineers and state-of-the-art technology. Custom solutions and exceptional results for every project.',
        'hero-slide3-button': 'Get Quote',
        
        // Trusted By Section
        'trusted-by-title': 'Trusted by 500+ companies from domestic and international markets, from small businesses to large corporate companies',
        
        // Features Section
        'features-title': 'Precise mold solutions for every project, all in one place',
        'features-subtitle': 'Quality production, fast delivery, competitive prices and customer satisfaction focused working principle.',
        'features-countries': '+ Countries',
        'features-countries-desc': 'Customers from domestic and international markets',
        'features-sectors': ' Different Sectors',
        'features-sectors-desc': 'White Goods, Electrical Electronics, Cleaning Equipment, Kitchenware, Automotive, Bakelite Molds',
        'features-experience': ' Years Experience',
        'features-experience-desc': 'Expertise in mold manufacturing',
        'features-export': '+ Countries Orders',
        'features-export-desc': 'Worldwide mold export',
        
        // Channels Section
        'channels-title': 'Mold solutions in 6 sectors',
        'channels-subtitle': 'Mold manufacturing in white goods, electrical electronics, cleaning equipment, kitchenware, automotive and bakelite molds sectors. You won\'t find this level of expertise in any other company.',
        'channel-white-goods-title': 'White Goods Sector',
        'channel-white-goods-desc': 'Precision mold manufacturing for white goods like refrigerators, washing machines, dishwashers. Durable and long-lasting mold solutions.',
        'channel-white-goods-link': 'Explore White Goods',
        'channel-electrical-electronics-title': 'Electrical Electronics Sector',
        'channel-electrical-electronics-desc': 'Precision mold manufacturing for electrical and electronic devices. Special designs for PCB, housing, connection components and electronic parts.',
        'channel-electrical-electronics-link': 'Explore Electrical Electronics',
        'channel-cleaning-equipment-title': 'Cleaning Equipment Sector',
        'channel-cleaning-equipment-desc': 'Mold manufacturing for cleaning machines and equipment. Special mold designs for industrial cleaning solutions.',
        'channel-cleaning-equipment-link': 'Explore Cleaning Equipment',
        'channel-kitchenware-title': 'Kitchenware Sector',
        'channel-kitchenware-desc': 'Mold manufacturing for kitchen items and tools. Special solutions for kitchen utensils, storage containers and kitchen tools.',
        'channel-kitchenware-link': 'Explore Kitchenware',
        'channel-automotive-title': 'Automotive Sector',
        'channel-automotive-desc': 'Precision mold manufacturing for automotive parts. Special solutions for engine, transmission, brake system and body parts.',
        'channel-automotive-link': 'Explore Automotive',
        'channel-bakelite-title': 'Bakelite Molds Sector',
        'channel-bakelite-desc': 'Special manufacturing for bakelite material molds. Special design mold solutions for electrical insulation and heat resistance.',
        'channel-bakelite-link': 'Explore Bakelite Molds',
        
        // Testimonials Section
        'testimonials-title': 'You work with good companies',
        'testimonial1-quote': '"Since we started working with AY MOLD, we have achieved a 40% increase in our mold quality. They exceeded our expectations with their precision processing capabilities and fast delivery times."',
        'testimonial1-author': 'Mehmet Ozkan',
        'testimonial1-position': 'Production Manager',
        'testimonial1-stat1': '40%',
        'testimonial1-stat1-label': 'Quality increase',
        'testimonial1-stat2': '50%',
        'testimonial1-stat2-label': 'Delivery time reduction',
        'testimonial2-quote': '"We successfully completed our complex projects with AY MOLD\'s CNC processing center and expert team. They can produce even challenging geometries perfectly with their 5-axis processing capabilities."',
        'testimonial2-author': 'Fatma Kaya',
        'testimonial2-position': 'Technical Director',
        'testimonial2-stat1': '5X',
        'testimonial2-stat1-label': 'Precision increase',
        'testimonial2-stat2': '30%',
        'testimonial2-stat2-label': 'Cost reduction',
        
        // CTA Section
        'cta-main-title': 'One address, endless mold solutions',
        'cta-main-subtitle': 'We fulfill our mission by offering special mold solutions for every project to optimize our customers\' production processes.',
        'cta-main-button': 'Platform Tour',
        
        // Form Fields
        'form-name': 'Full Name *',
        'form-name-placeholder': 'Your full name',
        'form-email': 'Email *',
        'form-email-placeholder': 'your.email@example.com',
        'form-phone': 'Phone',
        'form-phone-placeholder': '+90 555 123 45 67',
        'form-company': 'Company Name *',
        'form-company-placeholder': 'Your company\'s name',
        'form-sector': 'Sector',
        'form-sector-select': 'Select Sector',
        'form-sector-white-goods': 'White Goods',
        'form-sector-electrical-electronics': 'Electrical Electronics',
        'form-sector-cleaning-equipment': 'Cleaning Equipment',
        'form-sector-kitchenware': 'Kitchenware',
        'form-sector-automotive': 'Automotive',
        'form-sector-bakelite': 'Bakelite Molds',
        'form-sector-other': 'Other',
        'form-service': 'Service Type',
        'form-service-select': 'Select Service',
        'form-service-plastic': 'Plastic Injection Mold',
        'form-service-metal': 'Metal Mold',
        'form-service-cnc': 'CNC Machining',
        'form-service-maintenance': 'Mold Maintenance',
        'form-quantity': 'Quantity',
        'form-quantity-placeholder': 'Production quantity',
        'form-description': 'Project Description *',
        'form-description-placeholder': 'Detail your mold requirements...',
        'form-file': 'Add File (Optional)',
        'form-file-note': 'PDF, DWG, STEP, STL files accepted (Max: 10MB)',
        'form-submit': 'Request Quote',
        'form-success': 'Your message has been sent successfully! We will get back to you as soon as possible.',
        'form-error': 'Error Occurred',
        'form-error-message': 'An error occurred while sending the message. Please try again.',
        
        // Machines Page
        'machines-cta-title': 'Meet Our Machine Park',
        'machines-cta-subtitle': 'Bring your projects to life with our latest technology machines. Contact us for free technical consultation.',
        'machines-cta-button1': 'Get Quote',
        'machines-cta-button2': 'View Gallery',
        
        // Gallery Page
        'gallery-cta-title': 'Bring Your Projects to Life',
        'gallery-cta-subtitle': 'Experience the quality and precision you see in our gallery in your projects too. Contact us for free technical consultation.',
        'gallery-cta-button-1': 'Get Quote',
        'gallery-cta-button-2': 'Machine Park',
        
        // Footer Additional
        'footer-company-title': 'Company',
        'footer-contact-title': 'Contact',
        
        // Machines Page - Hero Section
        'machines-hero-title': 'Machine Park',
        'machines-hero-subtitle': 'Latest technology CNC machines and precision processing centers',
        
        // Machines Page - CNC Section
        'machines-cnc-title': 'CNC Processing Centers',
        'machines-cnc-subtitle': 'Precise solutions for complex geometries with 5-axis processing capability',
        
        // Machines Page - Machine Cards
        'machine-5axis-title': '5-Axis CNC Processing Center',
        'machine-5axis-desc': '5-axis processing capability for complex geometries and challenging projects. Micron precision processing.',
        'machine-5axis-size': 'Work Area: 800x600x500mm',
        'machine-5axis-speed': 'Maximum Speed: 12,000 RPM',
        'machine-5axis-tools': 'Tool Count: 24',
        
        'machine-3axis-title': '3-Axis CNC Processing Center',
        'machine-3axis-desc': 'High precision 3-axis processing center. Performance optimized for mold manufacturing.',
        'machine-3axis-size': 'Work Area: 1000x800x600mm',
        'machine-3axis-speed': 'Maximum Speed: 15,000 RPM',
        'machine-3axis-tools': 'Tool Count: 30',
        
        'machine-edm-title': 'EDM Wire Erosion',
        'machine-edm-desc': 'High precision wire erosion machine. Ideal solution for hard materials.',
        'machine-edm-size': 'Work Area: 400x300x200mm',
        'machine-edm-accuracy': 'Accuracy: ±0.005mm',
        'machine-edm-wire': 'Wire Diameter: 0.1-0.3mm',
        
        // Machines Page - Measurement Equipment
        'machines-measurement-title': 'Measurement Equipment',
        'machines-measurement-subtitle': 'Advanced measurement systems for quality control',
        
        'equipment-cmm-title': '3D Coordinate Measurement Machine',
        'equipment-cmm-desc': 'High precision 3D measurement system. Micron level measurement capability.',
        'equipment-cmm-accuracy': 'Accuracy: ±0.003mm',
        
        'equipment-microscope-title': 'Digital Microscope',
        'equipment-microscope-desc': 'Digital microscope system for surface quality control.',
        'equipment-microscope-magnification': 'Magnification: 50x-500x',
        
        'equipment-caliper-title': 'Digital Caliper',
        'equipment-caliper-desc': 'Digital caliper sets for precise measurement.',
        'equipment-caliper-accuracy': 'Accuracy: ±0.01mm',
        
        // Machines Page - Software Section
        'machines-software-title': 'CAD/CAM Software',
        'machines-software-subtitle': 'Latest technology design and manufacturing software',
        
        'software-cad-title': 'CAD Software',
        'software-solidworks': 'Solidworks',
        'software-cimatron': 'Cimatron',
        
        'software-cam-title': 'CAM Software',
        'software-esprit': 'Esprit TNG',
        'software-cimatron': 'Cimatron',
        
        'software-simulation-title': 'Simulation Software',
        'software-flow': 'Moldflow',
        'software-simulate': 'SolidWorks Simulation',
        'software-ansys': 'ANSYS',
        
        // Gallery Page - Hero Section
        'gallery-hero-title': 'Gallery',
        'gallery-hero-subtitle': 'Examples from our completed projects and work environment',
        
        // Gallery Page - Filter Buttons
        'filter-all': 'All',
        'filter-molds': 'Molds',
        'filter-machines': 'Machines',
        'filter-projects': 'Projects',
        'filter-workshop': 'Workshop',
        
        // Gallery Page - Gallery Items
        'gallery-mold1-title': 'White Goods Mold',
        'gallery-mold1-desc': 'Precision mold manufactured for refrigerator parts',
        'gallery-mold2-title': 'Electrical Electronics Mold',
        'gallery-mold2-desc': 'Special design mold for electrical devices',
        'gallery-mold3-title': 'Cleaning Equipment Mold',
        'gallery-mold3-desc': 'Special design mold for cleaning machines',
        
        'gallery-machine1-title': '5-Axis CNC Machine',
        'gallery-machine1-desc': '5-axis processing for complex geometries',
        'gallery-machine2-title': 'EDM Wire Erosion',
        'gallery-machine2-desc': 'Precise processing for hard materials',
        'gallery-machine3-title': '3-Axis CNC Machine',
        'gallery-machine3-desc': 'High precision 3-axis processing',
        
        'gallery-project1-title': 'Kitchenware Project',
        'gallery-project1-desc': 'Special mold manufactured for kitchen utensils',
        'gallery-project2-title': 'Bakelite Molds Project',
        'gallery-project2-desc': 'Bakelite mold manufactured for electrical insulation',
        'gallery-project3-title': 'Automotive Project',
        'gallery-project3-desc': 'Precision mold manufactured for automotive parts',
        
        'gallery-workshop1-title': 'Main Workshop',
        'gallery-workshop1-desc': 'Workshop equipped with modern CNC machines',
        'gallery-workshop2-title': 'Quality Control',
        'gallery-workshop2-desc': 'Quality control with precision measurement equipment',
        'gallery-workshop3-title': 'Design Office',
        'gallery-workshop3-desc': 'Design process with CAD/CAM software',
        
        'gallery-view-btn': 'View',
        
        // Footer Links
        'footer-mold-design': 'Mold Design',
        'footer-mold-production': 'Mold Production',
        'footer-cnc-machining': 'CNC Machining',
        'footer-wire-edm': 'Wire EDM',
        'footer-plastic-injection': 'Plastic Injection',
        'footer-product-design': 'Product Design',
        'footer-about': 'About Us',
        'footer-machines': 'Machine Park',
        'footer-gallery': 'Gallery',
        'footer-contact': 'Contact',
        'footer-address': 'Ikitelli O.S.B Tormak San. Site. N Block No: 4, Basaksehir IST.',
        
        // Quote Section
        'quote-title': 'Get Free Quote',
        'quote-subtitle': 'Fill out the form to get information about our special mold solutions for your project. We will get back to you within 24 hours.',
        'quote-form-name': 'Full Name *',
        'quote-form-company': 'Company Name *',
        'quote-form-email': 'Email *',
        'quote-form-phone': 'Phone *',
        'quote-form-sector': 'Sector',
        'quote-form-quantity': 'Quantity',
        'quote-form-description': 'Project Description *',
        'quote-form-file': 'Add File (Optional)',
        'quote-form-file-note': 'PDF, DWG, STEP, STL files accepted (Max: 10MB)',
        'quote-form-submit': 'Request Quote',
        
        // Services Page
        'services-title': 'Our Services',
        'services-subtitle': 'Mold manufacturing and CNC processing solutions',
        'main-services-title': 'Our Main Services',
        'main-services-subtitle': 'Professional solutions with 20 years of experience',
        'service-plastic-title': 'Plastic Injection Molds',
        'service-plastic-desc': 'High precision plastic injection mold manufacturing. Expert solutions for complex geometries.',
        'service-metal-title': 'Metal Molds',
        'service-metal-desc': 'Steel and aluminum molds for metal part production. Durable and long-lasting mold solutions.',
        'service-cnc-title': 'CNC Machining',
        'service-cnc-desc': 'Precision processing with 5-axis CNC machines. Professional solutions for prototype and series production.',
        'service-maintenance-title': 'Mold Maintenance',
        'service-maintenance-desc': 'Maintenance and repair of your existing molds. Performance optimization services.',
        'industries-title': 'Industries We Serve',
        'industries-subtitle': 'Specialized solutions in different sectors',
        'industry-white-goods-title': 'White Goods',
        'industry-white-goods-desc': 'Precision mold manufacturing for white goods like refrigerators, washing machines, dishwashers.',
        'industry-electrical-electronics-title': 'Electrical Electronics',
        'industry-electrical-electronics-desc': 'Special mold designs and manufacturing for electrical and electronic devices.',
        'industry-cleaning-equipment-title': 'Cleaning Equipment',
        'industry-cleaning-equipment-desc': 'Mold manufacturing and special designs for cleaning machines and equipment.',
        'industry-kitchenware-title': 'Kitchenware',
        'industry-kitchenware-desc': 'Mold manufacturing and special solutions for kitchen items and tools.',
        'industry-automotive-title': 'Automotive',
        'industry-automotive-desc': 'Precision mold manufacturing and part solutions for the automotive industry.',
        'industry-bakelite-title': 'Bakelite Molds',
        'industry-bakelite-desc': 'Special manufacturing and design solutions for bakelite material molds.',
        
        // Footer Sections
        'footer-services-title': 'Our Services',
        'footer-services-mold': 'Mold Manufacturing',
        'footer-services-cnc': 'CNC Processing',
        'footer-services-precision': 'Precision Processing',
        'footer-services-prototype': 'Prototype Manufacturing',
        'footer-services-plastic': 'Plastic Injection Molds',
        'footer-services-metal': 'Metal Molds',
        'footer-services-maintenance': 'Mold Maintenance',
        'footer-quick-access-title': 'Quick Access',
        'footer-quick-machines': 'Machine Park',
        'footer-quick-gallery': 'Gallery',
        'footer-quick-contact': 'Contact',
        'footer-quick-quote': 'Get Quote',
        'footer-company-title': 'Company',
        'footer-company-about': 'About Us',
        'footer-company-services': 'Our Services',
        'footer-company-design': 'Mold Design',
        'footer-company-injection': 'Plastic Injection',
        'footer-contact-title': 'Contact Information',
        'footer-contact-address': 'Address:',
        'footer-contact-phone': 'Phone:',
        'footer-contact-email': 'Email:',
        'footer-contact-address-text': 'Organized Industrial Zone',
        'footer-contact-address-text-2': 'Istanbul, Turkey',
        'footer-contact-address-text-3': 'Block A No: 15, 34000, Istanbul, Turkey',
        
        // About Page
        'about-title': 'About Us',
        'about-subtitle': 'Leading mold manufacturing company with over 20 years of experience',
        'story-title': 'Our Story',
        'story-text-1': 'About Aymold, with over 25 years of experience in injection mold manufacturing, strong technical infrastructure and expert staff, we are one of the companies leading the sector. We do not see our customers\' needs limited to mold production only; we get involved in the project from the product design stage, acting as a solution partner throughout the entire process from idea to production.',
        'story-text-2': 'With modern CAD/CAM systems, 3D modeling and engineering-supported analyses, we ensure that products are both functional and manufacturable. Then in the mold design process, we offer the most efficient solutions by considering durability, production speed and cost optimization. With our extensive and continuously renewed machine park, high-precision CNC machining centers and experienced operator staff, we carry out the mold production process without compromising quality standards. Each project goes through meticulously managed quality control processes and is delivered to our customers completely. As Aymold, we do not just produce molds; we bring brands\' products to life, offering technical solutions that will increase their competitive power. We are with you on the journey from product idea to mass production. Aymold – your reliable solution partner in high-precision injection mold manufacturing.',
        'story-years': 'Years Experience',
        'story-projects': 'Completed Projects',
        'story-customers': 'Happy Customers',
        
        // Social Media
        'social-instagram': 'Instagram',
        'social-whatsapp': 'WhatsApp',
        
        // CNC Outsourcing Page
        'cnc_outsourcing.tech4_description': 'Solidworks, Cimatron, Esprit TNG',
        
        // Service Mold Design Page
        'service-mold-design-tech1-desc': 'Solidworks, Cimatron'
    }
};

// Language switching function
function changeLanguage(lang) {
    console.log('changeLanguage called with:', lang);
    
    const currentLang = document.documentElement.lang || 'tr';
    if (currentLang === lang) {
        console.log('Language already set to:', lang);
        return;
    }
    
    document.documentElement.lang = lang;
    console.log('Document language set to:', lang);
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found translatable elements:', elements.length);
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            console.log('Updated element:', key, 'to:', translations[lang][key]);
        } else {
            console.log('Translation not found for key:', key, 'in language:', lang);
        }
    });
    
    // Force update hero slider content specifically
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        const slideElements = heroSlider.querySelectorAll('[data-translate]');
        slideElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
                console.log('Updated hero slider element:', key, 'to:', translations[lang][key]);
            }
        });
    }
    
    // Update placeholders
    const inputs = document.querySelectorAll('input[data-translate-placeholder], textarea[data-translate-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });
    
    // Update select options
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        const options = select.querySelectorAll('option[data-translate]');
        options.forEach(option => {
            const key = option.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                option.textContent = translations[lang][key];
            }
        });
    });
    
    // Update page title
    const titleElement = document.querySelector('title');
    if (titleElement) {
        const currentTitle = titleElement.textContent;
        if (lang === 'en') {
            titleElement.textContent = currentTitle.replace(' - AY MOLD', ' - AY MOLD');
        } else {
            titleElement.textContent = currentTitle.replace(' - AY MOLD', ' - AY MOLD');
        }
    }
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
    
    // Update flag icon based on selected language
    const currentLangSpan = document.querySelector('.current-lang img');
    if (currentLangSpan) {
        let flagSrc = '';
        switch(lang) {
            case 'tr':
                flagSrc = 'images/turkey.png';
                break;
            case 'en':
                flagSrc = 'images/flag.png';
                break;
            case 'ru':
                flagSrc = 'images/russia.png';
                break;
        }
        if (flagSrc) {
            currentLangSpan.src = flagSrc;
            currentLangSpan.alt = lang.toUpperCase();
        }
    }
    
    // Update active state of language options
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
    
    console.log('Language change completed for:', lang);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Set initial language from localStorage or default to Turkish
    const savedLang = localStorage.getItem('preferred-language') || 'tr';
    
    // Update the flag icon based on saved language preference
    const langSelector = document.querySelector('.language-selector');
    if (langSelector) {
        const currentLang = langSelector.querySelector('.current-lang');
        const langOptions = document.querySelectorAll('.lang-option');
        
        // Find the correct flag for the saved language
        const correctOption = Array.from(langOptions).find(option => 
            option.getAttribute('data-lang') === savedLang
        );
        
        if (correctOption && currentLang) {
            const correctFlagImg = correctOption.querySelector('img');
            if (correctFlagImg) {
                currentLang.innerHTML = '';
                const clonedImg = correctFlagImg.cloneNode(true);
                currentLang.appendChild(clonedImg);
            }
            
            // Update active state of language options
            langOptions.forEach(opt => opt.classList.remove('active'));
            correctOption.classList.add('active');
        }
    }
    
    if (savedLang !== 'tr') {
        changeLanguage(savedLang);
    }
    

    
    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .channel-card, .testimonial-card, .logo-item');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;
    let startX = 0;
    let endX = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Touch/Swipe support for mobile
    const heroSlider = document.querySelector('.hero-slider');
    
    if (heroSlider) {
        // Touch events
        heroSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        heroSlider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        // Mouse events for desktop
        heroSlider.addEventListener('mousedown', (e) => {
            startX = e.clientX;
        });
        
        heroSlider.addEventListener('mouseup', (e) => {
            endX = e.clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
        
        // Start auto slide
        startAutoSlide();
        
        // Pause on hover
        heroSlider.addEventListener('mouseenter', stopAutoSlide);
        heroSlider.addEventListener('mouseleave', startAutoSlide);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Slider navigation buttons
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            // Reset auto slide timer
            stopAutoSlide();
            startAutoSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            // Reset auto slide timer
            stopAutoSlide();
            startAutoSlide();
        });
    }

    // Statistics animation
    const statButtons = document.querySelectorAll('.stat-button');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    };

    // Observe stat buttons for animation
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statButton = entry.target;
                const statNumber = statButton.querySelector('.stat-number');
                const target = parseInt(statButton.getAttribute('data-count'));
                animateCounter(statNumber, target);
                statsObserver.unobserve(statButton);
            }
        });
    }, { threshold: 0.5 });

    statButtons.forEach(statButton => {
        statsObserver.observe(statButton);
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const quoteForm = document.querySelector('.quote-form-container');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Gönderiliyor...';
            submitBtn.style.background = '#6c4f3d';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(this);
            
            // Submit to Formspree using fetch
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    // Success
                    submitBtn.textContent = 'Başarıyla Gönderildi!';
                    submitBtn.style.background = '#10b981';
                    
                    // Reset form
                    this.reset();
                    
                    // Show success message
                    const successMessage = translations[document.documentElement.lang || 'tr']?.['form-success'] || 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.';
                    showNotification(successMessage, 'success');
                } else {
                    // Error
                    submitBtn.textContent = translations[document.documentElement.lang || 'tr']?.['form-error'] || 'Hata Oluştu';
                    submitBtn.style.background = '#ef4444';
                    const errorMessage = translations[document.documentElement.lang || 'tr']?.['form-error-message'] || 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.';
                    showNotification(errorMessage, 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                submitBtn.textContent = translations[document.documentElement.lang || 'tr']?.['form-error'] || 'Hata Oluştu';
                submitBtn.style.background = '#ef4444';
                const errorMessage = translations[document.documentElement.lang || 'tr']?.['form-error-message'] || 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.';
                showNotification(errorMessage, 'error');
            })
            .finally(() => {
                // Reset button after 5 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 5000);
            });
        });
    }
    
    // Notification function
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                margin-left: 10px;
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Language selector interaction
    const languageSelector = document.querySelector('.language-selector');
    
    if (languageSelector) {
        console.log('Language selector found:', languageSelector);
        
        // Test click event
        languageSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            console.log('Language selector clicked, active:', this.classList.contains('active'));
            
            // Test dropdown visibility
            const dropdown = this.querySelector('.language-dropdown');
            if (dropdown) {
                console.log('Dropdown found, visibility:', dropdown.style.visibility);
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageSelector.contains(e.target)) {
                languageSelector.classList.remove('active');
            }
        });

        // Handle language selection
        const langOptions = document.querySelectorAll('.lang-option');
        console.log('Language options found:', langOptions.length);
        
        langOptions.forEach((option, index) => {
            console.log(`Language option ${index}:`, option);
            
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                console.log('Language option clicked:', lang);
                
                const selectedFlagImg = this.querySelector('img');
                console.log('Selected flag img:', selectedFlagImg);
                
                // Update current language display
                const currentLang = languageSelector.querySelector('.current-lang');
                console.log('Current lang element:', currentLang);
                
                currentLang.innerHTML = '';
                if (selectedFlagImg) {
                    const clonedImg = selectedFlagImg.cloneNode(true);
                    currentLang.appendChild(clonedImg);
                    console.log('Flag updated');
                }
                
                // Update all language options to show current selection
                langOptions.forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
                
                // Change language
                changeLanguage(lang);
                
                // Close dropdown
                languageSelector.classList.remove('active');
            });
        });
    } else {
        console.log('Language selector not found!');
    }

    // Add ripple effect to buttons
    const addRippleEffect = (event) => {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    buttons.forEach(button => {
        button.addEventListener('click', addRippleEffect);
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn-primary, .btn-secondary, .btn-outline {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Performance optimization
window.addEventListener('load', function() {
    // Lazy load images (if any are added)
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Gallery filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.6s ease';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Lightbox functionality
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Initialize gallery images array
    if (galleryItems.length > 0) {
        galleryItems.forEach((item, index) => {
            const img = item.querySelector('img');
            const title = item.querySelector('h3').textContent;
            const description = item.querySelector('p').textContent;
            
            galleryImages.push({
                src: img.src,
                alt: img.alt,
                title: title,
                description: description
            });
            
            // Add click event to gallery view buttons
            const viewBtn = item.querySelector('.gallery-view-btn');
            if (viewBtn) {
                viewBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    openLightbox(index);
                });
            }
        });
    }
    
    function openLightbox(index) {
        currentImageIndex = index;
        const image = galleryImages[index];
        
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
        
        lightboxModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        const image = galleryImages[currentImageIndex];
        
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        const image = galleryImages[currentImageIndex];
        
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxTitle.textContent = image.title;
        lightboxDescription.textContent = image.description;
    }
    
    // Event listeners for lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    // Close lightbox when clicking outside
    if (lightboxModal) {
        lightboxModal.addEventListener('click', function(e) {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightboxModal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}); 