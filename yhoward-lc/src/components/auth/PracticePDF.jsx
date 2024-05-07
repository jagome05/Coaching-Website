import { pdfjs, Document, Page } from 'react-pdf';
import { Canvas } from '@react-pdf/renderer'
import signPDF from '../../static/business_3.png.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


export default function PracticePDF() {


  return (
    <>
      <div className='border-2 border-black'>
        <Document file={signPDF}>
          <Page pageNumber={1} scale={1/2} renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
      </div>
        <input required type="checkbox" className="h-6 w-6"></input> I have read and and agree to the terms of service
    </>
  )
}

//? ref
// https://www.youtube.com/watch?v=sqx8KbVa6Cw&t=2098s //--> for docusign
//https://github.com/wojtekmaj/react-pdf
//https://react-pdf.org/compatibility
//https://www.youtube.com/watch?v=d_24k0clSJs //--> for adobe
//https://console.docuseal.co/embedding/form#react //--> docuseal
//https://www.docuseal.co/guides/embed-document-signing-into-react-app