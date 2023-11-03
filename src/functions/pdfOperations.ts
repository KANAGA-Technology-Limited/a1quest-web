import * as pdfjs from 'pdfjs-dist';
import { sendFeedback } from '@/functions/feedback';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

import {
  DocumentInitParameters,
  PDFDataRangeTransport,
  TypedArray,
} from 'pdfjs-dist/types/src/display/api';

export const getPdfText = async (
  src: string | TypedArray | DocumentInitParameters | PDFDataRangeTransport
) => {
  // Fetch the pdf file. Added verbosity: 0 to silence this error: Warning: TT: undefined function: 32
  const pdf = await pdfjs.getDocument({ url: src as URL, verbosity: 0 }).promise;

  // Get all the pages in file
  const pageList = await Promise.all(
    Array.from({ length: pdf.numPages }, (_, i) => pdf.getPage(i + 1))
  );

  // Return all the text in each page in the file
  const textList = await Promise.all(pageList.map((p) => p.getTextContent()));
  return textList
    .map(({ items }) => items.map((item: any) => item.str).join(''))
    .join('');
};
