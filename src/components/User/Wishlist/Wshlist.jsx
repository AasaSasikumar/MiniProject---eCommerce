// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { deleteData, fetchDataFromApi } from "../../../Services/Userapi";
// import "./Wishlist.css";
// import { toast } from "react-toastify";

// const Wishlist = () => {
//   const [myListData, setMyListData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.userId) {
//       fetchDataFromApi(`/api/my-list?userId=${user.userId}`).then((res) => {
//         setMyListData(res);
//       });
//     }
//   }, []);

//   // const removeItem = (id) => {
//   //   setIsLoading(true);
//   //   deleteData(`/api/mylist/${id}`).then((res) => {
//   //     toast.success("Item removed from My List!");
//   //     const user = JSON.parse(localStorage.getItem("user"));
//   //     fetchDataFromApi(`/api/my-list?userId=${user.userId}`).then((res) => {
//   //       setMyListData(res);
//   //       setIsLoading(false);
//   //     });
//   //   }).catch((error) => {
//   //     toast.error("Failed to remove item from My List.");
//   //     setIsLoading(false);
//   //   });
//   // };

//   return (
//     <section className="section cartpage">
//       <div className="container">
//         <h2 className="hd mb-1">Your list</h2>
//         <p>
//           There are <b className="text-read">{myListData?.length}</b> product(s)
//           in your My List
//         </p>
//         {myListData?.length !== 0 ? (
//           <div className="row">
//             <div className="col-md-9 pr-5">
//               <div className="table-responsive">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th width="35%">Product</th>
//                       <th width="15%">Unit Price</th>
//                       <th width="25%">Remove</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {myListData?.map((item) => (
//                       <tr key={item._id}>
//                         <td width="35%">
//                           <Link to={`/product/${item.productId}`}>
//                             <div className="d-flex align-items-center cartitemimgwrapper">
//                               <img
//                                 src={item.image}
//                                 alt={item.ProductTitle}
//                                 width="100"
//                                 height="100"
//                               />
//                               <div>{item.ProductTitle}</div>
//                             </div>
//                           </Link>
//                         </td>
//                         <td width="15%">${item.price.toFixed(2)}</td>
//                         <td width="25%">
//                           {/* <button
//                             onClick={() => removeItem(item._id)}
//                             className="btn btn-danger"
//                             disabled={isLoading}
//                           >
//                             {isLoading ? "Removing..." : "Remove"}
//                           </button> */}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="emptyWishlist">
//             <p>No products in your wishlist.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Wishlist;



import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteData, fetchDataFromApi } from "../../../Services/Userapi";
import "./Wishlist.css";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [myListData, setMyListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.userId) {
      fetchDataFromApi(`/api/my-list?userId=${user.userId}`)
        .then((res) => {
          setMyListData(res);
        })
        .catch((error) => {
          console.error("Error fetching wishlist:", error);
          toast.error("Failed to load wishlist.");
        });
    }
  }, []);

  const removeItem = (id) => {
    setIsLoading(true);
    deleteData(`/api/my-list/${id}`)
      .then((res) => {
        toast.success("Item removed from My List!");
        setMyListData(myListData.filter((item) => item._id !== id));
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to remove item from My List.");
        setIsLoading(false);
      });
  };

  return (
    <section className="section cartpage">
      <div className="container">
        <h2 className="hd mb-1">Your list</h2>
        <p>
          There are <b className="text-read">{myListData?.length}</b> product(s)
          in your My List
        </p>
        {myListData?.length !== 0 ? (
          <div className="row">
            <div className="col-md-9 pr-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myListData?.map((item) => (
                      <tr key={item._id}>
                        <td width="35%">
                          <Link to={`/product/${item.productId}`}>
                            <div className="d-flex align-items-center cartitemimgwrapper">
                              <img
                                src={item.image}
                                alt={item.ProductTitle}
                                width="100"
                                height="100"
                              />
                              <div>{item.ProductTitle}</div>
                            </div>
                          </Link>
                        </td>
                        <td width="15%">${item.price.toFixed(2)}</td>
                        <td width="25%">
                          <button
                            onClick={() => removeItem(item._id)}
                            className="btn btn-danger"
                            disabled={isLoading}
                          >
                            {isLoading ? "Removing..." : "Remove"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="emptyWishlist">
            <p>No products in your wishlist.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;

