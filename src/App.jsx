import React from 'react';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f0f2f5',
      color: '#333',
      direction: 'rtl'
    }}>
      <h1>أهلاً بك في مشروع React! 👋</h1>
      <p>إذا كنت ترى هذه الرسالة، فهذا يعني أن المشروع يعمل بشكل صحيح والبيئة سليمة.</p>
    </div>
  );
}

export default App;
