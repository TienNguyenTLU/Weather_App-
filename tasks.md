# 🌤️ Weather Forecast Website – Task List

## 🧱 1. Project Setup
- [ ] Khởi tạo dự án Next.js (App Router + TypeScript)
- [ ] Cài TailwindCSS
- [ ] Cài shadcn/ui
- [ ] Cài lucide-react
- [ ] Cài Supabase client
- [ ] Thiết kế cấu trúc thư mục `/app`, `/components`, `/lib`

---

# 🔐 2. Authentication (Supabase Auth)
## 2.1. Backend (Supabase)
- [ ] Bật Email/Password Auth
- [ ] Cấu hình SMTP (tuỳ chọn)
- [ ] Tạo bảng `users` (hoặc dùng auth.users)
- [ ] RLS policy cho bảng user profile

## 2.2. Frontend UI & Logic
### Pages:
- [ ] `/login`
- [ ] `/signup`
- [ ] `/profile`

### UI Components:
- [ ] Form login (shadcn Form)
- [ ] Form signup
- [ ] Profile Card (ảnh + tên + email)

### Logic:
- [ ] Đăng ký người dùng
- [ ] Đăng nhập + lưu session Supabase
- [ ] Logout
- [ ] Lấy user từ Supabase client
- [ ] Bảo vệ route (middleware)

---

# 🌦️ 3. Weather Forecast Module
## 3.1. Edge Functions (Supabase)
- [ ] Tạo function `/weather`
- [ ] Input: `lat`, `lon`
- [ ] Output:
  - nhiệt độ
  - độ ẩm
  - lượng mưa %
  - cảm giác thật (feels_like)
  - mô tả thời tiết
  - dự báo theo giờ
  - dự báo 7 ngày
  - chỉ số AQI

## 3.2. Frontend Components
- [ ] WeatherSummaryCard
- [ ] HourlyForecastChart
- [ ] DailyForecastList
- [ ] AQIInfoCard

## 3.3. Pages
- [ ] `/weather/[locationId]`
- [ ] Trang Dashboard: thời tiết theo vị trí hiện tại

---

# 🗺️ 4. Location Selection Module
## 4.1. Search Location
### UI:
- [ ] Search Box (shadcn Command)
- [ ] Dropdown gợi ý địa điểm
### Logic:
- [ ] API geocoding → tìm vị trí theo tên
- [ ] Điều hướng sang `/weather/[id]`

## 4.2. Map-based Location Selection
### Map Integration:
- [ ] Tích hợp Mapbox / Leaflet
- [ ] Vẽ bản đồ
- [ ] Click để lấy lat/lon
- [ ] Hiện popup thông tin vị trí

### Pages:
- [ ] `/map`

---

# ⭐ 5. Favorite Locations Module
## 5.1. Database (Supabase)
- [ ] Tạo bảng `favorite_locations`
