import React, { Component } from 'react'
import jsPDF from 'jspdf'

class PDFGenerator extends Component {
        
    downloadPDF = () => {
        var doc = new jsPDF()
        //DEFAULT FONT SIZE IS 16
        //DEFAULT TEXT COLOR IS #000000
        //AT FONT SIZE 16, 33 W CAN BE PRINTED BEFORE THE TEXT LINE WRAPS
        var basicInfo = this.props.data.basic;
        var data = this.props.data.milestones;
        
        
        var infoText = "";
        var splitText = "";
        var defaultTextColor = "#000000"
        var watermarkTextColor = "#959595"
        var watermarkText = "PREVIEW"
        
        doc.setFont('courier');
        doc.setFontType('normal');
        
        //Add a watermark at start of doc
        doc.setTextColor(watermarkTextColor); //#959595
        doc.setFontSize(140);
        doc.text(watermarkText, doc.internal.pageSize.getWidth() * (3/4), doc.internal.pageSize.getHeight() * (3/4), "center", 55);
                        
        //Reset Text Values To Normal
        doc.setTextColor(defaultTextColor);
        doc.setFontSize(16);
        
        
        //Adds the users name and the title of the book to the text string that will be printed to the document
        infoText += basicInfo.firstname + " " + basicInfo.lastname + "\n";
        infoText += "\n" + basicInfo.title + " \n\n"
            
        for (var i = 0; i < data.length; i++)
            {
                //infoText += data[i].type + "\n";               
                var keys = Object.keys(data[i].data);
                var values = Object.values(data[i].data);
                
                //Print the data keys and values
                for (var j = 0; j < keys.length; j++)
                    {     
                        infoText += values[j] + "\n\n";

                    }     
            }
        
        //41 lines at current length: 53 letters per line
        //split text array stores the LINES created in indexes. 
        //Make sure new page pops up if split text array length is greater than 40
        splitText = doc.splitTextToSize(infoText, 180);
        
        //Splitting up into pages
        var tempString = "";
        for (var i = 0; i < splitText.length; i++)
            {
                tempString += splitText[i] + "\n";
                //When i is 40, 40 indexes of splitText have been added ot the temp string and are ready to be printed to a page and continues until there is no more text left
                if (i % 40 == 0 && i != 0)
                    {
                        //Print text to document
                        doc.text(tempString, 10, 20);
                        
                        //Add new page with the basic setup of a watermark and clear the tempString
                        doc.addPage("a4", "portrait");
                        doc.setTextColor(watermarkTextColor); //#959595
                        doc.setFontSize(140);
                        doc.text(watermarkText, doc.internal.pageSize.getWidth() * (3/4), doc.internal.pageSize.getHeight() * (3/4), "center", 55);
                        //Reset text values to basics
                        doc.setFontSize(16);
                        doc.setTextColor(defaultTextColor);
                        tempString = "";
                    }
                //Once at the end of the split text array, print the text to the document
                if (i == splitText.length - 1)
                    {
                        doc.text(tempString, 10, 20);
                    }
            }
        //Downloads the document to the users PC
        doc.save('GhostwriterPreview.pdf')

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