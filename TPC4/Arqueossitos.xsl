<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="/">
        <xsl:for-each-group select="//ARQELEM" group-by="Type">
            <xsl:variable name="i" select="position()"/>
            <xsl:result-document  href="TPC4/XML/{$i}.xml">
                <xsl:copy-of select="current-group()"/>
            </xsl:result-document>
        </xsl:for-each-group>
    </xsl:template>
        
</xsl:stylesheet>