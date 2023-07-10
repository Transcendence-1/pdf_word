import logo from './logo.svg';
import './App.css';
import { PDFDocument } from 'pdf-lib';

function App() {
  const handleConvert = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    try {
      const pdfDoc = await PDFDocument.load(await file.arrayBuffer());
      const wordBytes = await pdfDoc.saveAsBase64();
      
      // Send the converted Word file bytes to the server for saving or further processing
      
      console.log('Conversion success!');
    } catch (error) {
      console.error('Conversion error:', error);
    }
  };

  return (
    <div className="App">
      <input type='file' onChange={handleConvert} /><br />
      <button>Convert</button>
    </div>
  );
}

export default App;
