import { Document, Page, pdfjs } from "react-pdf";
import { UploadIcon } from "lucide-react";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs`;

export const PDFPreview = ({ pdfFile, onFileUpload }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="bg-white border-dashed rounded-md border-2 border-gray-300 flex flex-col items-center justify-center w-full max-h-max lg:w-1/2">
      {!pdfFile ? (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full px-6 py-40"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h2 className="text-xl font-semibold mb-2">Upload Your Invoice</h2>
          <p className="text-gray-500 mb-4 text-center">
            To auto-populate fields and save time
          </p>
          <img
            alt="Illustration of uploading an invoice"
            className="my-4 w-2/3 bg-white"
            height="100"
            src="https://www.tcieduhub.in/public/photos/docs20.gif"
          />
          <button
            className="flex gap-1 items-center !bg-gray-100 text-gray-700 px-4 py-2 rounded mb-3"
            onClick={() => document.getElementById("dropzone-file").click()}
          >
            Upload File
            <UploadIcon size={16} className="ml-2" />
          </button>
          <p className="text-blue-500 cursor-pointer">
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
        <div className="flex flex-col gap-4 p-4">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="mx-auto"
          >
            <Page
              pageNumber={currentPage}
              className="w-full mx-auto"
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
          {numPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage <= 1}
                className="btn btn-secondary disabled:opacity-50"
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
                className="btn btn-primary disabled:opacity-50"
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
