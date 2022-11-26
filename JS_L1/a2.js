// Bài 2:
// - Input: Điểm của học sinh
// - Output: Học lực của học sinh đó
// + Với điểm <= 5: học lực trung bình
// + 5 < Điểm <= 6: Khá
// + 7 < Điểm <= 8: Khá giỏi
// + Điểm >= 9: Giỏi
var diem = 7.5;
var hocluc;
switch (true) {
  case diem <= 5:
    hocluc = "trung binh";
    break;
  case diem > 5 && diem <= 6:
    hocluc = "kha";
    break;
  case diem > 7 && diem <= 8:
    hocluc = "kha gioi";
    break;
  case diem >= 9:
    hocluc = "gioi";
    break;
  default:
    hocluc = "khong xac dinh";
}
console.log("Hoc sinh co hoc luc " + hocluc);
