import React from 'react';
import { Link } from 'react-router-dom';

export default function Courses() {
  const materials = [
    { id: 'english', title: 'اللغة الإنجليزية', desc: 'شرح قواعد الجرامر، التحليل الأدبي والنصوص.' },
    { id: 'math', title: 'الرياضيات', desc: 'الجبر وحساب المثلثات والهندسة بطرق مبسطة.' },
    { id: 'physics', title: 'الفيزياء', desc: 'فهم قوانين الحركة والطاقة وتطبيقاتها العلمية.' }
  ];

  return (
    <div>
      <h2 style={{ color: '#1e3a8a', marginBottom: '25px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>المواد الدراسية المتاحة</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
        {materials.map((item) => (
          <div key={item.id} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#2563eb', marginTop: 0 }}>{item.title}</h3>
            <p style={{ color: '#475569', minHeight: '50px', fontSize: '0.95rem' }}>{item.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>📌 الترم الثاني</span>
              <Link to={`/course/${item.id}`} style={{ background: '#10b981', color: 'white', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
                فتح المنهج
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
