<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        
        <html>
            <head>
                <title>Project Record</title>
                <meta charset="UTF8"/> 
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> 
            </head>
            <body>
                <h1>   Project Record</h1>
                <hr>
                    <table class="w3-table" >
                    <tr>
                        <th >KeyName-</th><td><xsl:value-of select="keyname"/></td>
                    </tr>
                    <tr>
                        <th>Title-</th><td><xsl:value-of select="title"/></td>
                    </tr>
                    <tr>
                        <th>Supervisor-</th><td><xsl:value-of select="supervisor"/></td>
                    </tr>
                    <tr>
                        <th>BData-</th><td><xsl:value-of select="bdata"/></td>
                    </tr>
                    <tr>
                        <th>EData-</th><td><xsl:value-of select="edata"/></td>
                    </tr>
                </table>
                </hr>
                <hr>
                <h1>   Workteam</h1>
                    <table class="w3-table" >
                    <tr>
                        <th>Identifier-</th><td><xsl:value-of select="identifier"/></td>
                    </tr>
                    <tr>
                        <th>Name-</th><td><xsl:value-of select="name"/></td>
                    </tr>
                    <tr>
                        <th>Email-</th><td><xsl:value-of select="email"/></td>
                    </tr>
                    
                </table>
                </hr>
                <h1>   Abstract</h1>
                <hr></hr>
                
            </body>
        </html>
        
    </xsl:template>
    <xsl:template match="doc">
      
        
        <hr/>
    </xsl:template>
    
   
</xsl:stylesheet>