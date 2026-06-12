import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '60px auto', padding: '20px' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '2.6rem', marginBottom: '15px' }}>مرحباً بك في منصتك التعليمية المتكاملة 🚀</h1>
      <p style={{ color: '#64748b', fontSize: '1.15rem', marginBottom: '35px', lineHeight: '1.8' }}>
        وجهتك الذكية للوصول إلى المحاضرات، متابعة دروسك، واختبار مستواك الدراسي بكل سهولة وفي مكان واحد.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#2563eb', margin: '0 0 10px 0' }}>📚 منهج منظم</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>محتوى مخصص للترم الثاني</p>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#2563eb', margin: '0 0 10px 0' }}>🎥 دروس مرئية</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>شروحات فيديو تفاعلية</p>
        </div>
      </div>

      <Link to="/courses" style={{ background: '#2563eb', color: 'white', padding: '12px 30px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
        ابدأ تصفح المواد
      </Link>
    </div>
  );
}
