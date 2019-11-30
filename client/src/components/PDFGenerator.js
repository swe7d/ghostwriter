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
        var watermarkText = "WATERMARK"
        
        doc.setFont('courier');
        doc.setFontType('normal');
        //console.log(doc.getFontList())
        
        //Add a watermark at start of doc
        doc.setTextColor(watermarkTextColor); //#959595
        doc.setFontSize(140);
        doc.text(watermarkText, doc.internal.pageSize.getWidth() * (7/8), doc.internal.pageSize.getHeight(), "center", 55);
                        
        //Reset Text Values
        doc.setTextColor(defaultTextColor);
        doc.setFontSize(16);
        
        
        //splitText = doc.splitTextToSize(data[0].type, 180);
        //doc.text(splitText, 10, 20);
        //doc.addPage("a4", "portrait");
        infoText += basicInfo.firstname + " " + basicInfo.lastname + "\n";
        infoText += JSON.stringify(basicInfo.selectedDate) +"\n";
        infoText += "Born in " + basicInfo.hometown + "\n";
        infoText += "\n" + basicInfo.title + " \n\n"
            
        for (var i = 0; i < data.length; i++)
            {
                infoText += data[i].type + "\n";               
                var keys = Object.keys(data[i].data);
                var values = Object.values(data[i].data);
                
                //Print the data keys and values
                for (var j = 0; j < keys.length; j++)
                    {
                        infoText += keys[j] + ": ";
                        infoText += values[j] + "\n";
                    }
                //infoText += JSON.stringify(infoText.length)
                infoText += "\n"
                
            }
        
        splitText = doc.splitTextToSize(infoText, 180);
        doc.text(splitText, 10, 20);
        doc.addPage("a4", "portrait");    
        infoText = "";
        
        
        //41 lines at current length: 53 letters per line
        //split text array stores the LINES created in indexes. 
        //Make sure new page pops up if split text array is greater than 42
        for (var i = 0; i < 70; i++)
            {
                for (var j = 0; j < i; j++)
                    {
                        infoText += "l"
                    }
                infoText += i + "\n";
            }
        splitText = doc.splitTextToSize(infoText, 180);
        
        //Splitting up into pages
        var tempString = "";
        for (var i = 0; i < splitText.length; i++)
            {
                tempString += splitText[i] + "\n";
                if (i % 41 == 0 && i != 0)
                    {
                        doc.text(tempString, 10, 20);
                        doc.addPage("a4", "portrait");
                        tempString = "";
                    }
                if (i == splitText.length - 1)
                    {
                        doc.text(tempString, 10, 20);
                    }
            }
        
        //doc.text(splitText, 10, 20);
        doc.save('realNew.pdf')
        //infoText = "";
        
        /*Testing char splicing
        doc.addPage("a4", "portrait");
        infoText = "abcdefgh two three four five six seven eight nine ten eleven twelve thirteen 14 15 16 17 18 19 20 21 22 23 24 25";
        splitText = doc.splitTextToSize(infoText, 180);
        doc.text(splitText, 10, 20);
        doc.addPage("a4", "portrait");
        infoText = "";
        infoText += "length is " + splitText.length;
        infoText += " and slot 0 is " + splitText[0];
        infoText += " and last slot is " + splitText[splitText.length - 1];
        var splitText2 = doc.splitTextToSize(infoText, 180);
        doc.text(splitText2, 10, 20);
        doc.save('realNew.pdf');*/
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