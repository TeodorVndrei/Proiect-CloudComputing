import React from 'react';

function NavLink({ to, children }) {
  return <a href={to} className={`mx-4`}>
    {children}
  </a>
}

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-content">
        <h1 className="main-title">AutoXPert</h1>
        <p className="main-description">Descoperă piesele de schimb potrivite pentru mașina ta!</p>
      </div>
    </div>
  );
}

export default MainPage;
