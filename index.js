const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');
const cors = require('cors'); // CORS hinzufügen

const app = express();
const port = 5001;

// CORS nur für localhost:3000 erlauben
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Multer Setup – speichert Uploads im Temp-Ordner
const upload = multer({ dest: 'temp/' });

// Statischer Ordner für konvertierte Bilder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint für Upload + Konvertierung
app.post('/upload', upload.single('bild'), async (req, res) => {
  try {
    const inputPath = req.file.path;
    const inputBuffer = fs.readFileSync(inputPath);
    const mimeType = req.file.mimetype;
    const outputFilename = `${Date.now()}_converted.jpg`;
    const outputPath = path.join(__dirname, 'uploads', outputFilename);

    let imageBuffer;

    // Wenn HEIC oder HEIF → vorher konvertieren
    if (mimeType === 'image/heic' || mimeType === 'image/heif') {
      imageBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 1,
      });
    } else {
      imageBuffer = inputBuffer;
    }
// Bild mit Sharp weiterveraarbeiten (z.B. skalieren)
      await sharp(imageBuffer)
      .resize(800) // Optional: Skalierung
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    // Temporäre Datei löschen
    fs.unlinkSync(inputPath);

      
    res.status(200).json({
      message: '✅ Konvertierung erfolgreich!',
      dateipfad: `/uploads/${outputFilename}`,
    });

  } catch (err) {
    console.error('❌ Fehler bei der Konvertierung:', err);
    res.status(500).json({ error: 'Fehler bei der Konvertierung' });
  }
});

// Server starten
app.listen(port, () => {
  console.log(`🚀 Server läuft auf http://localhost:${port}`);
});
