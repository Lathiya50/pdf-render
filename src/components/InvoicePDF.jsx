import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  section: { marginBottom: 10 },
  header: { fontSize: 18, marginBottom: 10, textAlign: "center" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  expenseHeader: { marginTop: 10, fontSize: 14, fontWeight: "bold" },
  expenseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
});

const InvoicePDF = ({ data }) => {
  if (!data) return null;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Invoice</Text>

        <View style={styles.section}>
          <View style={styles.row}>
            <Text>Vendor:</Text>
            <Text>{data.vendor}</Text>
          </View>
          <View style={styles.row}>
            <Text>PO Number:</Text>
            <Text>{data.poNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text>Invoice Number:</Text>
            <Text>{data.invoiceNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text>Invoice Date:</Text>
            <Text>{data.invoiceDate}</Text>
          </View>
          <View style={styles.row}>
            <Text>Total Amount:</Text>
            <Text>${data.totalAmount}</Text>
          </View>
          <View style={styles.row}>
            <Text>Payment Terms:</Text>
            <Text>{data.paymentTerms}</Text>
          </View>
          <View style={styles.row}>
            <Text>Invoice Due Date:</Text>
            <Text>{data.invoiceDueDate}</Text>
          </View>
          <View style={styles.row}>
            <Text>GL Post Date:</Text>
            <Text>{data.glPostDate}</Text>
          </View>
          <View style={styles.row}>
            <Text>Description:</Text>
            <Text>{data.invoiceDescription}</Text>
          </View>
        </View>

        <Text style={styles.expenseHeader}>Expense Details</Text>
        {data.expenseCodes.map((expense, index) => (
          <View key={index} style={styles.expenseRow}>
            <Text>
              {expense.department} - {expense.expenseDescription} ($
              {expense.lineAmount})
            </Text>
          </View>
        ))}

        <View style={{ marginTop: 10 }}>
          <Text>Comment: {data.comment}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
