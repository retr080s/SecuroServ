export default function SpecialCargo() {
  return (
    <div className='SpecialCargo'>
      <div className='special--cargo_info'>
        <div className='special--cargo_topinfo'>
          <h3>NAME</h3>
          <ul>
            <li>COLLECTIONS COMPLETED</li>
            <li>COLLECTION SUCCESS RATE</li>
            <li>SALES COMPLETED</li>
            <li>SALE SUCCESS RATE</li>
          </ul>
        </div>
        <div className='special--cargo_middleinfo'>
          <ul>
            <li>WAREHOUSES OWNED: 2</li>
            <li>TOTAL EARNINGS: $1,346,096</li>
            <button className='button-1'>WAREHOUSE MAP</button>
          </ul>
        </div>
        <div className='special--cargo_bottominfo'>
          <h3>WAREHOUSES</h3>
          <ul>
            <li>SPECIAL CARGO HELD</li>
            <li>MAX STORAGE</li>
          </ul>
        </div>
        <div className='special--cargo_rightinfo'>
          <h3> TOTAL STOCK</h3>
        </div>
        <div className='special--cargo_bottomright'>
          <h3> ACTIVE ORGANIZATIONS</h3>
        </div>
        <div className='special--cargo_bottombuttons'>
          <button className='button-2'>SUMMARY PAGE</button>
          <button className='button-3'>WAREHOUSE MAP</button>
        </div>
      </div>
    </div>
  );
}
