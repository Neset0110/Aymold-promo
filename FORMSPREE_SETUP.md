# Formspree E-posta Kurulum Rehberi

Bu rehber, teklif formundan gelen verilerin e-posta olarak gönderilmesi için Formspree kurulumunu açıklar.

## 1. Formspree Hesabı Oluşturma

1. [formspree.io](https://formspree.io) adresine gidin
2. "Get Started" veya "Sign Up" butonuna tıklayın
3. E-posta adresinizle ücretsiz hesap oluşturun
4. E-posta adresinizi doğrulayın

## 2. Yeni Form Oluşturma

1. Formspree dashboard'unda "New Form" butonuna tıklayın
2. Form adını girin (örn: "AY MOLD Teklif Formu")
3. Form oluşturulduktan sonra size bir endpoint URL'i verilecek
4. Bu URL şuna benzer olacak: `https://formspree.io/f/xqkndqwk`

## 3. HTML Dosyalarını Güncelleme

### index.html ve services.html dosyalarında:

```html
<!-- Bu satırı: -->
<form class="quote-form-container">

<!-- Şununla değiştirin: -->
<form class="quote-form-container" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" enctype="multipart/form-data">
```

**YOUR_FORM_ID** yerine Formspree'den aldığınız gerçek form ID'sini yazın.

## 4. Form Alanlarını Özelleştirme (Opsiyonel)

Formspree dashboard'unda şu ayarları yapabilirsiniz:

### E-posta Konusu Özelleştirme:
- Dashboard'da formunuzu seçin
- "Settings" sekmesine gidin
- "Email Subject" alanına şunu yazın: `Yeni Teklif Talebi - {name} ({company})`

### E-posta İçeriği Özelleştirme:
- "Email Template" bölümünde özel HTML template oluşturabilirsiniz
- Form verilerini `{field_name}` formatında kullanabilirsiniz

## 5. Test Etme

1. Sitenizi yükleyin
2. Teklif formunu doldurun
3. "Teklif İste" butonuna tıklayın
4. Formspree dashboard'unda gelen mesajları kontrol edin
5. E-posta adresinizde mesajı alıp almadığınızı kontrol edin

## 6. Güvenlik ve Spam Koruması

Formspree otomatik olarak:
- Spam koruması sağlar
- reCAPTCHA entegrasyonu sunar
- Rate limiting uygular

## 7. Ücretsiz Plan Sınırlamaları

- Aylık 50 form gönderimi
- Temel spam koruması
- E-posta bildirimleri

## 8. Sorun Giderme

### Form gönderilmiyor:
- Form action URL'inin doğru olduğundan emin olun
- Browser console'da hata mesajlarını kontrol edin
- Formspree dashboard'unda form ayarlarını kontrol edin

### E-posta gelmiyor:
- Spam klasörünüzü kontrol edin
- Formspree dashboard'unda "Submissions" sekmesini kontrol edin
- E-posta adresinizin doğru olduğundan emin olun

## 9. Gelişmiş Özellikler

### Webhook Entegrasyonu:
- Slack, Discord veya diğer servislere bildirim gönderebilirsiniz
- CRM sistemlerine entegre edebilirsiniz

### Otomatik Yanıt:
- Müşterilere otomatik teşekkür e-postası gönderebilirsiniz
- Formspree dashboard'unda "Auto Reply" ayarını aktifleştirin

## 10. Alternatif Çözümler

Formspree dışında şu servisleri de kullanabilirsiniz:
- **Netlify Forms**: Netlify hosting kullanıyorsanız
- **EmailJS**: Tamamen client-side çözüm
- **Getform**: Benzer özellikler
- **Web3Forms**: Ücretsiz alternatif

## Destek

Sorun yaşarsanız:
1. Formspree dokümantasyonunu kontrol edin
2. Formspree support ekibiyle iletişime geçin
3. Bu README dosyasını güncelleyin 