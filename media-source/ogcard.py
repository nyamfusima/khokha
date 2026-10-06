"""Build the WhatsApp / Facebook link-preview card from the hero welding frame.

1200x630 is the size every platform crops cleanly. The scrim and wordmark are
burned in so the thumbnail still reads as Khokha at the size WhatsApp shows it.
"""
import os
from PIL import Image, ImageDraw, ImageFont

SP = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(SP, 'frames', 'og-src.jpg')
DEST = r'C:\Users\Sima\Desktop\khokha-refrigeration-welding\public\images\og-cover.jpg'

W, H = 1200, 630
NAVY = (7, 21, 31)
ORANGE = (255, 122, 33)
ICE = (47, 199, 255)

bold = os.path.join(SP, 'fonts', 'BarlowCondensed-Bold.ttf')
semi = os.path.join(SP, 'fonts', 'BarlowCondensed-SemiBold.ttf')

# --- the photograph, cropped to 1200x630 keeping the arc on the right ---------
im = Image.open(SRC).convert('RGB')
scale = max(W / im.width, H / im.height)
im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
# bias the crop right so the welder and sparks sit in the clear half
left = int((im.width - W) * 0.60)
top = int((im.height - H) * 0.5)
card = im.crop((left, top, left + W, top + H))

# --- scrim: dense on the left for the words, clearing to the right -----------
scrim = Image.new('L', (W, 1), 0)
for x in range(W):
    t = x / W
    a = 242 - 232 * min(1.0, max(0.0, (t - 0.02) / 0.72)) ** 1.25
    scrim.putpixel((x, 0), int(max(10, a)))
scrim = scrim.resize((W, H))
card = Image.composite(Image.new('RGB', (W, H), NAVY), card, scrim)

d = ImageDraw.Draw(card)

# --- wordmark ----------------------------------------------------------------
f_mark = ImageFont.truetype(bold, 46)
f_suffix = ImageFont.truetype(semi, 19)
f_head = ImageFont.truetype(bold, 104)
f_sub = ImageFont.truetype(semi, 31)

x = 72
d.text((x, 66), 'KHOKHA', font=f_mark, fill=(255, 255, 255))
d.text((x + 3, 120), 'R E F R I G E R A T I O N   &   W E L D I N G',
       font=f_suffix, fill=(150, 170, 182))

# --- headline ----------------------------------------------------------------
d.text((x - 4, 236), 'WELDED STRONG.', font=f_head, fill=(255, 255, 255))
d.text((x - 4, 330), 'KEPT COOL.', font=f_head, fill=(255, 255, 255))

# --- what the business does --------------------------------------------------
d.text((x, 470), 'Welding & fabrication  ·  Mobile fridges',
       font=f_sub, fill=(214, 228, 237))

# --- a weld-bead rule, the one brand mark ------------------------------------
d.rectangle([x, 444, x + 96, 448], fill=ORANGE)
d.rectangle([x + 104, 444, x + 150, 448], fill=ICE)

card.save(DEST, quality=84, optimize=True, progressive=False)
print('wrote', DEST, card.size, os.path.getsize(DEST) // 1024, 'KB')
