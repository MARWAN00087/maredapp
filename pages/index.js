
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('ar');
  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  const ads = [
    { title: lang === 'ar' ? 'تويوتا كامري 2020' : 'Toyota Camry 2020', category: 'سيارات', featured: true },
    { title: lang === 'ar' ? 'فيلا للبيع - حي النرجس' : 'Villa for Sale - Al Narjis', category: 'عقارات', featured: false }
  ];

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>{lang === 'ar' ? 'مرحبًا بك في مارِد' : 'Welcome to Mared'}</h1>
        <button onClick={toggleLang}>🌍</button>
      </div>
      <ul>
        {ads.map((ad, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <strong>{ad.title}</strong> {ad.featured && '⭐'}<br />
            <small>{ad.category}</small>
          </li>
        ))}
      </ul>
      <p>{lang === 'ar' ? 'التصفح متاح للجميع، سجل الدخول للرد أو النشر.' : 'Browsing is public. Login to post or reply.'}</p>
    </main>
  );
}
