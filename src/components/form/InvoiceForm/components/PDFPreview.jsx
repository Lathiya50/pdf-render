import { Document, Page, pdfjs } from "react-pdf";
import { UploadIcon } from "lucide-react";
import { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;

export const PDFPreview = ({ pdfFile, onFileUpload }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState(null);

  const updateContainerWidth = () => {
    const container = document.getElementById("pdf-container");
    if (container) {
      setContainerWidth(container.clientWidth);
    }
  };

  useEffect(() => {
    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  useEffect(() => {
    if (containerWidth) {
      const baseWidth = 595;
      const newScale = (containerWidth - 48) / baseWidth;
      setScale(Math.min(Math.max(newScale, 0.5), 1.5));
    }
  }, [containerWidth]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onFileUpload(droppedFile);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div
      id="pdf-container"
      className="bg-white border-dashed rounded-md border-2 border-gray-300 flex flex-col items-center justify-center w-full max-h-max lg:w-1/2 overflow-hidden"
    >
      {!pdfFile ? (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full px-4 py-6 sm:px-6 sm:py-40"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Upload Your Invoice
          </h2>
          <p className="text-gray-500 mb-4 text-center text-sm sm:text-base">
            To auto-populate fields and save time
          </p>
          <img
            alt="Illustration of uploading an invoice"
            className="my-4 w-2/3 sm:w-2/5 bg-white"
            height="100"
            src="/api/placeholder/400/320"
          />
          <button
            className="flex gap-1 items-center bg-gray-100 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded mb-3 text-sm sm:text-base"
            onClick={() => document.getElementById("dropzone-file").click()}
          >
            Upload File
            <UploadIcon size={16} className="ml-2" />
          </button>
          <p className="text-blue-500 cursor-pointer text-sm sm:text-base">
            Click to upload{" "}
            <span className="text-gray-700">or Drag and drop</span>
          </p>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) =>
              e.target.files[0] && onFileUpload(e.target.files[0])
            }
            accept=".pdf"
          />
        </label>
      ) : (
        <div className="flex flex-col gap-4 p-3 sm:p-4 w-full">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="mx-auto"
          >
            <Page
              pageNumber={currentPage}
              scale={scale}
              className="max-w-full mx-auto"
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
          {numPages > 1 && (
            <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage <= 1}
                className="btn btn-secondary disabled:opacity-50 px-2 py-1 sm:px-4 sm:py-2"
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {numPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, numPages))
                }
                disabled={currentPage >= numPages}
                className="btn btn-primary disabled:opacity-50 px-2 py-1 sm:px-4 sm:py-2"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PDFPreview;
