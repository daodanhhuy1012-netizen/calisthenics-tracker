/* Server tĩnh mini để chạy PWA trên máy tính (Service Worker bắt buộc phải chạy qua http).
   Cách dùng: mở terminal tại thư mục này rồi chạy `node server.js`,
   sau đó mở trình duyệt vào http://localhost:8080
   Không cần cài thêm gì, chỉ cần Node.js. */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Chỉ phục vụ các file của app — mọi thứ khác (server.js, HUONG-DAN.md, ...) đều 404.
const ALLOWED = new Set([
  'index.html',
  'app.js',
  'styles.css',
  'sw.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png'
]);

const server = http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('URL không hợp lệ');
    return;
  }
  if (urlPath === '/') urlPath = '/index.html';
  const name = path.basename(path.normalize(urlPath));
  if (!ALLOWED.has(name)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Không tìm thấy file: ' + urlPath);
    return;
  }
  const filePath = path.join(ROOT, name);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Không tìm thấy file: ' + urlPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('PWA Lịch Tập Calisthenics đang chạy tại: http://localhost:' + PORT);
  console.log('Mở trên điện thoại: dùng IP LAN của máy tính, ví dụ http://192.168.1.5:' + PORT + ' (cùng WiFi)');
});
