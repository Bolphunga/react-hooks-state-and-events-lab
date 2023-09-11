import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false)
  const handleCart = () => {
    setIsAdded(isAdded => !isAdded);
    }

    const cartClass = isAdded? "in-cart" : ""
    const buttonClass = isAdded? "remove" : "add"
   
  
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleCart}>{isAdded? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;






// import React, { useState } from "react";

// function Item({ name, category }) {
//   const [isAdded, setIsAdded]=useState(false)

//   function handleCart() {
//     setIsAdded(isAdded=>!isAdded)
//   }

//   const cartClass = isAdded? "in-cart":""
//   const buttonClass= isAdded? "remove":"add"
//   return (
//     <li className={cartClass}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className={buttonClass} onClick={handleCart}> {isAdded? "Remove From Cart":"Add to Cart"}</button>
//     </li>
//   );
// }

// export default Item;









// // const [isAdded, setIsAdded] = useState(false)

// // function handleCart() {
// //   setIsAdded(isAdded=>!isAdded)
// // }
// // const cartClass = isAdded? "in-cart": ""
// // const buttonClass = isAdded? "remove":"add"