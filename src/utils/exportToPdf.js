import { jsPDF } from 'jspdf';

export const exportCeritaToPdf = (cerita) => {
  const doc = new jsPDF();
  
  doc.setFont('helvetica');
  doc.setFontSize(20);
  doc.text('Buku Waktu - Ekspor Cerita', 105, 20, { align: 'center' });
  
  let y = 40;
  cerita.forEach((item, index) => {
    doc.setFontSize(14);
    doc.text(`${index + 1}. ${item.judul}`, 15, y);
    doc.setFontSize(10);
    doc.text(`Tanggal: ${new Date(item.tanggal).toLocaleDateString()}`, 160, y);
    y += 7;
    
    doc.setFontSize(12);
    const splitText = doc.splitTextToSize(item.isi, 180);
    doc.text(splitText, 15, y + 5);
    y += splitText.length * 7 + 15;
    
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });
  
  doc.save('buku-waktu-export.pdf');
};