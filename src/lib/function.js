export const savePDFToLocalStorage = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        // Store the base64 string
        localStorage.setItem("pdfFile", reader.result);
        resolve(reader.result);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
export const loadPDFFromLocalStorage = async () => {
  const base64PDF = localStorage.getItem("pdfFile");
  if (!base64PDF) return null;

  // Convert base64 back to Blob
  try {
    const base64Response = await fetch(base64PDF);
    const blob = await base64Response.blob();
    return blob;
  } catch (error) {
    console.error("Error loading PDF:", error);
    return null;
  }
};
