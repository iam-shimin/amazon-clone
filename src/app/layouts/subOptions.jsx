import React from 'react'
import 'assets/scss/subOptions.scss';
export default function SubOptions() {
    return (
        <section>
            <div className="selectOptions">
				<div className="options">
					<div className="option">
						<div className="optionImage"><img src="https://m.media-amazon.com/images/I/0132mRfvTkL._SS70_.png" width="45px" alt="prime" /></div>
						<label>Prime</label>
					</div>
					<div className="option">
						<div className="optionImage"><img src="https://m.media-amazon.com/images/I/21KGknP5ibL._SS70_.png" width="45px" alt="fresh" /></div>
						<label>Fresh</label>
					</div>
					<div className="option">
						<div className="optionImage"> <img src="https://m.media-amazon.com/images/I/21fXEgglq8L._SS70_.png" width="45px" alt="pantry"/> </div>
						<label>Pantry</label>
					</div>
					<div className="option">
						<div className="optionImage"> <img src="https://m.media-amazon.com/images/I/21jv4pDOjeL._SS70_.png" width="45px" alt="mobile"/> </div>
						<label>Mobiles</label>
					</div>
					<div className="option">
						<div className="optionImage"> <img src="https://m.media-amazon.com/images/I/21TTq50Wh3L._SS70_.png" width="45px" alt="fashion"/> </div>
						<label>Fashion</label>
					</div>
					<div className="option">
						<div className="optionImage"> <img src="https://m.media-amazon.com/images/I/21Y4rK-BSNL._SS70_.png" width="45px" alt="home"/> </div>
						<label>Home</label>
					</div>
					<div className="option">
						<div className="optionImage"> <img src="https://m.media-amazon.com/images/I/01F-pta+lAL._SS70_.png" width="45px" alt="appl"/> </div>
						<label>Appliances</label>
					</div>
					<div className="option">
						<div className="optionImage"> <img src="https://m.media-amazon.com/images/I/2124hLeUPYL._SS70_.png" width="45px" alt="elect"/> </div>
						<label>Electronics</label>
					</div>					
				</div>	
			</div>
        </section>
    )
}