'use strict';
/* =====================================================================
   LỊCH TẬP CALISTHENICS — PWA offline-first, 100% bodyweight, tiếng Việt
   ===================================================================== */

/* ---------- Thư viện bài tập (tất cả bodyweight) ---------- */
/* g: day=đẩy, keo=kéo, chan=chân, core=bụng, skill=kỹ năng
   unit: 'rep' = đếm cái, 'sec' = giữ tính bằng giây */
const EXERCISES = [
// ---- ĐẨY ----
{id:'pushup', n:'Hít đất cơ bản', g:'day', d:2, unit:'rep', tgt:'3 hiệp × 12–15 cái', rest:60, vv:'A2z9akOY13E', v:'ahJvHMh8494',
 tip:'Siết bụng, người thành một đường thẳng từ đầu tới gót chân. Hạ ngực gần chạm sàn rồi đẩy lên hết tay.'},
{id:'diamond-pushup', n:'Hít đất kim cương', g:'day', d:3, unit:'rep', tgt:'3 hiệp × 10–12 cái', rest:75, v:'J0DnG1_S92I',
 tip:'Hai tay chụm lại thành hình kim cương ngay dưới ngực, khuỷu tay ép sát người. Ăn mạnh vào tay sau.'},
{id:'wide-pushup', n:'Hít đất rộng tay', g:'day', d:2, unit:'rep', tgt:'3 hiệp × 10–12 cái', rest:60,
 tip:'Tay đặt rộng hơn vai, hạ sâu để căng ngực rồi đẩy lên. Đừng để hông võng xuống.'},
{id:'archer-pushup', n:'Hít đất Archer (Archer push-up)', g:'day', d:4, unit:'rep', tgt:'3 hiệp × 6–8 cái mỗi bên', rest:90, side:true, v:'wJKLatFY-aU',
 tip:'Một tay duỗi thẳng sang bên làm trụ, tay còn lại gập để hạ người xuống. Làm đều hai bên.'},
{id:'pseudo-planche', n:'Hít đất Planche giả (Pseudo planche push-up)', g:'day', d:4, unit:'rep', tgt:'3 hiệp × 6–8 cái', rest:90, vv:'mZgP_MnDKX0', v:'Cdmg0CfMZeo',
 tip:'Tay đặt ngang hông, ngón tay hướng ra sau. Nghiêng người tới trước càng nhiều càng nặng rồi hít đất.'},
{id:'pike-pushup', n:'Hít đất chữ V (Pike push-up)', g:'day', d:3, unit:'rep', tgt:'3 hiệp × 8–12 cái', rest:75, v:'XckEEwa1BPI',
 tip:'Mông đẩy cao thành chữ V ngược, đầu chúc xuống giữa hai tay. Bài nền để lên handstand push-up.'},
{id:'pike-elevated', n:'Pike push-up chân kê cao', g:'day', d:4, unit:'rep', tgt:'3 hiệp × 6–10 cái', rest:90,
 tip:'Chân kê trên ghế hoặc bục, chân càng cao càng nặng. Giữ lưng thẳng, đừng gập cổ.'},
{id:'hspu-wall', n:'Handstand push-up dựa tường', g:'day', d:5, unit:'rep', tgt:'3 hiệp × 6–10 cái', rest:120, v:'WxgJS48wf1M',
 tip:'Đá chân lên tường, siết core cứng như tấm ván. Hạ đầu chạm gần sàn rồi đẩy lên, tuyệt đối không võng lưng.'},
{id:'hspu-free', n:'HSPU tự do (Freestanding HSPU)', g:'day', d:5, unit:'rep', tgt:'3 hiệp × 3 cái', rest:150, advanced:true, v:'tQhrk6WMcKw',
 tip:'Lên handstand tự do rồi hạ đầu chạm thảm, đẩy lên. Làm gần tường để an toàn khi mất thăng bằng.'},
{id:'straight-bar-dip', n:'Straight bar dip (dip trên xà đơn)', g:'day', d:4, unit:'rep', tgt:'3 hiệp × 10–12 cái (hạ chậm 3s)', rest:120, v:'x5dGyjrMUTU',
 tip:'Nắm xà đơn, bật người lên trên xà. Hạ sâu tới ngực gần chạm xà rồi đẩy lên khóa tay. Người không đung đưa.'},
{id:'bench-dip', n:'Dip ghế', g:'day', d:2, unit:'rep', tgt:'3 hiệp × 10–15 cái', rest:60,
 tip:'Tay chống ghế sau lưng, chân duỗi thẳng (khó) hoặc co lại (dễ). Hạ mông gần sàn rồi đẩy lên.'},
// ---- KÉO ----
{id:'pullup', n:'Pull-up (kéo xà thuận tay)', g:'keo', d:4, unit:'rep', tgt:'4 hiệp × 6–10 cái', rest:120, vv:'-YDt5jrTezA', v:'Ww-gNf0ys8M',
 tip:'Tay nắm rộng hơn vai, lòng bàn tay hướng ra ngoài. Kéo cằm qua xà, xuống hết tay rồi kéo tiếp.'},
{id:'chinup', n:'Chin-up (kéo xà ngược tay)', g:'keo', d:3, unit:'rep', tgt:'4 hiệp × 6–10 cái', rest:105,
 tip:'Tay ngửa, hẹp bằng vai. Ăn nhiều vào tay trước hơn pull-up, hợp để tăng số lượng kéo xà.'},
{id:'wide-pullup', n:'Pull-up rộng tay', g:'keo', d:4, unit:'rep', tgt:'3 hiệp × 5–8 cái', rest:120,
 tip:'Tay nắm thật rộng, kéo ngực hướng lên xà. Cảm nhận cơ xô hai bên sườn làm việc.'},
{id:'australian-pullup', n:'Australian pull-up (kéo xà thấp)', g:'keo', d:2, unit:'rep', tgt:'3 hiệp × 10–15 cái', rest:75, v:'4Bn3ERXEK-k',
 tip:'Xà ngang tầm hông, người nghiêng thẳng như tấm ván. Chân càng duỗi thẳng càng nặng.'},
{id:'table-row', n:'Kéo ngang dưới bàn (Table row)', g:'keo', d:2, unit:'rep', tgt:'3 hiệp × 8–12 cái', rest:90, v:'OYUxXMGVuuU',
 tip:'Chui xuống dưới bàn thật chắc chắn, nắm mép bàn rộng hơn vai, người thẳng như tấm ván. Kéo ngực lên chạm mép bàn rồi hạ chậm. Bàn phải nặng và vững — đừng dùng bàn nhẹ, dễ lật.'},
{id:'archer-pullup', n:'Kéo xà Archer (Archer pull-up)', g:'keo', d:5, unit:'rep', tgt:'3 hiệp × 3–6 cái mỗi bên', rest:120, side:true,
 tip:'Một tay duỗi thẳng, tay còn lại kéo người lên. Bài kéo một tay trung gian, làm đều hai bên.'},
{id:'negative-pullup', n:'Kéo xà âm (Negative pull-up)', g:'keo', d:3, unit:'rep', tgt:'3 hiệp × 5 cái', rest:90, v:'S1KBNMNWZwE',
 tip:'Nhảy lên cho cằm qua xà, hạ xuống thật chậm 4–5 giây. Bài bổ trợ kéo xà và muscle-up, chỉ cần xà cao, không cần xà thấp hay khăn.'},
{id:'scapular-pullup', n:'Kéo xà nhún vai (Scapular pull-up)', g:'keo', d:2, unit:'rep', tgt:'3 hiệp × 8–10 cái', rest:60,
 tip:'Treo xà tay thẳng hoàn toàn, chỉ dùng vai nhấc người lên vài cm rồi thả xuống. Bài khởi động vai rất tốt.'},
{id:'dead-hang', n:'Treo xà giữ (dead hang)', g:'keo', d:1, unit:'sec', tgt:'3 lần × 30–60 giây', rest:60,
 tip:'Treo thả lỏng, vai hạ xuống xa tai, siết nhẹ bụng. Bấm giờ, tăng dần mỗi tuần để khỏe cổ tay và vai.'},
// ---- CHÂN ----
{id:'squat', n:'Squat (ngồi xổm)', g:'chan', d:1, unit:'rep', tgt:'3 hiệp × 15–20 cái', rest:60,
 tip:'Chân rộng bằng vai, ngồi xuống tới đùi song song sàn. Lưng thẳng, đầu gối mở theo hướng mũi chân.'},
{id:'jump-squat', n:'Squat bật nhảy (Jump squat)', g:'chan', d:3, unit:'rep', tgt:'3 hiệp × 10–12 cái', rest:90,
 tip:'Squat sâu rồi bật nhảy cao hết cỡ, tiếp đất mềm bằng mũi chân rồi xuống luôn cái tiếp theo.'},
{id:'bulgarian-split', n:'Squat chân kê ghế (Bulgarian split squat)', g:'chan', d:3, unit:'rep', tgt:'3 hiệp × 8–10 cái mỗi chân', rest:90, side:true,
 tip:'Chân sau kê lên ghế, hạ thẳng đứng tới đùi trước song song sàn. Đầu gối không chệch vào trong.'},
{id:'lunge', n:'Lunge (bước chân)', g:'chan', d:2, unit:'rep', tgt:'3 hiệp × 10 cái mỗi chân', rest:75, side:true,
 tip:'Bước dài tới trước, hạ tới hai gối gần vuông góc. Giữ thân trên thẳng, bước luân phiên hoặc tại chỗ.'},
{id:'step-up', n:'Bước lên ghế (Step-up)', g:'chan', d:2, unit:'rep', tgt:'3 hiệp × 10 cái mỗi chân', rest:90, side:true, v:'elhu-WC1qk4',
 tip:'Bước lên ghế đá cao ngang gối, đạp bằng gót chân trụ lên, hạ xuống chậm có kiểm soát.'},
{id:'pistol-assisted', n:'Pistol squat có hỗ trợ', g:'chan', d:4, unit:'rep', tgt:'3 hiệp × 6–10 cái mỗi chân', rest:105, side:true, v:'rATUO72cLQg',
 tip:'Vịn xà hoặc cột, một chân duỗi thẳng ra trước, ngồi xổm bằng một chân xuống hết cỡ rồi đứng lên.'},
{id:'shrimp-squat', n:'Squat tôm (Shrimp squat)', g:'chan', d:4, unit:'rep', tgt:'3 hiệp × 6–8 cái mỗi chân', rest:105, side:true,
 tip:'Đứng một chân, chân còn lại co ra sau (tay có thể giữ), ngồi xuống tới gối sau gần chạm sàn.'},
{id:'calf-raise-1leg', n:'Kiễng chân một chân', g:'chan', d:2, unit:'rep', tgt:'3 hiệp × 15–20 cái mỗi chân', rest:60, side:true,
 tip:'Đứng một chân trên bậc, kiễng lên cao nhất rồi hạ gót xuống dưới mặt bậc để căng bắp chân.'},
{id:'glute-bridge-1leg', n:'Glute bridge một chân', g:'chan', d:2, unit:'rep', tgt:'3 hiệp × 10–12 cái mỗi bên', rest:60, side:true,
 tip:'Nằm ngửa, một chân co đạp sàn, nâng hông lên siết chặt mông 1 giây rồi hạ xuống.'},
{id:'wall-sit', n:'Ngồi dựa tường (Wall sit)', g:'chan', d:2, unit:'sec', tgt:'3 lần × 45–60 giây', rest:75,
 tip:'Lưng dựa tường, hạ tới đùi song song sàn như ngồi ghế vô hình. Bấm giờ, càng lâu đùi càng rát.'},
// ---- BỤNG / CORE ----
{id:'plank', n:'Plank (chống khuỷu tay)', g:'core', d:2, unit:'sec', tgt:'3 lần × 45–60 giây', rest:60,
 tip:'Chống khuỷu tay, người thẳng như tấm ván từ đầu tới gót. Siết bụng và mông, đừng võng lưng.'},
{id:'side-plank', n:'Plank nghiêng (Side plank)', g:'core', d:3, unit:'sec', tgt:'3 lần × 30–45 giây mỗi bên', rest:60, side:true,
 tip:'Chống một khuỷu tay, nâng hông cao, người thành đường thẳng nghiêng. Đổi bên đều nhau.'},
{id:'hollow-hold', n:'Giữ Hollow body (Hollow body hold)', g:'core', d:3, unit:'sec', tgt:'3 lần × 20–30 giây', rest:60,
 tip:'Nằm ngửa, tay chân duỗi nâng khỏi sàn, lưng dưới ép chặt xuống sàn. Bài nền của mọi động tác core.'},
{id:'hanging-leg-raise', n:'Treo xà nâng chân', g:'core', d:4, unit:'rep', tgt:'3 hiệp × 8–12 cái', rest:90, v:'4BbN9x_GBzY',
 tip:'Treo xà đơn, nâng hai chân thẳng lên ngang hông rồi hạ chậm. Người không đung đưa.'},
{id:'hanging-knee-raise', n:'Treo xà co gối', g:'core', d:3, unit:'rep', tgt:'3 hiệp × 10–15 cái', rest:75,
 tip:'Bản nhẹ hơn của nâng chân: co gối lên cao chạm gần ngực. Hợp để lên dần tới chân thẳng.'},
{id:'mountain-climbers', n:'Leo núi tại chỗ (Mountain climbers)', g:'core', d:2, unit:'sec', tgt:'3 lần × 30–40 giây', rest:60,
 tip:'Tư thế hít đất, co gối luân phiên nhanh về phía ngực. Vừa ăn bụng vừa tăng nhịp tim.'},
{id:'dead-bug', n:'Dead bug (tay chân đối diện)', g:'core', d:1, unit:'rep', tgt:'3 hiệp × 8–10 cái mỗi bên', rest:60, side:true,
 tip:'Nằm ngửa, tay chân đối diện duỗi ra luân phiên. Lưng dưới luôn ép chặt sàn, đừng để hở.'},
{id:'l-sit-hold', n:'L-sit giữ', g:'core', d:4, unit:'sec', tgt:'3 lần × 15–25 giây', rest:90, v:'IUZJoSP66HI',
 tip:'Chống tay trên xà kép hoặc ghế, nâng hai chân duỗi ngang giữ người thành chữ L. Khó thì co gối trước.'},
// ---- KỸ NĂNG ----
{id:'handstand-wall-hold', n:'Handstand dựa tường giữ', g:'skill', d:4, unit:'sec', tgt:'5 lần × 20–30 giây', rest:90, v:'LUBIjbCkmuA',
 tip:'Đá chân lên tường, siết toàn thân thành đường thẳng. Mắt nhìn vào khoảng giữa hai tay, thở đều.'},
{id:'frog-stand', n:'Đứng ếch (Frog stand)', g:'skill', d:3, unit:'sec', tgt:'5 lần × 15–20 giây', rest:75,
 tip:'Ngồi xổm, tay chống sàn, đặt gối lên bắp tay rồi dồn trọng lượng tới trước nhấc chân lên. Bài nền của planche.'},
{id:'muscle-up', n:'Muscle-up (bật lên xà)', g:'skill', d:5, unit:'rep', tgt:'3 hiệp × 3–5 cái', rest:150, advanced:true, vv:'i3C37qx3q1k', v:'BVnhhlKfamw',
 tip:'Bài nâng cao: pull-up bùng nổ rồi chuyển thành dip trên xà trong một nhịp liền. Cần nền pull-up 10+ cái mới nên tập.'},
{id:'tuck-front-lever', n:'Front lever co gối (Tuck front lever)', g:'skill', d:3, unit:'sec', tgt:'5 lần × 10–20 giây', rest:90, v:'_VrRX8VIIvw',
 tip:'Treo xà, co gối sát ngực rồi ngả người ra sau tới khi lưng song song mặt đất. Bài nền để lên front lever duỗi thẳng.'},
{id:'adv-tuck-front-lever', n:'Front lever advanced tuck (gối co, lưng thẳng)', g:'skill', d:4, unit:'sec', tgt:'5 lần × 5–10 giây', rest:120,
 tip:'Từ tuck front lever, duỗi lưng thẳng ra sau trong khi gối vẫn co sát ngực. Hông cao ngang vai, lưng song song mặt đất.'},
{id:'straddle-front-lever', n:'Front lever xoạc chân (Straddle front lever)', g:'skill', d:5, unit:'sec', tgt:'5 lần × 3–5 giây', rest:150, advanced:true,
 tip:'Duỗi chân xoạc rộng sang hai bên, người song song mặt đất. Xoạc càng rộng càng nhẹ — khép chân dần là cách tăng độ khó.'},
{id:'front-lever', n:'Front lever duỗi thẳng', g:'skill', d:5, unit:'sec', tgt:'5 lần × 5–15 giây', rest:120, v:'AGhb8V8M758',
 tip:'Treo xà, siết toàn thân duỗi thẳng người song song mặt đất. Tưởng tượng kéo xà xuống hông, mông siết chặt, thở đều.'},
{id:'front-lever-raise', n:'Nâng hạ Front lever', g:'skill', d:4, unit:'rep', tgt:'3 hiệp × 5–8 cái', rest:120, v:'nt2DOn4lp68',
 tip:'Từ tư thế treo, kéo người lên vị trí front lever rồi hạ chậm xuống. Làm chậm, kiểm soát, không đung đưa người.'},
{id:'handstand-hold', n:'Handstand giữ (trồng chuối tự do)', g:'skill', d:5, unit:'sec', tgt:'5 lần × 10–30 giây', rest:120, v:'ctunmnwbbSI',
 tip:'Trồng chuối không cần tường, siết toàn thân thành một đường thẳng. Dùng đầu ngón tay để giữ thăng bằng, mắt nhìn khoảng giữa hai tay.'},
// ---- PLANCHE (skill, user đang tập: adv tuck giữ được ~5s) ----
{id:'planche-lean', n:'Planche lean (nghiêng người về trước)', g:'skill', d:2, unit:'sec', tgt:'3 lần × 20–30 giây', rest:60, v:'UZ-1jwG7aQ4',
 tip:'Chống tay thẳng, nghiêng vai qua khỏi cổ tay, siết toàn thân. Bài nền quan trọng nhất của planche.'},
{id:'tuck-planche', n:'Tuck planche (planche co gối)', g:'skill', d:3, unit:'sec', tgt:'3 lần × 10–15 giây', rest:90, v:'UZ-1jwG7aQ4',
 tip:'Co gối sát ngực, lưng cong tròn, tay thẳng khóa khuỷu. Giữ thăng bằng bằng đầu ngón tay.'},
{id:'adv-tuck-planche', n:'Advanced tuck planche', g:'skill', d:4, unit:'sec', tgt:'5 lần × 5–8 giây', rest:120, v:'UZ-1jwG7aQ4',
 tip:'Từ tuck planche, duỗi lưng thẳng ra sau trong khi gối vẫn co. Đây là trình hiện tại của bạn (giữ được ~5s) — ráng lên 8–10s rồi qua straddle.'},
{id:'straddle-planche', n:'Straddle planche (planche xoạc chân)', g:'skill', d:5, unit:'sec', tgt:'5 lần × 3–5 giây', rest:150, advanced:true, v:'UZ-1jwG7aQ4',
 tip:'Mục tiêu tiếp theo sau adv tuck: duỗi chân xoạc rộng sang hai bên, người song song mặt đất.'},
// ---- KHỞI ĐỘNG (không tính vào thống kê / kỷ lục) ----
{id:'warmup-shoulder', n:'Xoay khớp vai', g:'warmup', d:1, unit:'sec', tgt:'45 giây', rest:0,
 tip:'Dang tay ngang, xoay tròn khớp vai từ nhỏ tới lớn, cả hai chiều. Làm nóng vai trước mọi buổi đẩy/kéo.'},
{id:'warmup-wrist', n:'Xoay cổ tay', g:'warmup', d:1, unit:'sec', tgt:'45 giây', rest:0,
 tip:'Đan tay xoay tròn cổ tay cả hai chiều, rồi ép mu bàn tay xuống sàn giãn nhẹ. Cực kỳ quan trọng trước handstand/planche.'},
{id:'warmup-hip', n:'Xoay hông', g:'warmup', d:1, unit:'sec', tgt:'45 giây', rest:0,
 tip:'Tay chống hông, xoay tròn hông cả hai chiều, biên độ lớn dần. Chuẩn bị cho leg swing và buổi chân.'},
{id:'warmup-jumping-jack', n:'Jumping jack', g:'warmup', d:1, unit:'sec', tgt:'60 giây', rest:0,
 tip:'Nhảy dang tay chân nhịp nhàng, tăng dần nhịp tim. Thở đều, tiếp đất mềm bằng mũi chân.'},
{id:'warmup-scapular', n:'Scapular push-up (hít đất nhún vai)', g:'warmup', d:1, unit:'rep', tgt:'12 cái', rest:0,
 tip:'Tư thế hít đất tay thẳng, chỉ nhún bả vai lên xuống. Đánh thức cơ vai trước buổi đẩy.'},
{id:'warmup-legswing', n:'Leg swing (đá chân)', g:'warmup', d:1, unit:'sec', tgt:'45 giây', rest:0,
 tip:'Vịn tường, đá chân thẳng ra trước–ra sau rồi sang ngang. Làm nóng háng và hông, mỗi chân ~20 giây.'},
// ---- GIÃN CƠ (không tính vào thống kê / kỷ lục) ----
{id:'stretch-shoulder', n:'Giãn vai', g:'stretch', d:1, unit:'sec', tgt:'30 giây mỗi bên', rest:0, side:true,
 tip:'Đưa một tay ngang ngực, tay còn lại ép vào người. Giữ vai thả lỏng, thở sâu.'},
{id:'stretch-chest', n:'Giãn ngực', g:'stretch', d:1, unit:'sec', tgt:'30 giây', rest:0,
 tip:'Đứng cạnh tường, tay duỗi áp vào tường rồi xoay người ra. Cảm nhận ngực căng ra.'},
{id:'stretch-lat', n:'Giãn xô (cúi người)', g:'stretch', d:1, unit:'sec', tgt:'30 giây', rest:0,
 tip:'Quỳ gối, hai tay vươn dài ra trước cúi sát sàn. Thả lỏng vai, cảm nhận xô hai bên sườn giãn ra.'},
{id:'stretch-quad', n:'Giãn đùi trước', g:'stretch', d:1, unit:'sec', tgt:'30 giây mỗi chân', rest:0, side:true,
 tip:'Đứng một chân, tay kéo gót chân còn lại sát mông. Giữ thăng bằng, siết nhẹ mông.'},
{id:'stretch-hamstring', n:'Giãn đùi sau', g:'stretch', d:1, unit:'sec', tgt:'30 giây mỗi chân', rest:0, side:true,
 tip:'Duỗi một chân ra trước, gập người từ hông xuống. Lưng giữ thẳng, đừng gù.'},
{id:'stretch-hip', n:'Giãn hông', g:'stretch', d:1, unit:'sec', tgt:'30 giây mỗi bên', rest:0, side:true,
 tip:'Tư thế lunge sâu, hạ hông xuống ép giãn háng chân sau. Đổi bên đều nhau.'}
];

const GROUP_LABELS = {day:'Đẩy', keo:'Kéo', chan:'Chân', core:'Bụng', skill:'Kỹ năng', warmup:'Khởi động', stretch:'Giãn cơ'};
const GROUP_ORDER = ['day','keo','chan','core','skill'];
const DOW_LABELS = ['CN','T2','T3','T4','T5','T6','T7']; // index theo getDay(): 0=CN
const DOW_FULL = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];

/* ---------- Giáo án nạp sẵn (kết hợp skill + basic: skill tập TRƯỚC khi còn khỏe) ---------- */
function defaultRoutines(){
  return [
    {id:'push', name:'Đẩy + Planche', builtin:true, items:[
      {exId:'handstand-hold', sets:5, reps:20, restSec:120},
      {exId:'planche-lean', sets:3, reps:25, restSec:60},
      {exId:'tuck-planche', sets:3, reps:12, restSec:90},
      {exId:'adv-tuck-planche', sets:5, reps:5, restSec:120},
      {exId:'hspu-free', sets:3, reps:3, restSec:150},
      {exId:'hspu-wall', sets:3, reps:8, restSec:120},
      {exId:'straight-bar-dip', sets:3, reps:12, restSec:120, note:'Hạ chậm 3 giây mỗi lần'},
      {exId:'pseudo-planche', sets:3, reps:7, restSec:90}
    ]},
    {id:'pull', name:'Kéo + Front Lever', builtin:true, items:[
      {exId:'front-lever', sets:5, reps:10, restSec:120},
      {exId:'front-lever-raise', sets:3, reps:6, restSec:120},
      {exId:'muscle-up', sets:3, reps:4, restSec:150},
      {exId:'pullup', sets:4, reps:8, restSec:120},
      {exId:'archer-pullup', sets:3, reps:3, restSec:120},
      {exId:'negative-pullup', sets:3, reps:5, restSec:90},
      {exId:'hanging-leg-raise', sets:3, reps:10, restSec:90}
    ]},
    {id:'legs', name:'Chân (Legs)', builtin:true, items:[
      {exId:'pistol-assisted', sets:3, reps:8, restSec:105},
      {exId:'bulgarian-split', sets:3, reps:10, restSec:90},
      {exId:'jump-squat', sets:3, reps:12, restSec:90},
      {exId:'step-up', sets:3, reps:10, restSec:90},
      {exId:'calf-raise-1leg', sets:3, reps:18, restSec:60},
      {exId:'wall-sit', sets:3, reps:50, restSec:75},
      {exId:'hollow-hold', sets:3, reps:25, restSec:60}
    ]},
    {id:'planche', name:'Planche (Skill)', builtin:true, items:[
      {exId:'planche-lean', sets:4, reps:25, restSec:60},
      {exId:'tuck-planche', sets:4, reps:12, restSec:90},
      {exId:'adv-tuck-planche', sets:5, reps:5, restSec:120},
      {exId:'pseudo-planche', sets:3, reps:10, restSec:90}
    ]}
  ];
}

/* Lịch tuần mặc định: T2/T6 Đẩy+Planche, T3/T7 Kéo+Front Lever, T4 Chân, T5/CN nghỉ */
function defaultSchedule(){
  return {'0':'rest','1':'push','2':'pull','3':'legs','4':'rest','5':'push','6':'pull'};
}

/* ---------- Flow hướng dẫn: khởi động ~5 phút / giãn cơ ~3 phút ---------- */
const WARMUP_FLOW = [
  {exId:'warmup-shoulder', val:45},
  {exId:'warmup-wrist', val:45},
  {exId:'warmup-hip', val:45},
  {exId:'warmup-jumping-jack', val:60},
  {exId:'warmup-scapular', val:12},
  {exId:'warmup-legswing', val:45}
];
const COOLDOWN_FLOW = [
  {exId:'stretch-shoulder', val:30},
  {exId:'stretch-chest', val:30},
  {exId:'stretch-lat', val:30},
  {exId:'stretch-quad', val:30},
  {exId:'stretch-hamstring', val:30},
  {exId:'stretch-hip', val:30}
];

/* RPE 1–10: mô tả tiếng Việt */
const RPE_LABELS = {1:'Rất nhẹ',2:'Nhẹ',3:'Hơi nhẹ',4:'Vừa phải',5:'Hơi mệt',6:'Mệt vừa',7:'Mệt',8:'Rất mệt',9:'Gần kiệt sức',10:'Kiệt sức'};

/* 3 mục tiêu mẫu đúng trình user (thêm nhanh 1 chạm) */
const SAMPLE_GOALS = [
  {exId:'front-lever', target:15, label:'Front lever giữ 15 giây'},
  {exId:'muscle-up', target:5, label:'Muscle-up 5 cái'},
  {exId:'handstand-hold', target:30, label:'Handstand giữ 30 giây'}
];

/* ---------- Cây kỹ năng (skill tree): 4 skill chính của user ----------
   Mỗi nấc: label hiển thị, exId bài tương ứng trong thư viện (null = nấc tự đánh
   dấu tay, vd full planche chưa có bài riêng), type sec/rep, need = ngưỡng đạt.
   Nấc được tính là đạt khi PR của bài đó >= need, hoặc user đánh dấu tay.
   (Ý tưởng theo Calistree / Fitloop: cây tiến bộ có từng nấc rõ ràng, biết
   mình đang ở đâu và nấc tiếp theo tập gì.) */
const SKILL_TREES = [
  {id:'planche', name:'Planche', icon:'🤸', desc:'Từ nghiêng người tới duỗi thẳng toàn thân — skill nặng nhất, kiên nhẫn từng giây.',
   rungs:[
    {label:'Planche lean giữ 20 giây', exId:'planche-lean', type:'sec', need:20, hint:'Vai vượt qua cổ tay, tay thẳng khóa khuỷu, siết toàn thân.'},
    {label:'Tuck planche giữ 10 giây', exId:'tuck-planche', type:'sec', need:10, hint:'Co gối sát ngực, lưng cong tròn, giữ bằng đầu ngón tay.'},
    {label:'Adv tuck planche giữ 5 giây', exId:'adv-tuck-planche', type:'sec', need:5, hint:'Duỗi lưng thẳng ra sau, gối vẫn co.'},
    {label:'Adv tuck planche giữ 10 giây', exId:'adv-tuck-planche', type:'sec', need:10, hint:'Mốc đẹp — giữ 10s là đã rất chắc, sẵn sàng qua straddle.'},
    {label:'Straddle planche giữ 3 giây', exId:'straddle-planche', type:'sec', need:3, hint:'Duỗi chân xoạc rộng sang hai bên, người song song mặt đất.'},
    {label:'Full planche giữ 3 giây', exId:null, type:'manual', need:0, hint:'Nấc cuối. Cần straddle thật chắc rồi mới tập full — đừng vội.'}
   ]},
  {id:'frontlever', name:'Front Lever', icon:'🧲', desc:'Treo xà, người duỗi thẳng song song mặt đất.',
   rungs:[
    {label:'Tuck front lever giữ 15 giây', exId:'tuck-front-lever', type:'sec', need:15, hint:'Co gối sát ngực, lưng song song mặt đất.'},
    {label:'Adv tuck front lever giữ 10 giây', exId:'adv-tuck-front-lever', type:'sec', need:10, hint:'Duỗi lưng thẳng ra sau, gối vẫn co sát ngực. Hông cao ngang vai.'},
    {label:'Straddle front lever giữ 5 giây', exId:'straddle-front-lever', type:'sec', need:5, hint:'Duỗi chân xoạc rộng sang hai bên, người song song mặt đất. Xoạc càng rộng càng nhẹ.'},
    {label:'Front lever giữ 5 giây', exId:'front-lever', type:'sec', need:5, hint:'Duỗi thẳng toàn thân, tưởng tượng kéo xà xuống hông.'},
    {label:'Front lever giữ 10 giây', exId:'front-lever', type:'sec', need:10, hint:'Mốc đẹp — giữ 10s là đã rất chắc.'},
    {label:'Nâng hạ front lever 5 cái', exId:'front-lever-raise', type:'rep', need:5, hint:'Kéo lên vị trí lever rồi hạ chậm, kiểm soát, không đung đưa.'},
    {label:'Tuck back lever giữ 5 giây', exId:null, type:'manual', need:0, hint:'Sau front lever: treo xà, lộn người ra sau, co gối giữ người song song mặt đất. Tập trên xà thấp, có thảm bên dưới.'},
    {label:'Back lever giữ 5 giây', exId:null, type:'manual', need:0, hint:'Nấc cuối của cây kéo sau: duỗi thẳng toàn thân, mặt úp xuống đất. Cần tuck back lever thật chắc rồi mới duỗi.'}
   ]},
  {id:'muscleup', name:'Muscle-up', icon:'💥', desc:'Pull-up bùng nổ rồi chuyển thành dip trên xà trong một nhịp.',
   rungs:[
    {label:'Pull-up 10 cái một hiệp', exId:'pullup', type:'rep', need:10, hint:'Nền bắt buộc: kéo xà 10 cái ngon lành trước đã.'},
    {label:'Muscle-up 1 cái', exId:'muscle-up', type:'rep', need:1, hint:'Cái đầu tiên là khó nhất — đã làm được là qua.'},
    {label:'Muscle-up 3 cái một hiệp', exId:'muscle-up', type:'rep', need:3, hint:'Làm liền 3 cái không nghỉ.'},
    {label:'Muscle-up 5 cái một hiệp', exId:'muscle-up', type:'rep', need:5, hint:'Mốc mục tiêu trong app của bạn.'}
   ]},
  {id:'handstand', name:'Handstand', icon:'🤹', desc:'Trồng chuối — từ dựa tường tới tự do rồi đẩy tay.',
   rungs:[
    {label:'Handstand dựa tường giữ 30 giây', exId:'handstand-wall-hold', type:'sec', need:30, hint:'Siết toàn thân thành đường thẳng, mắt nhìn khoảng giữa hai tay.'},
    {label:'Handstand tự do giữ 10 giây', exId:'handstand-hold', type:'sec', need:10, hint:'Dùng đầu ngón tay giữ thăng bằng.'},
    {label:'Handstand tự do giữ 30 giây', exId:'handstand-hold', type:'sec', need:30, hint:'Mốc mục tiêu trong app của bạn.'},
    {label:'HSPU dựa tường 5 cái', exId:'hspu-wall', type:'rep', need:5, hint:'Hạ đầu chạm gần sàn rồi đẩy lên, tuyệt đối không võng lưng.'}
   ]}
];

/* Số đo cơ thể ghi log (chỉ ghi nhận, không đặt mục tiêu tăng/giảm):
   cân nặng bắt buộc, các số đo còn lại tùy chọn, đơn vị cm. */
const BODY_FIELDS = [
  {key:'waist', label:'Vòng eo (cm)'},
  {key:'chest', label:'Vòng ngực (cm)'},
  {key:'arm', label:'Bắp tay (cm)'},
  {key:'thigh', label:'Đùi (cm)'}
];

/* ================= LOGIC THUẦN (không đụng DOM — test được bằng node) ================= */

function uid(){
  return 'id' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/* Khóa ngày local dạng YYYY-MM-DD (tránh lệch múi giờ của toISOString) */
function todayKey(d){
  d = d || new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + m + '-' + day;
}

function fmtDate(iso){
  if (!iso) return '';
  const p = iso.split('-');
  return p[2] + '/' + p[1] + '/' + p[0];
}

function getExerciseById(list, id){
  for (let i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
  return null;
}

function allExercises(db){
  return EXERCISES.concat(db.customExercises || []);
}

function getRoutineById(db, id){
  const all = (db.routines || []);
  for (let i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
  return null;
}

/* ---------- v6: bài tự tạo / nhân bản giáo án / kỷ lục nhập tay (logic thuần) ---------- */
function isCustomExercise(ex){
  return !!ex && (ex.custom === true || String(ex.id || '').indexOf('custom-') === 0);
}

/* Tạo 1 bài tự tạo (bodyweight only — form không có chỗ nhập tạ).
   f: {name, group, d (1-5), unit ('rep'|'sec'), target (>0), video (ID YouTube, tùy chọn)} */
function createCustomExercise(db, f){
  f = f || {};
  const name = String(f.name == null ? '' : f.name).trim();
  if (!name) return { ok: false, error: 'Nhập tên bài tập đã bro' };
  const group = GROUP_LABELS[f.group] ? f.group : null;
  if (!group) return { ok: false, error: 'Chọn nhóm cho bài tập đã bro' };
  const d = Math.min(5, Math.max(1, Number(f.d) || 3));
  const unit = f.unit === 'sec' ? 'sec' : 'rep';
  const target = Number(f.target);
  if (!target || target <= 0) return { ok: false, error: 'Nhập mục tiêu lớn hơn 0 đã bro' };
  let video = String(f.video == null ? '' : f.video).trim();
  if (video) {
    const mV = video.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
    const mS = video.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
    video = mV ? mV[1] : (mS ? mS[1] : video.replace(/[^A-Za-z0-9_-]/g, ''));
  }
  const ex = { id: 'custom-' + uid(), n: name, g: group, d: d, unit: unit,
    tgt: '3 hiệp × ' + target + ' ' + unitLabel(unit), defVal: target, rest: 90,
    tip: 'Bài tự tạo của bạn.', custom: true };
  if (video) ex.v = video;
  if (!Array.isArray(db.customExercises)) db.customExercises = [];
  db.customExercises.push(ex);
  return { ok: true, ex: ex };
}

/* Nhân bản 1 giáo án (cả giáo án có sẵn lẫn tự tạo): bản sao luôn là giáo án
   tự tạo (builtin:false) nên sửa/xóa được, giáo án gốc không đổi. */
function duplicateRoutine(db, routineId){
  const r = getRoutineById(db, routineId);
  if (!r) return { ok: false, error: 'Không tìm thấy giáo án' };
  const copy = { id: 'copy-' + uid(), name: r.name + ' (bản sao)', builtin: false,
    items: JSON.parse(JSON.stringify(r.items || [])) };
  if (!Array.isArray(db.routines)) db.routines = [];
  db.routines.push(copy);
  return { ok: true, routine: copy };
}

/* Nhập kỷ lục tay cho 1 bài: chỉ bài tập được (không tính khởi động/giãn cơ,
   giống updatePRsPure). Giá trị phải > 0. */
function setManualPR(db, exId, value){
  const ex = getExerciseById(allExercises(db), exId);
  if (!ex) return { ok: false, error: 'Không tìm thấy bài tập' };
  if (ex.g === 'warmup' || ex.g === 'stretch') return { ok: false, error: 'Bài khởi động/giãn cơ không tính kỷ lục' };
  const v = Number(value);
  if (!v || v <= 0) return { ok: false, error: 'Nhập kỷ lục lớn hơn 0 đã bro' };
  if (!db.prs || typeof db.prs !== 'object') db.prs = {};
  db.prs[exId] = { value: v, unit: ex.unit, date: todayKey(), manual: true };
  return { ok: true, pr: db.prs[exId] };
}

/* Giữ kỷ lục nhập tay khi tính lại PR từ lịch sử: kỷ lục tay thắng nếu cao hơn
   số tính được; nếu buổi tập thật vượt qua nó thì số thật thay thế và cờ
   manual bị gỡ (không còn là kỷ lục nhập tay nữa). */
function mergeManualPRs(computed, oldPrs){
  const out = {};
  Object.keys(computed || {}).forEach((id) => { out[id] = computed[id]; });
  Object.keys(oldPrs || {}).forEach((id) => {
    const m = oldPrs[id];
    if (m && m.manual) {
      const c = out[id];
      if (!c || m.value > c.value) out[id] = { value: m.value, unit: m.unit, date: m.date, manual: true };
    }
  });
  return out;
}

/* Tính lại toàn bộ PR từ lịch sử nhưng giữ kỷ lục nhập tay (dạng thuần,
   dùng cho test; recomputePRs() bên dưới gọi hàm này với DB thật). */
function recomputePRsPure(oldPrs, history, exById){
  const computed = {};
  (history || []).forEach((h) => updatePRsPure(computed, h.items, h.date, exById));
  return mergeManualPRs(computed, oldPrs);
}

/* Chuỗi tuần tập đủ lịch liên tiếp (streak tuần, v6): mỗi tuần (T2–CN) tính là
   đủ khi mọi ngày tập theo lịch đều có ít nhất 1 buổi đã lưu; ngày nghỉ
   (T5/CN theo lịch mặc định) không bao giờ làm đứt chuỗi. Tuần hiện tại chỉ
   xét các ngày tập đã qua tới hôm nay — ngày tập tương lai không tính, và hôm
   nay chưa tập cũng chưa tính (giữ triết lý streak ngày cũ: hôm nay chưa tập
   thì streak chưa đứt). Tuần hiện tại đang dở (có ngày tập đã qua mà chưa
   tập) thì không tính vào chuỗi cũng không làm đứt chuỗi — chuỗi giữ nguyên
   các tuần đủ trước đó; chỉ tuần đã qua mà thiếu buổi mới làm đứt chuỗi.
   Trả về {streak, total} với total là tổng số ngày tập khác nhau trong lịch
   sử (giữ nguyên nghĩa cũ). */
function calcWeeklyStreak(history, schedule){
  schedule = schedule || defaultSchedule();
  const days = {};
  (history || []).forEach((h) => { if (h.date) days[h.date] = true; });
  const total = Object.keys(days).length;
  const trainingDows = [];
  for (let dow = 0; dow < 7; dow++) {
    if (schedule[String(dow)] && schedule[String(dow)] !== 'rest') trainingDows.push(dow);
  }
  if (!trainingDows.length) return { streak: 0, total: total };
  const todayK = todayKey();
  const monday = new Date();
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7)); // Thứ 2 tuần này
  let streak = 0;
  let weekStart = monday;
  let isCurrent = true;
  for (;;) {
    // Các ngày tập phải có của tuần này (tuần hiện tại chỉ xét ngày đã qua)
    const required = [];
    trainingDows.forEach((dow) => {
      const d = new Date(weekStart.getTime());
      d.setDate(d.getDate() + ((dow + 6) % 7));
      const k = todayKey(d);
      if (isCurrent && k > todayK) return; // ngày tập tương lai: chưa tính
      if (isCurrent && k === todayK && !days[k]) return; // hôm nay chưa tập: chưa tính
      required.push(k);
    });
    if (isCurrent && required.length === 0) {
      // Tuần này chưa có ngày tập nào đã qua (VD sáng Thứ 2): bỏ qua tuần này
      weekStart.setDate(weekStart.getDate() - 7);
      isCurrent = false;
      continue;
    }
    let complete = true;
    for (let i = 0; i < required.length; i++) {
      if (!days[required[i]]) { complete = false; break; }
    }
    if (!complete) {
      if (isCurrent) {
        // Tuần hiện tại đang dở: không tính, không đứt — đếm từ tuần trước
        weekStart.setDate(weekStart.getDate() - 7);
        isCurrent = false;
        continue;
      }
      break; // tuần đã qua mà thiếu buổi: đứt chuỗi tại đây
    }
    streak++;
    weekStart.setDate(weekStart.getDate() - 7);
    isCurrent = false;
  }
  return { streak: streak, total: total };
}

/* Alias cũ (giữ để code/test ngoài còn gọi calcStreak được) — cùng streak tuần. */
function calcStreak(history, schedule){
  return calcWeeklyStreak(history, schedule);
}

/* Nhắc deload (v6): sau mỗi 4 tuần tập đủ liên tiếp thì nên có 1 tuần nhẹ.
   weeksDone = số tuần đủ liên tiếp từ calcWeeklyStreak; due khi là bội số của 4. */
function deloadDue(history, schedule){
  const weeksDone = calcWeeklyStreak(history, schedule).streak;
  return { due: weeksDone > 0 && weeksDone % 4 === 0, weeksDone: weeksDone };
}

/* Số ngày từ lần xuất JSON backup gần nhất (null = chưa bao giờ xuất).
   Tính theo khóa ngày local để không lệch vì giờ giấc/múi giờ. */
function daysSinceBackup(lastExport, now){
  if (!lastExport) return null;
  const a = new Date(lastExport + 'T12:00:00').getTime();
  const b = new Date(todayKey(now || new Date()) + 'T12:00:00').getTime();
  return Math.max(0, Math.round((b - a) / 86400000));
}

/* Giá trị thực tế của 1 hiệp đã xong: actual (nhập tay) nếu có, không thì
   target val. Dữ liệu cũ chưa có actual -> dùng val như trước. */
function setVal(s){ return (s && s.actual != null) ? s.actual : (s ? s.val : 0); }

/* Cập nhật kỷ lục cá nhân từ các hiệp đã hoàn thành của 1 buổi tập.
   sessionItems: [{exId, unit, sets:[{done,val,actual}]}] ; prs: {exId:{value,unit,date}} */
function updatePRsPure(prs, sessionItems, dateKey, exById){
  prs = prs || {};
  (sessionItems || []).forEach((it) => {
    const ex = exById ? exById[it.exId] : null;
    if (ex && (ex.g === 'warmup' || ex.g === 'stretch')) return; // khởi động/giãn cơ không tính PR
    let best = 0;
    (it.sets || []).forEach((s) => { if (s.done && setVal(s) > best) best = setVal(s); });
    if (best <= 0) return;
    const cur = prs[it.exId];
    if (!cur || best > cur.value) {
      prs[it.exId] = { value: best, unit: it.unit, date: dateKey };
    }
  });
  return prs;
}

/* Điểm vẽ biểu đồ cho 1 bài: mỗi buổi tập -> best của buổi đó (chỉ hiệp đã xong) */
function buildChartPoints(history, exId){
  const pts = [];
  (history || []).forEach((h) => {
    (h.items || []).forEach((it) => {
      if (it.exId !== exId) return;
      let best = 0;
      (it.sets || []).forEach((s) => { if (s.done && setVal(s) > best) best = setVal(s); });
      if (best > 0) pts.push({ date: h.date, best: best });
    });
  });
  pts.sort((a, b) => (a.date < b.date ? -1 : 1));
  return pts;
}

/* Tổng số hiệp đã hoàn thành trong 1 buổi */
function countDoneSets(sessionItems){
  let n = 0;
  (sessionItems || []).forEach((it) => {
    (it.sets || []).forEach((s) => { if (s.done) n++; });
  });
  return n;
}

/* "Lần trước" cho 1 bài: giá trị thực tế (hoặc target với dữ liệu cũ) của
   các hiệp đã xong trong buổi gần nhất có bài đó + RPE của buổi đó.
   Trả về null nếu chưa từng tập bài này (hoặc buổi gần nhất không tick hiệp nào).
   Buổi mới nhất = ngày mới nhất, cùng ngày thì buổi lưu sau (chèn sau) thắng. */
function lastTimeFor(history, exId){
  const withIdx = (history || []).map((h, i) => ({ h: h, i: i }));
  withIdx.sort((a, b) => {
    const da = (a.h && a.h.date) || '', db = (b.h && b.h.date) || '';
    if (da !== db) return da < db ? 1 : -1;
    return b.i - a.i;
  });
  for (let k = 0; k < withIdx.length; k++) {
    const h = withIdx[k].h;
    const it = (h.items || []).find((x) => x.exId === exId);
    if (!it) continue;
    const vals = (it.sets || []).filter((s) => s.done).map((s) => setVal(s));
    if (!vals.length) continue;
    return { vals: vals, unit: it.unit, rpe: (h.rpe == null ? null : h.rpe), date: h.date };
  }
  return null;
}

/* Link video hướng dẫn: ưu tiên video tiếng Việt (vv), rồi video curated (v), cuối cùng tìm kiếm YouTube theo tên bài */
function videoUrl(ex){
  if (ex && ex.vv) return 'https://www.youtube.com/watch?v=' + ex.vv;
  if (ex && ex.v) return 'https://www.youtube.com/watch?v=' + ex.v;
  const q = encodeURIComponent(((ex && ex.n) || '') + ' proper form');
  return 'https://www.youtube.com/results?search_query=' + q;
}

/* ---------- Circuit (tập mạch) ---------- */
/* Số vòng = số hiệp lớn nhất trong các bài */
function circuitRounds(items){
  let m = 1;
  (items || []).forEach((it) => { m = Math.max(m, (it.sets || []).length); });
  return m;
}
/* Vòng r đã xong khi mọi bài đều tick xong hiệp thứ r (bài ít hiệp hơn được miễn) */
function circuitRoundComplete(items, roundIdx){
  return (items || []).every((it) => (it.sets || []).length <= roundIdx || it.sets[roundIdx].done);
}
function circuitState(items){
  const rounds = circuitRounds(items);
  let roundsDone = 0;
  for (let r = 0; r < rounds; r++) {
    if (circuitRoundComplete(items, r)) roundsDone++;
    else break;
  }
  const allDone = roundsDone >= rounds;
  return { rounds: rounds, roundsDone: roundsDone,
    currentRound: allDone ? rounds : roundsDone + 1, allDone: allDone };
}

/* ---------- Khối lượng tuần ---------- */
/* Khóa tuần bắt đầu từ Thứ 2 (YYYY-MM-DD của ngày Thứ 2) */
function weekStartKey(d){
  const x = new Date(d.getTime());
  const off = (x.getDay() + 6) % 7;
  x.setDate(x.getDate() - off);
  return todayKey(x);
}
/* Tổng hợp hiệp/rep/giây đã tick theo nhóm cơ cho N tuần gần nhất (tuần hiện tại ở cuối).
   Chỉ tính hiệp done; bài khởi động/giãn cơ không bao giờ được lưu nên không cần loại. */
function weeklyVolume(history, exById, nWeeks){
  nWeeks = nWeeks || 4;
  const weeks = [];
  const now = new Date();
  for (let w = nWeeks - 1; w >= 0; w--) {
    const d = new Date(now.getTime());
    d.setDate(d.getDate() - w * 7);
    weeks.push({ weekStart: weekStartKey(d),
      sets: {day:0,keo:0,chan:0,core:0,skill:0},
      reps: {day:0,keo:0,chan:0,core:0,skill:0},
      secs: {day:0,keo:0,chan:0,core:0,skill:0} });
  }
  const idx = {};
  weeks.forEach((wk, i) => { idx[wk.weekStart] = i; });
  (history || []).forEach((h) => {
    if (!h.date) return;
    const wk = weekStartKey(new Date(h.date + 'T12:00:00'));
    const w = weeks[idx[wk]];
    if (!w) return;
    (h.items || []).forEach((it) => {
      const ex = exById ? exById[it.exId] : null;
      const g = ex ? ex.g : null;
      if (!g || !w.sets.hasOwnProperty(g)) return;
      (it.sets || []).forEach((s) => {
        if (!s.done) return;
        w.sets[g]++;
        if (it.unit === 'sec') w.secs[g] += setVal(s);
        else w.reps[g] += setVal(s);
      });
    });
  });
  return weeks;
}

/* ---------- Mục tiêu cá nhân ---------- */
/* Tiến độ = PR hiện tại / chỉ tiêu; done khi đạt hoặc vượt */
function goalProgress(pr, target){
  if (!pr || !target || target <= 0) return { pct: 0, done: false };
  return { pct: Math.min(100, Math.round(pr.value / target * 100)), done: pr.value >= target };
}

/* ---------- Cân nặng & số đo cơ thể (v5) ---------- */
/* Entry: {id, date:'YYYY-MM-DD', weight, waist, chest, arm, thigh}
   Ghi đè entry cùng ngày (mỗi ngày chỉ giữ 1 số liệu mới nhất), trả về mảng mới
   đã sắp xếp theo ngày tăng dần. weight bắt buộc (kg), các số đo khác tùy chọn. */
function bodyLogUpsert(body, entry){
  const list = (body || []).filter((b) => b.date !== entry.date);
  list.push({
    id: entry.id || uid(), date: entry.date,
    weight: Number(entry.weight),
    waist: entry.waist == null || entry.waist === '' ? null : Number(entry.waist),
    chest: entry.chest == null || entry.chest === '' ? null : Number(entry.chest),
    arm: entry.arm == null || entry.arm === '' ? null : Number(entry.arm),
    thigh: entry.thigh == null || entry.thigh === '' ? null : Number(entry.thigh)
  });
  list.sort((a, b) => (a.date < b.date ? -1 : 1));
  return list;
}

/* Điểm vẽ biểu đồ cân nặng: tái dùng drawLineChart (pts dạng {date, best}) */
function bodyWeightSeries(body){
  return (body || [])
    .filter((b) => b.weight > 0)
    .map((b) => ({ date: b.date, best: b.weight }));
}

/* Thay đổi cân nặng từ lần ghi đầu tới lần ghi mới nhất (chỉ số liệu, không kết luận) */
function bodyWeightChange(body){
  const pts = bodyWeightSeries(body);
  if (pts.length < 2) return null;
  const from = pts[0].best, to = pts[pts.length - 1].best;
  return { from: from, to: to, delta: Math.round((to - from) * 10) / 10, days: pts.length };
}

/* ---------- Huy hiệu thành tích (v5) ---------- */
/* Tính thuần từ DB: streak, tổng buổi, tổng hiệp, số kỷ lục, PR skill, mục tiêu.
   Không lưu trạng thái riêng — mở khóa tự động khi dữ liệu đạt mốc. */
function computeBadges(db){
  const history = (db && db.history) || [];
  const prs = (db && db.prs) || {};
  const goals = (db && db.goals) || [];
  const st = calcWeeklyStreak(history, db && db.schedule);
  let totalSets = 0;
  history.forEach((h) => { totalSets += countDoneSets(h.items); });
  const prCount = Object.keys(prs).length;
  const goalsDone = goals.filter((g) => goalProgress(prs[g.exId], g.target).done).length;
  const has = (id) => (prs[id] && prs[id].value) || 0;

  const defs = [
    {id:'first-workout', icon:'🎉', name:'Buổi đầu tiên', desc:'Hoàn thành buổi tập đầu tiên được lưu', earned: history.length >= 1},
    {id:'sessions-10', icon:'🏋️', name:'10 buổi tập', desc:'Tích lũy 10 buổi tập', earned: history.length >= 10},
    {id:'sessions-50', icon:'💪', name:'50 buổi tập', desc:'Tích lũy 50 buổi tập', earned: history.length >= 50},
    {id:'sessions-100', icon:'👑', name:'100 buổi tập', desc:'Tích lũy 100 buổi tập', earned: history.length >= 100},
    {id:'streak-4w', icon:'🔥', name:'4 tuần liên tiếp', desc:'Tập đủ lịch 4 tuần liên tiếp', earned: st.streak >= 4},
    {id:'streak-8w', icon:'🗓️', name:'8 tuần liên tiếp', desc:'Tập đủ lịch 8 tuần liên tiếp', earned: st.streak >= 8},
    {id:'streak-12w', icon:'🏆', name:'12 tuần liên tiếp', desc:'Tập đủ lịch 12 tuần liên tiếp', earned: st.streak >= 12},
    {id:'streak-26w', icon:'👑', name:'26 tuần liên tiếp', desc:'Tập đủ lịch nửa năm liên tiếp', earned: st.streak >= 26},
    {id:'first-pr', icon:'🥇', name:'Kỷ lục đầu tiên', desc:'Phá kỷ lục cá nhân đầu tiên', earned: prCount >= 1},
    {id:'prs-10', icon:'🏅', name:'10 kỷ lục', desc:'Có kỷ lục ở 10 bài khác nhau', earned: prCount >= 10},
    {id:'volume-500', icon:'📦', name:'500 hiệp', desc:'Tích lũy 500 hiệp đã tập', earned: totalSets >= 500},
    {id:'volume-1000', icon:'📦', name:'1000 hiệp', desc:'Tích lũy 1000 hiệp đã tập', earned: totalSets >= 1000},
    {id:'volume-5000', icon:'📦', name:'5000 hiệp', desc:'Tích lũy 5000 hiệp đã tập', earned: totalSets >= 5000},
    {id:'fl-10s', icon:'🧲', name:'Front lever 10 giây', desc:'Giữ front lever duỗi thẳng 10 giây', earned: has('front-lever') >= 10},
    {id:'mu-first', icon:'💥', name:'Muscle-up đầu tiên', desc:'Làm được 1 cái muscle-up', earned: has('muscle-up') >= 1},
    {id:'hs-30s', icon:'🤸', name:'Handstand 30 giây', desc:'Giữ handstand tự do 30 giây', earned: has('handstand-hold') >= 30},
    {id:'planche-adv', icon:'🧍', name:'Adv tuck planche 5 giây', desc:'Giữ adv tuck planche 5 giây', earned: has('adv-tuck-planche') >= 5},
    {id:'goal-first', icon:'🎯', name:'Mục tiêu đầu tiên', desc:'Hoàn thành 1 mục tiêu cá nhân', earned: goalsDone >= 1}
  ];
  return defs;
}

/* ---------- Cây kỹ năng: trạng thái từng nấc (v5) ---------- */
/* Nấc đạt khi: PR của bài tương ứng >= need, hoặc user đánh dấu tay
   (skillMarks[treeId] = chỉ số nấc cao nhất đã đánh dấu tay, -1 = chưa có). */
function skillRungAchieved(db, tree, rungIdx){
  const rung = tree.rungs[rungIdx];
  if (!rung) return false;
  if (rungManuallyMarked(db, tree.id, rungIdx)) return true;
  if (!rung.exId || rung.type === 'manual') return false;
  const pr = (db && db.prs && db.prs[rung.exId]) || null;
  return !!pr && pr.value >= rung.need;
}

/* Trạng thái 1 cây: số nấc đã đạt, nấc tiếp theo cần tập, chi tiết từng nấc */
function skillTreeStatus(db, treeId){
  const tree = SKILL_TREES.find((t) => t.id === treeId);
  if (!tree) return null;
  const rungs = tree.rungs.map((r, i) => ({ achieved: skillRungAchieved(db, tree, i) }));
  let done = 0;
  rungs.forEach((r) => { if (r.achieved) done++; });
  let nextIdx = -1;
  for (let i = 0; i < rungs.length; i++) { if (!rungs[i].achieved) { nextIdx = i; break; } }
  return { tree: tree, rungs: rungs, done: done, total: tree.rungs.length, nextIdx: nextIdx };
}

/* ---------- Báo cáo tuần (v5) ---------- */
/* Tuần hiện tại (Thứ 2 → CN): số buổi, hiệp, phút, PR mới trong tuần,
   so với số buổi tuần trước. prs chỉ giữ PR mới nhất mỗi bài kèm ngày đạt. */
function weeklyReport(history, prs, now){
  now = now || new Date();
  const ws = weekStartKey(now);
  const wkStart = new Date(ws + 'T12:00:00');
  const wkEnd = new Date(wkStart.getTime()); wkEnd.setDate(wkEnd.getDate() + 7);
  const prevStart = new Date(wkStart.getTime()); prevStart.setDate(prevStart.getDate() - 7);
  const inRange = (d, a, b) => {
    const t = new Date(d + 'T12:00:00');
    return t >= a && t < b;
  };
  let sessions = 0, sets = 0, minutes = 0, prevSessions = 0;
  (history || []).forEach((h) => {
    if (!h.date) return;
    if (inRange(h.date, wkStart, wkEnd)) {
      sessions++;
      minutes += h.minutes || 0;
      sets += countDoneSets(h.items);
    } else if (inRange(h.date, prevStart, wkStart)) {
      prevSessions++;
    }
  });
  const prsThisWeek = [];
  Object.keys(prs || {}).forEach((id) => {
    const p = prs[id];
    if (p && p.date && inRange(p.date, wkStart, wkEnd)) {
      prsThisWeek.push({ exId: id, value: p.value, unit: p.unit, date: p.date });
    }
  });
  prsThisWeek.sort((a, b) => (a.date < b.date ? -1 : 1));
  return { weekStart: ws, sessions: sessions, sets: sets, minutes: minutes,
    prevSessions: prevSessions, prsThisWeek: prsThisWeek };
}

/* ---------- Biểu đồ từng bài: best/tổng theo khoảng ngày (v5) ---------- */
/* mode 'best': số cao nhất mỗi buổi; 'total': tổng số mỗi buổi (rep hoặc giây).
   rangeDays: 28 / 84 / 0 (tất cả). Giữ nguyên buildChartPoints cũ để tương thích. */
function buildChartSeries(history, exId, mode, rangeDays){
  mode = mode || 'best';
  let cutoff = null;
  if (rangeDays && rangeDays > 0) {
    const d = new Date();
    d.setDate(d.getDate() - (rangeDays - 1));
    cutoff = todayKey(d);
  }
  const pts = [];
  (history || []).forEach((h) => {
    if (!h.date) return;
    if (cutoff && h.date < cutoff) return;
    (h.items || []).forEach((it) => {
      if (it.exId !== exId) return;
      let best = 0, total = 0;
      (it.sets || []).forEach((s) => {
        if (s.done) { total += setVal(s); if (setVal(s) > best) best = setVal(s); }
      });
      if (best > 0) pts.push({ date: h.date, best: mode === 'total' ? total : best });
    });
  });
  pts.sort((a, b) => (a.date < b.date ? -1 : 1));
  return pts;
}

/* ---------- Xuất CSV lịch sử tập (v5, bonus) ---------- */
/* BOM UTF-8 để Excel mở ra tiếng Việt không lỗi font. */
function historyToCSV(history){
  const q = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
  const rows = [['Ngày', 'Buổi', 'Bài tập', 'Hiệp xong', 'Tốt nhất', 'Đơn vị', 'Phút', 'RPE', 'Ghi chú']];
  (history || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1)).forEach((h) => {
    (h.items || []).forEach((it) => {
      let best = 0, done = 0;
      (it.sets || []).forEach((s) => { if (s.done) { done++; if (setVal(s) > best) best = setVal(s); } });
      rows.push([h.date, h.routineName || '', it.name || '', done + '/' + (it.sets || []).length,
        best, unitLabel(it.unit), h.minutes || '', (h.rpe == null ? '' : h.rpe), h.note || '']);
    });
  });
  return '﻿' + rows.map((r) => r.map(q).join(',')).join('\r\n');
}

/* Dựng entry lịch sử từ buổi tập đang diễn ra (thuần, test được) */
function buildHistoryEntry(session, note, rpe){
  const minutes = Math.max(1, Math.round((Date.now() - session.startedAt) / 60000));
  return {
    id: uid(), date: todayKey(), startISO: new Date(session.startedAt).toISOString(),
    minutes: minutes, routineId: session.routineId, routineName: session.routineName,
    mode: session.mode || 'normal',
    note: String(note == null ? '' : note).trim(),
    rpe: (rpe == null || rpe === '') ? null : Number(rpe),
    items: session.items.map((it) => ({ exId: it.exId, name: it.name, unit: it.unit,
      sets: it.sets.map((s) => ({ done: s.done, val: s.val, actual: (s.actual == null ? null : s.actual) })) }))
  };
}

/* ================= STORE (localStorage) ================= */
const DB_KEY = 'calisthenics_tracker_v1';

function blankDB(){
  return {
    v: 5,
    history: [],
    customExercises: [],
    routines: defaultRoutines(),
    schedule: defaultSchedule(),
    prs: {},
    goals: [],
    body: [],
    skillMarks: {},
    settings: { restSec: 90, autoTimer: true, userName: '', lastExport: null }
  };
}

/* Chuẩn hóa DB (dùng chung cho load từ máy và import file): vá field thiếu,
   tương thích ngược với dữ liệu bản cũ (session không có note/rpe/mode vẫn đọc được).
   Migration v1 -> v2: cập nhật nội dung giáo án builtin (giữ nguyên id nên lịch sử
   và lịch tuần không vỡ), thêm giáo án Planche nếu chưa có. */
function normalizeDB(db){
  const b = blankDB();
  const origV = db.v || 1; // version gốc TRƯỚC khi vá field thiếu (vá xong db.v sẽ là 5)
  Object.keys(b).forEach((k) => { if (db[k] === undefined) db[k] = b[k]; });
  if (!Array.isArray(db.goals)) db.goals = [];
  if (!Array.isArray(db.routines)) db.routines = defaultRoutines();
  /* Vá field sai kiểu — áp dụng cho MỌI version, kể cả DB v3 đã lên rồi:
     file import tay / dữ liệu hỏng vẫn phải đọc được, không được crash cả app.
     (Trước đây chỉ vá trong khối migration origV<3 nên DB v3 hỏng vẫn vỡ.) */
  if (!Array.isArray(db.body)) db.body = [];
  else db.body.sort((a, b) => (((a && a.date) || '') < ((b && b.date) || '') ? -1 : 1));
  if (!db.skillMarks || typeof db.skillMarks !== 'object' || Array.isArray(db.skillMarks)) db.skillMarks = {};
  if (!db.prs || typeof db.prs !== 'object' || Array.isArray(db.prs)) db.prs = {};
  if (!db.settings || typeof db.settings !== 'object' || Array.isArray(db.settings)) db.settings = b.settings;
  if (!db.schedule || typeof db.schedule !== 'object' || Array.isArray(db.schedule)) db.schedule = defaultSchedule();
  if (!Array.isArray(db.customExercises)) db.customExercises = [];
  if (origV < 2) {
    defaultRoutines().forEach((def) => {
      const cur = db.routines.find((r) => r.id === def.id);
      if (cur && cur.builtin) { cur.name = def.name; cur.items = def.items; }
      else if (!cur) db.routines.push(def);
    });
    db.v = 2;
  }
  if (origV < 3) {
    /* Seed nấc kỹ năng hiện tại của Huy (11/2026) khi lên v3, chỉ khi chưa có
       đánh dấu tay nào: planche adv tuck giữ ~5s, front lever giữ được,
       muscle-up được, handstand tự do được. User sửa tay được trong cây kỹ năng. */
    if (Object.keys(db.skillMarks).length === 0) {
      db.skillMarks = { planche: 2, frontlever: 1, muscleup: 1, handstand: 1 };
    }
    db.v = 3;
  }
  if (origV < 4) {
    /* Đổi giáo án builtin theo trình thực tế của Huy (11/2026): archer 3 cái/bên
       đủ ROM, kéo xà âm thay xà thấp (công viên không có xà thấp), thêm HSPU tự do,
       wall HSPU 8 cái, dip tempo hạ chậm 3s, pseudo planche 7 cái, pistol 3×8,
       step-up thay shrimp squat (dễ hiểu, dùng được ghế đá công viên).
       Giáo án Planche (Skill) giữ nguyên. Giáo án tự tạo + history + PRs +
       goals + body + skillMarks + settings giữ nguyên. */
    defaultRoutines().forEach((def) => {
      if (def.id === 'planche') return;
      const cur = db.routines.find((r) => r.id === def.id);
      if (cur && cur.builtin) { cur.name = def.name; cur.items = def.items; }
      else if (!cur) db.routines.push(def);
    });
    db.v = 4;
  }
  if (origV < 5) {
    /* Streak tuần tính trực tiếp từ history nên không cần viết lại dữ liệu.
       Chỉ vá settings.lastExport nếu thiếu (DB cũ chưa có field này). */
    if (db.settings.lastExport === undefined) db.settings.lastExport = null;
    /* Cây Front Lever thêm 2 nấc mới chèn trước nấc cũ số 1 (adv tuck 10s,
       straddle 5s): thứ tự mới 0=tuck 15s, 1=adv tuck 10s, 2=straddle 5s,
       3=FL 5s, 4=FL 10s, 5=raises, 6=tuck back lever, 7=back lever.
       skillMarks lưu chỉ số nấc cao nhất đã đánh dấu tay nên phải dịch theo:
       0 giữ nguyên, >= 1 cộng thêm 2 (1→3, 2→4, 3→5). Chỉ áp dụng cho dữ
       liệu tạo trước v5 (origV < 5) — DB v5 trở đi đã dùng thứ tự mới. */
    if (db.skillMarks && typeof db.skillMarks.frontlever === 'number') {
      const fv = db.skillMarks.frontlever;
      if (fv >= 1) db.skillMarks.frontlever = fv + 2;
    }
    db.v = 5;
  }
  return db;
}

const store = {
  load(){
    try {
      const raw = (typeof localStorage !== 'undefined') ? localStorage.getItem(DB_KEY) : null;
      if (!raw) return blankDB();
      const db = JSON.parse(raw);
      if (!db || typeof db !== 'object' || !Array.isArray(db.history)) return blankDB();
      return normalizeDB(db);
    } catch (e) { return blankDB(); }
  },
  save(db){
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(DB_KEY, JSON.stringify(db));
    } catch (e) { /* bộ nhớ đầy: bỏ qua, dữ liệu buổi hiện tại vẫn giữ trong RAM */ }
  }
};

/* ================= HELPER UI ================= */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
    {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]
  ));
}

let toastTimer = null;
function toast(msg){
  if (typeof document === 'undefined') return;
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('hidden'), 2200);
}

function diffStars(d){
  let s = '';
  for (let i = 1; i <= 5; i++) s += i <= d ? '<i class="on">●</i>' : '<i>○</i>';
  return '<span class="diff" title="Độ khó ' + d + '/5">' + s + '</span>';
}

function unitLabel(unit){ return unit === 'sec' ? 'giây' : 'cái'; }

/* Hộp thoại chung: modal(title, bodyHTML, [{label, cls, onClick}]) */
function openModal(title, bodyHTML, actions){
  const m = document.getElementById('modal');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  const box = document.getElementById('modal-actions');
  box.innerHTML = '';
  (actions || []).forEach((a) => {
    const b = document.createElement('button');
    b.className = a.cls || 'btn-ghost';
    b.textContent = a.label;
    b.onclick = () => { closeModal(); if (a.onClick) a.onClick(); };
    box.appendChild(b);
  });
  m.classList.remove('hidden');
}
function closeModal(){ document.getElementById('modal').classList.add('hidden'); }

/* ================= APP STATE & ROUTER ================= */
let DB = blankDB();
let currentView = 'home';
let libFilter = { group: 'all', diff: 'all' };
let libMode = 'list'; // 'list': thư viện · 'tree': cây kỹ năng (v5)
let progExFilter = 'day';
let calCursor = null; // {y, m} đang xem ở màn hình Lịch

function showView(name){
  currentView = name;
  document.querySelectorAll('.view').forEach((v) => v.classList.add('hidden'));
  document.getElementById('view-' + name).classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.view === name);
  });
  window.scrollTo(0, 0);
  if (name === 'home') renderHome();
  else if (name === 'library') renderLibrary();
  else if (name === 'progress') renderProgress();
  else if (name === 'calendar') renderCalendar();
  else if (name === 'programs') renderPrograms();
  else if (name === 'settings') renderSettings();
}

/* ================= TRANG CHỦ ================= */
function todayRoutine(){
  const dow = String(new Date().getDay());
  const rid = (DB.schedule || {})[dow];
  if (!rid || rid === 'rest') return null;
  return getRoutineById(DB, rid);
}

function weekDots(){
  const days = {};
  DB.history.forEach((h) => { days[h.date] = true; });
  const today = new Date();
  const mondayOffset = (today.getDay() + 6) % 7; // T2 đầu tuần
  let html = '<div class="week-dots">';
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - mondayOffset + i);
    const k = todayKey(d);
    const isToday = k === todayKey();
    html += '<div class="wdot' + (days[k] ? ' done' : '') + (isToday ? ' today' : '') + '">' +
      '<i>' + (days[k] ? '✓' : '') + '</i>' + DOW_LABELS[d.getDay()] + '</div>';
  }
  return html + '</div>';
}

/* Banner nhắc sao lưu: bấm ✕ chỉ ẩn tạm trong phiên (mở app lại sẽ hiện lại
   nếu vẫn quá hạn — nhắc nhở chứ không ép). */
let hideBackupBanner = false;
function dismissBackupBanner(){ hideBackupBanner = true; renderHome(); }

function renderHome(){
  const v = document.getElementById('view-home');
  const r = todayRoutine();
  const dowFull = DOW_FULL[new Date().getDay()];
  const st = calcWeeklyStreak(DB.history, DB.schedule);
  const totalMin = DB.history.reduce((a, h) => a + (h.minutes || 0), 0);
  const thisMonth = todayKey().slice(0, 7);
  const monthCount = DB.history.filter((h) => h.date && h.date.slice(0, 7) === thisMonth).length;

  let hero;
  if (r) {
    const exList = allExercises(DB);
    const items = r.items.map((it, idx) => {
      const ex = getExerciseById(exList, it.exId);
      const nm = ex ? ex.n : '(bài đã xóa)';
      const unit = ex ? unitLabel(ex.unit) : 'cái';
      return '<div class="ex-preview"><span class="ex-num">' + (idx + 1) + '</span><span class="ex-pname">' + esc(nm) + '</span><span>' +
        it.sets + ' hiệp × ' + it.reps + ' ' + unit + '</span></div>';
    }).join('');
    hero =
      '<div class="hero"><div class="hero-day">' + dowFull + ' · hôm nay tập</div>' +
      '<div class="hero-title">' + esc(r.name) + '</div>' +
      '<div class="hero-sub">' + r.items.length + ' bài · ' +
        r.items.reduce((a, it) => a + it.sets, 0) + ' hiệp</div>' +
      '<div style="margin-bottom:12px">' + items + '</div>' +
      '<button class="btn-primary btn-block" style="margin-top:0" onclick="startWorkout(\'' + r.id + '\')">Bắt đầu tập ▶</button></div>';
  } else {
    hero =
      '<div class="hero"><div class="hero-day">' + dowFull + '</div>' +
      '<div class="hero-title">Ngày nghỉ 😌</div>' +
      '<div class="hero-sub">Hôm nay không có buổi tập theo lịch. Cơ bắp to lên là nhờ nghỉ ngơi đấy — hoặc bạn có thể tập tự do một buổi nhẹ.</div>' +
      '<button class="btn-ghost btn-block" style="margin-top:0" onclick="showView(\'programs\')">Xem giáo án</button></div>';
  }

  const dl = deloadDue(DB.history, DB.schedule);
  const bkDays = daysSinceBackup(DB.settings.lastExport);
  let banners = '';
  if (dl.due) {
    banners += '<div class="circuit-banner">💪 <b>Tuần deload!</b> Đã tập đủ ' + dl.weeksDone +
      ' tuần liên tiếp — tuần này tập nhẹ lại nhé: giảm số hiệp, chọn biến thể dễ hơn để cổ tay và gân cẳng tay hồi phục sau 2 buổi planche mỗi tuần.</div>';
  }
  if (!hideBackupBanner && (bkDays === null || bkDays > 7)) {
    banners += '<div class="circuit-banner">💾 <b>' +
      (bkDays === null ? 'Chưa sao lưu lần nào' : 'Đã ' + bkDays + ' ngày chưa sao lưu') +
      '</b> — xuất file JSON backup để không mất dữ liệu nhé. ' +
      '<button class="btn-ghost" onclick="exportJSON()">⬇ Xuất JSON</button> ' +
      '<button class="btn-ghost" onclick="dismissBackupBanner()">✕</button></div>';
  }

  v.innerHTML =
    '<h2>' + (DB.settings.userName ? 'Chào ' + esc(DB.settings.userName) + ' 👋' : 'Chào bro 👋') + '</h2>' +
    hero +
    '<div style="margin-bottom:12px"><span class="streak-pill">🔥 Streak ' + st.streak + ' tuần</span>' +
    '<span class="streak-pill">🏋️ Tháng này ' + monthCount + ' buổi</span></div>' +
    banners +
    '<div class="card"><b>Tuần này</b>' + weekDots() + '</div>' +
    '<div class="stat-grid">' +
      '<div class="stat"><b>' + DB.history.length + '</b><span>Tổng buổi tập</span></div>' +
      '<div class="stat"><b>' + totalMin + '</b><span>Phút đã tập</span></div>' +
      '<div class="stat"><b>' + Object.keys(DB.prs).length + '</b><span>Kỷ lục cá nhân</span></div>' +
    '</div>';
  /* Mở app mà còn nháp buổi dang dở (VD: iOS kill app giữa buổi) thì hỏi tiếp tục */
  maybePromptResumeDraft();
}

/* ================= THƯ VIỆN BÀI TẬP ================= */
/* ---------- Cây kỹ năng (v5): hiển thị + đánh dấu tay ---------- */
function rungManuallyMarked(db, treeId, rungIdx){
  const marks = (db && db.skillMarks) || {};
  return (marks[treeId] == null ? -1 : marks[treeId]) >= rungIdx;
}

function skillTreeHTML(){
  let html = '<div class="goal-meta" style="margin-bottom:10px">4 cây kỹ năng chính — mỗi nấc tự mở khi kỷ lục của bạn đạt mốc, hoặc bạn đánh dấu tay. Nấc viền cam là nấc tiếp theo nên tập.</div>';
  SKILL_TREES.forEach((tree) => {
    const st = skillTreeStatus(DB, tree.id);
    html += '<div class="tree-card"><div class="tree-head"><span><b>' + tree.icon + ' ' + esc(tree.name) + '</b></span>' +
      '<span class="badge">' + st.done + '/' + st.total + ' nấc</span></div>' +
      '<div class="tree-bar"><i style="width:' + Math.round(st.done / st.total * 100) + '%"></i></div>' +
      '<div class="goal-meta" style="margin-bottom:8px">' + esc(tree.desc) + '</div>';
    tree.rungs.forEach((rung, i) => {
      const achieved = st.rungs[i].achieved;
      const isNext = i === st.nextIdx;
      const pr = rung.exId ? DB.prs[rung.exId] : null;
      const cur = pr ? pr.value + ' ' + unitLabel(pr.unit) : '—';
      html += '<div class="rung' + (achieved ? ' done' : '') + (isNext ? ' next' : '') + '" data-tree="' + tree.id + '" data-rung="' + i + '">' +
        '<div class="rung-top"><span class="rung-ico">' + (achieved ? '✅' : (isNext ? '🎯' : '🔒')) + '</span>' +
        '<span class="rung-label">' + esc(rung.label) + '</span>' +
        '<span class="rung-cur">' + (rung.type === 'manual' ? '' : 'PR: ' + cur) + '</span></div>' +
        '<div class="rung-detail hidden" id="rung-' + tree.id + '-' + i + '">' +
        '<div class="goal-meta">' + esc(rung.hint) + '</div>' +
        (rung.exId ? '<button class="btn-ghost vid-btn" data-rungvid="' + rung.exId + '">▶ Xem hướng dẫn</button> ' : '') +
        (achieved
          ? (rungManuallyMarked(DB, tree.id, i)
              ? ((DB.skillMarks && DB.skillMarks[tree.id] === i)
                  /* Chỉ cho bỏ đánh dấu ở nấc cao nhất đã đánh dấu tay: model
                     "nấc cao nhất" không diễn tả được "bỏ nấc dưới nhưng giữ
                     nấc trên", nên bỏ nấc dưới là xóa luôn cả nấc trên. */
                  ? '<button class="btn-ghost" data-rungunmark="' + tree.id + '|' + i + '">Bỏ đánh dấu</button>'
                  : '<span class="goal-meta">✓ Đã đánh dấu tay</span>')
              : '<span class="goal-meta">✓ Đạt qua kỷ lục</span>')
          : '<button class="btn-ghost" data-rungmark="' + tree.id + '|' + i + '">✓ Tôi làm được nấc này</button>') +
        '</div></div>';
    });
    html += '</div>';
  });
  return html;
}

function wireSkillTree(v){
  v.querySelectorAll('.rung').forEach((row) => row.onclick = (e) => {
    if (e.target.closest('button')) return;
    const d = document.getElementById('rung-' + row.dataset.tree + '-' + row.dataset.rung);
    if (d) d.classList.toggle('hidden');
  });
  v.querySelectorAll('[data-rungvid]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation();
    const ex = getExerciseById(allExercises(DB), b.dataset.rungvid);
    const a = document.createElement('a');
    a.href = videoUrl(ex); a.target = '_blank'; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
  });
  v.querySelectorAll('[data-rungmark]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation();
    const parts = b.dataset.rungmark.split('|');
    const tid = parts[0], idx = Number(parts[1]);
    if (!DB.skillMarks) DB.skillMarks = {};
    DB.skillMarks[tid] = Math.max(DB.skillMarks[tid] == null ? -1 : DB.skillMarks[tid], idx);
    store.save(DB); renderLibrary(); toast('Đã đánh dấu nấc này ✅');
  });
  v.querySelectorAll('[data-rungunmark]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation();
    const parts = b.dataset.rungunmark.split('|');
    const tid = parts[0], idx = Number(parts[1]);
    if (!DB.skillMarks) DB.skillMarks = {};
    const nv = idx - 1;
    if (nv < 0) delete DB.skillMarks[tid]; else DB.skillMarks[tid] = nv;
    store.save(DB); renderLibrary(); toast('Đã bỏ đánh dấu');
  });
}

function renderLibrary(){
  const v = document.getElementById('view-library');
  const modeToggle = '<div class="filters">' +
    '<button class="chip' + (libMode === 'list' ? ' active' : '') + '" data-mode="list">📚 Thư viện</button>' +
    '<button class="chip' + (libMode === 'tree' ? ' active' : '') + '" data-mode="tree">🌳 Cây kỹ năng</button></div>';
  if (libMode === 'tree') {
    v.innerHTML = '<h2>Thư viện bài tập</h2>' + modeToggle + skillTreeHTML();
    v.querySelectorAll('[data-mode]').forEach((c) => c.onclick = () => { libMode = c.dataset.mode; renderLibrary(); });
    wireSkillTree(v);
    return;
  }
  const groups = [{id:'all', n:'Tất cả'}].concat(['day','keo','chan','core','skill','warmup','stretch'].map((g) => ({id:g, n:GROUP_LABELS[g]})));
  const diffs = [{id:'all', n:'Mọi độ khó'},{id:'1', n:'★ 1'},{id:'2', n:'★ 2'},{id:'3', n:'★ 3'},{id:'4', n:'★ 4'},{id:'5', n:'★ 5'}];

  let html = '<h2>Thư viện bài tập</h2>' + modeToggle;
  html += '<div class="filters">' + groups.map((g) =>
    '<button class="chip' + (libFilter.group === g.id ? ' active' : '') + '" data-g="' + g.id + '">' + g.n + '</button>'
  ).join('') + '</div>';
  html += '<div class="filters">' + diffs.map((g) =>
    '<button class="chip' + (String(libFilter.diff) === g.id ? ' active' : '') + '" data-d="' + g.id + '">' + g.n + '</button>'
  ).join('') + '</div>';

  // v6: form thêm bài tự tạo (bodyweight only — không có chỗ nhập tạ)
  html += '<div class="card custom-form"><b>➕ Thêm bài tự tạo</b>' +
    '<div class="goal-meta" style="margin:4px 0 8px">Bài tự tạo dùng được ngay trong giáo án. Chỉ bài bodyweight thôi nhé.</div>' +
    '<label>Tên bài tập</label><input id="ce-name" placeholder="VD: Hít đất tay hẹp giữ 3 giây">' +
    '<div class="custom-form-row"><div><label>Nhóm</label><select id="ce-group">' +
      Object.keys(GROUP_LABELS).map((g) => '<option value="' + g + '">' + GROUP_LABELS[g] + '</option>').join('') + '</select></div>' +
    '<div><label>Độ khó (1–5)</label><select id="ce-diff">' +
      [1,2,3,4,5].map((d) => '<option value="' + d + '"' + (d === 3 ? ' selected' : '') + '>' + d + '</option>').join('') + '</select></div>' +
    '<div><label>Đơn vị</label><select id="ce-unit"><option value="rep">cái (lần)</option><option value="sec">giây</option></select></div></div>' +
    '<div class="custom-form-row"><div><label>Mục tiêu mặc định</label><input id="ce-target" type="number" min="1" max="9999" value="10"></div>' +
    '<div style="flex:2"><label>ID video YouTube (không bắt buộc)</label><input id="ce-video" placeholder="VD: dQw4w9WgXcQ — để trống nếu không có"></div></div>' +
    '<button class="btn-primary btn-block" id="ce-save">💾 Lưu bài tự tạo</button></div>';

  const list = allExercises(DB).filter((ex) =>
    (libFilter.group === 'all' || ex.g === libFilter.group) &&
    (libFilter.diff === 'all' || ex.d === Number(libFilter.diff))
  );

  if (!list.length) {
    html += '<div class="empty">Không có bài nào khớp bộ lọc. Thử nới điều kiện ra nhé.</div>';
  } else {
    let lastG = '';
    list.forEach((ex) => {
      if (libFilter.group === 'all' && ex.g !== lastG) {
        lastG = ex.g;
        html += '<h3>' + GROUP_LABELS[ex.g] + '</h3>';
      }
      html += '<div class="ex-card" data-ex="' + ex.id + '">' +
        '<div class="ex-card-top"><span class="ex-name">' + esc(ex.n) +
        (ex.advanced ? ' <span class="badge">nâng cao</span>' : '') +
        (isCustomExercise(ex) ? ' <span class="badge">tự tạo</span>' : '') + '</span>' + diffStars(ex.d) + '</div>' +
        '<div class="ex-meta"><span class="tag">' + GROUP_LABELS[ex.g] + '</span>' +
        '<span class="tag">' + esc(ex.tgt) + '</span></div>' +
        (isCustomExercise(ex) ? '<button class="btn-danger btn-sm custom-del" data-delcustom="' + ex.id + '">🗑️ Xóa bài này</button>' : '') +
        '<div class="ex-tip hidden" id="tip-' + ex.id + '">💡 ' + esc(ex.tip) +
        '<br><button class="btn-ghost vid-btn" data-vid="' + ex.id + '">▶ Xem hướng dẫn</button></div>' +
      '</div>';
    });
  }
  v.innerHTML = html;

  const ceSave = document.getElementById('ce-save');
  if (ceSave) ceSave.onclick = () => {
    const res = createCustomExercise(DB, {
      name: document.getElementById('ce-name').value,
      group: document.getElementById('ce-group').value,
      d: Number(document.getElementById('ce-diff').value),
      unit: document.getElementById('ce-unit').value,
      target: document.getElementById('ce-target').value,
      video: document.getElementById('ce-video').value
    });
    if (!res.ok) { toast(res.error); return; }
    store.save(DB); renderLibrary(); toast('Đã thêm bài "' + res.ex.n + '" ✅');
  };
  v.querySelectorAll('[data-delcustom]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation();
    const ex = getExerciseById(allExercises(DB), b.dataset.delcustom);
    const usedBy = DB.routines.filter((r) => r.items.some((it) => it.exId === b.dataset.delcustom));
    const warn = usedBy.length
      ? ' Bài này đang có trong ' + usedBy.length + ' giáo án (' + usedBy.map((r) => r.name).join(', ') + ') — các giáo án đó sẽ tự bỏ qua bài này khi tập.'
      : '';
    openModal('Xóa bài tự tạo?', 'Bài "' + esc(ex ? ex.n : b.dataset.delcustom) + '" sẽ bị xóa khỏi thư viện.' + warn,
      [{label:'Xóa luôn', cls:'btn-danger', onClick:() => {
        DB.customExercises = (DB.customExercises || []).filter((x) => x.id !== b.dataset.delcustom);
        store.save(DB); renderLibrary(); toast('Đã xóa bài tự tạo');
      }}, {label:'Giữ lại', cls:'btn-ghost'}]);
  });
  v.querySelectorAll('.chip[data-g]').forEach((c) => c.onclick = () => { libFilter.group = c.dataset.g; renderLibrary(); });
  v.querySelectorAll('.chip[data-d]').forEach((c) => c.onclick = () => { libFilter.diff = c.dataset.d; renderLibrary(); });
  v.querySelectorAll('[data-mode]').forEach((c) => c.onclick = () => { libMode = c.dataset.mode; renderLibrary(); });
  v.querySelectorAll('.ex-card').forEach((c) => c.onclick = () => {
    document.getElementById('tip-' + c.dataset.ex).classList.toggle('hidden');
  });
  v.querySelectorAll('[data-vid]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation();
    const ex = getExerciseById(allExercises(DB), b.dataset.vid);
    // Dùng thẻ <a> click thật thay vì window.open: iOS standalone PWA chặn window.open ngầm
    const a = document.createElement('a');
    a.href = videoUrl(ex);
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
}

/* ================= BUỔI TẬP ================= */
let session = null; // {routineId, routineName, startedAt, items:[{exId,name,unit,sets:[{done,val,actual}],restSec}]}
let woTickTimer = null;
let draftPromptShown = false; // chỉ hỏi "tiếp tục buổi dang dở?" 1 lần mỗi lần mở app

/* ---------- Nháp buổi tập (v6): buổi đang tập sống sót khi iOS kill app ----------
   Lưu ở khóa RIÊNG, không đụng khóa DB chính. Chỉ xóa khi lưu buổi thành công
   hoặc user chủ động thoát/bỏ buổi; đóng tab/app thì nháp vẫn còn. */
const DRAFT_KEY = 'calisthenics_tracker_draft_v1';

/* Dựng object nháp từ 1 buổi tập (thuần, test được) */
function buildDraft(sess){
  return { routineId: sess.routineId, routineName: sess.routineName,
    mode: sess.mode || 'normal', startedAt: sess.startedAt, savedAt: Date.now(),
    items: sess.items.map((it) => ({ exId: it.exId, name: it.name, unit: it.unit,
      restSec: it.restSec, target: it.target, note: it.note || '',
      sets: it.sets.map((s) => ({ done: s.done, val: s.val,
        actual: (s.actual == null ? null : s.actual) })) })) };
}

/* Khôi phục buổi tập từ nháp (thuần, test được) */
function restoreDraft(d){
  const items = d.items.map((it) => ({ exId: it.exId, name: it.name, unit: it.unit,
    restSec: it.restSec, target: it.target, note: it.note || '',
    sets: (it.sets || []).map((s) => ({ done: !!s.done, val: s.val,
      actual: (s.actual == null ? null : s.actual) })) }));
  return { routineId: d.routineId, routineName: d.routineName, startedAt: d.startedAt,
    mode: d.mode || 'normal', items: items,
    circuitRestSec: items.length ? items[items.length - 1].restSec : 90 };
}

function draftDoneCount(d){
  let n = 0;
  (d.items || []).forEach((it) => { (it.sets || []).forEach((s) => { if (s.done) n++; }); });
  return n;
}

function saveDraft(){
  if (!session) return;
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(DRAFT_KEY, JSON.stringify(buildDraft(session)));
  } catch (e) { /* localStorage đầy/không có: buổi tập vẫn chạy bình thường */ }
}

function loadDraft(){
  try {
    if (typeof localStorage === 'undefined') return null;
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (!d || typeof d.startedAt !== 'number' || !Array.isArray(d.items) || !d.items.length) return null;
    return d;
  } catch (e) { return null; }
}

function clearDraft(){
  try { if (typeof localStorage !== 'undefined') localStorage.removeItem(DRAFT_KEY); } catch (e) { /* bỏ qua */ }
}

/* Mở lại buổi tập từ nháp: đúng giáo án, chế độ, giờ bắt đầu, từng hiệp
   (done/val/actual), đồng hồ thời gian + wake lock chạy lại từ đầu. */
function resumeDraft(d){
  session = restoreDraft(d);
  showWorkoutOverlay();
  toast('Đã khôi phục buổi ' + session.routineName + ' 💪');
}

/* Hỏi user có muốn tiếp tục buổi dang dở không (gọi 1 lần khi mở app).
   Chỉ hỏi khi không có buổi nào đang chạy và nháp còn tồn tại. */
function maybePromptResumeDraft(){
  if (session || draftPromptShown) return;
  const d = loadDraft();
  if (!d) return;
  draftPromptShown = true;
  const done = draftDoneCount(d);
  const savedAt = d.savedAt ? new Date(d.savedAt).toLocaleString('vi-VN',
    { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '';
  openModal('Tiếp tục buổi dang dở?',
    'Buổi <b>' + esc(d.routineName || 'Chưa đặt tên') + '</b> chưa lưu xong.' +
    '<br>✅ Đã tick: <b>' + done + ' hiệp</b>' +
    (savedAt ? '<br>💾 Lưu lúc: <b>' + savedAt + '</b>' : '') +
    '<br><br>Tiếp tục tập nốt buổi này, hay bỏ luôn?',
    [{label:'Tiếp tục buổi này', cls:'btn-primary', onClick:() => resumeDraft(d)},
     {label:'Bỏ buổi này', cls:'btn-danger', onClick:() => { clearDraft(); toast('Đã bỏ buổi dang dở'); }}]);
}

/* Giữ màn hình sáng trong lúc tập: xin wake lock khi buổi tập bắt đầu
   (beginSession chạy trong user-gesture nên được phép), xin lại khi quay
   lại tab/app, nhả khi buổi tập kết thúc. Mọi lỗi đều bỏ qua lặng lẽ. */
let wakeLockSentinel = null;
let wakeLockListenerAdded = false;
function requestWakeLock(){
  try {
    if (typeof navigator === 'undefined' || !('wakeLock' in navigator)) return;
    if (!navigator.wakeLock || typeof navigator.wakeLock.request !== 'function') return;
    const p = navigator.wakeLock.request('screen');
    if (p && typeof p.then === 'function') {
      p.then((s) => { wakeLockSentinel = s; }).catch(() => { wakeLockSentinel = null; });
    }
  } catch (e) { wakeLockSentinel = null; }
}
function releaseWakeLock(){
  try {
    if (wakeLockSentinel && typeof wakeLockSentinel.release === 'function') {
      const p = wakeLockSentinel.release();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  } catch (e) { /* bỏ qua */ }
  wakeLockSentinel = null;
}
function ensureWakeLockListener(){
  if (wakeLockListenerAdded) return;
  try {
    if (typeof document === 'undefined' || !document.addEventListener) return;
    document.addEventListener('visibilitychange', () => {
      try {
        if (session && !document.hidden) requestWakeLock();
      } catch (e) { /* bỏ qua */ }
    });
    wakeLockListenerAdded = true;
  } catch (e) { /* bỏ qua */ }
}

/* Bắt đầu buổi tập: chọn chế độ tập thường hoặc tập mạch */
function startWorkout(routineId){
  const r = getRoutineById(DB, routineId);
  if (!r) { toast('Không tìm thấy giáo án'); return; }
  openModal('Bắt đầu "' + r.name + '"?',
    'Chọn cách tập cho buổi hôm nay:' +
    '<div class="mode-desc"><b>🏋️ Tập thường:</b> xong hết hiệp của 1 bài mới qua bài tiếp theo, nghỉ giữa các hiệp.</div>' +
    '<div class="mode-desc"><b>🔁 Tập mạch:</b> đi 1 hiệp của từng bài liên tiếp không nghỉ, hết 1 vòng mới nghỉ, ' +
    'lặp lại số vòng = số hiệp nhiều nhất (' + circuitRounds(r.items.map((it) => ({sets: new Array(it.sets)}))) + ' vòng).</div>',
    [{label:'🏋️ Tập thường', cls:'btn-primary', onClick:() => beginSession(r, 'normal')},
     {label:'🔁 Tập mạch', cls:'btn-ghost', onClick:() => beginSession(r, 'circuit')}]);
}

function beginSession(r, mode){
  const exList = allExercises(DB);
  const items = [];
  r.items.forEach((it) => {
    const ex = getExerciseById(exList, it.exId);
    if (!ex) return; // bài đã bị xóa khỏi thư viện thì bỏ qua
    const sets = [];
    for (let i = 0; i < it.sets; i++) sets.push({ done: false, val: it.reps, actual: null });
    items.push({ exId: ex.id, name: ex.n, unit: ex.unit, restSec: it.restSec || DB.settings.restSec || 90,
      target: it.sets + ' hiệp × ' + it.reps + ' ' + unitLabel(ex.unit) +
        (ex.side ? (ex.g === 'chan' ? ' mỗi chân' : ' mỗi bên') : ''), sets: sets,
      note: it.note || '' });
  });
  if (!items.length) { toast('Giáo án này chưa có bài tập nào'); return; }
  session = { routineId: r.id, routineName: r.name, startedAt: Date.now(), items: items,
    mode: mode, circuitRestSec: items[items.length - 1].restSec };
  showWorkoutOverlay();
  saveDraft(); // lưu nháp ngay từ đầu để app bị kill vẫn khôi phục được
}

/* Mở màn hình buổi tập + chạy đồng hồ thời gian + xin wake lock.
   Dùng chung cho buổi mới (beginSession) và buổi khôi phục từ nháp (resumeDraft). */
function showWorkoutOverlay(){
  document.getElementById('wo-title').textContent = session.routineName + (session.mode === 'circuit' ? ' 🔁' : '');
  document.getElementById('workout-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderSession();
  ensureWakeLockListener();
  requestWakeLock(); // giữ màn hình sáng trong lúc tập
  clearInterval(woTickTimer);
  woTickTimer = setInterval(() => {
    if (!session) return;
    const s = Math.floor((Date.now() - session.startedAt) / 1000);
    const mm = String(Math.floor(s / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    document.getElementById('wo-timer').textContent = '⏱ ' + mm + ':' + ss;
  }, 1000);
}

function closeWorkout(ask){
  const done = session ? countDoneSets(session.items) : 0;
  const doClose = () => {
    clearDraft(); // thoát chủ động = bỏ buổi này, nháp không còn ý nghĩa
    releaseWakeLock();
    document.getElementById('workout-overlay').classList.add('hidden');
    document.body.style.overflow = '';
    clearInterval(woTickTimer);
    session = null;
    renderHome();
  };
  if (ask && done > 0) {
    openModal('Thoát buổi tập?', 'Bạn đã tick ' + done + ' hiệp. Thoát bây giờ thì buổi tập này sẽ KHÔNG được lưu.',
      [{label:'Ở lại tập tiếp', cls:'btn-primary'}, {label:'Thoát, bỏ buổi này', cls:'btn-danger', onClick:doClose}]);
  } else doClose();
}

function renderSession(){
  const box = document.getElementById('wo-list');
  let html = '<button class="btn-ghost btn-block" id="wo-warmup" style="margin:0 0 10px">🔥 Khởi động 5 phút</button>';
  if (session.mode === 'circuit') {
    const cs = circuitState(session.items);
    html += '<div class="circuit-banner"><div class="circuit-top">🔁 <b>Chế độ tập mạch</b> · ' +
      'Vòng <b>' + cs.currentRound + '/' + cs.rounds + '</b></div>' +
      '<div class="circuit-rest"><span>Nghỉ giữa vòng:</span>' +
      '<button id="cr-dec">−</button><b>' + session.circuitRestSec + 's</b><button id="cr-inc">+</button></div>' +
      '<div class="circuit-hint">Tập 1 hiệp mỗi bài liên tiếp, hết vòng mới nghỉ.</div></div>';
  }
  session.items.forEach((it, ei) => {
    const allDone = it.sets.every((s) => s.done);
    const doneCount = it.sets.filter((s) => s.done).length;
    const nextIdx = it.sets.findIndex((s) => !s.done);
    /* "Lần trước": số thực tế buổi gần nhất, gợi ý tăng nếu RPE buổi đó thấp */
    const lt = lastTimeFor(DB.history, it.exId);
    let lastLine = '';
    if (lt) {
      let sug = '';
      if (lt.rpe != null && lt.rpe <= 6) {
        sug = ' · RPE thấp, thử +' + (it.unit === 'sec' ? '2s' : '1 cái');
      }
      lastLine = '<div class="last-time">Lần trước: ' + lt.vals.join('-') + sug + '</div>';
    }
    html += '<div class="wo-ex' + (allDone ? ' done' : '') + '">' +
      '<div class="wo-ex-head"><span class="wo-ex-name">' + (ei + 1) + '. ' + esc(it.name) + '</span>' +
      '<span class="wo-ex-target">' + esc(it.target) + '</span></div>' +
      lastLine +
      '<div class="wo-bar"><i style="width:' + Math.round(doneCount / it.sets.length * 100) + '%"></i></div>' +
      (it.note ? '<div class="wo-note">📝 ' + esc(it.note) + '</div>' : '') +
      '<div class="set-row">';
    it.sets.forEach((s, si) => {
      /* Hiệp đã xong hiện số THỰC TẾ (actual), hiệp chưa xong hiện mục tiêu */
      const shown = s.done ? setVal(s) : s.val;
      html += '<button class="set' + (s.done ? ' done' : '') + (si === nextIdx ? ' next' : '') + '" data-ei="' + ei + '" data-si="' + si + '">' +
        (s.done ? '✓' : (si + 1)) + '<small>' + shown + (it.unit === 'sec' ? 's' : '') + '</small></button>';
    });
    html += '</div>' +
      '<div class="val-ctl"><span>Mục tiêu mỗi hiệp:</span>' +
      '<button data-ei="' + ei + '" data-act="dec">−</button><b>' + it.sets[0].val + (it.unit === 'sec' ? 's' : '') + '</b>' +
      '<button data-ei="' + ei + '" data-act="inc">+</button></div>' +
    '</div>';
  });
  box.innerHTML = html;

  const wu = document.getElementById('wo-warmup');
  if (wu) wu.onclick = () => runGuideFlow('🔥 Khởi động (5 phút)', WARMUP_FLOW, 'Khởi động xong, chiến thôi bro! 💪');
  const crd = document.getElementById('cr-dec'), cri = document.getElementById('cr-inc');
  if (crd) crd.onclick = () => { session.circuitRestSec = Math.max(15, session.circuitRestSec - 15); renderSession(); };
  if (cri) cri.onclick = () => { session.circuitRestSec = Math.min(600, session.circuitRestSec + 15); renderSession(); };
  /* Nút hiệp: chạm nhanh = tick/bỏ tick; nhấn giữ >=600ms = sửa số thực tế.
     Dùng pointer events để chạy được cả chuột lẫn cảm ứng; trượt tay thì hủy giữ. */
  box.querySelectorAll('.set').forEach((b) => {
    let lpTimer = null, lpFired = false, startX = 0, startY = 0;
    const cancelHold = () => {
      if (lpTimer) { clearTimeout(lpTimer); lpTimer = null; }
      b.classList.remove('holding');
    };
    b.addEventListener('pointerdown', (e) => {
      lpFired = false;
      startX = e.clientX; startY = e.clientY;
      b.classList.add('holding');
      lpTimer = setTimeout(() => {
        lpFired = true;
        b.classList.remove('holding');
        openActualEditor(Number(b.dataset.ei), Number(b.dataset.si));
      }, 600);
    });
    b.addEventListener('pointermove', (e) => {
      if (lpTimer && (Math.abs(e.clientX - startX) > 10 || Math.abs(e.clientY - startY) > 10)) cancelHold();
    });
    b.addEventListener('pointerup', () => {
      const wasHold = lpFired;
      cancelHold();
      if (!wasHold) toggleSet(Number(b.dataset.ei), Number(b.dataset.si));
    });
    b.addEventListener('pointerleave', cancelHold);
    b.addEventListener('pointercancel', cancelHold);
    b.addEventListener('contextmenu', (e) => e.preventDefault());
    /* Phím Enter/Space trên nút đang focus: click có detail 0 -> tick như thường */
    b.onclick = (e) => { if (e.detail === 0) toggleSet(Number(b.dataset.ei), Number(b.dataset.si)); };
  });
  box.querySelectorAll('.val-ctl button').forEach((b) => b.onclick = () => {
    const ei = Number(b.dataset.ei), it = session.items[ei];
    const step = it.unit === 'sec' ? 5 : 1;
    const nv = Math.max(1, it.sets[0].val + (b.dataset.act === 'inc' ? step : -step));
    it.sets.forEach((s) => { if (!s.done) s.val = nv; });
    saveDraft();
    renderSession();
  });
}

function toggleSet(ei, si){
  ensureAudio(); // mở khóa tiếng chuông trên iOS ngay trong gesture của user
  const it = session.items[ei];
  const s = it.sets[si];
  s.done = !s.done;
  /* Tick xong mà chưa có số thực tế thì mặc định = mục tiêu (user sửa lại
     bằng nhấn giữ nếu làm ít hơn). Bỏ tick thì giữ nguyên actual đã nhập. */
  if (s.done && s.actual == null) s.actual = s.val;
  saveDraft();
  renderSession();
  if (!s.done) return;
  // Chế độ tập mạch: hết 1 vòng mới nghỉ (dùng giờ nghỉ giữa vòng)
  if (session.mode === 'circuit') {
    const cs = circuitState(session.items);
    if (cs.allDone) return; // xong hết rồi, bấm "Hoàn thành buổi tập"
    if (circuitRoundComplete(session.items, si)) {
      openTimer(session.circuitRestSec, 'Hết vòng ' + (si + 1) + ' — nghỉ rồi chiến vòng tiếp theo');
    }
    return;
  }
  // Tick xong 1 hiệp -> tự mở đồng hồ nghỉ (trừ hiệp cuối của bài cuối)
  const isLastSetOfLastEx = (ei === session.items.length - 1) && (si === it.sets.length - 1);
  if (DB.settings.autoTimer && !isLastSetOfLastEx) {
    openTimer(it.restSec, it.name);
  }
}

/* Sửa số THỰC TẾ của 1 hiệp (mở bằng nhấn giữ nút hiệp): chỉ đổi hiệp đó,
   không đụng mục tiêu của các hiệp khác. Nhập 0 = làm không được hiệp đó.
   Nhập > 0 ở hiệp chưa xong thì coi như hiệp đó đã xong. */
function openActualEditor(ei, si){
  const it = session.items[ei];
  const s = it.sets[si];
  const unitTxt = unitLabel(it.unit);
  const step = it.unit === 'sec' ? 5 : 1;
  const cur = setVal(s);
  openModal('Thực tế hiệp ' + (si + 1) + ' — ' + it.name,
    '<div class="goal-meta">Mục tiêu hiệp này: <b>' + s.val + ' ' + unitTxt + '</b> · ' +
    'Nhập số bạn thực sự làm được (0 nếu không làm được). Kỷ lục và biểu đồ chỉ tính số này.</div>' +
    '<label>Số ' + unitTxt + ' thực tế</label>' +
    '<div class="actual-ctl"><button class="btn-ghost" id="act-dec">−</button>' +
    '<input id="act-input" type="number" inputmode="numeric" min="0" value="' + cur + '">' +
    '<button class="btn-ghost" id="act-inc">+</button></div>',
    [{label:'Lưu', cls:'btn-primary', onClick:() => {
        const inp = document.getElementById('act-input');
        const v = inp ? Math.max(0, Math.round(Number(inp.value) || 0)) : cur;
        s.actual = v;
        if (v > 0 && !s.done) s.done = true;
        saveDraft();
        renderSession();
        toast('Đã ghi ' + v + ' ' + unitTxt + ' cho hiệp ' + (si + 1));
      }},
     {label:'Hủy', cls:'btn-ghost'}]);
  const dec = document.getElementById('act-dec'), inc = document.getElementById('act-inc'),
    inp = document.getElementById('act-input');
  const bump = (d) => {
    if (!inp) return;
    inp.value = String(Math.max(0, (Number(inp.value) || 0) + d));
  };
  if (dec) dec.onclick = () => bump(-step);
  if (inc) inc.onclick = () => bump(step);
}

function finishWorkout(){
  const done = countDoneSets(session.items);
  if (done === 0) { toast('Bạn chưa tick hiệp nào, ráng lên bro!'); return; }
  const minutes = Math.max(1, Math.round((Date.now() - session.startedAt) / 60000));
  openFinishForm(done, minutes);
}

/* Form sau buổi tập: ghi chú + chấm RPE 1–10 */
let pendingRpe = null;

function openFinishForm(done, minutes){
  pendingRpe = null;
  const grid = Object.keys(RPE_LABELS).map((k) =>
    '<button class="rpe" data-rpe="' + k + '">' + k + '<small>' + RPE_LABELS[k] + '</small></button>'
  ).join('');
  openModal('Hoàn thành buổi tập?',
    'Bạn đã xong <b>' + done + ' hiệp</b> trong <b>' + minutes + ' phút</b>.<br><br>' +
    '<label>Ghi chú buổi tập (không bắt buộc)</label>' +
    '<textarea id="fin-note" rows="2" placeholder="VD: hôm nay khỏe, front lever giữ chắc hơn tuần trước"></textarea>' +
    '<label>Mức độ mệt RPE 1–10 (không bắt buộc)</label><div class="rpe-grid">' + grid + '</div>',
    [{label:'Lưu buổi tập', cls:'btn-primary', onClick:() => {
        const note = document.getElementById('fin-note') ? document.getElementById('fin-note').value : '';
        completeAndSave(note, pendingRpe);
      }},
     {label:'Tập tiếp', cls:'btn-ghost'}]);
  document.querySelectorAll('.rpe').forEach((b) => b.onclick = () => {
    pendingRpe = Number(b.dataset.rpe);
    document.querySelectorAll('.rpe').forEach((x) => x.classList.toggle('sel', x === b));
  });
}

function completeAndSave(note, rpe){
  const beforeBadges = new Set(computeBadges(DB).filter((b) => b.earned).map((b) => b.id));
  const entry = buildHistoryEntry(session, note, rpe);
  DB.history.push(entry);
  const exById = {};
  allExercises(DB).forEach((ex) => { exById[ex.id] = ex; });
  DB.prs = updatePRsPure(DB.prs, entry.items, entry.date, exById);
  store.save(DB);
  clearDraft(); // lưu thành công -> nháp không còn cần nữa
  const newBadges = computeBadges(DB).filter((b) => b.earned && !beforeBadges.has(b.id));
  const st = calcWeeklyStreak(DB.history, DB.schedule);
  releaseWakeLock();
  document.getElementById('workout-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  clearInterval(woTickTimer);
  session = null;
  const done = countDoneSets(entry.items);
  openModal('Xong! 🎉',
    'Buổi <b>' + esc(entry.routineName) + '</b> đã được lưu.<br>⏱ Thời gian: <b>' + entry.minutes + ' phút</b><br>' +
    '✅ Hiệp đã xong: <b>' + done + '</b><br>🔥 Streak hiện tại: <b>' + st.streak + ' tuần</b>' +
    (newBadges.length ? '<br>🏅 Huy hiệu mới: <b>' + newBadges.map((b) => esc(b.icon + ' ' + b.name)).join(', ') + '</b>' : ''),
    [{label:'🧘 Giãn cơ ngay', cls:'btn-ghost', onClick:() => {
        showView('home');
        runGuideFlow('🧘 Giãn cơ sau tập (3 phút)', COOLDOWN_FLOW, 'Giãn cơ xong, cơ thể cảm ơn bạn đấy! 🙏');
      }},
     {label:'Tuyệt vời', cls:'btn-primary', onClick:() => showView('home')}]);
}

/* ================= ĐỒNG HỒ NGHỈ ================= */
let timerInt = null, timerLeft = 0, timerTotal = 0, timerEndAt = 0;

/* Audio dùng chung: PHẢI tạo/resume trong user-gesture đầu tiên,
   nếu không iOS Safari giữ AudioContext ở trạng thái suspended và chuông không kêu.
   Mỗi lần tick hiệp là một gesture nên gọi ensureAudio() ở đó để "mở khóa" tiếng. */
let sharedAC = null;
function ensureAudio(){
  try {
    if (typeof window === 'undefined') return;
    if (!sharedAC) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      sharedAC = new AC();
    }
    if (sharedAC.state === 'suspended') sharedAC.resume();
  } catch (e) { /* thiết bị không hỗ trợ: bỏ qua */ }
}

function beep(){
  try {
    ensureAudio();
    const ctx = sharedAC;
    if (!ctx) return;
    // 3 tiếng RIÊNG BIỆT, cách nhau bằng khoảng lặng, tiếng cuối dài + cao hơn
    // (bản cũ: 3 tiếng cùng 880Hz chồng lên nhau 0–1s nên nghe như 1 tiếng dài 1s)
    const rings = [
      {t: 0,   dur: 0.3, freq: 880},
      {t: 0.5, dur: 0.3, freq: 880},
      {t: 1.0, dur: 0.5, freq: 1174.66},
    ];
    rings.forEach((r) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.value = r.freq;
      const t = ctx.currentTime + r.t;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.9, t + 0.05); // 0.9 cho kêu TO ngoài xà
      g.gain.exponentialRampToValueAtTime(0.0001, t + r.dur);
      o.start(t); o.stop(t + r.dur + 0.05);
    });
  } catch (e) { /* thiết bị không hỗ trợ audio: bỏ qua */ }
  try { if (navigator.vibrate) navigator.vibrate([250, 120, 250, 120, 400]); } catch (e) {}
}

/* Báo thức nghỉ: kêu TO + LẶP LẠI cho tới khi bấm "Bỏ qua, tập tiếp" */
let alarmInt = null;
function startAlarm(){
  stopAlarm();
  beep();
  alarmInt = setInterval(beep, 2000); // mỗi tiếng dài ~1.55s, nghỉ 0.45s rồi kêu lại
}
function stopAlarm(){
  if (alarmInt) { clearInterval(alarmInt); alarmInt = null; }
}

function openTimer(sec, exName){
  const m = document.getElementById('timer-modal');
  document.getElementById('timer-ex').textContent = exName ? 'Vừa xong 1 hiệp ' + exName : '';
  m.classList.remove('hidden');
  startTimer(sec);
}

function startTimer(sec){
  stopAlarm(); // timer mới thì dừng báo thức cũ (nếu còn)
  clearInterval(timerInt);
  timerLeft = sec; timerTotal = sec;
  timerEndAt = Date.now() + sec * 1000; // mốc kết thúc: chống trôi khi tab bị throttle ở nền
  paintTimer();
  timerInt = setInterval(timerTick, 250); // tick 4 lần/giây, số giây tính từ Date.now()
}

function timerTick(){
  const remaining = timerEndAt - Date.now();
  timerLeft = Math.max(0, Math.ceil(remaining / 1000));
  paintTimer();
  if (remaining <= 0) {
    clearInterval(timerInt);
    timerInt = null;
    document.getElementById('timer-num').textContent = 'Hết giờ!';
    startAlarm(); // kêu liên tục tới khi bấm "Bỏ qua, tập tiếp"
    toast('Hết giờ nghỉ, chiến tiếp bro! 💪');
  }
}

function paintTimer(){
  document.getElementById('timer-num').textContent = timerLeft;
  const ring = document.querySelector('#timer-modal .timer-ring');
  if (ring) ring.style.setProperty('--p', timerTotal > 0 ? Math.max(0, Math.round(timerLeft / timerTotal * 100)) : 100);
}

function closeTimer(){
  stopAlarm(); // bấm "Bỏ qua, tập tiếp" thì dừng chuông
  clearInterval(timerInt);
  document.getElementById('timer-modal').classList.add('hidden');
}

/* +/−15s trong lúc báo thức đang kêu: dừng chuông, chạy lại đồng hồ từ số mới */
function adjustTimer(d){
  // Dời mốc kết thúc, giữ ít nhất 5s còn lại
  if (!timerEndAt) timerEndAt = Date.now() + timerLeft * 1000;
  const newRemaining = Math.max(5000, timerEndAt - Date.now() + d * 1000);
  timerEndAt = Date.now() + newRemaining;
  timerLeft = Math.ceil(newRemaining / 1000);
  paintTimer();
  if (alarmInt) { stopAlarm(); clearInterval(timerInt); timerInt = setInterval(timerTick, 250); }
}

/* ================= FLOW HƯỚNG DẪN: KHỞI ĐỘNG / GIÃN CƠ ================= */
/* Chạy từng động tác có bấm giờ, KHÔNG lưu vào lịch sử / thống kê / PR */
let guide = null; // {title, steps:[{name,tip,unit,val}], idx, timerInt, left, endAt, doneMsg}

function runGuideFlow(title, flow, doneMsg){
  const exList = allExercises(DB);
  const steps = flow.map((f) => {
    const ex = getExerciseById(exList, f.exId);
    return { name: ex ? ex.n : f.exId, tip: ex ? ex.tip : '', unit: ex ? ex.unit : 'sec', val: f.val };
  }).filter((s) => s.val > 0);
  if (!steps.length) { toast('Chưa có động tác nào'); return; }
  guide = { title: title, steps: steps, idx: 0, timerInt: null, left: 0, endAt: 0, doneMsg: doneMsg || 'Xong! 💪' };
  document.getElementById('guide-title').textContent = title;
  document.getElementById('guide-exit').onclick = () => { endGuide(); };
  document.getElementById('guide-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderGuideStep();
}

function renderGuideStep(){
  const g = guide;
  if (!g) return;
  const st = g.steps[g.idx];
  document.getElementById('guide-step').textContent = 'Động tác ' + (g.idx + 1) + '/' + g.steps.length;
  document.getElementById('guide-name').textContent = st.name;
  document.getElementById('guide-tip').textContent = st.tip;
  const btn = document.getElementById('guide-next');
  clearInterval(g.timerInt);
  if (st.unit === 'sec') {
    g.left = st.val;
    g.endAt = Date.now() + st.val * 1000; // mốc kết thúc: chống trôi khi tab bị throttle ở nền
    paintGuideNum();
    btn.textContent = 'Bỏ qua động tác này';
  } else {
    document.getElementById('guide-num').textContent = st.val + ' cái';
    btn.textContent = 'Xong, qua động tác tiếp ▶';
  }
  btn.onclick = nextGuideStep;
  if (st.unit === 'sec') {
    g.timerInt = setInterval(() => {
      g.left = Math.max(0, Math.ceil((g.endAt - Date.now()) / 1000));
      paintGuideNum();
      if (g.endAt - Date.now() <= 0) { clearInterval(g.timerInt); beep(); nextGuideStep(); }
    }, 250);
  }
}

function paintGuideNum(){
  if (guide) document.getElementById('guide-num').textContent = guide.left;
}

function nextGuideStep(){
  if (!guide) return;
  ensureAudio();
  clearInterval(guide.timerInt);
  guide.idx++;
  if (guide.idx >= guide.steps.length) {
    const msg = guide.doneMsg;
    endGuide();
    toast(msg);
  } else renderGuideStep();
}

function endGuide(){
  if (guide) clearInterval(guide.timerInt);
  guide = null;
  document.getElementById('guide-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ================= TIẾN BỘ ================= */
let progChartEx = 'pullup';
let progChartRange = 28; // 28 / 84 / 0 (tất cả)
let progChartMode = 'best'; // 'best': cao nhất mỗi buổi · 'total': tổng mỗi buổi

/* ---------- Báo cáo tuần (v5): tóm tắt tuần này + so tuần trước ---------- */
function weeklyReportHTML(){
  const rep = weeklyReport(DB.history, DB.prs);
  const st = calcWeeklyStreak(DB.history, DB.schedule);
  const dl = deloadDue(DB.history, DB.schedule);
  const delta = rep.sessions - rep.prevSessions;
  const deltaTxt = rep.prevSessions === 0 && rep.sessions === 0 ? 'tuần trước cũng chưa tập buổi nào'
    : delta > 0 ? 'nhiều hơn tuần trước ' + delta + ' buổi 📈'
    : delta < 0 ? 'ít hơn tuần trước ' + (-delta) + ' buổi 📉'
    : 'bằng tuần trước';
  let prTxt = 'Chưa có kỷ lục mới trong tuần.';
  if (rep.prsThisWeek.length) {
    const exList = allExercises(DB);
    prTxt = '🏆 Kỷ lục mới: ' + rep.prsThisWeek.map((p) => {
      const ex = getExerciseById(exList, p.exId);
      return esc(ex ? ex.n : p.exId) + ' ' + p.value + ' ' + unitLabel(p.unit);
    }).join(' · ');
  }
  return '<h3>📋 Báo cáo tuần này</h3><div class="card">' +
    '<div class="kv"><span>Buổi tập</span><span><b>' + rep.sessions + '</b> buổi (' + deltaTxt + ')</span></div>' +
    '<div class="kv"><span>Hiệp đã xong</span><span><b>' + rep.sets + '</b> hiệp</span></div>' +
    '<div class="kv"><span>Thời gian tập</span><span><b>' + rep.minutes + '</b> phút</span></div>' +
    '<div class="kv"><span>Streak hiện tại</span><span><b>' + st.streak + '</b> tuần</span></div>' +
    (dl.due ? '<div class="goal-meta" style="margin-top:6px">💪 Đã tập đủ ' + dl.weeksDone + ' tuần liên tiếp — nên có 1 tuần deload nhẹ: giảm số hiệp, chọn biến thể dễ hơn để cổ tay và gân cẳng tay hồi phục nhé.</div>' : '') +
    '<div class="goal-meta" style="margin-top:6px">' + prTxt + '</div></div>';
}

/* ---------- Cân nặng & số đo (v5) ---------- */
function bodySectionHTML(){
  const body = DB.body || [];
  const latest = body.length ? body[body.length - 1] : null;
  const chg = bodyWeightChange(body);
  let html = '<h3>⚖️ Cân nặng & số đo</h3><div class="card">' +
    '<div class="goal-meta" style="margin-bottom:8px">Chỉ ghi lại số liệu để xem xu hướng theo thời gian — không đặt mục tiêu tăng hay giảm ở đây.</div>' +
    '<div class="body-form">' +
    '<label>Cân nặng (kg) *<input id="bd-weight" type="number" min="30" max="200" step="0.1" inputmode="decimal" placeholder="VD: 68.5" value="' + (latest ? latest.weight : '') + '"></label>' +
    BODY_FIELDS.map((f) =>
      '<label>' + f.label + '<input id="bd-' + f.key + '" type="number" min="10" max="200" step="0.5" inputmode="decimal" placeholder="—" value="' +
      (latest && latest[f.key] != null ? latest[f.key] : '') + '"></label>'
    ).join('') +
    '</div>' +
    '<button class="btn-primary btn-block" id="bd-save">💾 Lưu số đo hôm nay</button>';
  if (latest) {
    html += '<div class="goal-meta" style="margin-top:10px">Mới nhất (' + fmtDate(latest.date) + '): <b>' + latest.weight + ' kg</b>' +
      (latest.waist != null ? ' · eo ' + latest.waist + ' cm' : '') +
      (latest.chest != null ? ' · ngực ' + latest.chest + ' cm' : '') +
      (latest.arm != null ? ' · tay ' + latest.arm + ' cm' : '') +
      (latest.thigh != null ? ' · đùi ' + latest.thigh + ' cm' : '') + '</div>';
  }
  if (chg) {
    const sign = chg.delta > 0 ? '+' : '';
    html += '<div class="goal-meta">Từ lần ghi đầu (' + chg.from + ' kg) tới nay (' + chg.to + ' kg): <b>' + sign + chg.delta + ' kg</b> · ' + chg.days + ' lần ghi.</div>';
  }
  html += '<div class="chart-wrap" style="margin-top:10px"><canvas id="body-chart"></canvas>' +
    '<div id="body-note" class="goal-meta" style="margin-top:6px"></div></div>';
  if (body.length) {
    html += '<div style="margin-top:8px">' + body.slice(-8).reverse().map((b) =>
      '<div class="kv"><span>' + fmtDate(b.date) + '</span><span><b>' + b.weight + ' kg</b>' +
      (b.waist != null ? ' · eo ' + b.waist : '') + ' <button class="btn-ghost" style="min-height:0;padding:4px 10px" data-bddel="' + b.date + '">Xóa</button></span></div>'
    ).join('') + '</div>';
  }
  return html + '</div>';
}

function drawBodyChart(){
  const cv = document.getElementById('body-chart');
  const note = document.getElementById('body-note');
  if (!cv) return;
  const pts = bodyWeightSeries(DB.body || []);
  if (pts.length < 2) {
    const ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, cv.width, cv.height);
    if (note) note.textContent = 'Ghi cân nặng ít nhất 2 lần (cách nhau vài ngày) để vẽ biểu đồ xu hướng.';
    return;
  }
  if (note) note.textContent = 'Cân nặng theo thời gian (' + pts.length + ' lần ghi)';
  drawLineChart(cv, pts, 'kg');
}

/* ---------- Huy hiệu thành tích (v5) ---------- */
function badgesSectionHTML(){
  const badges = computeBadges(DB);
  const earned = badges.filter((b) => b.earned).length;
  let html = '<h3>🏅 Huy hiệu thành tích</h3>' +
    '<div class="goal-meta" style="margin-bottom:10px">Đã mở <b>' + earned + '/' + badges.length + '</b> huy hiệu — tự mở khóa khi bạn đạt mốc, không cần làm gì thêm.</div>' +
    '<div class="badge-grid">';
  badges.forEach((b) => {
    html += '<div class="badge-card' + (b.earned ? ' earned' : ' locked') + '">' +
      '<div class="badge-ico">' + (b.earned ? b.icon : '🔒') + '</div>' +
      '<b>' + esc(b.name) + '</b><span>' + esc(b.desc) + '</span></div>';
  });
  return html + '</div>';
}

function renderProgress(){
  const v = document.getElementById('view-progress');
  const exList = allExercises(DB);
  const prIds = Object.keys(DB.prs);

  let html = '<h2>Tiến bộ của bạn</h2>';

  // Báo cáo tuần (v5)
  html += weeklyReportHTML();

  // Kỷ lục cá nhân
  html += '<h3>🏆 Kỷ lục cá nhân</h3>';
  if (!prIds.length) {
    html += '<div class="empty">Chưa có kỷ lục nào. Hoàn thành một buổi tập để bắt đầu ghi nhận nhé.</div>';
  } else {
    html += '<div class="pr-grid">';
    prIds.forEach((id) => {
      const ex = getExerciseById(exList, id);
      const pr = DB.prs[id];
      html += '<div class="pr-card"><b>' + pr.value + ' ' + unitLabel(pr.unit) + '</b>' +
        '<span>' + esc(ex ? ex.n : id) + '<br>' + fmtDate(pr.date) +
        (pr.manual ? ' · <span class="manual-pr">(nhập tay)</span>' : '') + '</span>' +
        '<button class="btn-ghost btn-sm" data-manualpr="' + id + '">✏️ Nhập kỷ lục</button></div>';
    });
    html += '</div>';
  }

  // v6: nhập kỷ lục tay — luôn hiện, kể cả khi chưa có kỷ lục nào
  const prEligible = exList.filter((ex) => ex.g !== 'warmup' && ex.g !== 'stretch');
  html += '<div class="card manual-pr-box"><b>✏️ Nhập kỷ lục tay</b>' +
    '<div class="goal-meta" style="margin:4px 0 8px">Chưa tập mà đã biết trình của mình (VD: front lever giữ 10 giây)? Nhập vào đây để cây kỹ năng và mục tiêu tính đúng ngay từ đầu. Kỷ lục nhập tay được đánh dấu “(nhập tay)” và sẽ tự nhường chỗ khi bạn phá nó trong buổi tập thật.</div>' +
    '<div class="manual-pr-row"><select id="pr-ex">' +
    prEligible.map((ex) => '<option value="' + ex.id + '">' + esc(ex.n) + '</option>').join('') +
    '</select><button class="btn-ghost" id="pr-manual-add">✏️ Nhập kỷ lục</button></div></div>';

  // Biểu đồ (v5: chọn khoảng ngày + best/tổng mỗi buổi)
  const opts = exList.map((ex) =>
    '<option value="' + ex.id + '"' + (ex.id === progChartEx ? ' selected' : '') + '>' + esc(ex.n) + '</option>'
  ).join('');
  const rangeOpts = [[28, '4 tuần gần nhất'], [84, '12 tuần gần nhất'], [0, 'Tất cả']].map((r) =>
    '<option value="' + r[0] + '"' + (progChartRange === r[0] ? ' selected' : '') + '>' + r[1] + '</option>'
  ).join('');
  const modeOpts = [['best', 'Tốt nhất mỗi buổi'], ['total', 'Tổng mỗi buổi']].map((r) =>
    '<option value="' + r[0] + '"' + (progChartMode === r[0] ? ' selected' : '') + '>' + r[1] + '</option>'
  ).join('');
  html += '<h3>📈 Biểu đồ tiến bộ</h3><div class="chart-wrap">' +
    '<select id="chart-ex" class="inline" style="margin-bottom:10px">' + opts + '</select>' +
    '<div class="chart-controls"><select id="chart-range" class="inline">' + rangeOpts + '</select>' +
    '<select id="chart-mode" class="inline">' + modeOpts + '</select></div>' +
    '<canvas id="chart"></canvas><div id="chart-note" style="font-size:12.5px;color:var(--muted);margin-top:6px"></div></div>';

  // Cân nặng & số đo + huy hiệu (v5)
  html += bodySectionHTML();
  html += badgesSectionHTML();

  // Khối lượng tuần
  html += volumeSectionHTML();

  // Mục tiêu cá nhân
  html += goalsSectionHTML();

  // Lịch sử buổi tập
  html += '<h3>🕘 Lịch sử buổi tập</h3>';
  if (!DB.history.length) {
    html += '<div class="empty">Chưa có buổi tập nào được lưu.</div>';
  } else {
    const sorted = DB.history.slice().sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 30);
    html += '<div class="card">';
    sorted.forEach((h) => {
      const done = countDoneSets(h.items);
      html += '<div class="hist-item" data-hist="' + h.id + '"><div><b>' + esc(h.routineName) + '</b>' +
        (h.mode === 'circuit' ? ' <span class="badge">tập mạch</span>' : '') +
        '<small>' + fmtDate(h.date) + ' · ' + h.minutes + ' phút · ' + done + ' hiệp' +
        (h.rpe != null ? ' · RPE ' + h.rpe : '') + '</small></div>' +
        '<button class="btn-ghost" data-del="' + h.id + '">Xóa</button></div>';
      html += '<div class="hist-detail hidden" id="hd-' + h.id + '">' + historyDetailHTML(h) + '</div>';
    });
    html += '</div>';
  }
  v.innerHTML = html;

  document.getElementById('chart-ex').onchange = (e) => { progChartEx = e.target.value; drawProgChart(); };
  document.getElementById('chart-range').onchange = (e) => { progChartRange = Number(e.target.value); drawProgChart(); };
  document.getElementById('chart-mode').onchange = (e) => { progChartMode = e.target.value; drawProgChart(); };
  drawProgChart();
  drawVolChart();
  drawBodyChart();
  // Lưu số đo cơ thể (v5)
  const bdSave = document.getElementById('bd-save');
  if (bdSave) bdSave.onclick = () => {
    const w = Number(document.getElementById('bd-weight').value);
    if (!w || w < 30 || w > 200) { toast('Nhập cân nặng hợp lệ (30–200 kg) đã bro'); return; }
    const entry = { date: todayKey(), weight: w };
    BODY_FIELDS.forEach((f) => {
      const raw = document.getElementById('bd-' + f.key).value;
      entry[f.key] = raw === '' ? null : Number(raw);
      if (entry[f.key] != null && (entry[f.key] < 10 || entry[f.key] > 200)) entry[f.key] = null;
    });
    DB.body = bodyLogUpsert(DB.body || [], entry);
    store.save(DB); renderProgress(); toast('Đã lưu số đo hôm nay ⚖️');
  };
  v.querySelectorAll('[data-bddel]').forEach((b) => b.onclick = () => {
    DB.body = (DB.body || []).filter((x) => x.date !== b.dataset.bddel);
    store.save(DB); renderProgress(); toast('Đã xóa số đo ngày đó');
  });
  v.querySelectorAll('.hist-item').forEach((row) => row.onclick = () => {
    document.getElementById('hd-' + row.dataset.hist).classList.toggle('hidden');
  });
  v.querySelectorAll('[data-del]').forEach((b) => b.onclick = (e) => {
    e.stopPropagation();
    openModal('Xóa buổi tập?', 'Buổi này sẽ bị xóa khỏi lịch sử, streak và biểu đồ cũng cập nhật lại.',
      [{label:'Xóa luôn', cls:'btn-danger', onClick:() => {
        DB.history = DB.history.filter((h) => h.id !== b.dataset.del);
        recomputePRs(); store.save(DB); renderProgress(); renderHome();
      }}, {label:'Giữ lại', cls:'btn-ghost'}]);
  });
  v.querySelectorAll('[data-manualpr]').forEach((b) => b.onclick = () => openManualPRModal(b.dataset.manualpr));
  const prAdd = document.getElementById('pr-manual-add');
  if (prAdd) prAdd.onclick = () => openManualPRModal(document.getElementById('pr-ex').value);
  const gadd = document.getElementById('goal-add');
  if (gadd) gadd.onclick = () => openGoalEditor(null);
  v.querySelectorAll('[data-goaledit]').forEach((b) => b.onclick = () => openGoalEditor(b.dataset.goaledit));
  v.querySelectorAll('[data-goaldel]').forEach((b) => b.onclick = () => {
    openModal('Xóa mục tiêu?', 'Mục tiêu này sẽ bị xóa khỏi danh sách.',
      [{label:'Xóa luôn', cls:'btn-danger', onClick:() => {
        DB.goals = DB.goals.filter((g) => g.id !== b.dataset.goaldel);
        store.save(DB); renderProgress(); toast('Đã xóa mục tiêu');
      }}, {label:'Giữ lại', cls:'btn-ghost'}]);
  });
  v.querySelectorAll('[data-samplegoal]').forEach((b) => b.onclick = () => {
    const s = SAMPLE_GOALS[Number(b.dataset.samplegoal)];
    if (!DB.goals.some((g) => g.exId === s.exId)) {
      DB.goals.push({ id: uid(), exId: s.exId, target: s.target, targetDate: '' });
      store.save(DB); renderProgress(); toast('Đã thêm mục tiêu 🎯');
    }
  });
}

/* Chi tiết 1 buổi tập trong lịch sử: ghi chú, RPE, từng bài */
function historyDetailHTML(h){
  let html = '';
  if (h.note) html += '<div class="note">📝 ' + esc(h.note) + '</div>';
  if (h.rpe != null) html += '<div>RPE: <b>' + h.rpe + '/10</b> (' + (RPE_LABELS[h.rpe] || '') + ')</div>';
  (h.items || []).forEach((it) => {
    let best = 0, done = 0;
    (it.sets || []).forEach((s) => { if (s.done) { done++; if (setVal(s) > best) best = setVal(s); } });
    html += '<div class="kv"><span>' + esc(it.name) + '</span><span>' + done + '/' + it.sets.length +
      ' hiệp · tốt nhất ' + best + ' ' + unitLabel(it.unit) + '</span></div>';
  });
  if (!html) html = '<div class="goal-meta">Không có chi tiết thêm.</div>';
  return html;
}

/* Mục "Khối lượng tuần": tổng hiệp + rep/giây theo nhóm cơ + biểu đồ cân bằng 4 tuần */
function volumeSectionHTML(){
  const exById = {};
  allExercises(DB).forEach((ex) => { exById[ex.id] = ex; });
  const weeks = weeklyVolume(DB.history, exById, 4);
  const cur = weeks[weeks.length - 1];
  let html = '<h3>📊 Khối lượng tuần này</h3><div class="card"><div class="vol-grid">';
  ['day', 'keo', 'chan', 'core', 'skill'].forEach((g) => {
    const detail = cur.reps[g] > 0 ? cur.reps[g] + ' cái' : (cur.secs[g] > 0 ? cur.secs[g] + ' giây' : '—');
    html += '<div class="vol"><b>' + cur.sets[g] + '</b><span>' + GROUP_LABELS[g] + '<br>' + detail + '</span></div>';
  });
  html += '</div><div class="goal-meta" style="margin-top:8px">Chỉ tính hiệp đã tick xong · Khởi động/giãn cơ không tính vào đây.</div></div>';
  html += '<h3>⚖️ Cân bằng Đẩy–Kéo–Chân (4 tuần)</h3>' +
    '<div class="chart-wrap"><canvas id="vol-chart"></canvas>' +
    '<div class="goal-meta" style="margin-top:6px"><span style="color:var(--accent)">■</span> Đẩy · ' +
    '<span style="color:var(--blue)">■</span> Kéo · <span style="color:var(--green)">■</span> Chân (số hiệp/tuần)</div></div>';
  return html;
}

function drawVolChart(){
  const cv = document.getElementById('vol-chart');
  if (!cv) return;
  const exById = {};
  allExercises(DB).forEach((ex) => { exById[ex.id] = ex; });
  const weeks = weeklyVolume(DB.history, exById, 4);
  const groups = ['day', 'keo', 'chan'];
  const colors = ['#ff6b1a', '#38bdf8', '#22c55e'];
  let max = 1;
  weeks.forEach((w) => groups.forEach((g) => { max = Math.max(max, w.sets[g]); }));

  const dpr = window.devicePixelRatio || 1;
  const W = cv.clientWidth || 320, H = 190;
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);

  const padL = 30, padR = 8, padT = 12, padB = 26;
  const nW = weeks.length, nG = groups.length;
  const slotW = (W - padL - padR) / nW;
  const barW = Math.min(22, (slotW - 16) / nG);
  const Y = (val) => padT + (1 - val / max) * (H - padT - padB);

  ctx.font = '10px "Be Vietnam Pro", sans-serif';
  // Lưới
  ctx.strokeStyle = '#2a3343'; ctx.fillStyle = '#9aa3b5'; ctx.lineWidth = 1;
  [0, Math.ceil(max / 2), max].forEach((val) => {
    const y = Y(val);
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
    ctx.fillText(String(val), 6, y + 3);
  });
  // Cột
  weeks.forEach((w, wi) => {
    groups.forEach((g, gi) => {
      const val = w.sets[g];
      const x = padL + wi * slotW + (slotW - barW * nG) / 2 + gi * barW;
      const y = Y(val);
      ctx.fillStyle = colors[gi];
      ctx.fillRect(x, y, barW - 3, H - padB - y);
    });
    ctx.fillStyle = '#9aa3b5';
    const lbl = fmtDate(w.weekStart).slice(0, 5);
    ctx.fillText(lbl, padL + wi * slotW + slotW / 2 - 12, H - 8);
  });
}

/* Mục "Mục tiêu cá nhân": CRUD + thanh tiến độ PR/chỉ tiêu */
function goalsSectionHTML(){
  const exList = allExercises(DB).filter((ex) => ex.g !== 'warmup' && ex.g !== 'stretch');
  let html = '<h3>🎯 Mục tiêu cá nhân</h3>';
  const existing = (DB.goals || []).map((g) => g.exId);
  const samples = SAMPLE_GOALS.filter((s) => existing.indexOf(s.exId) < 0);
  if (samples.length) {
    html += '<div class="filters">' + SAMPLE_GOALS.map((s, i) =>
      existing.indexOf(s.exId) < 0
        ? '<button class="chip" data-samplegoal="' + i + '">＋ ' + esc(s.label) + '</button>' : ''
    ).join('') + '</div>';
  }
  if (!DB.goals.length) {
    html += '<div class="empty">Chưa có mục tiêu nào. Bấm nút bên dưới để đặt mục tiêu đầu tiên nhé.</div>';
  } else {
    DB.goals.forEach((g) => {
      const ex = getExerciseById(exList, g.exId);
      const pr = DB.prs[g.exId];
      const gp = goalProgress(pr, g.target);
      const unit = unitLabel(ex ? ex.unit : 'rep');
      html += '<div class="goal-card"><div class="goal-top"><b>' + esc(ex ? ex.n : g.exId) + '</b>' +
        (gp.done ? '<span class="badge" style="color:var(--green);border-color:var(--green)">đã đạt 🎉</span>' : '') + '</div>' +
        '<div class="goal-meta">PR hiện tại: <b>' + (pr ? pr.value + ' ' + unit + (pr.manual ? ' (nhập tay)' : '') : '—') + '</b> / chỉ tiêu <b>' +
        g.target + ' ' + unit + '</b>' + (g.targetDate ? ' · mong đạt: ' + fmtDate(g.targetDate) : '') + '</div>' +
        '<div class="goal-bar"><i style="width:' + gp.pct + '%"></i></div>' +
        '<div class="goal-meta">' + gp.pct + '% hoàn thành</div>' +
        '<div class="btn-row"><button class="btn-ghost" data-goaledit="' + g.id + '">Sửa</button>' +
        '<button class="btn-danger" data-goaldel="' + g.id + '">Xóa</button></div></div>';
    });
  }
  html += '<button class="btn-primary btn-block" id="goal-add">＋ Thêm mục tiêu</button>';
  return html;
}

/* Trình thêm/sửa mục tiêu */
function openGoalEditor(goalId){
  const g = goalId ? (DB.goals || []).find((x) => x.id === goalId) : null;
  const exList = allExercises(DB).filter((ex) => ex.g !== 'warmup' && ex.g !== 'stretch');
  const opts = GROUP_ORDER.map((gr) => '<optgroup label="' + GROUP_LABELS[gr] + '">' +
    exList.filter((ex) => ex.g === gr).map((ex) =>
      '<option value="' + ex.id + '"' + (g && g.exId === ex.id ? ' selected' : '') + '>' + esc(ex.n) + '</option>'
    ).join('') + '</optgroup>').join('');
  openModal(g ? 'Sửa mục tiêu' : 'Mục tiêu mới',
    '<label>Bài tập</label><select id="go-ex">' + opts + '</select>' +
    '<label>Chỉ tiêu (<span id="go-unit">cái/giây</span>)</label>' +
    '<input id="go-target" type="number" min="1" max="9999" value="' + (g ? g.target : '10') + '">' +
    '<label>Ngày mong đạt (không bắt buộc)</label>' +
    '<input id="go-date" type="date" value="' + (g && g.targetDate ? g.targetDate : '') + '">',
    [{label:'Lưu mục tiêu', cls:'btn-primary', onClick:() => {
        const exId = document.getElementById('go-ex').value;
        const target = Math.max(1, Number(document.getElementById('go-target').value) || 1);
        const targetDate = document.getElementById('go-date').value || '';
        if (g) { g.exId = exId; g.target = target; g.targetDate = targetDate; }
        else DB.goals.push({ id: uid(), exId: exId, target: target, targetDate: targetDate });
        store.save(DB); renderProgress(); toast('Đã lưu mục tiêu 🎯');
      }},
     {label:'Hủy', cls:'btn-ghost'}]);
  const upd = () => {
    const ex = getExerciseById(exList, document.getElementById('go-ex').value);
    document.getElementById('go-unit').textContent = unitLabel(ex ? ex.unit : 'rep');
  };
  document.getElementById('go-ex').onchange = upd;
  upd();
}

/* v6: hộp nhập kỷ lục tay cho 1 bài (mở từ tab Tiến bộ) */
function openManualPRModal(exId){
  const ex = getExerciseById(allExercises(DB), exId);
  if (!ex) { toast('Không tìm thấy bài tập'); return; }
  if (ex.g === 'warmup' || ex.g === 'stretch') { toast('Bài khởi động/giãn cơ không tính kỷ lục'); return; }
  const cur = DB.prs[exId];
  openModal('Nhập kỷ lục: ' + ex.n,
    (cur ? 'Kỷ lục hiện tại: <b>' + cur.value + ' ' + unitLabel(cur.unit) + '</b>' +
      (cur.manual ? ' (nhập tay)' : '') + ' · ' + fmtDate(cur.date) + '<br>' : '') +
    '<label>Kỷ lục mới (' + unitLabel(ex.unit) + ')</label>' +
    '<input id="mpr-value" type="number" min="1" max="9999" inputmode="numeric" value="' + (cur ? cur.value : '') + '"' +
    ' placeholder="VD: ' + (ex.unit === 'sec' ? '10' : '5') + '">' +
    '<div class="goal-meta" style="margin-top:6px">Chỉ nhập số bạn thực sự làm được. Giá trị phải lớn hơn 0. ' +
    'Nếu sau này tập vượt qua số này, kỷ lục buổi tập sẽ thay thế nó.</div>',
    [{label:'Lưu kỷ lục', cls:'btn-primary', onClick:() => {
        const res = setManualPR(DB, exId, document.getElementById('mpr-value').value);
        if (!res.ok) { toast(res.error); return; }
        store.save(DB); renderProgress(); toast('Đã lưu kỷ lục ' + ex.n + ' 🏆');
      }},
     {label:'Hủy', cls:'btn-ghost'}]);
}

/* Tính lại toàn bộ PR từ lịch sử (dùng khi xóa buổi tập) */
function recomputePRs(){
  const exById = {};
  allExercises(DB).forEach((ex) => { exById[ex.id] = ex; });
  // Giữ kỷ lục nhập tay: cao hơn số tính từ lịch sử thì giữ, thấp hơn thì nhường chỗ
  DB.prs = recomputePRsPure(DB.prs, DB.history, exById);
}

function drawProgChart(){
  const cv = document.getElementById('chart');
  const note = document.getElementById('chart-note');
  const ex = getExerciseById(allExercises(DB), progChartEx);
  const pts = buildChartSeries(DB.history, progChartEx, progChartMode, progChartRange);
  if (!pts.length) {
    const ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, cv.width, cv.height);
    note.textContent = 'Chưa có dữ liệu cho bài này trong khoảng đã chọn. Tập và tick hiệp để vẽ biểu đồ nhé.';
    return;
  }
  const rangeTxt = progChartRange === 0 ? 'tất cả' : progChartRange + ' ngày gần nhất';
  note.textContent = (progChartMode === 'total' ? 'Tổng số ' : 'Số ') + unitLabel(ex.unit) +
    (progChartMode === 'total' ? ' mỗi buổi' : ' cao nhất mỗi buổi') + ' (' + pts.length + ' buổi · ' + rangeTxt + ')';
  drawLineChart(cv, pts, unitLabel(ex.unit));
}

/* Vẽ biểu đồ đường bằng canvas thuần */
function drawLineChart(cv, pts, unitName){
  const dpr = window.devicePixelRatio || 1;
  const W = cv.clientWidth || 320, H = 190;
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);

  const padL = 34, padR = 10, padT = 12, padB = 26;
  const vals = pts.map((p) => p.best);
  let min = Math.min.apply(null, vals), max = Math.max.apply(null, vals);
  if (min === max) { min = Math.max(0, min - 1); max = max + 1; }
  const X = (i) => padL + (i * (W - padL - padR)) / Math.max(1, pts.length - 1);
  const Y = (val) => padT + (1 - (val - min) / (max - min)) * (H - padT - padB);

  // Lưới + nhãn
  ctx.strokeStyle = '#2a3343'; ctx.fillStyle = '#9aa3b5';
  ctx.font = '10px "Be Vietnam Pro", sans-serif'; ctx.lineWidth = 1;
  [min, (min + max) / 2, max].forEach((val) => {
    const y = Y(val);
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
    ctx.fillText(String(Math.round(val * 10) / 10), 4, y + 3);
  });

  // Đường
  ctx.strokeStyle = '#ff6b1a'; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
  ctx.beginPath();
  pts.forEach((p, i) => { i ? ctx.lineTo(X(i), Y(p.best)) : ctx.moveTo(X(i), Y(p.best)); });
  ctx.stroke();

  // Điểm
  ctx.fillStyle = '#ffb347';
  pts.forEach((p, i) => { ctx.beginPath(); ctx.arc(X(i), Y(p.best), 3.5, 0, 7); ctx.fill(); });

  // Nhãn ngày (tối đa 5 nhãn)
  ctx.fillStyle = '#9aa3b5';
  const step = Math.ceil(pts.length / 5);
  pts.forEach((p, i) => {
    if (i % step === 0 || i === pts.length - 1) {
      ctx.fillText(fmtDate(p.date).slice(0, 5), X(i) - 12, H - 8);
    }
  });
}

/* ================= LỊCH THÁNG + STREAK ================= */
function renderCalendar(){
  const v = document.getElementById('view-calendar');
  if (!calCursor) { const n = new Date(); calCursor = { y: n.getFullYear(), m: n.getMonth() }; }
  const { y, m } = calCursor;
  const st = calcWeeklyStreak(DB.history, DB.schedule);

  const first = new Date(y, m, 1);
  const startDay = first.getDay(); // 0=CN
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const byDate = {};
  DB.history.forEach((h) => {
    if (!h.date) return;
    byDate[h.date] = (byDate[h.date] || 0) + 1;
  });
  const tk = todayKey();

  let cells = '';
  ['CN','T2','T3','T4','T5','T6','T7'].forEach((d) => { cells += '<div class="cal-dow">' + d + '</div>'; });
  for (let i = 0; i < startDay; i++) cells += '<div class="cal-day other"></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    const k = y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    const n = byDate[k] || 0;
    cells += '<div class="cal-day' + (k === tk ? ' today' : '') + (n ? ' trained' : '') + '">' + d +
      (n ? '<span class="cnt">' + n + ' buổi</span>' : '') + '</div>';
  }

  v.innerHTML = '<h2>Lịch tập</h2>' +
    '<div style="margin-bottom:12px"><span class="streak-pill">🔥 Streak ' + st.streak + ' tuần liên tiếp</span>' +
    '<span class="streak-pill">✅ Tổng ' + st.total + ' buổi đã tập</span></div>' +
    '<div class="card"><div class="cal-head">' +
    '<button class="btn-ghost" id="cal-prev">‹</button><b>Tháng ' + (m + 1) + '/' + y + '</b>' +
    '<button class="btn-ghost" id="cal-next">›</button></div>' +
    '<div class="cal-grid">' + cells + '</div></div>' +
    '<div class="empty">Ngày có màu cam là ngày đã tập. Chuỗi streak tính theo tuần tập đủ lịch.</div>';

  document.getElementById('cal-prev').onclick = () => {
    calCursor.m--; if (calCursor.m < 0) { calCursor.m = 11; calCursor.y--; } renderCalendar();
  };
  document.getElementById('cal-next').onclick = () => {
    calCursor.m++; if (calCursor.m > 11) { calCursor.m = 0; calCursor.y++; } renderCalendar();
  };
}

/* ================= GIÁO ÁN ================= */
function renderPrograms(){
  const v = document.getElementById('view-programs');
  let html = '<h2>Giáo án tập</h2>';

  // Lịch tuần
  html += '<div class="card"><b>Lịch tập trong tuần</b><div style="margin-top:6px">';
  for (let dow = 1; dow <= 7; dow++) {
    const key = String(dow % 7); // T2=1..T7=6, CN=0
    const rid = DB.schedule[key];
    const r = rid && rid !== 'rest' ? getRoutineById(DB, rid) : null;
    const opts = '<option value="rest"' + (rid === 'rest' ? ' selected' : '') + '>Nghỉ</option>' +
      DB.routines.map((rt) =>
        '<option value="' + rt.id + '"' + (rid === rt.id ? ' selected' : '') + '>' + esc(rt.name) + '</option>'
      ).join('');
    html += '<div class="sched-row"><span class="dow">' + DOW_LABELS[dow % 7] + '</span>' +
      '<select data-dow="' + key + '">' + opts + '</select></div>';
  }
  html += '</div></div>';

  // Danh sách giáo án
  const exList = allExercises(DB);
  DB.routines.forEach((r) => {
    const items = r.items.map((it) => {
      const ex = getExerciseById(exList, it.exId);
      return '<div class="prog-item"><div><b>' + esc(ex ? ex.n : '(bài đã xóa)') + '</b>' +
        '<small>' + it.sets + ' hiệp × ' + it.reps + ' ' + unitLabel(ex ? ex.unit : 'rep') +
        (ex && ex.side ? (ex.g === 'chan' ? ' mỗi chân' : ' mỗi bên') : '') +
        ' · nghỉ ' + (it.restSec || DB.settings.restSec) + 's' +
        (it.note ? ' · 📝 ' + esc(it.note) : '') + '</small></div></div>';
    }).join('');
    html += '<div class="prog-card"><div class="prog-head"><span class="prog-name">' + esc(r.name) + '</span>' +
      (r.builtin ? '<span class="badge builtin">có sẵn</span>' : '<span class="badge">tự tạo</span>') + '</div>' +
      '<div class="prog-meta">' + r.items.length + ' bài · ' +
      r.items.reduce((a, it) => a + it.sets, 0) + ' hiệp</div>' + items +
      '<div class="btn-row">' +
      '<button class="btn-ghost" data-start="' + r.id + '">Tập ngay ▶</button>' +
      '<button class="btn-ghost" data-dup="' + r.id + '">📋 Nhân bản</button>' +
      (r.builtin
        ? ''
        : '<button class="btn-ghost" data-edit="' + r.id + '">Sửa</button>' +
          '<button class="btn-danger" data-rm="' + r.id + '">Xóa</button>') +
      '</div></div>';
  });

  html += '<button class="btn-primary btn-block" id="prog-new">+ Tạo giáo án mới</button>';
  html += '<button class="btn-ghost btn-block" id="prog-reset">Khôi phục giáo án mặc định</button>';
  v.innerHTML = html;

  v.querySelectorAll('select[data-dow]').forEach((s) => s.onchange = () => {
    DB.schedule[s.dataset.dow] = s.value; store.save(DB); renderHome(); toast('Đã lưu lịch tuần 📅');
  });
  v.querySelectorAll('[data-start]').forEach((b) => b.onclick = () => startWorkout(b.dataset.start));
  v.querySelectorAll('[data-rm]').forEach((b) => b.onclick = () => {
    openModal('Xóa giáo án?', 'Giáo án tự tạo này sẽ bị xóa. Lịch tuần đang dùng nó sẽ chuyển thành ngày nghỉ.',
      [{label:'Xóa luôn', cls:'btn-danger', onClick:() => {
        DB.routines = DB.routines.filter((r) => r.id !== b.dataset.rm);
        Object.keys(DB.schedule).forEach((k) => { if (DB.schedule[k] === b.dataset.rm) DB.schedule[k] = 'rest'; });
        store.save(DB); renderPrograms();
      }}, {label:'Giữ lại', cls:'btn-ghost'}]);
  });
  v.querySelectorAll('[data-edit]').forEach((b) => b.onclick = () => openRoutineEditor(b.dataset.edit));
  v.querySelectorAll('[data-dup]').forEach((b) => b.onclick = () => {
    const res = duplicateRoutine(DB, b.dataset.dup);
    if (!res.ok) { toast(res.error || 'Không nhân bản được'); return; }
    store.save(DB); renderPrograms(); toast('Đã nhân bản thành "' + res.routine.name + '" 📋');
  });
  document.getElementById('prog-new').onclick = () => openRoutineEditor(null);
  document.getElementById('prog-reset').onclick = () => {
    openModal('Khôi phục mặc định?', '4 giáo án Đẩy+Planche / Kéo+Front Lever / Chân / Planche (Skill) sẽ về bản gốc. Giáo án tự tạo của bạn vẫn giữ nguyên.',
      [{label:'Khôi phục', cls:'btn-primary', onClick:() => {
        const customs = DB.routines.filter((r) => !r.builtin);
        DB.routines = defaultRoutines().concat(customs);
        DB.schedule = defaultSchedule(); store.save(DB); renderPrograms(); toast('Đã khôi phục ✅');
      }}, {label:'Thôi', cls:'btn-ghost'}]);
  };
}

/* Trình sửa giáo án */
let editorItems = [];

function openRoutineEditor(routineId){
  const r = routineId ? getRoutineById(DB, routineId) : null;
  editorItems = r ? r.items.map((it) => ({ exId: it.exId, sets: it.sets, reps: it.reps, restSec: it.restSec || 90, note: it.note || '' }))
                  : [];
  // v6: picker liệt kê mọi nhóm có bài (kể cả Khởi động/Giãn cơ khi có bài tự tạo
  // ở nhóm đó) để bài tự tạo nào cũng thêm được vào giáo án.
  const pickGroups = GROUP_ORDER.concat(['warmup','stretch'].filter((g) =>
    allExercises(DB).some((ex) => ex.g === g)));
  const body =
    '<label>Tên giáo án</label><input id="ed-name" value="' + esc(r ? r.name : '') + '" placeholder="VD: Đẩy nặng">' +
    '<div id="ed-list"></div>' +
    '<label>Thêm bài tập</label><select id="ed-pick">' +
      pickGroups.map((g) => '<optgroup label="' + GROUP_LABELS[g] + '">' +
        allExercises(DB).filter((ex) => ex.g === g).map((ex) =>
          '<option value="' + ex.id + '">' + esc(ex.n) + '</option>').join('') + '</optgroup>'
      ).join('') + '</select>' +
    '<button class="btn-ghost btn-block" id="ed-add">+ Thêm bài này</button>';
  openModal(r ? 'Sửa giáo án' : 'Giáo án mới', body, [
    {label:'Lưu giáo án', cls:'btn-primary', onClick:() => saveRoutine(routineId)},
    {label:'Hủy', cls:'btn-ghost'}
  ]);
  paintEditorList();
  document.getElementById('ed-add').onclick = () => {
    const exId = document.getElementById('ed-pick').value;
    const ex = getExerciseById(allExercises(DB), exId);
    editorItems.push({ exId: exId, sets: 3, reps: (ex.defVal || (ex.unit === 'sec' ? 30 : 10)), restSec: ex.rest || 90 });
    paintEditorList();
  };
}

function paintEditorList(){
  const box = document.getElementById('ed-list');
  const exList = allExercises(DB);
  box.innerHTML = editorItems.map((it, i) => {
    const ex = getExerciseById(exList, it.exId);
    return '<div class="prog-item"><div><b>' + esc(ex ? ex.n : '?') + '</b>' +
      '<small><input data-i="' + i + '" data-f="sets" type="number" min="1" max="20" value="' + it.sets + '" style="width:52px;display:inline"> hiệp × ' +
      '<input data-i="' + i + '" data-f="reps" type="number" min="1" max="999" value="' + it.reps + '" style="width:64px;display:inline"> ' +
      unitLabel(ex ? ex.unit : 'rep') + ' · nghỉ ' +
      '<input data-i="' + i + '" data-f="restSec" type="number" min="5" max="600" step="5" value="' + it.restSec + '" style="width:64px;display:inline">s</small></div>' +
      '<button class="btn-danger" data-edi="' + i + '">✕</button></div>';
  }).join('') || '<div class="empty">Chưa có bài nào. Chọn bài ở dưới rồi bấm thêm nhé.</div>';
  box.querySelectorAll('input[data-i]').forEach((inp) => inp.onchange = () => {
    const it = editorItems[Number(inp.dataset.i)];
    it[inp.dataset.f] = Math.max(1, Number(inp.value) || 1);
  });
  box.querySelectorAll('[data-edi]').forEach((b) => b.onclick = () => {
    editorItems.splice(Number(b.dataset.edi), 1); paintEditorList();
  });
}

function saveRoutine(routineId){
  const name = (document.getElementById('ed-name').value || '').trim();
  if (!name) { toast('Đặt tên cho giáo án đã bro'); return; }
  if (!editorItems.length) { toast('Thêm ít nhất 1 bài tập nhé'); return; }
  if (routineId) {
    const r = getRoutineById(DB, routineId);
    r.name = name; r.items = editorItems;
  } else {
    DB.routines.push({ id: uid(), name: name, builtin: false,
      items: editorItems.map((it) => { const o = { exId: it.exId, sets: it.sets, reps: it.reps, restSec: it.restSec }; if (it.note) o.note = it.note; return o; }) });
  }
  store.save(DB); renderPrograms(); toast('Đã lưu giáo án ✅');
}

/* ================= CÀI ĐẶT / BACKUP ================= */
function renderSettings(){
  const v = document.getElementById('view-settings');
  v.innerHTML = '<h2>Cài đặt</h2>' +
    '<div class="card">' +
    '<label style="font-size:13px;color:var(--muted);font-weight:600">Tên hiển thị</label>' +
    '<input id="set-name" class="inline" style="width:100%;background:var(--card);border:1px solid var(--line);color:var(--text);border-radius:10px;padding:11px 12px;font-family:var(--font);font-size:15px;margin:6px 0" ' +
    'value="' + esc(DB.settings.userName || '') + '" placeholder="VD: Huy">' +
    '<div class="set-row2"><div><div class="t">Tự mở đồng hồ nghỉ</div><div class="d">Tick xong 1 hiệp là đồng hồ tự hiện</div></div>' +
    '<label class="switch"><input type="checkbox" id="set-autotimer"' + (DB.settings.autoTimer ? ' checked' : '') + '><span class="slider"></span></label></div>' +
    '<div class="set-row2"><div><div class="t">Giờ nghỉ mặc định</div><div class="d">Dùng khi bài tập không đặt riêng</div></div>' +
    '<select id="set-rest" class="inline">' + [30,45,60,90,120,150,180].map((s) =>
      '<option value="' + s + '"' + (DB.settings.restSec === s ? ' selected' : '') + '>' + s + ' giây</option>').join('') +
    '</select></div></div>' +
    '<div class="card"><b>Sao lưu dữ liệu</b>' +
    '<div class="d" style="font-size:12.5px;color:var(--muted);margin:4px 0 8px">Dữ liệu lưu trên máy (localStorage). Xuất file JSON để backup, đổi máy thì nhập lại.</div>' +
    '<div class="btn-row"><button class="btn-ghost" id="btn-export">⬇ Xuất JSON</button>' +
    '<button class="btn-ghost" id="btn-import">⬆ Nhập JSON</button>' +
    '<button class="btn-ghost" id="btn-export-csv">⬇ Xuất CSV</button></div>' +
    '<button class="btn-danger btn-block" id="btn-reset">Xóa toàn bộ dữ liệu</button></div>' +
    '<div class="card"><div class="kv"><span>Phiên bản</span><span>6.0</span></div>' +
    '<div class="kv"><span>Chế độ</span><span>Offline hoàn toàn</span></div>' +
    '<div class="kv"><span>Bài tập</span><span>' + allExercises(DB).length + ' bài bodyweight</span></div></div>';

  document.getElementById('set-name').onchange = (e) => {
    DB.settings.userName = e.target.value.trim(); store.save(DB); renderHome();
  };
  document.getElementById('set-autotimer').onchange = (e) => {
    DB.settings.autoTimer = e.target.checked; store.save(DB);
  };
  document.getElementById('set-rest').onchange = (e) => {
    DB.settings.restSec = Number(e.target.value); store.save(DB); toast('Đã lưu ⏱');
  };
  document.getElementById('btn-export').onclick = exportJSON;
  document.getElementById('btn-export-csv').onclick = exportCSV;
  document.getElementById('btn-import').onclick = () => document.getElementById('import-file').click();
  document.getElementById('btn-reset').onclick = () => {
    openModal('Xóa toàn bộ?', 'Mọi lịch sử, kỷ lục, giáo án tự tạo sẽ mất hết. Nhớ xuất JSON backup trước nếu cần.',
      [{label:'Xóa hết', cls:'btn-danger', onClick:() => {
        DB = blankDB(); store.save(DB); showView('home'); toast('Đã xóa sạch 🧹');
      }}, {label:'Giữ lại', cls:'btn-ghost'}]);
  };
}

function exportJSON(){
  const blob = new Blob([JSON.stringify(DB, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'calisthenics-backup-' + todayKey() + '.json';
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  // Ghi dấu lần sao lưu để banner nhắc backup tắt cho tới khi quá 7 ngày
  DB.settings.lastExport = todayKey();
  store.save(DB);
  toast('Đã xuất file backup ⬇');
}

/* Xuất lịch sử tập ra file CSV (mở được bằng Excel / Google Sheets) */
function exportCSV(){
  const blob = new Blob([historyToCSV(DB.history)], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'calisthenics-lich-su-' + todayKey() + '.csv';
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  toast('Đã xuất file CSV ⬇');
}

function importJSONFile(file){
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const db = JSON.parse(reader.result);
      if (!db || !Array.isArray(db.history) || !Array.isArray(db.routines)) throw new Error('bad');
      DB = normalizeDB(db); store.save(DB); showView('home');
      toast('Khôi phục dữ liệu thành công ✅');
    } catch (e) { toast('File không đúng định dạng backup ❌'); }
  };
  reader.readAsText(file);
}

/* ================= KHỞI TẠO ================= */
function initApp(){
  DB = store.load();
  document.querySelectorAll('.nav-btn').forEach((b) => b.onclick = () => showView(b.dataset.view));
  document.getElementById('btn-settings').onclick = () => showView('settings');
  document.getElementById('wo-close').onclick = () => closeWorkout(true);
  document.getElementById('wo-finish').onclick = finishWorkout;
  document.getElementById('timer-skip').onclick = closeTimer; // bấm là dừng chuông + đóng bảng
  document.getElementById('timer-minus').onclick = () => { adjustTimer(-15); };
  document.getElementById('timer-plus').onclick = () => { adjustTimer(15); };
  document.getElementById('import-file').onchange = (e) => {
    if (e.target.files[0]) importJSONFile(e.target.files[0]);
    e.target.value = '';
  };
  // Xin trình duyệt giữ dữ liệu localStorage không bị xóa khi thiếu bộ nhớ (v6)
  try {
    if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
      navigator.storage.persist();
    }
  } catch (e) { /* trình duyệt không hỗ trợ: bỏ qua */ }
  // Đăng ký Service Worker (chỉ khi chạy qua http/https)
  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  showView('home');
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}

/* Export cho test bằng node */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EXERCISES, GROUP_LABELS, defaultRoutines, defaultSchedule,
    uid, todayKey, fmtDate, getExerciseById, allExercises, getRoutineById,
    calcStreak, calcWeeklyStreak, deloadDue, daysSinceBackup,
    updatePRsPure, buildChartPoints, countDoneSets, blankDB,
    setVal, lastTimeFor, buildDraft, restoreDraft, draftDoneCount, DRAFT_KEY,
    loadDraft, clearDraft,
    normalizeDB, videoUrl, circuitRounds, circuitRoundComplete, circuitState,
    weekStartKey, weeklyVolume, goalProgress, buildHistoryEntry,
    WARMUP_FLOW, COOLDOWN_FLOW, RPE_LABELS, SAMPLE_GOALS,
    SKILL_TREES, BODY_FIELDS, bodyLogUpsert, bodyWeightSeries, bodyWeightChange,
    computeBadges, skillRungAchieved, skillTreeStatus, rungManuallyMarked,
    weeklyReport, buildChartSeries, historyToCSV,
    isCustomExercise, createCustomExercise, duplicateRoutine, setManualPR,
    mergeManualPRs, recomputePRsPure
  };
}
