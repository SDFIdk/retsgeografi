// src/components/FileUploader.js
export class FileUploader {
  constructor(onFilesUploaded) {
    this.onFilesUploaded = onFilesUploaded;
  }

  handleFileUpload(event) {
    const files = [...event.target.files];
    const processedFiles = {};

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        processedFiles[file.name] = reader.result;
        if (Object.keys(processedFiles).length === files.length) {
          this.onFilesUploaded(processedFiles);
        }
      };
      reader.readAsText(file);
    });
  }
}
