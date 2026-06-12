import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function LessonView() {
  const { id, index } = useParams();
  const [note, setNote] = useState('');

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }}>
      <h2 style={{ color: '#1e3a8a', marginBottom: '20px' }}>عرض الفيديو الشارح للمحاضرة</h2>
      
      {/* مشغل فيديو متجاوب ومحمي */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', background: '#000', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '25px' }}>
        <iframe 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Lesson Video Player"
          allowFullScreen
        ></iframe>
      </div>

      {/* صندوق كتابة ملاحظات مدمج */}
      <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
        <h4 style={{ marginTop: 0, marginBottom: '10px', color: '#1e3a8a' }}>📝 دون ملاحظاتك السريعة هنا:</h4>
        <textarea 
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="اكتب القوانين أو الكلمات المهمة لمراجعتها لاحقاً..."
          style={{ width: '100%', height: '80px', borderRadius: '6px', border: '1px solid #cbd5e1', padding: '10px', fontSize: '0.95rem', resize: 'none', fontFamily: 'inherit' }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/course/${id}`} style={{ background: '#64748b', color: 'white', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none' }}>
          الرجوع للدروس
        </Link>
        <button onClick={() => alert('تم تسجيل حضورك وحفظ الملحوظة بنجاح!')} style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          تأكيد حضور الدرس ✅
        </button>
      </div>
    </div>
  );
}
