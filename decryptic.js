// Decryption function for hosted environment (JavaScript)
function decryptUrl(url) {
  // Cek apakah URL memiliki penanda _token=989324ehhedfkhjswf32423kjhksdfgsdge425t34t4e
  if (!url.endsWith('_token=989324ehhedfkhjswf32423kjhksdfgsdge425t34t4e')) {
    return url; // Lewati URL yang tidak memiliki penanda
  }

  // Hapus penanda dari URL
  url = url.replace('_token=989324ehhedfkhjswf32423kjhksdfgsdge425t34t4e', '');

  // Pisahkan protokol
  var protocol = extractProtocol(url);
  
  // Pisahkan domain, path, dan ekstensi
  var { domainAndPath, excludedExtensions, extensionPositions } = extractDomainAndPathAndExtensionPositions(url);

  // Dekripsi domain dan path tanpa protokol dan ekstensi menggunakan tabel substitusi acak
  var decryptedDomainAndPath = substituteDecrypt(domainAndPath);

  // Gabungkan kembali URL dengan ekstensi di posisi aslinya
  var newUrl = insertExtensionsBack(decryptedDomainAndPath, excludedExtensions, extensionPositions);

  // Gabungkan kembali dengan protokol
  newUrl = protocol + newUrl;

  return newUrl;
}

// Fungsi untuk mengekstrak protokol (https:// atau http://)
function extractProtocol(url) {
  var match = url.match(/https?:\/\//);
  return match ? match[0] : '';
}

// Fungsi untuk mengekstrak domain, path, dan ekstensi, serta posisi ekstensi
function extractDomainAndPathAndExtensionPositions(url) {
  // Pisahkan protokol dari sisa URL
  var protocolRegex = /^https?:\/\//i;
  var domainAndPath = url.replace(protocolRegex, '');

  // Cari ekstensi yang dikenal dan keluarkan mereka dari dekripsi
  var extensionsPattern = /(\.html|\.php|\.m3u8|\.css|\.js|\.xml|\.json)/gi;
  var excludedExtensions = [];
  var extensionPositions = [];
  
  var match;
  while ((match = extensionsPattern.exec(domainAndPath)) !== null) {
    excludedExtensions.push(match[0]); // Simpan ekstensi
    extensionPositions.push(match.index); // Simpan posisi ekstensi
    domainAndPath = domainAndPath.replace(match[0], ''); // Hapus ekstensi dari domainAndPath untuk didekripsi
  }

  return { domainAndPath, excludedExtensions, extensionPositions };
}

// Fungsi untuk memasukkan ekstensi kembali ke posisi asli mereka
function insertExtensionsBack(decryptedDomainAndPath, excludedExtensions, extensionPositions) {
  var result = decryptedDomainAndPath;
  for (var i = 0; i < excludedExtensions.length; i++) {
    var position = extensionPositions[i];
    var extension = excludedExtensions[i];
    result = result.slice(0, position) + extension + result.slice(position);
  }
  return result;
}

// Fungsi untuk mendekripsi menggunakan tabel substitusi acak
function substituteDecrypt(text) {
  var substitutionTable = {
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r',
    'f': 's', 'g': 't', 'h': 'u', 'i': 'v', 'j': 'w',
    'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a', 'o': 'b',
    'p': 'c', 'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k', 'y': 'l',
    'z': 'm', '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2', '8': '3',
    '9': '4'
  };

  var result = '';
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    result += substitutionTable[char] || char; // Jika tidak ada dalam tabel, biarkan karakter tidak berubah
  }
  return result;
}
