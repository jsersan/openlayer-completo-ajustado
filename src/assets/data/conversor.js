"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
function extractCentros() {
    var centrosPath = path.join(__dirname, 'centrosEducativos.ts');
    var fileContent = fs.readFileSync(centrosPath, 'utf-8');
    // Extraer array de centros con expresión regular
    var match = fileContent.match(/export const centros\s*=\s*(\[[\s\S]*\]);/);
    if (!match) {
        throw new Error('No se pudo encontrar el array centros en el archivo centrosEducativos.ts');
    }
    // Evaluar el array con 'eval' es peligroso, pero aquí se asume uso controlado
    // Alternativamente se puede hacer un parse más seguro si el archivo está en formato JSON válido
    var centrosArray = eval(match[1]);
    return centrosArray;
}
function transformToInstitutos(centros) {
    return centros.map(function (c) { return ({
        CCEN: c.CCEN,
        NOM: c.NOM,
        NOME: c.NOME,
        DGENRC: c.DGENRC,
        DGENRE: c.DGENRE,
        MUNI: c.MUNI,
        DMUNIC: c.DMUNIC,
        DTERRC: c.DTERRC,
        DOMI: c.DOMI,
        CPOS: c.CPOS,
        TEL1: c.TEL1,
        TFAX: c.TFAX,
        EMAIL: c.EMAIL,
        PAGINA: c.PAGINA,
        COOR_X: c.COORX,
        COOR_Y: c.COORY
    }); });
}
function generateInstitutosTs(institutos) {
    var content = "export const institutos = ".concat(JSON.stringify(institutos, null, 2), ";\n");
    var outputPath = path.join(__dirname, 'institutos-conv.ts');
    fs.writeFileSync(outputPath, content, 'utf-8');
    console.log('Archivo institutos.ts generado correctamente.');
}
function main() {
    try {
        var centros = extractCentros();
        var institutos = transformToInstitutos(centros);
        generateInstitutosTs(institutos);
    }
    catch (err) {
        console.error('Error:', err);
    }
}
main();
