import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// --- 1. مكون الهيدر (العام) ---
function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', background: '#1e3a8a', color: 'white', alignItems: 'center' }}>
      <h2 style={{ margin: 0 }}>منصتي التعليمية 🎓</h2>
      <nav style={{ display: 'flex', gap: '25px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>الرئيسية</Link>
        <Link to="/courses" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>المواد الدراسية</Link>
      </nav>
    </header>
  );
}

// --- 2. صفحة ترحيب الطلاب (Home) ---
function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '2.5rem' }}>مرحباً بك في منصة التفوق الرقمية</h1>
      <p style={{ color: '#4b5563', fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto' }}>
        دروسك ومحاضراتك التعليمية أصبحت الآن في مكان واحد لتساعدك على المذاكرة بذكاء وسهولة.
      </p>
      <Link to="/courses" style={{ background: '#2563eb', color: 'white', padding: '12px 35px', borderRadius: '6px', textDecoration: 'none', fontSize: '1.1rem', display: 'inline-block', marginTop: '15px', transition: '0.3s' }}>
        تصفح المواد الآن
      </Link>
    </div>
  );
}

// --- 3. صفحة قائمة الكورسات والمواد (Courses) ---
function Courses() {
  const materials = [
    { id: 'english', title: 'اللغة الإنجليزية', desc: 'قواعد الجرامر، التحليل النصي، وتطوير المهارات اللغوية.', duration: '12 ساعة' },
    { id: 'math', title: 'الرياضيات', desc: 'شرح مبسط لقوانين الجبر، وحساب المثلثات والهندسة.', duration: '15 ساعة' },
    { id: 'physics', title: 'الفيزياء', desc: 'فهم قوانين الحركة والطاقة وتطبيقاتها العلمية والمسائل.', duration: '10 ساعات' }
  ];

  return (
    <div>
      <h2 style={{ color: '#1e3a8a', marginBottom: '25px', paddingBottom: '10px', borderBottom: '2px solid #e5e7eb' }}>المواد الدراسية المتاحة</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
        {materials.map((item) => (
          <div key={item.id} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '20px', background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#2563eb', marginTop: 0 }}>{item.title}</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6', minHeight: '60px' }}>{item.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
              <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>⏱️ المدة: {item.duration}</span>
              <Link to={`/lesson/${item.id}`} style={{ background: '#10b981', color: 'white', padding: '8px 20px', borderRadius: '5px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>
                دخول المحاضرة
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- 4. صفحة مشغل الدروس والفيديو (Lesson) ---
function Lesson() {
  const { id } = useParams();
  
  const getMaterialTitle = (id) => {
    const titles = { english: 'اللغة الإنجليزية', math: 'الرياضيات', physics: 'الفيزياء' };
    return titles[id] || 'المادة التعليمية';
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '10px' }}>
      <h2 style={{ color: '#1e3a8a', marginBottom: '5px' }}>فيديو الشرح: {getMaterialTitle(id)}</h2>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>شاهد المحاضرة بتركيز وسجل أهم النقاط في دفترك الخاص.</p>
      
      {/* مشغل فيديو مرن متوافق مع كافة الشاشات */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', marginBottom: '25px', background: '#000' }}>
        <iframe 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" /* يمكنك استبدال الرابط برابط فيديو المادة المخصص */
          title="Educational Video"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/courses" style={{ background: '#4b5563', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
          الرجوع للمواد
        </Link>
        <button onClick={() => alert('تم تسجيل حضورك بنجاح! بالتوفيق.')} style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
          تأكيد حضور الدرس ✅
        </button>
      </div>
    </div>
  );
}

// --- 5. المكون الرئيسي الجامع ---
export default function App() {
  return (
    <Router>
      <div style={{ direction: 'rtl', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', color: '#1e293b' }}>
        <Header />
        <main style={{ padding: '30px 40px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/lesson/:id" element={<Lesson />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
