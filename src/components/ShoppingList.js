import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, setSelectedCategory] = useState("All")

const handleCategoryChange = (e) => {
  setSelectedCategory(e.target.value)
}
const handleLiFilter = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {handleLiFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


// import React, {useState} from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {
// const [selectedCategory, setSelectedCategory] = useState("All")

// // function handleLiFilter(){
// //   if (selectedCategory==="All") {
// //     return items
// //   } else {items.filter(item=>item.category===selectedCategory)}
// //   console.log(handleLiFilter)
// //   //setSelectedCategory(()=>selectedCategory.filter(item === selectedCategory.id))
// // }

// function handleChange(e) {
//   setSelectedCategory(e.target.value)
// }

//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter" onChange={handleChange} value={selectedCategory}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       {/* <ul className="Items">
//         {handleLiFilter.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default ShoppingList;
