import React from 'react';
import './App.css'; // تأكد من أن ملف الـ CSS الخاص بك يحمل نفس الاسم وموجود في نفس المجلد

function App() {
  return (
    <div className="app-wrapper">
      {/* 1. الهيدر (شريط التنقل العلوي) */}
      <header>
        <h2>منصتي التعليمية</h2>
        <nav>
          <a href="#home">الرئيسية</a>
          <a href="#courses">المواد الدراسية</a>
          <a href="#about">عن المنصة</a>
        </nav>
      </header>

      {/* 2. محتوى الصفحة الرئيسية (صفحة الترحيب) */}
      <main className="home-container">
        <h1>أهلاً بك في منصتك التعليمية المبتكرة</h1>
        <p>
          هنا تجد كل ما تحتاجه من دروس تفاعلية، مواد دراسية منظمة، وفيديوهات تشرح لك المفاهيم خطوة بخطوة لتبسيط رحلتك التعليمية وضمان تفوقك.
        </p>
        
        {/* زر الانتقال الأساسي */}
        <a href="#courses" className="btn-primary">
          تصفح المواد الآن
        </a>
      </main>
    </div>
  );
}

export default App;
