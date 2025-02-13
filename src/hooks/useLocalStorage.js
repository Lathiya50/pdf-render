export const useLocalStorage = () => {
  const saveFormData = async (data) => {
    try {
      localStorage.setItem("invoiceFormData", JSON.stringify(data));
    } catch (error) {
      throw new Error("Failed to save form data");
    }
  };

  const loadFormData = () => {
    try {
      const data = localStorage.getItem("invoiceFormData");
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Failed to load form data:", error);
      return null;
    }
  };

  return { saveFormData, loadFormData };
};
