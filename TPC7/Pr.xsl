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
                
                <h1 align="center">Project Record</h1>
                <hr/>
                <hr/>
                <table class="w3-table" >
                    
                    <tr>
                        <td >
                            <b >KeyName-</b> <xsl:value-of select="pr/metadata/keyname"/>
                        </td>   
                        
                        <td>
                            <b>BData-</b><xsl:value-of select="pr/metadata/bdate"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Title-</b><xsl:value-of select="pr/metadata/title"/>
                        </td>
                        <td>
                            <b>EData-</b><xsl:value-of select="pr/metadata/edate"/>
                        </td>
                        
                    </tr>
                    <tr>
                        <b>Supervisor-</b>
                        <a href="{pr/metadata/supervisor/@homepage}" target="_blank"><xsl:value-of select="pr/metadata/supervisor"/></a>
                       
                    </tr>
                    
                </table>
                <hr/>
                <hr/>  
                
                <h1>   Workteam</h1>
                <table class="w3-table" >
                    <tr>
                        <th>Identifier:</th><td><xsl:value-of select="pr/workteam/worker/identifier"/></td>
                    </tr>
                    <tr>
                        <th>Name-</th><td><xsl:value-of select="pr/workteam/worker/name"/></td>
                    </tr>
                    <tr>
                        <th>Email-</th><td><xsl:value-of select="pr/workteam/worker/email"/></td>
                    </tr>
                    <tr>
                        <xsl:if test="pr/workteam/worker/git">
                            <b><i>Github: </i></b><a href="{pr/workteam/worker/git}" target="_blank"><xsl:value-of select="pr/workteam/worker/git"/></a>
                        </xsl:if>
                    </tr>
                    
                </table>
                <hr/>
                <hr/>
                <h1>Abstract</h1><xsl:value-of select="pr/abstract"/>
                
                <xsl:if test="pr/deliverables">
                    <hr/>
                    <h1>Deliverables:</h1>
                    <ul>
                        <xsl:for-each select="pr/deliverables/deliverable">
                            <li><a href="{@path}"><xsl:value-of select="."/></a></li>
                        </xsl:for-each>
                    </ul>
                </xsl:if>
                
            </body>
            
        </html>
    </xsl:template>
    
       
</xsl:stylesheet>