import React from 'react';

const FeedbackPage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>
        <a href="#" style={{ marginRight: '20px' }}>return to homepage</a>
        <a href="#">search for another school</a>
      </header>

      {/* Title Section */}
      <section style={{ padding: '20px' }}>
        <h1>University Name</h1>
        <p>NIH Fund: $100,000</p>
        <p>Student score: 8/10</p>
        <a href="#">create a ranking</a>
      </section>

      {/* Body */}
      <section style={{ padding: '20px' }}>
        <h2>Feedback</h2>
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '20px'
        }}>
          {/* Feedback Object */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Dummy Category</span>
            <span>Rating: 7/10</span>
          </div>
          <h3>Feedback</h3>
          <p>This is a sample feedback paragraph. It provides insights and opinions about the university.</p>
          <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
            <a href="#">flag inappropriate content</a>
            <div>
              <a href="#" style={{ marginRight: '10px' }}>like</a>
              <a href="#">dislike</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default FeedbackPage;
