import React from 'react';

export default function Profile() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
      <div style={{ textAlign: 'center', borderBottom: '2px solid #f1f5f9', paddingBottom: '20px', marginBottom: '25px' }}>
        <div style={{ width: '80px', height: '80px', background: '#2563eb', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 15px' }}>👨‍🎓</div>
        <h2 style={{ margin: 0, color: '#1e3a8a' }}>لوحة تحكم الطالب</h2>
        <p style={{ color: '#64748b', margin: '5px 0 0' }}>المرحلة الثانوية | الترم الثاني</p>
      </div>

      <h3 style={{ color: '#334155', fontSize: '1.1rem' }}>📈 شريط تقدمك الدراسي:</h3>
      <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold' }}>
          <span>نسبة مشاهدة الدروس المكتملة</span>
          <span style={{ color: '#10b981' }}>80%</span>
        </div>
        <div style={{ width: '100%', background: '#e2e8f0', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
          <div style={{ width: '80%', background: '#10b981', height: '100%' }}></div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', background: '#f8fafc', padding: '15px', borderRadius: '8px', fontSize: '0.95rem' }}>
        <span style={{ color: '#475569' }}>🏆 أوسمة التميز النشطة:</span>
        <span style={{ fontWeight: 'bold', color: '#b45309' }}>🥇 الطالب المجتهد • ⚡ الحضور المستمر</span>
      </div>
    </div>
  );
}
