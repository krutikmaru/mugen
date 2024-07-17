// import React, { useState } from "react";

// function Test() {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   const getDaysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (month, year) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const getMonthData = (month, year) => {
//     const daysInMonth = getDaysInMonth(month, year);
//     const firstDay = getFirstDayOfMonth(month, year);

//     const daysArray = [];
//     for (let i = 0; i < firstDay; i++) {
//       daysArray.push(null);
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       daysArray.push(i);
//     }

//     return daysArray;
//   };

//   const handlePrevMonth = () => {
//     setCurrentDate((prevDate) => {
//       const newDate = new Date(prevDate);
//       newDate.setMonth(newDate.getMonth() - 1);
//       return newDate;
//     });
//   };

//   const handleNextMonth = () => {
//     setCurrentDate((prevDate) => {
//       const newDate = new Date(prevDate);
//       newDate.setMonth(newDate.getMonth() + 1);
//       return newDate;
//     });
//   };

//   const handlePrevYear = () => {
//     setCurrentDate((prevDate) => {
//       const newDate = new Date(prevDate);
//       newDate.setFullYear(newDate.getFullYear() - 1);
//       return newDate;
//     });
//   };

//   const handleNextYear = () => {
//     setCurrentDate((prevDate) => {
//       const newDate = new Date(prevDate);
//       newDate.setFullYear(newDate.getFullYear() + 1);
//       return newDate;
//     });
//   };

//   const month = currentDate.getMonth();
//   const year = currentDate.getFullYear();
//   const daysArray = getMonthData(month, year);

//   return (
//     <div className="mt-20 p-5">
//       <div className="calendar-container max-w-md mx-auto p-4">
//         <div className="calendar-header flex justify-between items-center mb-4">
//           <button onClick={handlePrevYear} className="px-2 py-1">
//             «
//           </button>
//           <button onClick={handlePrevMonth} className="px-2 py-1">
//             ‹
//           </button>
//           <div className="text-lg font-bold">{`${currentDate.toLocaleString(
//             "default",
//             { month: "long" }
//           )} ${year}`}</div>
//           <button onClick={handleNextMonth} className="px-2 py-1">
//             ›
//           </button>
//           <button onClick={handleNextYear} className="px-2 py-1">
//             »
//           </button>
//         </div>
//         <div className="calendar-body">
//           <div className="grid grid-cols-7 gap-1 mb-2">
//             {daysOfWeek.map((day) => (
//               <div key={day} className="text-center font-bold">
//                 {day}
//               </div>
//             ))}
//           </div>
//           <div className="grid grid-cols-7 gap-1">
//             {daysArray.map((day, index) => (
//               <div
//                 key={index}
//                 className={`text-center py-2 ${day ? "border" : ""}`}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;

// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import pdfjsLib from "./pdfWorker";

// function Test() {
//   const [pdfText, setPdfText] = useState("");
//   const [error, setError] = useState("");

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file.type !== "application/pdf") {
//       setError("Only PDF files are accepted.");
//       setPdfText("");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = () => {
//       const typedArray = new Uint8Array(reader.result);
//       pdfjsLib
//         .getDocument(typedArray)
//         .promise.then((pdf) => {
//           let text = "";
//           const pagesPromises = [];
//           for (let i = 1; i <= pdf.numPages; i++) {
//             pagesPromises.push(
//               pdf.getPage(i).then((page) => {
//                 return page.getTextContent().then((textContent) => {
//                   textContent.items.forEach((item) => {
//                     text += item.str + " ";
//                   });
//                 });
//               })
//             );
//           }
//           Promise.all(pagesPromises).then(() => setPdfText(text));
//         })
//         .catch(() => setError("Error extracting content from PDF."));
//     };
//     reader.readAsArrayBuffer(file);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: "application/pdf",
//     multiple: false,
//   });

//   return (
//     <div className="mt-20 ">
//       <div
//         {...getRootProps({ className: "dropzone" })}
//         className={`w-screen p-6 border-2 border-dashed rounded-lg text-center cursor-pointer ${
//           isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
//         }`}
//       >
//         <input {...getInputProps()} />
//         <p className="text-gray-500">
//           {isDragActive
//             ? "Drop the PDF file here ..."
//             : "Drag 'n' drop a PDF file here, or click to select one"}
//         </p>
//       </div>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {pdfText && (
//         <div className="mt-4 p-4 bg-gray-100 text-black rounded-md whitespace-pre-wrap">
//           {pdfText}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import pdfjsLib from "./pdfWorker";
import Tesseract from "tesseract.js";

export default function Test() {
  const [pdfText, setPdfText] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.type !== "application/pdf") {
      setError("Only PDF files are accepted.");
      setPdfText("");
      return;
    }

    setIsLoading(true);
    setError("");
    const reader = new FileReader();
    reader.onload = () => {
      const typedArray = new Uint8Array(reader.result);
      pdfjsLib
        .getDocument(typedArray)
        .promise.then((pdf) => {
          let text = "";
          const pagesPromises = [];
          for (let i = 1; i <= pdf.numPages; i++) {
            pagesPromises.push(
              pdf.getPage(i).then((page) => {
                return page.getTextContent().then((textContent) => {
                  if (textContent.items.length === 0) {
                    // If no text content, use OCR
                    return page.getOperatorList().then((ops) => {
                      const imagePromises = ops.fnArray
                        .map((fn, idx) => {
                          if (
                            fn === pdfjsLib.OPS.paintJpegXObject ||
                            fn === pdfjsLib.OPS.paintImageXObject
                          ) {
                            return page.objs
                              .get(ops.argsArray[idx][0])
                              .then((image) => {
                                const canvas = document.createElement("canvas");
                                const context = canvas.getContext("2d");
                                canvas.width = image.width;
                                canvas.height = image.height;
                                context.putImageData(image, 0, 0);
                                return Tesseract.recognize(
                                  canvas.toDataURL(),
                                  "eng"
                                );
                              });
                          }
                          return null;
                        })
                        .filter((promise) => promise !== null);

                      return Promise.all(imagePromises).then((results) => {
                        results.forEach((result) => {
                          if (result) text += result.data.text + " ";
                        });
                      });
                    });
                  } else {
                    textContent.items.forEach((item) => {
                      text += item.str + " ";
                    });
                  }
                });
              })
            );
          }
          Promise.all(pagesPromises)
            .then(() => {
              setPdfText(text);
              setIsLoading(false);
            })
            .catch(() => {
              setError("Error extracting content from PDF.");
              setIsLoading(false);
            });
        })
        .catch(() => {
          setError("Error extracting content from PDF.");
          setIsLoading(false);
        });
    };
    reader.readAsArrayBuffer(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center p-4 mt-20">
      <div
        {...getRootProps({ className: "dropzone" })}
        className={`w-full max-w-md p-6 border-2 border-dashed rounded-lg text-center cursor-pointer ${
          isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">
          {isDragActive
            ? "Drop the PDF file here ..."
            : "Drag 'n' drop a PDF file here, or click to select one"}
        </p>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {isLoading && (
        <p className="text-gray-500 mt-2">Extracting text, please wait...</p>
      )}
      {pdfText && (
        <div className="mt-4 p-4 bg-gray-100 text-black rounded-md whitespace-pre-wrap">
          {pdfText}
        </div>
      )}
    </div>
  );
}
