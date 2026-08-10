from PIL import Image
import os

files = [
    r"public/products/amka/whey-vanilla.jpg",
    r"public/products/amka/whey-choco.jpg",
    r"public/products/amka/creatine.png",
]


def whiten_bg(path: str, out_path: str) -> None:
    im = Image.open(path).convert("RGBA")
    px = im.load()
    w, h = im.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            mx, mn = max(r, g, b), min(r, g, b)
            sat = mx - mn

            # light / mid gray background (low saturation)
            if sat < 28 and mn > 140:
                px[x, y] = (255, 255, 255, 255)
            elif sat < 18 and mn > 100:
                px[x, y] = (255, 255, 255, 255)
            elif r > 235 and g > 235 and b > 235 and sat < 20:
                px[x, y] = (255, 255, 255, 255)

    # Soften leftover light-gray edges toward white
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            mx, mn = max(r, g, b), min(r, g, b)
            sat = mx - mn
            if sat < 35 and mn > 180:
                t = max(0.0, min(1.0, (mn - 180) / 75))
                factor = 0.55 + 0.45 * t
                nr = int(r + (255 - r) * factor)
                ng = int(g + (255 - g) * factor)
                nb = int(b + (255 - b) * factor)
                px[x, y] = (nr, ng, nb, 255)

    os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)
    if out_path.lower().endswith(".png"):
        # composite on pure white for opaque PNG
        bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
        composed = Image.alpha_composite(bg, im)
        composed.convert("RGB").save(out_path, "PNG", optimize=True)
    else:
        im.convert("RGB").save(out_path, "JPEG", quality=94, optimize=True)
    print("OK", out_path, im.size)


for f in files:
    base, _ext = os.path.splitext(f)
    out = f"{base}-white.png"
    whiten_bg(f, out)

print("done")
