import * as fs from 'fs';
import * as path from 'path';

interface Centro {
  CCEN: number;
  NOM: string;
  NOME: string;
  DGENRC: string;
  DGENRE: string;
  MUNI: number;
  DMUNIC: string;
  DTERRC: string;
  DOMI: string;
  CPOS: number;
  TEL1: string;
  TFAX: string;
  EMAIL: string;
  PAGINA: string;
  COORX: number;
  COORY: number;
}

interface Instituto {
  CCEN: number;
  NOM: string;
  NOME: string;
  DGENRC: string;
  DGENRE: string;
  MUNI: number;
  DMUNIC: string;
  DTERRC: string;
  DOMI: string;
  CPOS: number;
  TEL1: string;
  TFAX: string;
  EMAIL: string;
  PAGINA: string;
  COOR_X: number;
  COOR_Y: number;
}

function extractCentros(): Centro[] {
  const centrosPath = path.join(__dirname, 'centrosEducativos.ts');
  const fileContent = fs.readFileSync(centrosPath, 'utf-8');
  
  // Extraer array de centros con expresión regular
  const match = fileContent.match(/export const centros\s*=\s*(\[[\s\S]*\]);/);
  if (!match) {
    throw new Error('No se pudo encontrar el array centros en el archivo centrosEducativos.ts');
  }
  
  // Evaluar el array con 'eval' es peligroso, pero aquí se asume uso controlado
  // Alternativamente se puede hacer un parse más seguro si el archivo está en formato JSON válido
  const centrosArray = eval(match[1]) as Centro[];
  return centrosArray;
}

function transformToInstitutos(centros: Centro[]): Instituto[] {
  return centros.map(c => ({
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
  }));
}

function generateInstitutosTs(institutos: Instituto[]) {
  const content = `export const institutos = ${JSON.stringify(institutos, null, 2)};\n`;
  const outputPath = path.join(__dirname, 'institutos-conv.ts');
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log('Archivo institutos.ts generado correctamente.');
}

function main() {
  try {
    const centros = extractCentros();
    const institutos = transformToInstitutos(centros);
    generateInstitutosTs(institutos);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
