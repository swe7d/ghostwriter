import React, { Component } from 'react'
import jsPDF from 'jspdf'

class PDFGenerator extends Component {
        
    downloadPDF = () => {
        var doc = new jsPDF()
        //DEFAULT FONT SIZE IS 16
        //DEFAULT TEXT COLOR IS #000000
        var infoText = "";
        var splitText = "";
        var defaultTextColor = "#000000"
        var watermarkTextColor = "#959595"
        var watermarkText = "WATERMARK"
        
        //Add a watermark at start of doc
        doc.setTextColor(watermarkTextColor); //#959595
        doc.setFontSize(140);
        doc.text(watermarkText, doc.internal.pageSize.getWidth() * (7/8), doc.internal.pageSize.getHeight(), "center", 55);
                        
        //Reset Text Values
        doc.setTextColor(defaultTextColor);
        doc.setFontSize(16);
        
        for (var i = 0; i < 100; i++)
            {
                infoText += "hello " + i.toString() + "\n";
                //If we are at the end of the page, then add the text and
                //start a new page to save the next block of strings to
                if ( i != 0 && i % 41 == 0)
                    {
                        splitText = doc.splitTextToSize(infoText, 180);
                        doc.text(splitText, 10, 20);
                        doc.addPage("a4", "portrait");
                        
                        //Add a watermark to the new page
                        doc.setTextColor(watermarkTextColor); //#959595
                        doc.setFontSize(140);
                        doc.text(watermarkText, doc.internal.pageSize.getWidth() * (7/8), doc.internal.pageSize.getHeight(), "center", 55);
                        
                        //Reset Text Values
                        doc.setTextColor(defaultTextColor);
                        doc.setFontSize(16);
                        infoText = "";
                    }
            }   
        splitText = doc.splitTextToSize(infoText, 180);
        doc.text(splitText, 10, 20);
        
        infoText = "";
        doc.save('realNew.pdf')
    }
    
    render() {  
        return (
            <div>
               <button onClick = {this.downloadPDF}>
                Download Document
                </button>
            </div>
        )
    }
}

export default PDFGenerator