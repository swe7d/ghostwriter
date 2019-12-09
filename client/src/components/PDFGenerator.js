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
        //console.log(doc.getFontList())
        
        //Add a watermark at start of doc
        doc.setTextColor(watermarkTextColor); //#959595
        doc.setFontSize(140);
        doc.text(watermarkText, doc.internal.pageSize.getWidth() * (3/4), doc.internal.pageSize.getHeight() * (3/4), "center", 55);
                        
        //Reset Text Values
        doc.setTextColor(defaultTextColor);
        doc.setFontSize(16);
        
        console.log("DATA HERE");
        console.log(data);
        //splitText = doc.splitTextToSize(data[0].type, 180);
        //doc.text(splitText, 10, 20);
        //doc.addPage("a4", "portrait");
        
        //THIS PART NEEDS TO BE CHANGED
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
                        
                        //USED FOR WHEN PARAGRAPHS WERE ONLY MADE BY ENTIRE MILESTONES
                        /*if (j == 0)
                            {
                                infoText += values[j];
                            }
                        else
                        {
                            infoText += " " + values[j];
                        }*/
                        
                    }
                //infoText += JSON.stringify(infoText.length)
                
            }
        
        //41 lines at current length: 53 letters per line
        //split text array stores the LINES created in indexes. 
        //Make sure new page pops up if split text array is greater than 42
        splitText = doc.splitTextToSize(infoText, 180);
        
        //Splitting up into pages
        var tempString = "";
        for (var i = 0; i < splitText.length; i++)
            {
                tempString += splitText[i] + "\n";
                if (i % 40 == 0 && i != 0)
                    {
                        doc.text(tempString, 10, 20);
                        doc.addPage("a4", "portrait");
                        doc.setTextColor(watermarkTextColor); //#959595
                        doc.setFontSize(140);
                        doc.text(watermarkText, doc.internal.pageSize.getWidth() * (3/4), doc.internal.pageSize.getHeight() * (3/4), "center", 55);
                        doc.setFontSize(16);
                        doc.setTextColor(defaultTextColor);
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