import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CourseDetails() {
  const { id } = useParams();

  // محاكاة لدروس المواد
  const lessonsList = {
    english: ['الدرس الأول: Present Perfect Tense', 'الدرس الثاني: Narrative Vocabulary', 'الدرس الثالث: Reading & Analysis'],
    math: ['الدرس الأول: المصفوفات ونظم المعادلات', 'الدرس الثاني: المتطابقات المثلثية الأساسية'],
    physics: ['الدرس الأول: كمية التحرك وقانون نيوتن الثاني', 'الدرس الثاني: الشغل والطاقة الميكانيكية']
  };

  const currentLessons = lessonsList[id] || [];

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ color: '#1e3a8a', marginBottom: '10px' }}>محتويات المنهج الدراسي</h2>
      <p style={{ color: '#64748b', marginBottom: '25px' }}>اختر المحاضرة المطلوبة لبدء مشاهدة فيديو الشرح.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {currentLessons.map((lesson, index) => (
          <div key={index} style={{ background: 'white', padding: '15px 20px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0' }}>
            <span style={{ fontWeight: '600', color: '#334155' }}>{lesson}</span>
            <Link to={`/lesson/${id}/${index}`} style={{ background: '#2563eb', color: 'white', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.85rem' }}>
              شاهد الآن 🎥
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
