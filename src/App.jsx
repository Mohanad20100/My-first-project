import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 📥 استدعاء الصفحات الخمس بنفس الأسماء والمسارات الظاهرة في الصورة
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import LessonView from './pages/LessonView';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <div style={{ direction: 'rtl', fontFamily: 'system-ui, sans-serif', minHeight: '100vh', background: '#f8fafc', color: '#1e293b' }}>
        
        {/* 🧭 شريط التنقل العلوي الموحد (Navbar) */}
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', background: 'linear-gradient(135deg, #1e3a8a, #2563eb)', color: 'white', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem' }}>منصتي التعليمية 🎓</h2>
          <nav style={{ display: 'flex', gap: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', padding: '6px 12px' }}>الرئيسية</Link>
            <Link to="/courses" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', padding: '6px 12px' }}>المواد الدراسية</Link>
            <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', padding: '6px 12px' }}>الملف الشخصي</Link>
          </nav>
        </header>

        {/* 📦 المساحة الديناميكية لعرض محتوى كل صفحة تلقائياً */}
        <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <Routes>
            {/* فتح صفحة الرئيسية عند الدخول للموقع */}
            <Route path="/" element={<Home />} />
            
            {/* فتح صفحة قائمة المواد */}
            <Route path="/courses" element={<Courses />} />
            
            {/* فتح صفحة تفاصيل المادة حسب المعرف (id) */}
            <Route path="/course/:id" element={<CourseDetails />} />
            
            {/* فتح صفحة مشغل المحاضرة حسب المادة ورقم الدرس */}
            <Route path="/lesson/:id/:index" element={<LessonView />} />
            
            {/* فتح صفحة الملف الشخصي للطالب */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}
