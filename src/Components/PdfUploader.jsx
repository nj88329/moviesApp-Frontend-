import {useState} from 'react';
import '../App.css';
import ReactPlayer from 'react-player'

const PdfUploader = () => {

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
  
    const handleUpload = async () => 
     {
        if (file) {
      
            const formData = new FormData();
            formData.append('file', file);
      
            try {
              const result = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
              });
      
              const data = await result.json();
      
              console.log(data);
           
            } catch (error) {
              console.error(error);   
              };
           }
     }
  return (
     <>
     <div className="file-uploader">
      <div className="input-group" >
        <input id="file" type="file" onChange={handleFileChange} placeholder='Choose File' />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button 
          onClick={handleUpload}
          className="submit"
        >Upload a file</button>
      )}
      </div>
      <div>
      {/* <ReactPlayer url= {} /> */}
      </div>
    </>
  )
 }

export default PdfUploader
