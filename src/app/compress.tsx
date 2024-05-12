'use client'; // This is required for Client Components in the App Router

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import styles from './compress.module.css';

export default function Compress() {
  const [compressedPDF, setCompressedPDF] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileData = await file.arrayBuffer();
      const compressedData = await compressPDF(fileData);
      setCompressedPDF(compressedData);
    }
  };

  const compressPDF = async (fileData: ArrayBuffer) => {
    const pdfDoc = await PDFDocument.load(fileData);
    const compressedPdf = await pdfDoc.saveAsBase64({ dataUri: true });
    return compressedPdf;
  };

  return (
    <div className={styles.container}>
      <div className={styles.fileInput}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <label htmlFor="file-upload" className={styles.fileLabel}>
          Choose a PDF file
        </label>
      </div>
      {compressedPDF && (
        <div className={styles.downloadLink}>
          <p>Compressed PDF:</p>
          <a href={compressedPDF} download="compressed.pdf" className={styles.downloadButton}>
            Download Compressed PDF
          </a>
        </div>
      )}
    </div>
  );
}