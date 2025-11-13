/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import { IoPrintSharp } from "react-icons/io5";
import { IoToggle } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

export default function PriceList({ screen }) {
  const data = [
    {
      id: 0,
      service: "Cloud Storage Pro",
      inPrice: 1200,
      price: 2500,
      unit: "GB/month",
      inStock: 50000,
      description: `Securely store and access your data from anywhere in the world. Features include automatic backup, file versioning, and end-to-end encryption for maximum peace of mind.`,
    },
    {
      id: 1,
      service: "Advanced Web Hosting",
      inPrice: 50,
      price: 150,
      unit: "sites/year",
      inStock: 9500,
      description: `High-performance hosting built for speed and reliability. Includes unlimited bandwidth, SSD storage, a free SSL certificate, and 24/7 expert technical support.`,
    },
    {
      id: 2,
      service: "Enterprise Security Suite",
      inPrice: 98000,
      price: 145000,
      unit: "licenses",
      inStock: 120,
      description: `Comprehensive protection for large organizations. Offers centralized threat monitoring, advanced malware detection, and real-time network vulnerability scanning.`,
    },
    {
      id: 3,
      service: "Premium Video Editing Software",
      inPrice: 1500,
      price: 3500,
      unit: "users/month",
      inStock: 2800,
      description: `Unlock professional-grade video production with our intuitive editor. Supports 4K and 8K resolution, multi-cam editing, and a vast library of special effects and transitions.`,
    },
    {
      id: 4,
      service: "Mobile App Development Kit",
      inPrice: 43540,
      price: 78450,
      unit: "project/license",
      inStock: 13640,
      description: `Accelerate development for iOS and Android simultaneously. Contains pre-built UI components, cross-platform APIs, and comprehensive documentation to quickly launch your app.`,
    },
    {
      id: 5,
      service: "AI Chatbot Service",
      inPrice: 800,
      price: 1999,
      unit: "queries/day",
      inStock: 300000,
      description: `Deploy a smart, conversational AI customer service agent instantly. Integrates with major platforms and offers natural language processing (NLP) to handle complex queries.`,
    },
    {
      id: 6,
      service: "Data Analytics Platform",
      inPrice: 22000,
      price: 49000,
      unit: "data streams",
      inStock: 450,
      description: `Transform raw data into actionable insights with powerful visualization tools. Track KPIs, monitor trends, and create custom reports using real-time data ingestion.`,
    },
    {
      id: 7,
      service: "Custom WordPress Theme",
      inPrice: 5000,
      price: 12000,
      unit: "theme/sale",
      inStock: 9999,
      description: `A fully responsive, unique theme built specifically for your brand. Optimized for fast loading speeds and easy customization via the built-in visual editor.`,
    },
    {
      id: 8,
      service: "VPN Access Global",
      inPrice: 5,
      price: 10,
      unit: "users/month",
      inStock: 800000,
      description: `Browse securely and anonymously with access to thousands of servers worldwide. Protects your privacy from public Wi-Fi threats and bypasses geographical content restrictions.`,
    },
    {
      id: 9,
      service: "E-commerce Plugin Bundle",
      inPrice: 300,
      price: 750,
      unit: "download",
      inStock: 5000,
      description: `A collection of essential tools for any online store. Includes plugins for advanced inventory management, detailed analytics, automated email marketing, and checkout optimization.`,
    },
    {
      id: 10,
      service: "Cloud Storage Pro",
      inPrice: 1200,
      price: 2500,
      unit: "GB/month",
      inStock: 50000,
      description: `Securely store and access your data from anywhere in the world. Features include automatic backup, file versioning, and end-to-end encryption for maximum peace of mind.`,
    },
    {
      id: 11,
      service: "Advanced Web Hosting",
      inPrice: 50,
      price: 150,
      unit: "sites/year",
      inStock: 9500,
      description: `High-performance hosting built for speed and reliability. Includes unlimited bandwidth, SSD storage, a free SSL certificate, and 24/7 expert technical support.`,
    },
    {
      id: 12,
      service: "Enterprise Security Suite",
      inPrice: 98000,
      price: 145000,
      unit: "licenses",
      inStock: 120,
      description: `Comprehensive protection for large organizations. Offers centralized threat monitoring, advanced malware detection, and real-time network vulnerability scanning.`,
    },
    {
      id: 13,
      service: "Premium Video Editing Software",
      inPrice: 1500,
      price: 3500,
      unit: "users/month",
      inStock: 2800,
      description: `Unlock professional-grade video production with our intuitive editor. Supports 4K and 8K resolution, multi-cam editing, and a vast library of special effects and transitions.`,
    },
    {
      id: 14,
      service: "Mobile App Development Kit",
      inPrice: 43540,
      price: 78450,
      unit: "project/license",
      inStock: 13640,
      description: `Accelerate development for iOS and Android simultaneously. Contains pre-built UI components, cross-platform APIs, and comprehensive documentation to quickly launch your app.`,
    },
    {
      id: 15,
      service: "AI Chatbot Service",
      inPrice: 800,
      price: 1999,
      unit: "queries/day",
      inStock: 300000,
      description: `Deploy a smart, conversational AI customer service agent instantly. Integrates with major platforms and offers natural language processing (NLP) to handle complex queries.`,
    },
    {
      id: 16,
      service: "Data Analytics Platform",
      inPrice: 22000,
      price: 49000,
      unit: "data streams",
      inStock: 450,
      description: `Transform raw data into actionable insights with powerful visualization tools. Track KPIs, monitor trends, and create custom reports using real-time data ingestion.`,
    },
    {
      id: 17,
      service: "Custom WordPress Theme",
      inPrice: 5000,
      price: 12000,
      unit: "theme/sale",
      inStock: 9999,
      description: `A fully responsive, unique theme built specifically for your brand. Optimized for fast loading speeds and easy customization via the built-in visual editor.`,
    },
    {
      id: 18,
      service: "VPN Access Global",
      inPrice: 5,
      price: 10,
      unit: "users/month",
      inStock: 800000,
      description: `Browse securely and anonymously with access to thousands of servers worldwide. Protects your privacy from public Wi-Fi threats and bypasses geographical content restrictions.`,
    },
    {
      id: 19,
      service: "E-commerce Plugin Bundle",
      inPrice: 300,
      price: 750,
      unit: "download",
      inStock: 5000,
      description: `A collection of essential tools for any online store. Includes plugins for advanced inventory management, detailed analytics, automated email marketing, and checkout optimization.`,
    },
  ];
  const [priceList, setPriceList] = useState(data);
  const [update, setUpdate] = useState(false);
  const [initialMount, setInitialMount] = useState(true);

  useEffect(() => {
    if (initialMount) {
      setInitialMount(false);
    } else {
      setUpdate(true);
    }
  }, [priceList]);

  return (
    <section className="PriceList">
      <article className="PriceListUp">
        <article className="searchArea">
          <article className="searchArticle">
            <input
              type="search"
              name="searchArticle"
              id="searchArticle"
              placeholder="Search Article No..."
            />
            <CiSearch className="icon" />
          </article>
          <article className="searchProduct">
            <input
              type="search"
              name="searchProduct"
              id="searchProduct"
              placeholder="Search Product..."
            />
            <CiSearch className="icon" />
          </article>
        </article>
        <article className="btnset">
          <div className="btnset1">
            <span>New Product</span>{" "}
            <IoMdAddCircle style={{ color: "green" }} className="icon" />
          </div>
          <div className="btnset2">
            <span>Print List</span>{" "}
            <IoPrintSharp
              style={{ color: "rgb(0, 183, 255)" }}
              className="icon"
            />
          </div>
          <div className="btnset3">
            <span>Advanced Mode</span>{" "}
            <IoToggle className="icon" style={{ color: "rgb(0, 183, 255)" }} />
          </div>
        </article>
      </article>
      {screen.width > 1080 ? (
        <table className="pageData">
          <thead>
            <tr className="pageDataHead">
              <td>Article No.</td>
              <td>Product/service</td>
              <td>In Price</td>
              <td>Price</td>
              <td>Unit</td>
              <td>In Stock</td>
              <td>Description</td>
              <td></td>
            </tr>
          </thead>
          <tbody className="pageDataBody">
            {priceList.map((item, index) => (
              <tr key={`product/${index}`}>
                <td>{item.id + 1}</td>
                <td>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    value={item.service}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return { ...inthere, service: e.target.value };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="inprice"
                    id="inprice"
                    value={item.inPrice}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return {
                              ...inthere,
                              inPrice: parseInt(e.target.value),
                            };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={item.price}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return {
                              ...inthere,
                              price: parseInt(e.target.value),
                            };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="unit"
                    id="unit"
                    value={item.unit}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return { ...inthere, unit: e.target.value };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="instock"
                    id="instock"
                    value={item.inStock}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return {
                              ...inthere,
                              inStock: parseInt(e.target.value),
                            };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={item.description}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return { ...inthere, description: e.target.value };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <BsThreeDots className="icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : screen.width > 720 ? (
        <table className="pageData">
          <thead>
            <tr className="pageDataHead">
              <td>Article No.</td>
              <td>Product/service</td>
              <td>Price</td>
              <td>In Stock</td>
              <td>Unit</td>
              <td></td>
            </tr>
          </thead>
          <tbody className="pageDataBody">
            {priceList.map((item, index) => (
              <tr key={`product/${index}`}>
                <td>{item.id + 1}</td>
                <td>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    value={item.service}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return { ...inthere, service: e.target.value };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={item.price}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return {
                              ...inthere,
                              price: parseInt(e.target.value),
                            };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="instock"
                    id="instock"
                    value={item.inStock}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return {
                              ...inthere,
                              inStock: parseInt(e.target.value),
                            };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="unit"
                    id="unit"
                    value={item.unit}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return { ...inthere, unit: e.target.value };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <BsThreeDots className="icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="pageData">
          <thead>
            <tr className="pageDataHead">
              <td>Product/service</td>
              <td>Price</td>
              <td></td>
            </tr>
          </thead>
          <tbody className="pageDataBody">
            {priceList.map((item, index) => (
              <tr key={`product/${index}`}>
                <td>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    value={item.service}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return { ...inthere, service: e.target.value };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={item.price}
                    onChange={(e) =>
                      setPriceList((prev) =>
                        prev.map((inthere) => {
                          if (item.id == inthere.id) {
                            return {
                              ...inthere,
                              price: parseInt(e.target.value),
                            };
                          } else {
                            return inthere;
                          }
                        })
                      )
                    }
                  />
                </td>
                <td>
                  <BsThreeDots className="icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {update && (
        <article className="updatePopup">
          <strong>Push Updates to DB</strong>
          <button>Update</button>
        </article>
      )}
    </section>
  );
}
