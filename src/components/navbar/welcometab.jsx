import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./welcometab.css"

function App() {
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: [
        'Visualisation & Free Download.',
        'Application Sectors.',
        'Maps & OGC Services.',
        'Bhuvan Central Applications.'
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <main>
        <section className="firstsection">
          <div className="leftsection">
            <div className="welcome-line">
              <span>
                Welcome To <span className="purple">Bhuvan Portal</span>
              </span>
            </div>
            <div className="platform-line">
              <span>Indian Geo Platform for ISRO</span>
            </div>
            <div className="news-ticker">
              <div className="ticker-container">
                <div className="ticker-item">
                  Download AET Product on Bhuvan NHP Portal.
                </div>
                <div className="ticker-item">
                  Visualize Urban Water Body Information System on Bhuvan Portal.
                </div>
                <div className="ticker-item">
                  Flood Inundation at Godavari and Sabari confluence (09-07-2023 to 06-08-2023)
                </div>
              </div>
            </div>
            <span ref={elementRef}></span>
          </div>
        </section>
      </main>

      <hr />

      <section className="secondsection">
        <span className="text-gray">What IS THIS ON PLATFORM</span>
        <h1>POINTS...</h1>
        <div className="box">
          <div className="vertical">
            <div className="vertical-text">Visualisation & Free Download</div>
            <div className="vertical-desc"></div>
          </div>
          <div class="vertical">
                <div class="vertical-text">Maps & OGC Services</div>
                <div class="vertical-desc"></div>
            </div>
            <div class="vertical">
                <div class="vertical-text">Resourse Management</div>
                <div class="vertical-desc">.</div>
            </div>
            <div class="vertical">
                <div class="vertical-text">Location based Services</div>
                <div class="vertical-desc"></div>
            </div>
            <div class="vertical">
                <div class="vertical-text">Bhuvan Central Applications</div>
                <div class="vertical-desc"></div>
            </div>
            <div class="vertical">
                <div class="vertical-text">Assets and Inventory Creation</div>
                <div class="vertical-desc"></div>
            </div>
            <div class="vertical">
                <div class="vertical-text">Planning and development</div>
                <div class="vertical-desc">.</div>
            </div>
            
        </div>
      </section>
    </div>
  );
}

export default App;
