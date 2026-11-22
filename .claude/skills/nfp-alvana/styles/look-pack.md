# Look Pack (۶ سبک تازه روی یک صحنه‌ی ثابت)
**وضعیت:** ✅ کد آماده · `src/styles/look-pack/index.tsx` · SVG خالص، بدون کارت گرافیک · پیش‌نمایش: `styles/previews/look-pack.png`
**اسم‌های صدازدن:** «اسکچ نورانی / Glow Sketch»، «تخته‌سیاه / Chalkboard»، «خط مینیمال / Minimal Line»، «لگو / Lego»، «PS2 / لو‌پلی»، «اکسپلینر سه‌بعدی / Explainer 3D»
**مرجع:** داک «10 Claude Animation Styles». چهار سبک دیگرش (Pixel، Flat Vector، CGI، Comic) از قبل در کیت است: `art-8bit`، `art-flat2026`، `art-raytrace`، `halftone-pop` و `art-pop`.

## کی بزنیمش
مقایسه‌ی یک صحنه در چند سبک، پک سبک، اینترو یا لوپ کوتاه. افقی 1920×1080، صحنه: کانورتیبل قرمز، راننده، جاده، شهر، تیر چراغ، تابلو و ابر. صحنه ثابت است؛ برای صحنه‌ی دیگر باید `Scene` در همان فایل را عوض کرد.

## کامپوزیشن‌ها
- `Look-glow-sketch`، `Look-chalkboard`، `Look-minimal-line`، `Look-lego`، `Look-ps2`، `Look-explainer-3d`: هر کدام ۵ ثانیه، لوپ‌پذیر.
- `Look-Pack-Reel`: هر شش سبک پشت‌سرهم با برچسب (۳۰ ثانیه).
- رندر: `npx remotion render Look-Pack-Reel out/look-pack.mp4 --concurrency=4 --log=error`. دوبعدی است و سریع.
- از داخل کد: `<LookScene look="lego" label />`.

## حرکت هر سبک
- Glow Sketch: خط‌ها با نور رسم می‌شوند، چراغ‌ها سوسو می‌زنند.
- Chalkboard: خط‌ها مثل گچ رسم می‌شوند و لرزش دستی دارند.
- Minimal Line: فقط چند خط نازک و ماشین قرمز، جای خالی زیاد.
- Lego: حرکت پله‌ای و بلوک‌دار، با استاد (ابر و ساختمان).
- PS2: حرکت ۴ فریم‌به‌۴ فریم، چندضلعی تخت، خط‌های اسکن.
- Explainer 3D: شکل‌های گرد و نرم با سایه‌ی ملایم.

## درس‌ها
- ⚠ `Lego`، `PS2` و `Explainer 3D` سه‌بعدی واقعی نیستند؛ ظاهر سه‌بعدی روی SVG است تا رندرشان روی CPU سریع بماند.
