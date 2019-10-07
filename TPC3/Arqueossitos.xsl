<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="html/index.html">
            <html>
                <head>
                    <title>Arquivo dos arqueossitos portugueses</title>
                    <meta charset="UFT8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1>Arquivo dos arqueossitos portugueses</h1>
                    <h3>Índice de arqueossitos</h3>
                    <ol>
                        <xsl:apply-templates mode="indice"/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <a name="{generate-id()}"/>
            <a href="ARQELEM-{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="html/ARQELEM-{generate-id()}.html">
            <html>
                <head>
                    <title>Arquivo arqueossitos: Página arqueossitos</title>
                    <meta charset="UFT8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <table class="w3-table">
                        <tr>
                            <th>Tipo</th><td><xsl:value-of select="TIPO"/></td>
                        </tr>
                        <tr>
                            <th>Identidade</th><td><xsl:value-of select="IDENTI"/></td>
                        </tr>
                        <tr>
                            <th>Imagem</th><td><xsl:value-of select="IMAGEM"/></td>
                        </tr>
                        <tr>
                            <th>Descrição</th><td><xsl:value-of select="DESCRI"/></td>
                        </tr>
                        <tr>
                            <th>Lugar</th><td><xsl:value-of select="LUGAR"/></td>
                        </tr>
                        <tr>
                            <th>Freguesia</th><td><xsl:value-of select="FREGUE"/></td>
                        </tr>
                        <tr>
                            <th>Concelho</th><td><xsl:value-of select="CONCEL"/></td>
                        </tr>
                        <tr>
                            <th>Codadm</th><td><xsl:value-of select="CODADM"/></td>
                        </tr>
                        <tr>
                            <th>Latitude</th><td><xsl:value-of select="LATITU"/></td>
                        </tr>
                        <tr>
                            <th>Longitude</th><td><xsl:value-of select="LONGIT"/></td>
                        </tr>
                        <tr>
                            <th>Altitude</th><td><xsl:value-of select="ALTITU"/></td>
                        </tr>
                        <tr>
                            <th>Acesso</th><td><xsl:value-of select="ACESSO"/></td>
                        </tr>
                        
                        <tr>
                            <th>Quadro</th><td><xsl:value-of select="QUADRO"/></td>
                        </tr>
                        
                        <tr>
                            <th>Desarq</th><td><xsl:value-of select="DESARQ"/></td>
                        </tr>
                        <tr>
                            <th>Interp</th><td><xsl:value-of select="INTERP"/></td>
                        </tr>
                        
                        <tr>
                            <th>Deposi</th><td><xsl:value-of select="DEPOSI"/></td>
                        </tr>
                        <tr>
                            <th>Biblio</th><td><xsl:value-of select="BIBLIO"/></td>
                        </tr>
                        <tr>
                            <th>AUTOR</th><td><xsl:value-of select="AUTOR"/></td>
                        </tr>
                        <tr>
                            <th>DATA</th><td><xsl:value-of select="DATA"/></td>
                        </tr>
                        <xsl:apply-templates select="file"/>
                    </table>
                    <hr/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar à página principal</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>      
    </xsl:template>
</xsl:stylesheet>