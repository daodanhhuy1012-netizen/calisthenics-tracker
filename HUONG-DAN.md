# HƯỚNG DẪN SỬ DỤNG — PWA Lịch Tập Calisthenics

App theo dõi lịch tập calisthenics 100% bodyweight: giáo án kết hợp skill + basic,
tick từng hiệp khi tập, đồng hồ bấm giờ nghỉ, kỷ lục cá nhân, biểu đồ tiến bộ,
khối lượng tuần, mục tiêu cá nhân, streak và lịch tháng.
Bản 6.0 thêm: streak tính theo tuần (nghỉ theo lịch không đứt streak), lưu nháp
buổi tập đang dở (iOS tắt app giữa chừng vẫn tiếp tục được), nhập số thực tế
từng hiệp bằng cách chạm giữ, hiện "Lần trước" kèm gợi ý tăng, tạo bài tự tạo,
nhân bản giáo án, nhập kỷ lục tay, nhắc tuần giảm tải (deload), đồng hồ nghỉ
không trôi khi khóa màn hình + giữ màn hình sáng, cài một lần từ link cố định
GitHub Pages (tự cập nhật, không cần xuất/nhập JSON mỗi lần).
Bản 5.0 thêm: cây kỹ năng (Planche / Front Lever / Muscle-up / Handstand),
cân nặng & số đo cơ thể, huy hiệu thành tích, báo cáo tuần, biểu đồ từng bài
chọn được khoảng ngày, xuất CSV lịch sử tập.
Chạy offline hoàn toàn sau lần tải đầu tiên, không cần tài khoản, không cần mạng khi tập.

## 0. Cập nhật bản mới (v6.0, cache v7) — cài một lần từ link cố định

> ✅ **BẢN 6.0 KHÔNG CÒN DÙNG TUNNEL TẠM NỮA.** App giờ host trên GitHub Pages,
> link cố định: **https://daodanhhuy1012-netizen.github.io/calisthenics-tracker/**
> Cài icon một lần từ link này, từ nay mở app có mạng là service worker tự tải
> bản mới — không cần xuất/nhập JSON mỗi lần cập nhật nữa.

**Lần đầu chuyển từ bản tunnel cũ sang link mới (chỉ làm 1 lần duy nhất):**
link Pages là origin mới nên localStorage không tự chuyển sang — làm đúng 4 bước:
1. Trên iPhone, mở icon app **cũ** (tunnel) → ⚙️ Cài đặt → **Xuất JSON** (lưu file backup).
2. Trên iPhone, mở link Pages mới bằng Safari → **Thêm vào MH chính** (icon mới)
   → mở icon mới một lần có mạng → ⚙️ Cài đặt → **Nhập JSON** file ở bước 1.
3. Kiểm tra lịch sử/streak đã về đủ rồi mới **xóa icon cũ**.
4. Từ nay chỉ dùng icon mới. Không làm bước 1 = mất toàn bộ lịch sử tập, kỷ lục, số đo.
(Các lần cập nhật sau đó: mở app có mạng là tự lên bản mới, không cần làm gì thêm.
Nếu mở link mà thấy 404 thì bật GitHub Pages trong repo Settings → Pages →
Branch `main` → Save, đợi ~1 phút rồi mở lại.)

**Cài trên máy tính để test:** giải nén zip, `node server.js`, mở `http://localhost:8080`.
**Dữ liệu cũ được giữ nguyên:** lịch sử tập, kỷ lục, giáo án tự tạo, mục tiêu,
số đo cơ thể tự động chuyển sang bản mới (kể cả file JSON backup xuất từ bản cũ
— cứ nhập bình thường, migration v1/v2/v3/v4→v5 tự chạy).
Giáo án Đẩy/Kéo/Chân mặc định giữ nguyên id nên lịch tuần và lịch sử không vỡ.
Nút video "Xem hướng dẫn" mở YouTube nên cần mạng lúc bấm — còn lại app vẫn offline 100%.

## 1. Cách chạy app

Service Worker (để dùng offline + cài ra màn hình chính) **bắt buộc phải chạy qua http**,
không mở file `index.html` trực tiếp bằng cách double-click.

**Cách 1 — dùng Node.js (khuyên dùng):**
1. Mở **terminal** (VS Code hoặc PowerShell), `cd` vào thư mục chứa file này.
2. Chạy: `node server.js`
3. Mở **trình duyệt** vào: `http://localhost:8080`

**Cách 2 — không cần Node:**
- Mở terminal tại thư mục này, chạy: `npx serve .` (cần mạng lần đầu để tải `serve`), rồi mở địa chỉ nó hiện ra.
- Hoặc nếu có Python: `python -m http.server 8080`, rồi mở `http://localhost:8080`.

## 2. Cài ra màn hình chính điện thoại (dùng như app thật)

**Cách chính — link cố định GitHub Pages (khuyên dùng):**
1. Trên điện thoại, mở Safari (iPhone) hoặc Chrome (Android), gõ:
   `https://daodanhhuy1012-netizen.github.io/calisthenics-tracker/`
2. iPhone: bấm nút **Chia sẻ** → **Thêm vào MH chính**.
   Android: menu ⋮ → **Thêm vào màn hình chính** (hoặc **Cài đặt ứng dụng**).
3. Từ nay mở icon ngoài màn hình chính là dùng, **tắt mạng vẫn tập được** bình thường.
4. Cập nhật tự động: mở app có mạng là bản mới tự tải về, không cần cài lại,
   không cần xuất/nhập JSON. (Sau lần cài đầu, không cần máy tính nữa.)

**Cách khác — chạy từ máy tính qua WiFi (để test nhanh):**
1. Điện thoại và máy tính **cùng một mạng WiFi**, máy tính chạy `node server.js`.
2. Trên máy tính, mở terminal gõ `ipconfig`, tìm dòng **IPv4 Address** ở phần Wi-Fi (VD: `192.168.1.5`).
3. Trên điện thoại mở trình duyệt, gõ: `http://192.168.1.5:8080`.
4. Thêm vào màn hình chính như trên. Lưu ý: cách này chỉ dùng khi máy tính đang
   chạy server; link Pages ở trên mới là link cố định dùng lâu dài.

## 3. Lịch tập & nguyên tắc "skill trước, basic sau"

Lịch mặc định (đổi tùy ý ở tab 🗂️ Giáo án → Lịch tập trong tuần):

| Ngày | Buổi |
|---|---|
| T2, T6 | **Đẩy + Planche**: handstand giữ → planche lean → tuck planche → adv tuck planche → HSPU tự do → HSPU tường → straight bar dip (hạ chậm 3s) → pseudo planche |
| T3, T7 | **Kéo + Front Lever**: front lever giữ → nâng hạ front lever → muscle-up → pull-up → archer pull-up → kéo xà âm → treo xà nâng chân |
| T4 | **Chân (Legs)** |
| T5, CN | Nghỉ |

**Đổi giáo án ngày 7/11/2026 (theo buổi kéo đầu tiên + số max của bạn):**
- **Archer pull-up 5 → 3 cái mỗi bên:** hôm 7/11 bạn chỉ làm được 3 cái/bên, nửa biên độ — 3 cái đủ biên độ rồi tăng dần mới lên được. Trong app, bài nào tính "mỗi bên"/"mỗi chân" đều ghi rõ trong buổi tập (trước đây chỉ ghi "3 hiệp × 3 cái" gây nhầm).
- **Bỏ Australian pull-up (kéo xà thấp), thay bằng kéo xà âm 3×5** (nhảy lên rồi hạ chậm 4–5 giây): công viên chỉ có xà cao, không có xà thấp, cũng không có khăn — kéo xà âm chỉ cần xà cao, lại bổ trợ trực tiếp cho pull-up và muscle-up.
- **Thêm HSPU tự do 3×3** (trước HSPU tường): max HSPU tự do của bạn là 6–7 cái nên phải tập skill này khi còn khỏe. HSPU tường tăng lên **3×8** vì max 15 thì 6 cái là quá nhẹ.
- **Straight bar dip 4×10 → 3×12, hạ chậm 3 giây mỗi lần** (ghi chú hiện ngay dưới tên bài trong buổi tập): max dip của bạn ~40 cái thì 10 cái thường là quá nhẹ — tempo chậm mới đủ nặng, không cần tập sức bền.
- **Pseudo planche 3×10 → 3×7:** max của bạn là 8–10 cái thì 10 cái là quá sức. **Bỏ diamond push-up** khỏi giáo án chính (quá nhẹ, để làm bài phụ tùy chọn).
- **Pistol có vịn 3×6 → 3×8 mỗi chân:** bạn làm được ~10 cái/chân. **Bỏ shrimp squat, thay bằng bước lên ghế 3×10 mỗi chân:** shrimp khó hiểu, step-up thì rõ ràng và dùng được ghế đá ở công viên.
- Planche lean/tuck planche bớt còn 3 hiệp mỗi bài để nhường chỗ cho HSPU tự do, buổi đẩy vẫn ~70 phút.

**Nguyên tắc:** bài skill (planche, front lever, handstand) luôn xếp **trước** bài basic
trong mỗi buổi, vì skill cần hệ thần kinh còn tươi và kỹ thuật chuẩn — tập lúc đuối
dễ chấn thương và không lên được. Basic (HSPU, dip, pull-up…) tập sau, ăn theo sức còn lại.
Ngoài ra còn giáo án riêng **"Planche (Skill)"** để tập thêm vào ngày rảnh.

## 4. Các tính năng chính

| Màn hình | Có gì |
|---|---|
| 🏠 Trang chủ | Tự hiện buổi tập hôm nay theo lịch tuần, nút **Bắt đầu tập**, streak **theo tuần**, thống kê, nhắc **deload** khi đủ 4 tuần + nhắc **sao lưu** nếu quá 7 ngày chưa xuất JSON |
| 📚 Bài tập | Thư viện 63 bài 100% bodyweight (kể cả khởi động/giãn cơ/planche), lọc theo nhóm cơ / độ khó, bấm vào xem mẹo kỹ thuật + nút **▶ Xem hướng dẫn** (video YouTube). **Mới v6:** tạo **bài tự tạo** ngay trong tab (tên/nhóm/độ khó/rep-giây/mục tiêu, dùng được trong giáo án tự tạo). Chuyển sang tab **🌳 Cây kỹ năng** để xem 4 cây Planche / Front Lever / Muscle-up / Handstand — mỗi nấc tự mở khi kỷ lục của bạn đạt mốc (hoặc đánh dấu tay), nấc viền cam là nấc tiếp theo nên tập. **Cây Front Lever giờ có 8 nấc** (thêm adv tuck 10s, straddle 5s, back lever) |
| 📈 Tiến bộ | **Mới v5: 📋 Báo cáo tuần** (buổi/hiệp/phút tuần này, kỷ lục mới, so với tuần trước); kỷ lục cá nhân từng bài (**mới v6:** nhập **kỷ lục tay** từng bài, hiển thị rõ "(nhập tay)" — để cây kỹ năng và mục tiêu đúng ngay từ đầu); **biểu đồ đường tiến bộ** — giờ chọn được khoảng (4 tuần / 12 tuần / tất cả) và chế độ (tốt nhất mỗi buổi / tổng mỗi buổi); **⚖️ Cân nặng & số đo** (ghi cân nặng + eo/ngực/tay/đùi tùy chọn, biểu đồ xu hướng theo thời gian — chỉ ghi log, không đặt mục tiêu tăng/giảm); **🏅 Huy hiệu thành tích** (18 huy hiệu: buổi tập, streak **tuần**, kỷ lục, volume, skill — tự mở khóa, lúc lưu buổi tập xong app báo luôn nếu mở được huy hiệu mới); **khối lượng tuần** (hiệp + rep/giây theo nhóm cơ), **biểu đồ cân bằng Đẩy–Kéo–Chân 4 tuần**, **mục tiêu cá nhân** (thanh % tiến độ), lịch sử buổi tập có ghi chú + RPE |
| 📅 Lịch | Lịch tháng (ngày tập có màu cam), đếm streak theo tuần (tuần nào tập đủ lịch thì tính) |
| 🗂️ Giáo án | 4 giáo án nạp sẵn (Đẩy+Planche, Kéo+Front Lever, Chân, Planche Skill) + tự tạo/sửa/xóa giáo án, chỉnh lịch tập từng ngày trong tuần. **Mới v6:** **nhân bản** bất kỳ giáo án nào (bản sao sửa được, bản gốc không đụng vào) |
| ⚙️ Cài đặt | Đổi tên hiển thị, giờ nghỉ mặc định, bật/tắt tự mở đồng hồ, **xuất/nhập JSON backup**, **xuất CSV** lịch sử tập (mở bằng Excel/Sheets, tiêu đề có dấu đầy đủ) |

**Trong buổi tập:**
- Bấm **Bắt đầu tập** sẽ hỏi chọn **Tập thường** (xong hết hiệp 1 bài mới qua bài khác)
  hay **Tập mạch 🔁** (đi 1 hiệp mỗi bài liên tiếp, hết vòng mới nghỉ — số vòng = số hiệp
  nhiều nhất, hiển thị rõ "Vòng 1/3", chỉnh được giờ nghỉ giữa vòng).
- Nút **🔥 Khởi động 5 phút** ở đầu buổi tập: chạy flow hướng dẫn từng động tác có bấm giờ
  (xoay khớp → jumping jack → scapular push-up → leg swing). Khởi động/giãn cơ **không**
  tính vào thống kê, kỷ lục hay khối lượng tuần.
- Mỗi hiệp có nút tròn để tick. **Chạm giữ (~0.6 giây) vào nút hiệp để nhập số
  THỰC TẾ làm được** (VD: mục tiêu 8 cái nhưng chỉ làm được 7 → nhập 7) — kỷ lục
  và cây kỹ năng chỉ tính số thực tế, không tính số mục tiêu. Nút −/+ bên dưới
  chỉnh **mục tiêu** của các hiệp chưa tick (không phải số thực tế).
  (Bản cũ ghi "bấm vào số để chỉnh từng hiệp" là sai — giờ phải chạm giữ mới chỉnh được.)
- Mỗi bài hiện dòng **"Lần trước: 8-8-7"** (số thực tế của buổi gần nhất có bài đó);
  nếu buổi đó RPE ≤ 6 thì app gợi ý thử +1 cái (hoặc +2 giây).
- **Buổi tập không mất khi iOS tắt app giữa chừng:** app lưu nháp sau mỗi lần tick.
  Mở app lại sẽ hỏi "Tiếp tục buổi dang dở?" — bấm Tiếp tục là tập tiếp từ chỗ đã
  tick, bấm Bỏ là xóa nháp. Lưu buổi xong thì nháp tự xóa.
- Tick xong 1 hiệp, đồng hồ nghỉ tự hiện. Hết giờ nghỉ thì **chuông kêu TO và lặp lại
  mỗi 2 giây** cho tới khi bấm "Bỏ qua, tập tiếp" (bảng đồng hồ hiện "Hết giờ!" và
  không tự đóng). Đồng hồ tính theo mốc giờ kết thúc nên khóa màn hình cũng không
  bị trôi; app giữ màn hình sáng suốt buổi tập (xem lưu ý iPhone bên dưới).

**Lưu ý riêng trên iPhone (đọc 1 lần):**
- **Rung không có trên iPhone:** iOS Safari không hỗ trợ rung web, nên "rung" chỉ
  có tác dụng trên Android. Trên iPhone chỉ có chuông.
- **Công tắc im lặng bên hông máy tắt được tiếng chuông:** chuông nghỉ dùng Web Audio,
  đi theo âm lượng media — gạt công tắc im lặng sang chế độ chuông + mở âm lượng
  media lên thì mới nghe thấy.
- **Màn hình khóa:** app xin giữ màn hình sáng suốt buổi tập, nhưng nếu iOS vẫn khóa
  màn hình (VD: bấm nút nguồn) thì đồng hồ không trôi — chỉ có chuông báo thức có thể
  tạm ngưng cho tới khi mở màn hình lại. Lúc nghỉ nên để điện thoại sáng màn hình.
- Bấm **Hoàn thành buổi tập** → form **ghi chú + chấm RPE 1–10** (1 = rất nhẹ … 10 = kiệt sức)
  → lưu vào lịch sử, xem lại được khi bấm vào từng buổi trong tab Tiến bộ.
- Sau khi lưu, app gợi ý **🧘 Giãn cơ ngay**: flow 6 động tác giãn cơ, mỗi động tác giữ 30 giây.

## 5. Sao lưu & khôi phục dữ liệu

- Mọi dữ liệu (lịch sử tập, kỷ lục, giáo án tự tạo, lịch tuần, mục tiêu, số đo cơ thể,
  nấc kỹ năng đã đánh dấu) lưu trong **localStorage**
  của trình duyệt trên máy bạn — không gửi đi đâu cả.
- **Xuất backup:** vào ⚙️ Cài đặt → **Xuất JSON**, file `calisthenics-backup-YYYYMMDD.json` sẽ được tải về.
  Nên xuất mỗi tuần một lần, hoặc trước khi đổi điện thoại / cập nhật bản mới.
  **App nhắc sao lưu:** nếu quá 7 ngày chưa xuất JSON thì trang chủ hiện banner nhắc
  (bấm vào là xuất luôn). Từ bản 6.0, cài từ link Pages thì cập nhật không cần
  xuất/nhập nữa, nhưng backup tuần vẫn nên làm để phòng mất máy.
- **Xuất CSV (mới v5):** ⚙️ Cài đặt → **Xuất CSV**, file `calisthenics-lich-su-YYYYMMDD.csv`
  chứa toàn bộ lịch sử tập theo từng bài (ngày, buổi, hiệp xong, tốt nhất, phút, RPE, ghi chú)
  — mở được bằng Excel / Google Sheets, tiếng Việt không lỗi font.
- **Khôi phục:** ⚙️ Cài đặt → **Nhập JSON**, chọn file backup đã xuất. File backup của bản cũ
  vẫn nhập được vào bản mới (thiếu ghi chú/RPE thì để trống, không lỗi; thiếu số đo/cây kỹ năng
  thì tự thêm mặc định, nấc kỹ năng hiện tại của bạn được seed sẵn).
- Xóa cache trình duyệt mà không backup = mất dữ liệu. Nhớ backup!

## 6. Cấu trúc dữ liệu (cho bạn nào tò mò)

Key `calisthenics_tracker_v1` trong localStorage, dạng JSON (bản 6.0, dữ liệu v5):

```json
{
  "v": 5,
  "history": [
    { "id": "...", "date": "2026-11-04", "minutes": 55, "routineName": "Đẩy + Planche",
      "mode": "normal", "note": "hôm nay khỏe", "rpe": 7,
      "items": [ { "exId": "pullup", "name": "...", "unit": "rep",
                   "sets": [ {"done": true, "val": 10, "actual": 10} ] } ] }
  ],
  "prs": { "pullup": {"value": 10, "unit": "rep", "date": "2026-11-04"} },
  "goals": [ {"id": "...", "exId": "front-lever", "target": 15, "targetDate": "2027-02-01"} ],
  "body": [ {"id": "...", "date": "2026-11-07", "weight": 68.2, "waist": 78,
             "chest": null, "arm": null, "thigh": null} ],
  "skillMarks": { "planche": 2, "frontlever": 1, "muscleup": 1, "handstand": 1 },
  "routines": [ {"id": "push", "name": "Đẩy + Planche", "builtin": true,
                 "items": [{"exId": "hspu-free", "sets": 3, "reps": 3, "restSec": 150},
                           {"exId": "straight-bar-dip", "sets": 3, "reps": 12, "restSec": 120,
                            "note": "Hạ chậm 3 giây mỗi lần"}]} ],
  "schedule": {"0": "rest", "1": "push", "2": "pull", "3": "legs",
               "4": "rest", "5": "push", "6": "pull"},
  "customExercises": [],
  "settings": {"restSec": 90, "autoTimer": true, "userName": "", "lastExport": null}
}
```

- `unit` là `"rep"` (đếm cái) hoặc `"sec"` (giữ tính bằng giây).
- `schedule` dùng số ngày của JavaScript: 0 = Chủ nhật, 1 = Thứ 2, …, 6 = Thứ 7.
- `body`: mỗi ngày tối đa 1 dòng số liệu (ghi lại cùng ngày sẽ ghi đè); `weight` là kg,
  các số đo khác là cm, `null` = không ghi.
- `skillMarks`: nấc cao nhất đã đánh dấu tay trên mỗi cây kỹ năng (0 = nấc đầu tiên).
  Nấc còn được tự mở khi PR của bài tương ứng đạt mốc — không cần đánh dấu tay.
- `sets[].actual` (mới v6): số thực tế làm được ở hiệp đó (chạm giữ để nhập);
  `val` là mục tiêu. Kỷ lục/biểu đồ dùng `actual` (dữ liệu cũ không có `actual`
  thì dùng `val` như trước). `prs` có thêm cờ `"manual": true` khi nhập kỷ lục tay.
- Nháp buổi tập đang dở lưu riêng ở key `calisthenics_tracker_draft_v1`
  (không nằm trong DB chính), lưu xong buổi thì tự xóa.
- Bản cũ không có `note`/`rpe`/`mode`/`goals`/`body`/`skillMarks` vẫn đọc bình thường
  (tương thích ngược, migration tự chạy lên v5). Lên v5, `skillMarks.frontlever`
  được đổi chỉ số (cây Front Lever thêm 2 nấc mới nên 1→3, 2→4, 3→5). Giáo án
  builtin tự nâng cấp lên bản mới nhất khi mở app (giáo án tự tạo không bị đụng vào).

## 7. Tình trạng kiểm thử (nói thật)

- Đã kiểm trong máy ảo: cú pháp toàn bộ file JS (`node --check`), server chạy và trả đủ
  file 200 OK, **41/41 test logic tự động pass** (regression các hàm cũ: streak, PR,
  circuit, khối lượng tuần, mục tiêu, RPE/note, video; mới v5: migration v1/v2→v3
  + seed nấc kỹ năng, body log + biểu đồ cân nặng, 18 huy hiệu, trạng thái cây kỹ năng,
  báo cáo tuần, chart best/tổng theo khoảng ngày, CSV có BOM + escape đúng).
  Ngoài ra chạy **DOM smoke test** (giả lập trình duyệt): render đủ 6 màn hình, chuyển tab
  Thư viện ↔ Cây kỹ năng, đổi khoảng/chế độ biểu đồ, lưu số đo, chạy trọn 1 buổi tập
  (tick hiệp → lưu) — đều chạy qua không lỗi.
- **Audit độc lập sau khi build v5** (kiểm lại toàn bộ trên máy ảo, kể cả test DOM thật
  bằng jsdom: click qua các luồng tập thường/tập mạch/khởi động, đánh dấu cây kỹ năng,
  lưu số đo, xuất JSON/CSV, nhập JSON v2, xóa buổi): phát hiện và sửa 2 lỗi —
  (1) `normalizeDB` không vá field sai kiểu ở DB v3 (body/prs/settings/schedule/
  customExercises hỏng kiểu sẽ crash cả app, nay vá + sắp xếp lại body theo ngày);
  (2) nút "Bỏ đánh dấu" ở nấc thấp trong cây kỹ năng xóa luôn cả nấc cao đã đánh dấu
  (nay chỉ cho bỏ đánh dấu ở nấc cao nhất). Đồng thời sửa mục 0 ở trên cho khỏi mâu thuẫn
  (link tunnel mới thì không có chuyện tự cập nhật tại chỗ — bắt buộc export/import JSON).
  Sau khi sửa: test logic của builder 41/41 pass, test audit logic 20/20 pass,
  test DOM thật 59/59 pass, server trả 200 đủ 8 file.
- **Đổi giáo án ngày 7/11/2026** (DB v4, vẫn bản 5.0/cache v5 — chưa cài lên iPhone nên gộp
  chung): test logic riêng **37/37 pass** (3 bài mới + video đã verify 200 qua oEmbed,
  routine mới đủ 3 buổi đúng thứ tự/sets/reps/rest/note, migration v1/v2/v3→v4 giữ
  history + PRs + goals + body + skillMarks + giáo án tự tạo, chạy 2 lần vẫn như nhau);
  **DOM test thật 28/28 pass** (mở đủ 3 buổi tập: kéo có kéo xà âm + archer ghi rõ
  "mỗi bên", đẩy có HSPU tự do + ghi chú tempo ở dip, chân có step-up + pistol 3×8
  "mỗi chân"; tick + lưu buổi kéo xong thì entry có kéo xà âm, localStorage ghi v4).
  Chạy lại bộ test cũ: chỉ fail đúng các assertion cứng `v === 3` / `57 bài`
  (giờ là v4 / 60 bài) — mọi hành vi còn lại vẫn pass (DOM cũ 58/59, logic cũ 35/41,
  audit logic cũ 19/20). Trong lúc test phát hiện và sửa 1 lỗi thật: màn hình tập
  ghi "mỗi bên" cho cả bài chân (đúng ra phải là "mỗi chân" như trong thư viện).
  Server trả 200 đủ 8 file.
- **Làm đẹp giao diện ngày 8/11/2026** (vẫn bản 5.0/cache v5 — chưa cài lên iPhone nên
  gộp chung, không đổi chức năng/giáo án/dữ liệu gì):
  vẫn theme tối + cam thể thao, nhưng tinh chỉnh lại toàn bộ — nền tối có chiều sâu
  (không gradient tím-xanh), cam chính + cam nhạt dùng có cấp độ (chữ "Calis" trong
  logo cam nhạt, hero cam-nâu ấm với viền cam trên cùng, nút "Bắt đầu tập" gradient
  cam có bóng phát sáng), bo góc 16px + bóng mềm nhất quán, tiêu đề có gạch cam bên trái.
  **Trang chủ:** danh sách bài trong hero có đánh số 1–7, chip streak nổi bật hơn,
  chấm ngày trong tuần: ngày tập = cam đặc, hôm nay = vòng cam đôi. **Bottom nav:**
  nút đang mở thành "viên thuốc" cam nhạt, trên PC nav gom vào giữa màn hình.
  **Thư viện:** chấm độ khó giờ tô cam (đầy) / xám (trống) thay cho trắng mờ.
  **Cây kỹ năng:** thêm thanh tiến độ dưới tên mỗi cây + badge "n/6 nấc" nền cam nhạt.
  **Màn hình tập:** nút hiệp to 56px (số hiệp trên, số rep/giây dưới), hiệp tiếp theo
  viền cam phát sáng để biết bấm vào đâu khi tay mỏi, mỗi bài có thanh tiến độ riêng,
  bài xong viền xanh. **Đồng hồ nghỉ:** vòng tròn cam thật (conic-gradient) chạy ngược
  theo thời gian thay cho viền tĩnh như trước. **Lịch:** hôm nay (nếu đã tập) tô cam đặc.
  **Giáo án:** sửa lỗi thật — ô chọn lịch tuần trước đây hiện nền trắng trên theme tối,
  giờ đã tối đồng bộ. **Cài đặt:** 3 nút xuất/nhập nằm gọn 1 hàng, không còn gãy dòng.
  Trên PC nội dung rộng 640px, lưới kỷ lục/huy hiệu 3 cột.
  Kiểm thử: `node --check` pass; **DOM smoke test mới 39/39 pass** (render đủ 6 màn hình,
  tick hiệp → đồng hồ nghỉ hiện, vòng tròn bắt đầu 100% và giảm dần theo giây,
  tick hết 1 bài → thanh 100% + viền xanh, lưu buổi xong history tăng 1, chuyển tab);
  chụp lại đủ 11 màn hình (mobile 390px + desktop) để đối chiếu trước/sau — xem trong
  máy ảo, chưa kiểm trên iPhone thật (màu/bóng trên Safari có thể hơi khác).
- **Sửa chuông nghỉ ngày 8/11/2026 (bản 5.1, cache v6):** chuông cũ kêu 3 tiếng cùng
  tần số 880Hz chồng lên nhau trong 0–1s nên nghe như 1 tiếng dài 1s. Chuông mới:
  3 tiếng RIÊNG BIỆT cách nhau bằng khoảng lặng — tiếng 1 (0s, 880Hz, 0.3s),
  tiếng 2 (0.5s, 880Hz, 0.3s), tiếng 3 (1.0s, 1174Hz, 0.5s), tổng ~1.55s;
  bảng đồng hồ đợi 2s mới tự đóng (trước là 1.2s). Test bằng AudioContext giả:
  3 oscillator, giờ bắt đầu 0/0.5/1.0s, không chồng nhau, tiếng cuối dài nhất.
  Muốn nhận chuông mới: nếu tunnel sáng nay vẫn đang chạy trên PC thì chỉ cần tắt
  hẳn app trên iPhone rồi mở lại (service worker tự lên cache v6); nếu tunnel đã
  tắt thì cài lại từ đầu theo mục 0 (nhớ export JSON trước).
- **Báo thức nghỉ ngày 8/11/2026 (vẫn bản 5.1, cache v6 — thay cho ý "bấm bỏ qua
  thì kêu" trước đó):** hết giờ nghỉ thì chuông kêu TO (gain 0.9) và LẶP LẠI mỗi
  2s (3 tiếng ~1.55s rồi nghỉ 0.45s) cho tới khi bấm "Bỏ qua, tập tiếp" thì mới
  dừng; bảng đồng hồ không tự đóng nữa mà hiện "Hết giờ!" và ở lại cho tới khi
  bấm nút. Bấm bỏ qua sớm (đồng hồ chưa hết giờ) thì không kêu vì chưa tới lúc
  báo. Bấm +15s/−15s trong lúc đang kêu thì dừng chuông và chạy lại đồng hồ từ
  số mới. Test: chuông 6/6 pass, vòng lặp báo thức 8/8 pass (kêu ngay khi hết
  giờ, lặp lại đúng mỗi 2s, stopAlarm thì dừng hẳn). Lưu ý iOS: nếu màn hình
  tắt/khóa thì Safari có thể ngưng chuông — lúc nghỉ nên để điện thoại sáng màn
  hình hoặc để trong túi với màn hình mở.
- **Bản 6.0 ngày 8/11/2026 (cache v7, dữ liệu v5):** sửa theo audit lớn —
  **streak tính theo tuần** (tuần nào tập đủ lịch T2/T3/T4/T6/T7 thì tính, ngày nghỉ
  T5/CN không đứt streak; huy hiệu streak đổi thành 4/8/12/26 tuần); **lưu nháp
  buổi tập** sau mỗi lần tick (iOS tắt app giữa chừng vẫn hỏi "Tiếp tục buổi
  dang dở?"); **số thực tế từng hiệp** (chạm giữ nút hiệp ~0.6s để nhập, kỷ lục
  + cây kỹ năng chỉ tính số thực tế, nút −/+ chỉ chỉnh mục tiêu hiệp chưa tick);
  hiện **"Lần trước: 8-8-7"** + gợi ý +1 cái/+2s khi RPE buổi trước ≤ 6; **tạo
  bài tự tạo** trong tab Bài tập; **nhân bản giáo án** (bản sao sửa được, bản gốc
  không đụng); **nhập kỷ lục tay** (hiện "(nhập tay)", cây kỹ năng + mục tiêu nhận
  luôn); **cây Front Lever 8 nấc** (thêm adv tuck 10s, straddle 5s, back lever);
  thêm bài **kéo ngang dưới bàn** vào thư viện (63 bài, video đã verify qua oEmbed);
  **nhắc deload** mỗi 4 tuần đủ; **nhắc sao lưu** khi quá 7 ngày chưa xuất JSON;
  **đồng hồ nghỉ chống trôi** (tính theo mốc giờ kết thúc, tick 250ms) + **giữ
  màn hình sáng** suốt buổi tập; server chỉ phục vụ file app (server.js/HUONG-DAN.md
  trả 404, URL hỏng trả 400); service worker chuyển sang stale-while-revalidate +
  cache font Google để offline không rớt font; icon maskable riêng (vòng tròn 80%);
  tiêu đề CSV có dấu đầy đủ; sửa lỗi tên giáo án có & hiện &amp;.
  **Host cố định GitHub Pages** thay tunnel tạm: cài một lần từ link vĩnh viễn,
  service worker tự cập nhật, không cần xuất/nhập JSON mỗi lần.
  Kiểm thử: `node --check` pass; **test logic 139/139 pass** (streak tuần 66 —
  17 tuần hoàn hảo → streak 17, ngày nghỉ không đứt, migration v4→v5 giữ đủ dữ
  liệu + đổi chỉ số skillMarks Front Lever; timer endAt 20 — trôi 5s giả lập vẫn
  tính đúng, báo thức lặp đúng 2s; buổi tập 20 — nháp lưu/khôi phục, PR dùng số
  thực tế; giao diện 33 — bài tự tạo, nhân bản giáo án, kỷ lục tay);
  **DOM smoke test thật (jsdom) 14/14 pass** (trang chủ streak "tuần", banner
  sao lưu/deload, "Lần trước" + gợi ý RPE, chạm giữ 650ms mở nhập số thực tế,
  nháp + hỏi tiếp tục buổi dở, tạo bài tự tạo, nhân bản giáo án, kỷ lục "(nhập tay)",
  đồng hồ 2→1→"Hết giờ!" và không tự đóng, Cài đặt hiện 6.0, 0 lỗi JS);
  server thật trả 200 đủ 9 file app + 404 cho server.js/HUONG-DAN.md + 400 cho URL hỏng.
  Lưu ý iOS: rung web không có trên iPhone (chỉ Android), công tắc im lặng tắt được
  tiếng chuông, màn hình khóa có thể tạm ngưng chuông (xem mục 4).
- **Chưa kiểm được trong máy ảo** (không có trình duyệt/điện thoại thật): thao tác tick
  hiệp, đồng hồ nghỉ (chuông + rung), flow khởi động/giãn cơ, chọn chế độ tập mạch,
  cài Add to Home Screen, dùng offline, xuất/nhập JSON, **các màn hình mới v5**
  (cây kỹ năng, huy hiệu, biểu đồ cân nặng, báo cáo tuần, xuất CSV).
  Bạn dùng thử trên điện thoại, chỗ nào lỗi thì chụp màn hình gửi mình sửa.

Chúc bro tập ngày càng khỏe! 💪
