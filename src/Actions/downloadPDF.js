export const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch('Resume_VictoriaNeustel.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume_VictoriaNeustel.pdf';
            alink.click();
        })
    })
}