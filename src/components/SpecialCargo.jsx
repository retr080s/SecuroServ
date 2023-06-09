export default function SpecialCargo() {
  return (
    <div className='SpecialCargo'>
      <div className='special--cargo_info'>
        {/* --- SPECIAL CARGO TOP INFO --- */}

        <div className='special--cargo_topinfo'>
          <h3 style={{ marginLeft: '20px' }}>Retr080s</h3>
          <ul
            style={{
              marginRight: '20px',
              listStyleType: 'square',
              fontSize: '18px',
            }}
          >
            <li>
              COLLECTIONS COMPLETED <span className='right'>33</span>
            </li>
            <li>
              COLLECTION SUCCESS RATE <span className='right'>100%</span>
            </li>
            <li>
              SALES COMPLETED <span className='right'>11</span>
            </li>
            <li>
              SALE SUCCESS RATE <span className='right'> 91%</span>
            </li>
          </ul>
        </div>

        {/* ^--- SPECIAL CARGO TOP INFO ---^ */}

        {/* --- SPECIAL CARGO MIDDLE INFO --- */}

        <div className='special--cargo_middleinfo'>
          <ul
            style={{
              fontSize: '20px',
              listStyleType: 'none',
              marginTop: '30px',
              width: '400px',
            }}
          >
            <li>
              WAREHOUSES OWNED: <span className='red'>2</span>
            </li>
            <li>
              TOTAL EARNINGS: <span className='red'>$1,346,096</span>
            </li>
          </ul>

          <button className='button-1'>WAREHOUSE MAP</button>
        </div>

        {/* ^--- SPECIAL CARGO MIDDLE INFO ---^ */}

        {/* --- SPECIAL CARGO BOTTOM INFO --- */}

        <div className='special--cargo_bottominfo'>
          <h3 style={{ marginLeft: '20px' }}>WAREHOUSES</h3>
          <ul className='right' style={{ listStyleType: 'none' }}>
            <li style={{ marginRight: '20px', marginTop: '-60px' }}>
              <span className='red'>• </span>SPECIAL CARGO HELD
            </li>
            <li style={{ marginRight: '20px' }}>• MAX STORAGE</li>
          </ul>
        </div>

        {/* ^--- SPECIAL CARGO BOTTOM INFO ---^ */}

        {/* --- SPECIAL CARGO RIGHT INFO --- */}

        <div className='special--cargo_rightinfo'>
          <h3 style={{ marginLeft: '20px' }}> TOTAL STOCK</h3>
          <ul
            style={{
              marginRight: '20px',
              listStyleType: 'none',
              fontSize: '18px',
            }}
          >
            <li>
              FREE SPACE{' '}
              <span className='right'>
                <span className='red'>HELD</span>
              </span>
            </li>
            <li>
              • 100%
              <span className='right'>
                <span className='red'>• 0%</span>
              </span>
            </li>
          </ul>
          <img
            src='src/images/securoserv-logo.png'
            style={{ width: '400px' }}
          />

          <h1> 0 / 127 Crates</h1>
        </div>

        {/* ^--- SPECIAL CARGO RIGHT INFO ---^ */}

        {/* --- SPECIAL CARGO BOTTOM RIGHT INFO --- */}

        <div className='special--cargo_bottomright'>
          <h3 style={{ marginLeft: '20px' }}>ACTIVE ORGANIZATIONS</h3>
          <ul style={{ marginRight: '20px', fontSize: '18px' }}>
            <li className='red'>
              Retr080s
              <span className='right' style={{ color: '#cbcbcb' }}>
                Retr080s Org
              </span>
            </li>
          </ul>
        </div>

        {/* ^--- SPECIAL CARGO BOTTOM RIGHT INFO ---^ */}

        {/* --- SPECIAL CARGO BOTTOM BUTTONS INFO --- */}

        <div className='special--cargo_bottombuttons'>
          <button className='button-2'>SUMMARY PAGE</button>
          <button className='button-3'>WAREHOUSE MAP</button>
        </div>

        {/* ^--- SPECIAL CARGO BOTTOM BUTTONS INFO ---^ */}
      </div>
    </div>
  );
}
