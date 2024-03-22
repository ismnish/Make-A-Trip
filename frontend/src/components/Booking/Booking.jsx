// import React, { useState, useContext } from "react";
// import "./booking.css";
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// import { AuthContext } from "../../context/AuthContext";
// import { BASE_URL } from "../../utils/config";

// const Booking = ({ tour, avgRating }) => {

//   const today = new Date();
//   const minDate = new Date(today.getFullYear(), today.getMonth+15, today.getDate());
//   const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());

//   const { price, reviews,  title } = tour;
//   const navigate = useNavigate();

//   const {user} = useContext(AuthContext);
//   const [booking, setBooking] = useState({
//     userId: user && user._id,
//     userEmail: user && user.email,
//     tourName:title,
//     phone:"",
//     guestSize: 1,
//     bookAt: "",
//   });
//   const handleChange = (e) => {
//     setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   
//   };

//   const serviceFee = 499 * Number(booking.guestSize);
//   const travelCharge = Number(price) * Number(booking.guestSize);
//   const serviceCharge = Number(serviceFee);
//   const totalAmount = (travelCharge + serviceCharge).toFixed(2);
//   const handleClick = async (e) => {
//     e.preventDefault();
    
//     try {
//        if(!user || user===undefined){
//         return toast.error("Please sign in");
//        }
//       if (
//         !booking.fullname ||
//         !booking.phone ||
//         !booking.bookAt ||
//         !booking.guestSize
//       ) {
//         return toast.error("Please fill all details.");
//       }
//       if (booking.guestSize > 20) {
//         return toast.error("Sorry, we cannot serve more than 20 people.");
//       } 
//         const res = await fetch(`${BASE_URL}/booking`,{
//           method:'post',
//           headers:{
//             'content-type': 'application/json'
//           },
//           credentials:'include',
//           body:JSON.stringify(booking)
//         });
//         const result = await res.json();
//         if(!res.ok){
//           return toast.error(`${result.message}`)
//         }
//         toast.success("Booked Successfully!");
//         navigate("/thank-you");
//     } catch (err) {
//       toast.error(`${err.message}`)
//     }
//   };
//   return (
    
//     <div className="booking">
      
//       <div className="booking__top d-flex align-items-center justify-content-between">
//         <h3>
//           &#8377;{price} <span>/per person</span>
//         </h3>
//         <span className="tour__rating d-flex align-items-center">
//           <i className="ri-star-s-fill"></i>
         
//           {avgRating === 0 ? null : avgRating} ({reviews?.length})
//         </span>
//       </div>

//       {/* ========= booking form start ======= */}
//       <div className="booking__form">
//         <h5>Information</h5>
//         <Form className="booking__info-form" onSubmit={handleClick}>
//           <FormGroup>
//             <input
//               type="text"
//               placeholder="Full Name"
//               id="fullname"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <input
//               type="number"
//               placeholder="Phone"
//               id="phone"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup className="d-flex align-items-center gap-3">
//             <input
//               type="date"
//               placeholder=""
//               id="bookAt"
//               min={minDate.toISOString().split('T')[0]}
//               max={maxDate.toISOString().split('T')[0]}
//               required
//               onChange={handleChange}
//             />
//             <input
//               type="number"
//               placeholder="Guest "
//               max={20}
//               min={1}
//               id="guestSize"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//         </Form>
//       </div>
//       {/* ========= booking form end  ======= */}

//       {/* ========= booking bottom  ======= */}
//       <div className="booking__bottom">
//         <ListGroup>
//           <ListGroupItem className="border-0 px-0">
//             <h5 className="d-flex align-items-center gap-1">
//               &#8377;{price} <i className="ri-close-line"></i>{" "}
//               {booking.guestSize} person
//             </h5>
//             <span> &#8377;{travelCharge}.00</span>
//           </ListGroupItem>

//           <ListGroupItem className="border-0 px-0">
//             <h5> Service Charge </h5>
//             <span> &#8377;{serviceCharge}.00 </span>
//           </ListGroupItem>

//           <ListGroupItem className="border-0 px-0 total">
//             <h5> Total </h5>
//             <span> &#8377;{totalAmount} </span>
//           </ListGroupItem>
//         </ListGroup>

//         <Button className="btn primary__btn w-100 mt-3" onClick={handleClick}>
//           Book Now
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Booking;
import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 15);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());

  const { price, reviews, title } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 499 * Number(booking.guestSize);
  const travelCharge = Number(price) * Number(booking.guestSize);
  const serviceCharge = Number(serviceFee);
  const totalAmount = (travelCharge + serviceCharge).toFixed(2);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined) {
        return toast.error("Please sign in");
      }
      if (!booking.fullname || !booking.phone || !booking.bookAt || !booking.guestSize) {
        return toast.error("Please fill all details.");
      }
      if (booking.guestSize > 20) {
        return toast.error("Sorry, we cannot serve more than 20 people.");
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(booking),
      });

      if (!res.ok) {
        const result = await res.json();
        return toast.error(`${result.message}`);
      }

      toast.success("Booked Successfully!");
      navigate("/thank-you");
    } catch (err) {
      toast.error(`${err.message}`);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          &#8377;{price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullname"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              min={minDate.toISOString().split('T')[0]}
              max={maxDate.toISOString().split('T')[0]}
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest "
              max={20}
              min={1}
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              &#8377;{price} <i className="ri-close-line"></i> {booking.guestSize} person
            </h5>
            <span> &#8377;{travelCharge}.00</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0">
            <h5> Service Charge </h5>
            <span> &#8377;{serviceCharge}.00 </span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 total">
            <h5> Total </h5>
            <span> &#8377;{totalAmount} </span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-3" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
